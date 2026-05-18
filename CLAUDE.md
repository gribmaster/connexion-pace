# Connexion Space — Current MVP Status

Connexion Space is currently a mobile-first MVP with authentication, onboarding, profile foundation, timer settings, Intuitive mode, Surprise me mode, production deployment, and basic PWA installability.

The app uses:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- Supabase Auth
- PostgreSQL via Supabase
- localStorage for temporary gameplay/settings state
- Vercel for deployment
- conservative native PWA setup

---

## Core App Flow

Current root/login behavior:

- `/` redirects unauthenticated users to `/login`
- `/` redirects authenticated users to `/welcome`
- `/login` shows login screen for unauthenticated users
- authenticated users opening `/login` are redirected to `/welcome`

Login screen currently includes:

- logo/text logo
- `Sign in or Join now!`
- `Continue with Gmail`
- disabled `Continue with Apple`
- Terms & Conditions placeholder link
- Privacy Policy placeholder link

Google auth is implemented via Supabase.

Apple auth is visible but not active yet.

Important:

- Do not implement Apple login yet.
- Do not change the auth callback logic unless explicitly requested.
- Do not hardcode localhost in OAuth redirect URLs.

---

## Deployment / Vercel

The MVP has been deployed to Vercel.

Important Vercel/Prisma requirement:

Vercel caches dependencies, so Prisma Client must be generated during the build process.

The `package.json` build script must run:

```txt
prisma generate && next build
```

Expected build script:

```json
"build": "prisma generate && next build"
```

This fixes the Vercel error:

```txt
Prisma has detected that this project was built on Vercel, which caches dependencies.
This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered.
```

Important:

- Do not remove `prisma generate` from the build script.
- Do not switch package manager from `pnpm`.
- Do not hardcode production secrets.
- Vercel environment variables must be configured in Vercel Project Settings.

Likely required env variables:

```txt
DATABASE_URL
DIRECT_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Exact variables may differ. Always inspect current `.env` usage before changing.

---

## Supabase Auth / OAuth Redirects

Implemented:

- Supabase Google login
- Supabase auth callback
- Prisma user sync by email
- protected routes
- logout
- first-login privacy acceptance flow
- welcome/free session intro screen

Important auth behavior:

- Supabase user ID is not used as Prisma user ID.
- Prisma user is matched by email.
- Do not force Supabase UUID into Prisma `User.id`.

Production OAuth issue was fixed:

Previously, after Vercel deploy, Google login redirected to:

```txt
http://localhost:3000/?code=...
```

Cause:

- Supabase Auth URL configuration still pointed to localhost.

Fix:

Supabase Dashboard → Authentication → URL Configuration:

- production Site URL must be the Vercel/custom domain
- production callback URL must be allowed

Required callback format:

```txt
https://PRODUCTION_DOMAIN/auth/callback
```

Local dev callback should remain allowed:

```txt
http://localhost:3000/auth/callback
```

Preferred Google sign-in redirect behavior:

- client-side login should use current origin
- production should redirect to production `/auth/callback`
- local dev should redirect to local `/auth/callback`

Concept:

```txt
redirectTo: `${window.location.origin}/auth/callback`
```

Current protected areas include:

- `/welcome`
- `/privacy`
- `/profile`
- `/game`
- game mode routes

---

## Privacy Flow

Route:

```txt
/privacy
```

Purpose:

- First-time users must accept privacy/game information before continuing.

Behavior:

- user must scroll/read the text block
- user must check agreement checkbox
- `Start now` is disabled until requirements are met
- after acceptance, `privacyAcceptedAt` is saved
- user is redirected to `/welcome`

Legal text is still placeholder/MVP text.

---

## Welcome Screen

Route:

```txt
/welcome
```

Purpose:

- Free session intro screen after login/privacy acceptance.

Current content:

```txt
Welcome to
Connexion Space

