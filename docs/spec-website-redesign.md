# Website Redesign: What We Want To Do

## The Problem

Right now the website (https://edinburgh-orthodox.org.uk) shows the wrong things first.
The homepage opens with a big banner and a row of icons, while the things people actually
need, like this week's service times, how to donate, and how to find the churches, are
hidden in the menu or buried on separate pages.

There is no live calendar of services on the front page. There is no FAQ page. There is no
way for people to give money toward specific items for the new church. The community's
history takes up room on the homepage when it should have its own page. And the volunteers
who update the schedule each week have to type it out again by hand every time they post it
to WhatsApp, Facebook, and email.

## What We Want

Redesign the website we already have. We are not moving platforms and not writing new code.
Everything is changed in the WordPress admin, by someone who does not need to be technical.

The homepage becomes live and useful, in this order from top to bottom:

1. The community name and a small bit of branding.
2. Quick links to the most popular pages (service times, find us, donate, newsletter).
3. The services calendar for this week.
4. A "weekly announcements" text block.
5. The three churches and their addresses.
6. Blog posts about past events.
7. Links to History, Wishlist, FAQ, and Donations.

The calendar itself is kept in Google Calendar. Volunteers edit it there, without needing to
log in to WordPress. Each week starts from a set of default services, and fasting notes and
feast names are filled in from a church-year calendar file. A new Wishlist page lets people
give money toward specific items for the new church. A new FAQ page answers common questions.
The Donations page is tidied up.

Two changes from today are important:

- Each service is labelled with where it is held: Meadow Lane, Chapel Street, or Craigmillar
  Park, so people go to the right building.
- The schedule editor can press a button to copy the week as ready-to-paste text for
  WhatsApp, Facebook, and email, instead of retyping it.

## The List of Needs

This is the full list of what different people need the website to do.

1. As someone who attends, I want to see this week's services and times on the homepage, so I know when to come without digging through menus.
2. As someone who attends, I want to see where each service is held (Meadow Lane, Chapel Street, or Craigmillar Park), so I go to the right building.
3. As a first-time visitor, I want quick links to services, find us, donations, and contact at the top of the page, so I can find what I need in one tap.
4. As a first-time visitor, I want an FAQ page grouped by topic, so I can find answers without emailing anyone.
5. As someone who donates, I want the community's history on its own page, so the homepage is not cluttered by it.
6. As someone thinking of supporting the new church, I want to see a wishlist of items with set prices, so I know exactly what the community still needs.
7. As someone who donates, I want to pick one or more wishlist items and pay the combined total in one go, so giving is easy and I can support specific items.
8. As the treasurer, I want to see which wishlist items received money, so I can report on and allocate the gifts.
9. As someone who attends, I want to see the fasting note on each calendar day (strict fast, wine and oil, fish, or normal), so I can keep the fast correctly.
10. As someone who attends, I want to see the day's feast or commemoration name on the calendar, so I know what the day is.
11. As the schedule editor, I want the usual weekly services (Matins, Vespers, Supplicatory Canon, weekend Divine Liturgy) filled in automatically, so I do not type them every week.
12. As the schedule editor, I want to change a single week when something special happens (a weekday Liturgy, a feast-day change, an evening talk), so unusual weeks are easy to set without touching the normal pattern.
13. As the schedule editor, I want to edit the calendar in Google without any WordPress login, so I, a volunteer, can update it from my phone.
14. As the schedule editor, I want to write the weekly announcements in the same place I edit the week, so the calendar and announcements stay together.
15. As the schedule editor, I want Fr Luke's Sunday catechesis to appear every week in the calendar, so it is always shown without being added by hand each time.
16. As the schedule editor, I want things that do not happen every week (Bishop Raphael's talks, Wednesday confessions) listed in the announcements, not the calendar, so the calendar does not claim a service is happening when it is not.
17. As the schedule editor, I want a "copy this week as text" button, so I can paste the calendar and announcements into WhatsApp, Facebook, and email without retyping.
18. As a member of the public, I want the weekly post to reach me on WhatsApp in the community announcements channel, so I stay informed where I already read.
19. As a member of the public, I want the weekly post to appear on our Facebook page, so the public schedule is visible there too.
20. As a newsletter subscriber, I want the weekly post sent to me by email, so I receive the schedule without visiting the site.
21. As a first-time visitor, I want the three churches' addresses and map links at the bottom of the homepage, so I can find the right place.
22. As a regular attendee, I want blog posts about past events kept below the calendar and announcements, so the homepage leads with what is happening now, not what already happened.
23. As the person updating the website, I want a simple picture of how each redesigned page should look, so I know what to build before I start.
24. As the site owner, I want the donations page presented more clearly, so giving feels prominent and trustworthy.

## Decisions We Have Made

Here are the decisions already agreed, in plain terms.

- **We stay where we are.** We redesign the existing WordPress.com site. We are not moving to a new platform and not writing new code. Everything is done in the WordPress admin and in the Google Calendar and Square dashboards.

- **The calendar lives in Google Calendar.** It is shown on the homepage. Volunteers edit it in Google. They do not need WordPress access.

- **One shared "week" is the heart of it.** The weekly pattern, the special changes for a week, and the announcements block are all part of one thing, and everything else (the calendar, the copy button, the fasting notes) uses that same week. The details:
  - The normal week is: Weekday Matins at 7.30am; Weekend Matins at 8.30am followed by Divine Liturgy at 10.00am; Vespers at 6.30pm every day; Supplicatory Canon on Monday at 7.00pm (after Vespers, to the Mother of God); Fr Luke's Catechesis on Sunday at 4.00pm.
  - Special changes for one week: a weekday Liturgy (either Matins 5.45am and Liturgy 7.00am, or Matins 8.30am and Liturgy 10.00am), a feast-day change, or an evening talk (before or after Vespers).
  - The announcements block is text only, on the same page under the calendar, edited by the same person. It holds the things that do not happen every week (Bishop Raphael's talks, Wednesday confessions) and any upcoming events.

- **Every service is labelled with its building.** There is one calendar showing all three places: Meadow Lane, Chapel Street, and Craigmillar Park. Each service says where it is. The three addresses and map links are listed at the bottom of the homepage.

- **Fasting notes and feast names are filled in from a church-year file, then checked by the editor.** The file covers 1 Sep 2026 to 31 Aug 2027. It is used only for the fasting note and feast name, never for the service times themselves. The file uses five fasting levels:
  - Strict fast (95 days)
  - Wine and oil allowed (49 days)
  - Fish allowed (32 days)
  - Fast free (31 days)
  - Fast day, dairy, eggs, and fish allowed (7 days, the Cheesefare week)
  - The exact symbol or picture to show for each level is still to be decided, except strict fast, which is shown as a cross on red.

- **The wishlist.** Fixed-price items for the new church, with the prices kept in a separate list. In Square, a single checkout page can list several items, and the person picks what they want and pays one combined total. Square reports which items were given to. If that proves awkward, the simple fallback is one Square link per item.

- **The top of the homepage.** Quick links to service times, find us, donate, newsletter, and contact. This list is our own choice of what matters most, not based on website statistics.

- **Posting to WhatsApp, Facebook, and email.** We do it in stages. First, a "copy this week" button that puts the week into plain text ready to paste anywhere. Then, a send through Mailchimp for email. Then, later, automatic posting to Facebook and WhatsApp.

- **The FAQ page.** A page grouped by topic. We set up the structure now and write the questions and answers later.

- **Pictures of how it should look.** See the "Visual mockup" section below for the link and the full summary of styling changes.

## Visual mockup

A working mockup of every redesigned page is live on GitHub Pages:

**https://oliverbrotchie.github.io/edinburgh-orthodox.org.uk/mockups/**

It is plain HTML and CSS, so anyone can open it in a browser to see the layout. It is a
visual reference, not the real website and not uploaded anywhere. Here is the full list of
how the redesign differs from the current site.

### Overarching design

- Whole site uses a warm off-white paper background, dark ink text, and a deep burgundy accent. The current site mixes several accent colours (greens, blues, oranges); the redesign uses the deep burgundy as the single accent for links, headings, and buttons.
- Headings and the site title use a serif display face; body copy uses a plain sans face.
- Everything is laid out in a single centred column of readable width, so pages feel calm and consistent rather than stretched full-width.

### Header (every page)

- One row header with the round church logo next to the site title on the left, and the nav on the right. The current site has two logos stacked in the body and a separate menu toggle; the redesign puts a single small logo beside the title.
- Title stays on one line on desktop; on phones it is allowed to wrap to a couple of lines so the burger stays visible. On the current site the title is small and buried.
- Nav as top links (not a row of pill buttons). The list of links, and their exact order and names, is to be decided later. The essentials stay visible on desktop; as the screen narrows the less important links drop out first, then the burger menu appears on phones.
- Burger menu replaces the nav on phones. On the current site the menu toggle is a text "Menu" button.

### Homepage

- Introduction block near the top: "Welcome to St Andrew's Orthodox Church - Archdiocese of Thyateira and Great Britain. All are welcome to attend!". It starts with a large decorative initial letter (a drop capital), with the church name and diocese in bold. The current site opens with a large banner, an icon row, and a long history paragraph.
- Weekly Services is the first major content block: the services calendar for the whole week, starting Monday, with weekday and weekend default times, each service tagged with which church it is at (Meadow Lane or Chapel Street), and a small fasting note or symbol on the relevant days (strict fast, wine and oil, fish). The title is centred and the list sits in a centred column. The current site has no calendar on the homepage at all.
- Announcements block directly under the calendar: a short text block for the week ahead (upcoming events, confessions, priest availability).
- Our churches section: three clickable cards (Meadow Lane, Chapel Street, Craigmillar Park), each linking to its Google Maps location, with a short description. The current site lists church details on a separate "find us" page, not as clickable cards.
- Our history section below the churches: a one or two sentence summary with a "find out more" link. The current site puts the full history at the top of the homepage.
- Recent posts: a placeholder row for blog write-ups of past events, below the calendar and announcements.

### Wishlist page

- Centred heading with a short introduction paragraph, then a list of fixed-price items (each with a checkbox and a price), and a sticky "donate selected items" bar showing the running total. This is a new page; the current site has nothing like it.

### FAQ page

- Centred page heading with a short introduction, then the questions grouped by topic (Visiting, Services, Donations). Topic subheadings are left-aligned; question and answer text sits in the centred column. This is a new page; the current site has no FAQ. The actual questions and answers are filled in later.

### Donations page

- Centred heading with an introduction, the charity number, a clear "donate now" button, and a note pointing to the wishlist for specific items. The current donations page is a block of plain text and bank details.

### Things deliberately removed from the homepage

- The large banner and row of icons that currently lead the page.
- The full history paragraph (moved to its own section and page).
- The hidden menu that buries the main links.

## How We Will Check It Is Done

There are no automatic tests, because this website has no code of its own. Every change is made by hand in the WordPress admin and the other dashboards, so each change is checked by a person, by hand, against the live website.

For each item in the list of needs above, the check is: can a normal visitor actually do the thing it describes, by looking at the live site, without any special access.

The one thing to check carefully is that the week stays consistent: the same services, times, fasting notes, and announcements must show up on the homepage, in the copy-for-posting text, and in the correct order and place.

## Not In This Project

These things are deliberately not part of this project:

- Automatic posting to Facebook and WhatsApp. We do the copy button and Mailchimp first.
- Working out the fasting calendar from scratch. The website just shows what the church-year file says and the editor confirms it.
- Showing the daily scripture readings, the Tone, or the Eothinon.
- Deciding the final symbol for each fasting level. Only "cross on red" for strict fast is fixed for now.
- Writing the FAQ questions and answers. We set up the page structure now.
- The final wishlist items and their prices. Those go in a separate list.
- Moving the website to a new platform or rebuilding it as a static site.

## Extra Notes

- The current hand-made format for the weekly post is kept as our guide for what the copy button should produce. The two examples are in the `examples/` folder: `example-cal-post.md` (the calendar plus announcements) and `example-text-post.md` (announcements on their own).
- Editing is shared: Google Calendar is where the schedule is changed, and WordPress just shows it. The editors are not website admins.
- The donate link today is a single Square link. The wishlist improves this to one checkout for several items.
