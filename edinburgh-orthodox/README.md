# Edinburgh Orthodox Site

Initial implementation from the website mockups.

## Development

From the repository root:

```sh
hugo server --source edinburgh-orthodox
```

Open `http://localhost:1313/`.

## Production build

```sh
hugo --source edinburgh-orthodox --minify
```

The generated static site is written to `edinburgh-orthodox/public/`.

## Add a news post

Add a Markdown file directly under `content/news/`:

```toml
+++
title = "Parish feast"
date = 2026-09-02
description = "An optional short summary."
draft = false
+++

Write the post here using Markdown.
```

The filename becomes the URL. For example, `parish-feast.md` is published at
`/news/parish-feast/`. Hugo excludes drafts from production builds.

## Edit site pages

Most pages are plain Markdown files under `content/`:

- `content/clergy.md`
- Future pages such as `content/history.md`

Structured information is kept in `data/` when needed for layout templates:

- `data/churches.yaml` supplies the homepage and Our Churches page.
- `data/services.yaml` supplies the weekly services.
- `data/announcements.yaml` supplies the weekly announcements.
- `data/wishlist.yaml` supplies wishlist names and prices.
- `data/faq.yaml` supplies the FAQ questions and answers.

Navigation links are defined once in `hugo.toml` under `menus.main`.

## TODO list

A running list of open items in this implementation. Each one shows the file where the
`TODO` comment lives.

### Pages to create

- [ ] Create `content/catechesis.md`, then point the "Catechesis" menu item at it (`hugo.toml`).
- [ ] Create `content/confessions.md`, then point the "Confessions" menu item at it (`hugo.toml`).
- [ ] Create `content/magazine.md`, then point the "Magazine" menu item at it (`hugo.toml`).
- [ ] Create `content/history.md`, then point the "History" menu item and the homepage history
  link at it (`hugo.toml`, `layouts/home.html`).

### Content to confirm

- [ ] Wishlist: confirm items and update `data/wishlist.yaml`.
- [ ] Donations: bank details and donation URL
- [ ] Home: replace the sample week and announcement with real content
  (`data/services.yaml`, `data/announcements.yaml`).
- [ ] FAQ: replace filler questions and add appropriate links `content/faq.md` and `data/faq.yaml`.

### Integrations to wire up

- [ ] Enable buttons on donation page (`layouts/_default/donations.html`).
- [ ] Enable wishlist checkout button (`layouts/_default/wishlist.html`).
- [ ] Replace the sample service data with Google Calendar and add the "copy this week" action
  (`layouts/home.html`).
- [ ] Decide how to upload announcements and news posts (`data/announcements.yaml`, `content/news/`).

### News posts to finish

These posts are stubs. Add the original article body and any confirmed photographs to each.

- [ ] `content/news/anton-caius-gurgu-ordained-holy-diaconate.md`
- [ ] `content/news/homes-for-ukraine.md`
- [ ] `content/news/ordination-bishop-raphael-of-ilion.md`
- [ ] `content/news/ordination-deacon-janis-stumbris.md`
- [ ] `content/news/ordination-holy-priesthood-caius-anton-gurgu.md`
- [ ] `content/news/ordination-reader-caius-gurgu.md`
