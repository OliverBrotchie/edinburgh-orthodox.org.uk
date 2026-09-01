# AGENTS.md: Edinburgh Orthodox Website Project

## Repo purpose

This repo is a project proposal and action-ticket board for fixing and updating the live
WordPress website **https://edinburgh-orthodox.org.uk**. It contains no site code. The
site runs on WordPress.com. Tickets describe *what to change and why*; the actual change is
made in the WordPress admin, not in this repo.

## The website (verified 2026-09-01)

- **Host:** WordPress.com (site id `191368015`, Automattic CDN, `edinburghorthodox.wordpress.com`).
  Domain is mapped; not self-hosted. No repo access to plugins/theme. Changes go through wp-admin or the WordPress.com REST API.
- **Theme/fonts:** Raleway webfont (Jetpack custom fonts); standard WordPress.com theme; Jetpack active.
- **Content (from sitemap.xml):** pages `services`, `clergy`, `confessions`, `finding-us`,
  `donations`, `newsletter`, `programme`, `bookshop`, `catechetical-classes`, `other-communities`,
  `latest-news`; blog posts under `/YYYY/MM/DD/`.
- **Identity:** Orthodox Community of St Andrew, Edinburgh; Archdiocese of Thyateira and Great
  Britain; charity **SC054378**.
- **External integrations:** Mailchimp (membership/contact form), Square (donations link).

## Facts an agent needs that the site config won't tell it

- Updates are proposals, not deployments. Mark an issue **blocked** until the site owner applies it.
- The site is public read-only to agents - inspect it (sitemap, posts, pages), do not assume
  write access.
- Use the live site as ground truth; the static sitemap and `robots.txt` are the cheapest
  snapshot of site structure.

## Priorities

- Broken or outdated info (services times, clergy, donation details) before cosmetic or SEO polish.
- Any change touching charity identity, donation details, or contact info is high-risk. Be
  exact, and add a comment on the ticket noting it needs the site owner's confirmation.

## Writing style

- The proposal, spec, `CONTEXT.md`, and ADRs are read by non-technical people who do the
  work in the WordPress admin. Write them in plain, friendly English.
- No em-dashes (use a comma, full stop, or "and"). No arrows like `→`. No jargon unless the
  person needs it, and explain it when you use it.

## Agent skills

### Issue tracker

Issues live in the repo's GitHub Issues (via the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

Defaults kept: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` at the root plus `docs/adr/`. See `docs/agents/domain.md`.