You can play the full game once for free.
After your free session ends, you’ll need to upgrade to continue playing.
```

Buttons:

- `Start Free Session` → goes to `/game`
- `View Premium Options` → visible but disabled
- `Choose next play time` → visible but disabled

Important:

- real free session tracking is not implemented yet
- payments are not implemented yet
- reminders/notifications are not implemented yet

---

## Global Styling / UI Foundation

Implemented:

- global Poppins font via `next/font/google`
- global CSS reset
- global `box-sizing: border-box`
- full-height html/body foundation
- reusable global style classes in global CSS

Current style direction:

- mobile-first
- clean MVP UI
- reusable app-level classes
- avoid heavy design abstractions

Important:

- Do not add raw Google Fonts `<link>` tags.
- Keep Poppins through `next/font/google`.
- Do not remove global reset unless explicitly requested.

---

## Main Game Structure

Current route structure should be mode-specific:

```txt
src/app/game/
  page.tsx

  intuitive/
    [category]/
      page.tsx
      [cardId]/
        page.tsx
    result/
      page.tsx

  surprise-me/
    play/
      page.tsx
    result/
      page.tsx

  journey/
    // future
```

Important:

- `/game` is the main mode selection screen.
- `/game/intuitive/result` is the Intuitive final screen.
- `/game/surprise-me/play` is the active Surprise me gameplay screen.
- `/game/surprise-me/result` is the Surprise me final screen.
- old `/game/result` should not be used as the main result route.
- if the old `/game/result` redirect file still exists and no links depend on it, it can be removed.

---

## Main `/game` Screen

Route:

```txt
/game
```

The main `/game` screen contains mode tabs:

```txt
Intuitive | Journey | Surprise me
```

Current tab behavior:

- `Intuitive` is active by default
- `Journey` is visible but disabled/inactive
- `Surprise me` is selectable
- tabs switch content on the same `/game` page
- Surprise me selection does not use a separate `/game/surprise-me` route

Important:

- `/game` is the only mode selection page.
- Do not create a separate Surprise me selection route.
- Journey mode is not implemented yet.

---

## Main Game Instruction Modal

On `/game`, the main heading has an info icon with:

```txt
id="game-main-instruction"
```

This opens a mode-specific instruction modal.

Behavior:

- active Intuitive tab → Intuitive instruction content
- active Surprise me tab → Surprise me instruction content
- Journey config exists for future use

Instruction modal design is the same for all modes.

Important implementation decision:

Instruction content should be separate JSX components, not HTML strings.

Expected structure:

```txt
src/components/game/instructions/
  IntuitiveInstruction.tsx
  SurpriseInstruction.tsx
  JourneyInstruction.tsx
