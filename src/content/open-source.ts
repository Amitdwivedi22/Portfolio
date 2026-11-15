export type Contribution = {
  id: string;
  title: string;
  status: "Merged" | "Open PR" | "Investigation proposed";
  summary: string;
  technologies: string[];
  evidence: { label: string; href: string };
  verifiedOn: string;
};

export type ContributionGroup = {
  id: string;
  organization: string;
  repository: string;
  status: string;
  entries: Contribution[];
};

// Curated public evidence. Recheck status and update verifiedOn when editing.
// This module is static: it does not call GitHub during builds or page requests.
export const openSource: ContributionGroup[] = [
  {
    id: "docbuild",
    organization: "openSUSE",
    repository: "DocBuild",
    status: "Active contributor",
    entries: [
      {
        id: "docbuild-705",
        title: "test: improve manifest metadata error coverage",
        status: "Merged",
        summary:
          "Added automated tests for manifest metadata projection and error handling, including missing files and invalid schemas. The tests exercise language/category behavior and preserve the original metadata JSON.",
        technologies: ["Python", "Pytest", "XML", "JSON"],
        evidence: {
          label: "View merged PR #705",
          href: "https://github.com/openSUSE/docbuild/pull/705",
        },
        verifiedOn: "2026-11-15",
      },
      {
        id: "docbuild-747",
        title: "feat: add live progress display for sitemap generation",
        status: "Open PR",
        summary:
          "Continuing work on sitemap progress reporting: added progress callbacks, Rich terminal updates and regression tests. Animation is disabled for non-interactive terminals and verbose logging. This PR is not merged.",
        technologies: ["Python", "Rich", "Pytest"],
        evidence: {
          label: "View open PR #747",
          href: "https://github.com/openSUSE/docbuild/pull/747",
        },
        verifiedOn: "2026-11-15",
      },
    ],
  },
  {
    id: "nextcloud",
    organization: "Nextcloud",
    repository: "Approval",
    status: "Issue investigation and feature exploration",
    entries: [
      {
        id: "nextcloud-452",
        title: "Create a named revision for each approval work flow.",
        status: "Investigation proposed",
        summary:
          "Proposed investigating how approval workflows interact with file versioning and whether named revisions add value. The linked comment requests assignment; it does not establish completed findings, an implementation or a merged enhancement.",
        technologies: ["PHP", "Nextcloud"],
        evidence: {
          label: "Read investigation proposal on issue #452",
          href: "https://github.com/nextcloud/approval/issues/452#issuecomment-6768231915",
        },
        verifiedOn: "2026-11-15",
      },
    ],
  },
];
