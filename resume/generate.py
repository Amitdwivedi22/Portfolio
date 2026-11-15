#!/usr/bin/env python3
"""Generate the resume PDF and identical public copy from content.json.

Requires reportlab. Font paths can be overridden with RESUME_FONT_DIR.
Fails rather than publishing a multi-page resume.
"""
from pathlib import Path
from xml.sax.saxutils import escape
import json
import os
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Flowable

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT / 'resume/content.json').read_text())
FONT_DIR = Path(os.environ.get('RESUME_FONT_DIR', '/usr/share/fonts/truetype/dejavu'))
pdfmetrics.registerFont(TTFont('Resume', str(FONT_DIR / 'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('ResumeBold', str(FONT_DIR / 'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('Resume', normal='Resume', bold='ResumeBold', italic='Resume', boldItalic='ResumeBold')
ACCENT = colors.HexColor('#007b9d')
BODY = ParagraphStyle('Body', fontName='Resume', fontSize=10.5, leading=13.4, textColor=colors.HexColor('#161616'), spaceAfter=2)
BULLET = ParagraphStyle('Bullet', parent=BODY, leftIndent=10, firstLineIndent=0, bulletIndent=0, bulletFontName='Resume', bulletFontSize=10.5, spaceAfter=2)
CENTER = ParagraphStyle('Center', parent=BODY, alignment=TA_CENTER, spaceAfter=4)
NAME = ParagraphStyle('Name', parent=CENTER, fontName='ResumeBold', fontSize=20, leading=24, spaceAfter=3)


def linked(label, href):
    return f'<link href="{escape(href, {chr(34): "&quot;"})}" color="#007b9d">{escape(label)}</link>'


class Section(Flowable):
    def __init__(self, title):
        super().__init__(); self.title = title; self.height = 23; self.keepWithNext = True
    def wrap(self, width, height):
        self.width = width
        return width, self.height
    def draw(self):
        c = self.canv
        c.setFont('ResumeBold', 10.5); c.setFillColor(ACCENT)
        c.drawString(0, 8, self.title.upper())
        c.setStrokeColor(colors.black); c.setLineWidth(.65)
        c.line(0, 4, self.width, 4)


class Entry(Flowable):
    def __init__(self, title, date):
        super().__init__(); self.title = title; self.date = date; self.height = 15; self.keepWithNext = True
    def wrap(self, width, height):
        self.width = width
        assert pdfmetrics.stringWidth(self.title, 'ResumeBold', 10.5) + pdfmetrics.stringWidth(self.date, 'Resume', 10.5) + 15 < width
        return width, self.height
    def draw(self):
        c = self.canv; c.setFillColor(colors.HexColor('#161616'))
        c.setFont('ResumeBold', 10.5); c.drawString(0, 3, self.title)
        c.setFont('Resume', 10.5); c.drawRightString(self.width, 3, self.date)


class OnePageDoc(SimpleDocTemplate):
    def afterPage(self):
        if self.page > 1:
            raise ValueError('Resume exceeds one page. Shorten content; do not shrink typography.')


def build():
    out = ROOT / 'output/pdf/amit-kumar-dwivedi-resume.pdf'
    out.parent.mkdir(parents=True, exist_ok=True)
    temporary = out.with_suffix('.tmp.pdf')
    doc = OnePageDoc(str(temporary), pagesize=letter, leftMargin=34, rightMargin=34, topMargin=24, bottomMargin=26,
                     title=f'{DATA["name"]} - Software Engineer Resume', author=DATA['name'])
    story = [Paragraph(escape(DATA['name']), NAME), Paragraph(escape(DATA['positioning']), CENTER)]
    contacts = DATA['contacts']
    for row in (contacts[:2], contacts[2:]):
        story.append(Paragraph(' &nbsp; | &nbsp; '.join(linked(x['label'], x['href']) for x in row), CENTER))
    story.append(Section('Work Experience'))
    for item in DATA['experience']:
        story += [Entry(item['organization'], item['dates']), Paragraph(escape(item['role']), BODY)]
        story += [Paragraph(escape(text), BULLET, bulletText='-') for text in item['bullets']]
        story.append(Spacer(1, 3))
    story.append(Section('Education'))
    for item in DATA['education']:
        story += [Paragraph('<b>' + escape(item['institution']) + '</b>', BODY), Paragraph(escape(item['degree']) + ' | ' + escape(item['dates']), BODY)]
    story.append(Section('Projects'))
    for item in DATA['projects']:
        title = linked(item['name'] + ' (Source)', item['href']) if item.get('href') else escape(item['name'])
        story.append(Paragraph('<b>' + title + '</b> | ' + escape(item['stack']), BODY))
        story += [Paragraph(escape(text), BULLET, bulletText='-') for text in item['bullets']]
        story.append(Spacer(1, 3))
    story.append(Section('Open-Source Contributions'))
    for item in DATA['contributions']:
        story.append(Paragraph('<b>' + linked(item['label'], item['href']) + '</b>: ' + escape(item['detail']), BULLET, bulletText='-'))
    story.append(Section('Technical Skills'))
    for item in DATA['skills']:
        story.append(Paragraph('<b>' + escape(item['label']) + ':</b> ' + escape(item['items']), BODY))
    doc.build(story)
    temporary.replace(out)
    public = ROOT / 'public/resume' / out.name
    public.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(out, public)
    print(out)


if __name__ == '__main__':
    build()