```

Good approach:

```txt
modeInstructions stores title + Content component
```

Do not store instruction body as HTML string.

Bad:

```txt
description: `<p>Some HTML</p>`
```

Good:

```txt
Content: IntuitiveInstruction
```

Important:

- Do not use `dangerouslySetInnerHTML` for static instruction components.
- Use normal JSX in `.tsx` files.
- If TS1128 appears, check that JSX files are `.tsx` and components are not pasted inside config objects.

---

## Database HTML Rendering

Some long card content comes from the database with HTML markup.

Required behavior:

- DB card text must render as HTML, not escaped/plain text.
- This applies to trusted/admin-controlled card fields.

Fields:

```txt
Card.description
Card.additional
```

Applies to:

- Intuitive card preview modal
- full card description modal
- Learn more / additional modal
- Intuitive gameplay card description
- Surprise me gameplay card description
- any shared card display component that renders DB card text

Implementation rule:

- Use `dangerouslySetInnerHTML` only for trusted DB card content fields.
- Do not use it everywhere.
- Do not use it for static instruction components.
- Do not render arbitrary user-submitted HTML.

Recommended reusable component:

```txt
HtmlContent
RichText
CardHtmlContent
```

Expected behavior:

If database contains:

```html
<p><strong>Duration</strong></p>
<p>Some text<br>Next line</p>
<ul><li>Item 1</li><li>Item 2</li></ul>
```

UI should render formatted HTML, not show tags as text.

Important:

- The class `card-full-description` must remain where it already exists.
- Category theme classes must still apply to the rich text modal.

---

## Category Theme System

Each category has its own visual design/background.

Categories:

```txt
CONNECTION
INTIMACY
LOVEMAKING
```

Requirement:

- Intuitive category screen uses selected category theme.
- Intuitive gameplay uses current category/card theme.
- Surprise me gameplay updates theme when current card category changes.
- Modals can also use category-specific colors when needed.
- Card description modal with class `card-full-description` must use category colors.

Recommended helper/config:

```txt
src/lib/categoryThemes.ts
```

or:

```txt
src/components/game/categoryThemes.ts
```

Suggested function:

```txt
getCategoryTheme(category)
```

Possible theme fields:

```txt
screenClassName
cardClassName
accentClassName
buttonClassName
modalClassName
descriptionModalClassName
```

Important:

- Do not hardcode category style logic in many components.
- Keep category theme classes centralized.
- Use placeholder class values if exact design values are not final.
- The user may replace the class strings later with exact design values.

---

## Intuitive Mode

### Intuitive Selection Flow

Current flow:

1. User opens `/game`
2. Intuitive tab is active by default
3. User sees categories:
   - Connection
   - Intimacy
   - Lovemaking
4. Each category shows card count and `Choose`
5. User clicks `Choose`
6. User opens category route:

```txt
/game/intuitive/[category]
```

Valid categories:

```txt
CONNECTION
INTIMACY
LOVEMAKING
```

Invalid categories should call `notFound()`.

---

### Intuitive Category Page

Route:

```txt
/game/intuitive/[category]
```

Behavior:

- fetches cards by category from Prisma server-side
- passes cards to a Client Component
- user selects a card
- selected card is visually marked
- `Start game` becomes active
- clicking `Start game` opens intro modal first

Important:

- clicking a card does not start the game immediately
- game starts only after confirming the intro modal
- category screen uses the selected category theme
- card list/cards use the selected category theme

---

### Intuitive Start Modal Flow

When clicking `Start game`, show modal:

```txt
Tune into the play
```

Buttons:

- `OK`
- `More suggestions`

Behavior:

- `OK` navigates to the selected card game route
- `More suggestions` opens second modal
- closing first modal returns to card selection

Second modal:

```txt
More suggestions
```

Behavior:

- detailed placeholder/real text
- no bottom buttons
- only top-right close button
- closing it returns to first modal

---

### Intuitive Card Preview Modal

On category page:

- card info/details button opens card preview modal
- modal shows:
  - title
  - image if available
  - description rendered as trusted DB HTML
  - `Learn more`

`Learn more` behavior:

- active only if `card.additional` exists
- opens second modal with additional text rendered as trusted DB HTML
- disabled if no additional text exists

Prisma `Card` includes:

```prisma
additional String?
```

Important:

- The modal with class `card-full-description` must use category-specific colors.
- The class `card-full-description` must remain.
- Do not break existing modal behavior.

---

### Intuitive Gameplay

Route:

```txt
/game/intuitive/[category]/[cardId]
```

Behavior:

- validates category
- validates cardId
- card must belong to selected category
- invalid data should call `notFound()`

Screen shows:

- card title
- image if available
- description rendered as trusted DB HTML
- timer
- controls

Controls:

- Play / Stop
- Finish game
- Next card
- timer `+`
- timer `-`

Important timer behavior:

- timer uses Intuitive mode timer key from localStorage
- timer resets when card changes
- timer reaching `00:00` must NOT redirect automatically
- at `00:00`, countdown stops
- `Time is up` is shown
- selected timer sound plays
- Play is disabled while time is 0
- user can add time with `+` and continue
- pressing `+` stops the timer sound
- only `Finish game` ends the game

Finish game route:

```txt
/game/intuitive/result
```

---

### Intuitive Result Screen

Route:

```txt
/game/intuitive/result
```

This screen should visually match the Surprise me result screen.

Required content:

```txt
Journey Complete ✨

