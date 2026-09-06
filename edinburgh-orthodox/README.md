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

Structured information is kept in `data/` when templates reuse it:

- `data/churches.yaml` supplies the homepage and Our Churches page.
- `data/home.yaml` supplies services and announcements.
- `data/wishlist.yaml` supplies wishlist names and prices.
- `data/faq.yaml` supplies the FAQ questions and answers.

Navigation links are defined once in `hugo.toml` under `menus.main`.

## Information requiring confirmation

The clergy contact details, church details, wishlist prices, donation URL, and bank details
must be confirmed by the site owner before publication. Payment controls remain visibly
disabled until confirmed.

## TODO list

A running list of open items in this implementation. Each one shows the file where the
`TODO` comment lives.

### Pages to create

- [ ] Create `content/confessions.md`, then point the "Confessions" menu item at it (`hugo.toml`).
- [ ] Create `content/magazine.md`, then point the "Magazine" menu item at it (`hugo.toml`).
- [ ] Create `content/history.md`, then point the "History" menu item and the homepage history
  link at it (`hugo.toml`, `layouts/home.html`).

### Content to confirm with the site owner

- [ ] Wishlist: confirm item names, availability, and prices (`data/wishlist.yaml`).
- [ ] Home: replace the sample week and announcement with current, confirmed information
  (`data/home.yaml`).
- [ ] FAQ: replace filler questions and add appropriate links (`content/faq.md`).

### Integrations to wire up

- [ ] Replace the disabled "Donate now" control with the site owner's confirmed Square donation
  URL (`layouts/_default/donations.html`).
- [ ] Replace the bank-details placeholder with bank details confirmed by the site owner
  (`layouts/_default/donations.html`).
- [ ] Connect the bookstore total to a confirmed checkout process
  (`layouts/_default/donations.html`).
- [ ] Connect the wishlist items and total to a confirmed Square checkout URL
  (`layouts/_default/wishlist.html`).
- [ ] Replace the sample service data with Google Calendar and add the "copy this week" action
  (`layouts/home.html`).

### News posts to finish

These posts are stubs. Add the original article body and any confirmed photographs to each.

- [ ] `content/news/anton-caius-gurgu-ordained-holy-diaconate.md`
- [ ] `content/news/homes-for-ukraine.md`
- [ ] `content/news/ordination-bishop-raphael-of-ilion.md`
- [ ] `content/news/ordination-deacon-janis-stumbris.md`
- [ ] `content/news/ordination-holy-priesthood-caius-anton-gurgu.md`
- [ ] `content/news/ordination-reader-caius-gurgu.md`
