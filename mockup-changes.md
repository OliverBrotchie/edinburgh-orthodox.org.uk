# Mockup changes: how the redesign differs from the current website

A summary of the visual and layout changes shown in the `mockups/` folder, compared to the
live site at https://edinburgh-orthodox.org.uk today. The exact nav ordering and the link
names are still to be decided; the items below describe the styling and structure only.

The mockups are plain HTML/CSS, double-clickable, in `mockups/`. They are a visual
reference, not real code and not deployed anywhere.

## Overarching design

- Whole site uses a warm off-white paper background, dark ink text, and a deep burgundy
  accent. The current site mixes several accent colours (greens, blues, oranges); the
  redesign uses the deep burgundy as the single accent for links, headings, and buttons.
- Headings and the site title use a serif display face; body copy uses a plain sans face.
- Everything is laid out in a single centred column of readable width, so pages feel calm and
  consistent rather than stretched full-width.

## Header (every page)

- **One row header** with the round church logo next to the site title on the left, and the
  nav on the right. The current site has two logos stacked in the body and a separate menu
  toggle; the redesign puts a single small logo beside the title.
- **Title stays on one line** on desktop; on phones it is allowed to wrap to a couple of
  lines so the burger stays visible. On the current site the title is small and buried.
- **Nav as top links** (not a row of pill buttons). The list of links, and their exact order
  and names, is to be decided later. The essentials stay visible on desktop; as the screen
  narrows the less important links drop out first, then the burger menu appears on phones.
- **Burger menu** replaces the nav on phones. On the current site the menu toggle is a text
  "Menu" button.

## Homepage

- **Introduction block** near the top: "Welcome to St Andrew's Orthodox Church - Archdiocese
  of Thyateira and Great Britain. All are welcome to attend!". It starts with a large
  decorative initial letter (a drop capital), with the church name and diocese in bold. The
  current site opens with a large banner, an icon row, and a long history paragraph.
- **Weekly Services** is the first major content block: the services calendar for the whole
  week, starting Monday, with weekday and weekend default times, each service tagged with
  which church it is at (Meadow Lane or Chapel Street), and a small fasting note or symbol
  on the relevant days (strict fast, wine and oil, fish). The title is centred and the list
  sits in a centred column. The current site has no calendar on the homepage at all.
- **Announcements** block directly under the calendar: a short text block for the week
  ahead (upcoming events, confessions, priest availability).
- **Our churches** section: three clickable cards (Meadow Lane, Chapel Street, Craigmillar
  Park), each linking to its Google Maps location, with a short description. The current
  site lists church details on a separate "find us" page, not as clickable cards.
- **Our history** section below the churches: a one or two sentence summary with a "find
  out more" link. The current site puts the full history at the top of the homepage.
- **Recent posts:** a placeholder row for blog write-ups of past events, below the calendar
  and announcements.

## Wishlist page

- Centred heading with a short introduction paragraph, then a list of fixed-price items
  (each with a checkbox and a price), and a sticky "donate selected items" bar showing the
  running total. This is a new page; the current site has nothing like it.

## FAQ page

- Centred page heading with a short introduction, then the questions grouped by topic
  (Visiting, Services, Donations). Topic subheadings are left-aligned; question and answer
  text sits in the centred column. This is a new page; the current site has no FAQ.
  The actual questions and answers are filled in later.

## Donations page

- Centred heading with an introduction, the charity number, a clear "donate now" button, and
  a note pointing to the wishlist for specific items. The current donations page is a block
  of plain text and bank details.

## Things deliberately removed from the homepage

- The large banner and row of icons that currently lead the page.
- The full history paragraph (moved to its own section/page).
- The hidden menu that buries the main links.