You’ve explored, felt, and connected.
Pause for a moment. Look at each other.
This is where the real magic continues.

Would you like to explore again?
```

Buttons:

- `Choose next play time`
  - visible
  - disabled
  - no logic yet

- `Back to “Connexion space”`
  - active
  - currently should navigate to `/game` unless product decision changes

Important:

- Earlier versions discussed navigating to `/welcome`.
- Current `CLAUDE.md` state says `/game`.
- Keep current behavior unless user explicitly changes product direction.

---

## Surprise me Mode

Surprise me is implemented inside the main `/game` page as a selectable tab.

Important:

- Surprise me selection happens inside `/game`
- do not create a separate `/game/surprise-me` selection page
- `/game/surprise-me/play` is only for active gameplay
- `/game/surprise-me/result` is only for the final screen

---

### Surprise me Selection Flow

Inside the Surprise me tab, user can select how many cards to play from each category:

- Connection
- Intimacy
- Lovemaking

Each category shows:

```txt
Category name
X cards
- 0 +
```

Rules:

- card counts come from database
- selected amount starts at 0
- `+` increases amount
- `-` decreases amount
- amount cannot go below 0
- amount cannot exceed available card count for that category
- no `Choose` button per category
- `Start game` is disabled when total selected cards count is 0
- `Start game` becomes active when at least one card is selected

Style requirement:

- Surprise me UI should match the finished Intuitive UI.
- Do not invent a separate visual system.
- Reuse/copy Intuitive layout/classes/styles where appropriate.
- Category themes must match Intuitive category themes.

---

### Surprise me Start Modal Flow

Clicking `Start game` opens intro modal first.

First modal:

```txt
Tune into the play
Intro text placeholder / real text later.
```

Buttons:

- `OK`
- `More suggestions`

Behavior:

- `OK` generates the Surprise me queue
- `More suggestions` opens second modal
- closing first modal returns to Surprise me selection

Second modal:

```txt
More suggestions
Detailed suggestions placeholder / real text later.
```

Behavior:

- no bottom buttons
- only top-right close button
- closing it returns to first modal

Style requirement:

- Surprise me modals should match Intuitive modal design.

---

### Surprise me Queue

When user clicks `OK`, the app generates a random queue and saves it to localStorage.

localStorage key:

```ts
connexion_surprise_queue
```

Stored shape:

```ts
{
  cards: [
    {
      id: string,
      category: "CONNECTION" | "INTIMACY" | "LOVEMAKING"
    }
  ],
  currentIndex: 0
}
```

Queue rules:

- category order is fixed:
  1. CONNECTION
  2. INTIMACY
  3. LOVEMAKING
- cards inside each category are randomized
- categories are not mixed together
- no duplicate cards inside one generated queue
- categories with selected amount 0 are skipped

Example:

```txt
Connection: 3
Intimacy: 2
Lovemaking: 1
```

Generated queue:

```txt
3 random CONNECTION cards
2 random INTIMACY cards
1 random LOVEMAKING card
```

After queue generation, app navigates to:

```txt
/game/surprise-me/play
```

---

### Surprise me Gameplay

Route:

```txt
/game/surprise-me/play
```

Behavior:

- reads `connexion_surprise_queue` from localStorage
- if queue is missing or invalid, redirects to `/game`
- uses `currentIndex` to show current card
- displays:
  - card title
  - image if available
  - description rendered as trusted DB HTML
  - category
- `Next card` increments `currentIndex`
- updated `currentIndex` is saved back to localStorage
- after last card, navigates to:

```txt
/game/surprise-me/result
```

Controls:

- Timer
- Play / Stop
- Change cards
- Next card

`Change cards` behavior:

- returns to `/game`
- ideally should return with Surprise me tab open if implemented later

Style requirement:

- Surprise me gameplay must visually match Intuitive gameplay.
- Current card category controls the theme.
- When current Surprise me card category changes, background/card colors should change.

---

### Surprise me Timer

Surprise me gameplay uses the same timer behavior as Intuitive mode, but with its own mode-specific timer key.

Timer behavior:

- uses Surprise me timer setting from localStorage
- supports selected durations
- supports `No limit`
- resets when current card changes
- Play / Stop works
- `+` adds time
- `-` removes time
- cannot go below `00:00`
- timer reaching `00:00` does not navigate automatically
- shows `Time is up`
- plays selected timer sound
- Play is disabled while time is 0
- user can add time and continue
- pressing `+` stops the sound and clears `Time is up`

---

### Surprise me Result Screen

Route:

```txt
/game/surprise-me/result
```

Required content:

```txt
Journey Complete ✨

