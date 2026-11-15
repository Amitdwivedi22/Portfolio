# Resume source

Edit `content.json`, then run `python3 resume/generate.py` from the repository root. Python needs ReportLab (`python3 -m pip install -r resume/requirements.txt`). The generator uses DejaVu Sans/DejaVu Sans Bold from `/usr/share/fonts/truetype/dejavu`; set `RESUME_FONT_DIR` if these font files are elsewhere.

The generator writes `output/pdf/amit-kumar-dwivedi-resume.pdf` and an identical public copy at `public/resume/amit-kumar-dwivedi-resume.pdf`. The local PDF is an earlier retained version. The portfolio Resume action now opens the user-supplied Drive viewer below, configured centrally as `resumeUrl` in `src/content/portfolio.ts`. Running this generator does not change the active website link. It rejects content that exceeds one page rather than reducing font size. After changes, render the PDF and check text extraction and link destinations before publishing.

Content sources: the user's approved latest `/home/amit/Downloads/resume (1).pdf`, explicit degree correction, confirmed RetinaGrade implementation, current portfolio source and public PR evidence. Source reference: https://github.com/swagatchand98/portfolio_v2/blob/main/public/resume.pdf (visual direction only). No original-author content is reused.

Athira and RetinaGrade were explicitly approved for this resume. Broader skill items such as Express, MongoDB and MySQL come from the approved resume; their inclusion does not claim proficiency or imply use in RetinaGrade. Public GitHub statuses are a snapshot and should be rechecked when regenerating content. No deployed portfolio or RetinaGrade source/demo URL is asserted.


## Active website resume

https://drive.google.com/file/d/1YdRHCP8FzeydoOj6vXLFSndXAqVND1aq/view?usp=sharing

The user supplied this file for the final functional phase. Anonymous PDF access, name, one-page validity and embedded contact links were verified. The Drive file is linked as provided; neither it nor the earlier generated local PDF is rewritten in this phase. The Drive viewer can change as the user updates the file; it is not labelled a direct download.

The supplied file contains older degree wording and broader Web3 completion claims than the portfolio source audit supports. Those differences are recorded in CONTENT_REVIEW.md and must not overwrite the portfolio's explicit corrections or verified implementation status. A future resume revision is a separate content task.
