

# Jeremy Hua — Personal Site Build

## Design Direction
Editorial, refined, warm. Think: a well-set magazine page, not a SaaS template.

- **Typography**: DM Sans (headings/UI) + Newsreader (body/notes) from Google Fonts
- **Palette**: Warm ivory (`#FAF9F6`) background, near-black (`#1A1A1A`) text, muted sage accent (`#7C8C6E`), soft gold highlight (`#C9A96E`). Night mode: deep charcoal (`#141414`), warm off-white text, muted accent variants.
- **Layout**: Single-page scroll, generous whitespace, max-width ~720px content column, full-bleed section breaks
- **Motion**: Subtle fade-in-up on scroll (Intersection Observer), smooth anchor scrolling
- **Day/Night toggle**: Sun/moon icon in header

## Architecture

**New files to create:**
1. `src/data/content.ts` — All site copy as a typed data object (easy to edit later)
2. `src/pages/Index.tsx` — Main page composing all sections
3. `src/components/Header.tsx` — Sticky header with anchor nav + theme toggle
4. `src/components/sections/Hero.tsx`
5. `src/components/sections/About.tsx`
6. `src/components/sections/AlsoMe.tsx` — Chip links to Proof anchors
7. `src/components/sections/Notes.tsx` — Expandable note cards
8. `src/components/sections/Experience.tsx` — Tim Hortons / WestJet cards
9. `src/components/sections/Proof.tsx` — Work + stories with image placeholders
10. `src/components/sections/HowIThink.tsx` — Numbered steps
11. `src/components/sections/OffTheClock.tsx`
12. `src/components/sections/Contact.tsx`
13. `src/components/ThemeProvider.tsx` — Dark mode context
14. `src/hooks/useFadeIn.ts` — Scroll animation hook

**Modified files:**
- `index.html` — Add Google Fonts links, update title/meta
- `src/index.css` — Custom CSS variables for theme, typography classes
- `src/App.tsx` — Wrap with ThemeProvider

## Content
All copy will be used **verbatim** from what you provided. Stored in `src/data/content.ts` so you can tweak wording in one place.

## Sections Detail

- **Header**: Minimal — your name left, anchor links center/right, theme toggle. Becomes compact on scroll.
- **Hero**: Large Newsreader headline, subtext, "Get in touch" button (mailto), location line.
- **About**: Two-column on desktop (text + placeholder photo strip), single column mobile.
- **Also Me**: Horizontal chip row, each clickable to jump to corresponding Proof story.
- **Notes**: Five cards, each with title + body. Clean card layout, no accordion needed given the content length.
- **Experience**: Two side-by-side cards (Tim Hortons / WestJet) with role context + link to Proof.
- **Proof**: Work section first, then four story blocks (Band, Ultra, Granola, Travel) each with text + image placeholder slots.
- **How I Think**: Vertical numbered list with subtle step indicators.
- **Off the Clock / Contact**: Clean closing sections, mailto CTA.

## Implementation Order
1. Theme system + global styles + fonts
2. Content data file
3. Header + all sections top-to-bottom
4. Scroll animations
5. Responsive polish