You’ve explored, felt, and connected.
Pause for a moment. Look at each other.
This is where the real magic continues.

Would you like to explore again?
```

Buttons:

- `Choose next play time`
  - visible
  - disabled
  - no logic yet

- `Back to “Connexion space”`
  - active
  - currently should navigate to `/game` unless product decision changes

Important:

- Current `CLAUDE.md` state says `/game`.
- Keep current behavior unless user explicitly changes it.

---

## Timer Settings

Timer settings are stored in localStorage.

Available options:

- 5 minutes
- 10 minutes
- 30 minutes
- 60 minutes
- No limit

Display examples:

```txt
05:00
10:00
30:00
60:00
No limit
```

Important update:

Timer settings must be mode-specific, not global.

Current/desired localStorage keys:

```txt
connexion_timer_intuitive
connexion_timer_surprise
connexion_timer_journey
```

Behavior:

- Intuitive reads/writes `connexion_timer_intuitive`
- Surprise me reads/writes `connexion_timer_surprise`
- Journey future mode should use `connexion_timer_journey`
- changing timer in one mode must not change timer in another mode
- default value for every mode is 5 minutes

Old key:

```txt
intuitive_timer
```

This should not be used as the shared active key anymore.

Optional migration:

- if `connexion_timer_intuitive` is missing and old `intuitive_timer` exists, copy old value once into `connexion_timer_intuitive`
- do not write to `intuitive_timer` anymore

Hydration rule:

- Do not read localStorage during server render or first hydration render if it changes displayed text.
- Initial render should be stable/default.
- After mount, read localStorage and update display.
- Avoid hydration mismatch like server showing `05:00` and client showing `10:00`.

Timer behavior:

- selected setting is used by the corresponding gameplay mode
- timer resets when current card changes
- timer does not auto-finish the game
- only explicit user actions finish/change game flow

---

## Timer Sound Settings

Timer sound settings are available in Profile.

Sound files are in:

```txt
/public/sound/
```

Current sound files:

```txt
beep1.wav
beep2.wav
beep3.wav
beep4.wav
beep5.wav
beep6.wav
```

localStorage keys:

```ts
connexion_timer_sound
connexion_timer_volume
```

Defaults:

```ts
sound: beep1.wav
volume: 70
```

Gameplay fallback:

```ts
/sound/beep1.wav
volume: 0.7
```

Profile sound modal behavior:

- user can select Beep 1–6
- each sound has preview/play
- each sound has stop
- only one preview can play at a time
- switching sound stops previous preview
- closing modal stops preview
- selected sound and volume are saved to localStorage
- gameplay uses selected sound and volume

Important bug already fixed:

- no nested `<button>` inside `<button>` in sound selector

Timer sound cleanup requirement:

Timer sound must stop immediately when:

- user presses `+` after time is up
- user clicks Next card
- user clicks Finish game
- user clicks Change cards
- current card changes
- timer component unmounts

---

## Profile Page

Route:

```txt
/profile
```

Implemented:

- protected profile page
- user name/email display
- plan placeholder
- disabled premium action
- Daily connection disabled toggle
- Help & Support modal
- Language modal placeholder
- Timer sound modal
- logout

Not implemented yet:

- real subscriptions
- Stripe
- account editing
- avatar
- real language/i18n system
- real notification scheduling

---

## PWA Status

Basic PWA support has been added and installation works.

Important:

```txt
PWA installable does not mean full offline gameplay.
```

Current PWA goal:

- app is installable
- manifest works
- icons work
- service worker registers without console errors
- online auth/game behavior remains safe

---

### PWA Manifest

Expected app values:

```txt
Name: Connexion Space
Short name: Connexion
Description: Connexion Space card game
Start URL: /
Scope: /
Display: standalone
Orientation: portrait
```

Expected icon files:

```txt
public/icons/icon-192.png
public/icons/icon-512.png
```

Important:

- icon files must exist and be valid PNGs
- manifest paths must match real files
- broken icon paths cause install errors
- earlier `/icons/icon-192.png` 404 was fixed/should remain fixed

---

### Service Worker

Service worker file:

```txt
public/sw.js
```

Service worker must be conservative.

Allowed caching:

```txt
/icons/*
/manifest.webmanifest
/_next/static/*
/offline.html if offline fallback is implemented
```

Do not cache:

```txt
/
 /login
/auth/callback
/welcome
/privacy
/profile
/game
/game/*
Supabase URLs
API/auth routes
```

Fetch handler rules:

```txt
if request method is not GET → network only
if URL protocol is not http/https → ignore / do not cache
only cache static assets/icons/manifest/offline fallback
everything else → network only
```

Before `cache.put`, check:

- request method is GET
- URL is http or https
- response exists
- response.ok is true
- request is allowed static/offline asset only

Important bug fixed/discussed:

There was an error:

```txt
Failed to execute 'put' on 'Cache':
Request scheme 'chrome-extension' is unsupported
```

Cause:

- service worker tried to cache unsupported `chrome-extension://` requests

Fix:

- add protocol guard before fetch/cache logic
- do not call `cache.put` for non-http/https requests

---

### Offline Mode

Current state:

- full offline gameplay is not implemented
- this is intentional for MVP safety

Reason:

- Supabase auth does not work offline
- Prisma/DB content is not available offline
- aggressive page caching can break `/auth/callback`
- dynamic/authenticated pages should not be cached casually

Recommended safe future task:

- add offline fallback page only

Suggested file:

```txt
public/offline.html
```

Suggested content:

```txt
You’re offline

Connexion Space needs an internet connection to load your cards.
Please reconnect and try again.

Try again
```

Service worker behavior for offline fallback:

- cache `/offline.html`
- for navigation/document requests:
  - try network first
  - if network fails, return cached `/offline.html`
- do not cache successful dynamic page responses

Do not implement full offline gameplay yet.

---

### PWA Install Prompt / Button

Installation works manually from browser.

Future improvement:

Add in-app install banner/button.

Recommended component:

```txt
src/components/PwaInstallPrompt.tsx
```

Expected behavior:

Chromium:

- listen for `beforeinstallprompt`
- call `preventDefault()`
- store event
- show custom install banner/button
- on user click, call `prompt()`
- hide after accepted/dismissed

iOS Safari:

- `beforeinstallprompt` is not supported
- show instruction modal:
  1. Tap Share
  2. Tap Add to Home Screen
  3. Tap Add

Do not show install banner if:

- app is already installed / standalone
- current route is `/auth/callback`
- user dismissed it recently

Suggested localStorage dismissal key:

```txt
connexion_pwa_install_dismissed_at
```

Suggested behavior:

- if dismissed, do not show again for 7 days

Important:

- browser controls whether native install prompt is available
- app cannot force install prompt automatically on page load
- prompt must be triggered by user gesture

---

## Current Architecture Decisions

Keep these rules:

- Prisma queries stay in Server Components where possible
- interactive logic stays in isolated Client Components
- localStorage is used for temporary game/settings state
- no global state management
- no Redux
- no Zustand
- no service layer
- no repository layer
- no unnecessary API routes for MVP
- no premature abstractions
- no broad refactors unless explicitly requested

Existing/important Client Components may include:

- `GameTimer`
- `TimerSettings`
- `IntuitiveCardSelector`
- game mode tabs/client component
- Surprise me play client component
- Profile client component
- PWA registration component
- instruction content components

Exact file names may differ. Always inspect before editing.

---

## Component Structure Warning

Claude previously created a wrong duplicated folder structure:

```txt
components/
  game/
    game/
      game/
```

This is wrong.

Desired structure:

```txt
src/components/
  game/
    ...game components here
```

Important:

- do not create `components/game/game`
- do not create `components/game/game/game`
- if nested duplicate folders appear, move files back to `src/components/game/`
- update imports
- remove empty duplicate folders

Search command:

```powershell
Select-String -Path "src/**/*.*" -Pattern "components/game/game"
```

---

## Important Current Rules

- Timer reaching `00:00` must NOT redirect to result.
- Play is disabled while timer is at `00:00`.
- Pressing `+` after time is up stops the sound and allows continuing.
- Timer sound must stop on card change/navigation.
- Only `Finish game` ends Intuitive mode.
- Only queue completion via `Next card` ends Surprise me mode.
- Intuitive result route is `/game/intuitive/result`.
- Surprise me result route is `/game/surprise-me/result`.
- `/game` is the only mode selection page.
- Surprise me selection is inside `/game`, not a separate route.
- Journey mode is not implemented yet.
- Payments are not implemented yet.
- Free session tracking is not implemented yet.
- Real reminder logic is not implemented yet.
- Real i18n is not implemented yet.
- PWA installability works, but full offline gameplay is not implemented.
- Service worker must not cache auth/dynamic/game pages.

---

## Next Likely Tasks

Recommended next tasks:

1. Add PWA install prompt/banner:
   - Chromium `beforeinstallprompt`
   - iOS Safari installation instructions
   - hide if installed
   - dismiss for 7 days

2. Add safe offline fallback page:
   - `public/offline.html`
   - network-first for navigation
   - fallback to offline page only when network fails
   - do not cache dynamic pages

3. Harden Surprise me play edge cases:
   - invalid localStorage
   - missing queue
   - deleted card id
   - currentIndex out of range
   - refresh behavior

4. Improve `Change cards` behavior:
   - navigate to `/game?mode=surprise`
   - open Surprise me tab automatically

5. Test Intuitive result route:
   - ensure `Finish game` goes to `/game/intuitive/result`
   - ensure old `/game/result` is no longer referenced

6. Implement free session tracking:
   - define when free session starts
   - define when it becomes used
   - redirect used users to premium placeholder later

7. Add Premium placeholder screen.

8. Later:
   - Journey mode
   - Stripe
   - Apple login
   - real i18n
   - push notifications
   - real reminder scheduling
   - full offline strategy if needed

---

## Recommended Git Commit Messages

For current MVP/PWA checkpoint:

```bash
git add .
git commit -m "Update MVP status with deployment and PWA foundation"
```

For PWA install prompt future task:

```bash
git commit -m "Add PWA install prompt UI"
```

For offline fallback future task:

```bash
git commit -m "Add conservative PWA offline fallback"
```

For free session tracking future task:

```bash
git commit -m "Add free session tracking foundation"
```

For premium placeholder:

```bash
git commit -m "Add premium placeholder screen"
```

