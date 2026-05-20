# Connexion Space — Full Project Checkpoint

_Last updated: May 2026_

This checkpoint is intended to be pasted into a new ChatGPT / Claude conversation so the assistant can immediately understand the current project state, architecture, implemented features, deployment status, known constraints, and recommended next steps.

---

# 1. Project Overview

## Project Name

Connexion Space

## Product Type

Mobile-first adult card game PWA.

The app is a guided card-based experience for couples. Users select a game mode, choose cards or quantities, play through cards with a timer, and finish on a result/reflection screen.

## Development Style

The project is being built feature-by-feature with Claude Code CLI / vibe coding.

Important workflow rule:

- one task = one prompt
- keep prompts small and scoped
- avoid large multi-feature prompts
- test manually after every task
- commit stable checkpoints
- avoid giving Claude permission to broadly refactor

## Current MVP Status

The MVP frontend/game flow is mostly ready.

Implemented:

- Next.js App Router project
- Prisma + Supabase Postgres
- Supabase Google Auth
- protected routes
- first-login privacy acceptance
- welcome/free session intro screen
- profile foundation
- global timer settings
- timer sound settings
- Intuitive mode
- Surprise me mode
- category-based themes
- rich HTML rendering for DB card text
- Vercel deployment
- basic PWA installability
- conservative service worker
- offline fallback direction discussed
- install prompt/banner direction discussed

Not fully implemented yet:

- real free session tracking
- premium/paywall logic
- Stripe
- Journey mode
- Apple login
- push notifications
- real reminder scheduling
- real i18n
- full offline gameplay

---

# 2. Tech Stack

## Core

- Next.js App Router
- TypeScript
- Tailwind CSS
- PostgreSQL via Supabase
- Prisma 5
- Supabase Auth
- pnpm
- Vercel

## Important Stack Notes

Use `pnpm`, not `npm`.

Do not run:

```bash
npm install
```

Use:

```bash
pnpm add package-name
```

## Prisma

Prisma client import is a named export.

Correct:

```ts
import { prisma } from '@/lib/prisma'
```

Wrong:

```ts
import prisma from '@/lib/prisma'
```

Prisma singleton exists around:

```txt
src/lib/prisma.ts
```

## Vercel Build

Vercel caches dependencies, so Prisma Client must be generated during build.

`package.json` build script should include:

```json
"build": "prisma generate && next build"
```

This fixed the Vercel PrismaClientInitializationError.

---

# 3. Current Deployment Status

## Hosting

The project has been deployed to Vercel.

## Supabase OAuth Redirect Issue Fixed

After deploy, Google login initially redirected to:

```txt
http://localhost:3000/?code=...
```

Cause:

Supabase Auth URL configuration still had local/dev redirect settings.

Fix:

Supabase Dashboard → Authentication → URL Configuration

Production Site URL and Redirect URLs were corrected.

Important production redirect URL format:

```txt
https://PRODUCTION_DOMAIN/auth/callback
```

Local dev should still be allowed:

```txt
http://localhost:3000/auth/callback
```

## Google Auth

Google login now works on production after Supabase configuration was fixed.

---

# 4. App Route Structure

Current intended route structure:

```txt
src/app/
  page.tsx

  login/
    page.tsx

  auth/
    callback/
      route.ts

  privacy/
    page.tsx

  welcome/
    page.tsx

  profile/
    page.tsx

  game/
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
- `/game/surprise-me/play` is the Surprise me gameplay screen.
- `/game/surprise-me/result` is the Surprise me final screen.
- old `/game/result` should not be used anymore.
- If `src/app/game/result/page.tsx` still exists as a redirect to `/game/intuitive/result`, it can be removed if no links reference `/game/result`.

---

# 5. Root / Login / Welcome Flow

## Root Behavior

Route:

```txt
/
```

Current desired behavior:

- unauthenticated user → redirect to `/login`
- authenticated user → redirect to `/welcome`

## Login Behavior

Route:

```txt
/login
```

Current desired behavior:

- unauthenticated user → show login screen
- authenticated user → redirect to `/welcome`

## Login Screen UI

The login screen should show:

```txt
Logo / Connexion Space
Sign in or Join now!
Continue with Gmail
Continue with Apple
By clicking continue, you agree our Terms & Conditions and Privacy Policy.
```

Current behavior:

- Gmail button is active and uses Supabase Google login.
- Apple button is visible but disabled.
- Terms & Conditions / Privacy Policy links are placeholders for now.
- Do not implement Apple login yet.

## Supabase Google Login

OAuth redirect must be dynamic and production-safe.

Preferred client-side login redirect:

```ts
redirectTo: `${window.location.origin}/auth/callback`
```

Do not hardcode localhost.

## Auth Callback

Route:

```txt
/auth/callback
```

Responsibilities:

- exchange Supabase code for session
- sync Prisma user by email
- redirect user to `/privacy` or `/welcome` depending on state

Important:

- Do not change this flow casually.
- Supabase UUID should not be forced into Prisma `User.id`.
- Prisma user matching is by email.

---

# 6. Privacy Flow

Route:

```txt
/privacy
```

Purpose:

First-time users must accept game information/privacy terms before continuing.

Implemented behavior:

- user sees a privacy/game information page
- user must scroll/read text block
- user must check agreement checkbox
- `Start now` is disabled until requirements are met
- after acceptance, `privacyAcceptedAt` is saved in Prisma
- user is redirected to `/welcome`

Current state:

- real legal text is still placeholder/MVP text
- do not overbuild legal system yet

---

# 7. Welcome / Free Session Screen

Route:

```txt
/welcome
```

Purpose:

Landing screen after login/privacy acceptance.

Current text:

```txt
Welcome to
Connexion Space

You can play the full game once for free.
After your free session ends, you’ll need to upgrade to continue playing.
```

Buttons:

1. `Start Free Session`
   - navigates to `/game`

2. `View Premium Options`
   - visible but disabled
   - future paid version

3. `Choose next play time`
   - visible but disabled
   - future reminder/notification scheduling

Important:

- free session tracking is not implemented yet
- currently the text says one free session, but logic is not enforcing it
- premium/paywall logic is not implemented yet

---

# 8. Global Styling / CSS Foundation

Implemented:

- Poppins font globally via `next/font/google`
- CSS reset
- global `box-sizing: border-box`
- full-height `html`, `body`
- reusable global classes for app layout/styles

Important:

- Do not use raw Google Fonts `<link>` tags.
- Use Next.js recommended `next/font/google`.
- Do not break existing font setup.

## CSS Reset

Global CSS should include safe reset behavior:

- remove default margins/paddings
- normalize text spacing
- images responsive by default
- buttons/inputs normalized
- anchors inherit color
- body full height
- border-box everywhere

Key rule:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

# 9. Main Game Screen

Route:

```txt
/game
```

This is the main mode selection screen.

## Tabs

Current tabs:

```txt
Intuitive | Journey | Surprise me
```

Behavior:

- Intuitive is active by default.
- Journey is visible but disabled/inactive.
- Surprise me is selectable.
- Tabs switch content on the same `/game` page.
- Surprise me selection happens inside `/game`.
- There is no separate `/game/surprise-me` selection page.

## Mode-Specific Timer Settings

There was a bug where one localStorage key `intuitive_timer` was used globally across modes.

Desired behavior:

Each mode must have its own timer setting.

Keys:

```txt
connexion_timer_intuitive
connexion_timer_surprise
connexion_timer_journey
```

Behavior:

- Intuitive timer setting reads/writes `connexion_timer_intuitive`.
- Surprise me timer setting reads/writes `connexion_timer_surprise`.
- Journey future timer setting should use `connexion_timer_journey`.
- Changing Intuitive timer must not affect Surprise me.
- Changing Surprise me timer must not affect Intuitive.
- Default for each mode: 5 minutes.

Important hydration note:

TimerSettings must not read localStorage during server render or first hydration render, because that caused hydration mismatch:

Server rendered `05:00`, client rendered saved `10:00`.

Safe behavior:

- initial render uses default `05:00`
- after mount, read localStorage and update display
- avoid hydration mismatch

---

# 10. Main Game Instruction Modal

On `/game`, heading has:

```tsx
<h1 className="flex items-center font-semibold text-[20px] leading-[100%]">
  <span>Choose your cards</span>
  <div className="ml-1" id="game-main-instruction">
    <InfoCircleIcon />
  </div>
</h1>
```

Requirement:

- element with `id="game-main-instruction"` opens mode-specific instruction modal
- modal design is same for all modes
- text differs by active mode:
  - Intuitive
  - Surprise me
  - Journey

Current/desired implementation:

Instruction body should be separate React components, not HTML strings.

Suggested structure:

```txt
src/components/game/instructions/
  IntuitiveInstruction.tsx
  SurpriseInstruction.tsx
  JourneyInstruction.tsx
```

Do not store HTML-like strings in config.

Bad:

```ts
description: `<p>Text</p>`
```

Good:

```ts
Content: IntuitiveInstruction
```

Suggested config concept:

```ts
type ModeInstruction = {
  title: string
  Content: React.ComponentType
}

const modeInstructions: Record<Tab, ModeInstruction> = {
  intuitive: {
    title: 'Intuitive mode',
    Content: IntuitiveInstruction,
  },
  surprise: {
    title: 'Surprise me mode',
    Content: SurpriseInstruction,
  },
  journey: {
    title: 'Journey mode',
    Content: JourneyInstruction,
  },
}
```

Important:

- keep `id="game-main-instruction"`
- do not use `dangerouslySetInnerHTML` for instruction components
- instructions are static JSX components

---

# 11. Prisma Schema Important Models

Current important models:

```prisma
model User {
  id                String    @id @default(cuid())
  email             String?   @unique
  name              String?
  createdAt         DateTime  @default(now())
  privacyAcceptedAt DateTime?
}

model Card {
  id          String   @id @default(cuid())
  title       String
  description String
  additional  String?
  imageUrl    String?
  category    Category
  createdAt   DateTime @default(now())
}

enum Category {
  CONNECTION
  INTIMACY
  LOVEMAKING
}
```

Important:

- `Card.additional` exists and is optional.
- User said they manually update DB content.
- Do not change schema unless explicitly needed.
- Do not run migrations unless asked.

---

# 12. Database HTML Rendering

User now needs card text from DB to render as HTML, because descriptions are long and require markup.

Applies to:

- `Card.description`
- `Card.additional`

Use cases:

- card preview modal
- full description modal
- Learn more / additional modal
- Intuitive gameplay card description
- Surprise me gameplay card description

Important:

- DB content is trusted/admin-controlled.
- Use `dangerouslySetInnerHTML` only for trusted card content fields.
- Do not use it everywhere.
- Do not use it for instruction components.
- Do not render DB HTML as escaped text.

Recommended reusable component:

```txt
HtmlContent / RichText / CardHtmlContent
```

It should accept:

- `html`
- optional `className`

Behavior:

- if no html, render nothing
- otherwise render wrapping div with `dangerouslySetInnerHTML`

Important class:

The modal element/class `card-full-description` must remain present where it already exists because custom CSS may depend on it.

---

# 13. Category Theme System

The design requires every category to have unique visual style/background.

Categories:

- CONNECTION
- INTIMACY
- LOVEMAKING

Requirement:

- category selection screens use category theme
- gameplay screens use current card/category theme
- Surprise me changes theme when current card category changes
- modals may need category-specific colors too

Suggested helper:

```txt
src/lib/categoryThemes.ts
```

or:

```txt
src/components/game/categoryThemes.ts
```

Suggested function:

```ts
getCategoryTheme(category)
```

Suggested theme fields:

- `screenClassName`
- `cardClassName`
- `accentClassName`
- `buttonClassName`
- `modalClassName`
- `descriptionModalClassName`

Important:

- centralize theme classes in one helper/config
- do not hardcode separate category conditionals everywhere
- use placeholder colors/classes if exact design values are not available
- user can later replace class strings with exact design values

## Card Description Modal Theme

In `IntuitiveCardSelector`, modal with class:

```txt
card-full-description
```

must use colors/themes based on selected card category:

- Connection → Connection colors
- Intimacy → Intimacy colors
- Lovemaking → Lovemaking colors

Class `card-full-description` must remain.

---

# 14. Intuitive Mode

## Intuitive Selection Flow

User flow:

1. User opens `/game`
2. Intuitive tab is active by default
3. User sees category cards:
   - Connection
   - Intimacy
   - Lovemaking
4. Each category shows count and `Choose`
5. User clicks `Choose`
6. User goes to:

```txt
/game/intuitive/[category]
```

Valid category params:

```txt
CONNECTION
INTIMACY
LOVEMAKING
```

Invalid category should call `notFound()`.

## Intuitive Category Page

Route:

```txt
/game/intuitive/[category]
```

Behavior:

- Server Component fetches cards from Prisma by category.
- Client Component handles selection/modals.
- User selects a card.
- selected card is visually marked.
- `Start game` becomes active.
- clicking card does not start game immediately.
- clicking `Start game` opens intro modal first.

## Intuitive Start Modal Flow

When clicking `Start game`, show:

```txt
Tune into the play
```

Buttons:

- `OK`
- `More suggestions`

Behavior:

- `OK` navigates to selected card gameplay route.
- `More suggestions` opens second modal.
- closing first modal returns to category selection screen.

Second modal:

```txt
More suggestions
```

Behavior:

- detailed placeholder/content
- no bottom buttons
- only top-right close button
- closing it returns to first modal

## Intuitive Card Preview Modal

On category page:

- each card has info/details button
- clicking opens preview modal
- modal shows:
  - title
  - image if exists
  - description rendered as trusted HTML
  - `Learn more`

Learn more behavior:

- active only if `card.additional` exists
- opens second modal with additional text rendered as trusted HTML
- disabled if `additional` is missing

## Intuitive Gameplay

Route:

```txt
/game/intuitive/[category]/[cardId]
```

Behavior:

- validates category
- validates cardId
- card must belong to selected category
- invalid data calls `notFound()`

Screen shows:

- card title
- image if available
- description rendered as trusted HTML
- timer
- controls

Controls:

- Play / Stop
- Finish game
- Next card
- timer `+`
- timer `-`

Finish game route:

```txt
/game/intuitive/result
```

## Intuitive Timer Behavior

Important rules:

- timer uses Intuitive mode timer key: `connexion_timer_intuitive`
- timer resets when card changes
- timer reaching `00:00` does not navigate
- countdown stops at 00:00
- `Time is up` appears
- selected timer sound plays
- Play button is disabled while time is 0
- pressing `+` adds time
- pressing `+` hides/clears `Time is up`
- pressing `+` stops the timer sound immediately
- after adding time, Play is available again
- only `Finish game` ends Intuitive mode

## Timer Sound Cleanup

Fixed behavior:

When timer sound is playing after 00:00, it should stop immediately when:

- user presses `+`
- user clicks Next card
- user clicks Finish game
- current card changes
- timer component unmounts

Do not allow timer sound to continue over next screen/card.

## Intuitive Result Screen

Route:

```txt
/game/intuitive/result
```

The Intuitive result screen should match Surprise me result screen.

Required content:

```txt
Journey Complete ✨

You’ve explored, felt, and connected.
Pause for a moment. Look at each other.
This is where the real magic continues.

Would you like to explore again?
```

Buttons:

1. `Choose next play time`
   - visible
   - disabled
   - no logic yet

2. `Back to “Connexion space”`
   - active
   - navigates to `/welcome`

---

# 15. Surprise me Mode

Surprise me is implemented inside `/game` as a tab.

Important:

- selection UI is inside `/game`
- there is no separate `/game/surprise-me` selection page
- `/game/surprise-me/play` is only gameplay
- `/game/surprise-me/result` is only final screen

## Surprise me Selection UI

Inside Surprise me tab, user chooses quantity of cards from each category:

- Connection
- Intimacy
- Lovemaking

Each category block:

```txt
Category name
X cards
- 0 +
```

Rules:

- count comes from DB
- selected amount starts at 0
- `+` increments
- `-` decrements
- cannot go below 0
- cannot exceed available cards count
- no per-category `Choose`
- global `Start game` disabled when total selected = 0
- global `Start game` active when total selected > 0

User finished frontend styles for all Intuitive elements and requested Surprise me UI to match Intuitive.

Important current requirement:

Surprise me UI should mirror finished Intuitive UI:

- category quantity cards
- modal design
- gameplay card layout
- card image/title/description styling
- timer block
- buttons
- result screen
- category theme behavior
- rich DB HTML rendering

Do not invent separate design for Surprise me.

## Surprise me Start Modal

Clicking `Start game` opens modal first.

First modal:

```txt
Tune into the play
Intro text placeholder / actual text later
```

Buttons:

- `OK`
- `More suggestions`

Behavior:

- `OK` generates queue and navigates to play
- `More suggestions` opens detailed modal
- closing first modal returns to selection

Second modal:

```txt
More suggestions
Detailed suggestions placeholder / actual text later
```

Behavior:

- no bottom buttons
- only top-right close button
- closing it returns to first modal

## Surprise me Queue

On `OK`, generate random queue and save to localStorage.

Key:

```txt
connexion_surprise_queue
```

Shape:

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

- fixed category order:
  1. CONNECTION
  2. INTIMACY
  3. LOVEMAKING
- cards inside category are randomized
- categories are not mixed
- no duplicates inside one generated queue
- category with selected amount 0 is skipped

Example:

```txt
Connection: 3
Intimacy: 2
Lovemaking: 1
```

Queue:

```txt
3 random CONNECTION cards
2 random INTIMACY cards
1 random LOVEMAKING card
```

After saving queue:

```txt
/game/surprise-me/play
```

## Surprise me Gameplay

Route:

```txt
/game/surprise-me/play
```

Behavior:

- reads `connexion_surprise_queue` from localStorage
- if missing/invalid, redirects to `/game`
- uses `currentIndex`
- displays current card:
  - title
  - image
  - description rendered as trusted HTML
  - category
- `Next card` increments currentIndex and saves back to localStorage
- after last card, navigates to `/game/surprise-me/result`

Controls:

- Timer
- Play / Stop
- Change cards
- Next card

## Surprise me Timer

Uses same timer behavior as Intuitive but with its own mode key:

```txt
connexion_timer_surprise
```

Behavior:

- supports 5/10/30/60/no_limit
- resets when current card changes
- Play / Stop works
- `+` adds time
- `-` removes time
- cannot go below `00:00`
- at 00:00:
  - no auto navigation
  - show `Time is up`
  - play selected sound
  - disable Play while seconds = 0
- pressing `+`:
  - stops sound immediately
  - clears Time is up
  - enables Play again

Sound cleanup should also happen on:

- Next card
- Change cards
- card change
- unmount

## Surprise me Result Screen

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

1. `Choose next play time`
   - visible
   - disabled
   - no logic yet

2. `Back to “Connexion space”`
   - active
   - navigates to `/welcome`

---

# 16. Timer Settings

## Global Options

Timer options:

- 5 minutes
- 10 minutes
- 30 minutes
- 60 minutes
- No limit

Display:

```txt
05:00
10:00
30:00
60:00
No limit
```

## Mode-Specific Keys

Current desired keys:

```txt
connexion_timer_intuitive
connexion_timer_surprise
connexion_timer_journey
```

Do not keep using old `intuitive_timer` globally.

Optional migration:

- If `connexion_timer_intuitive` missing and old `intuitive_timer` exists, copy it once into `connexion_timer_intuitive`.
- Do not write to `intuitive_timer`.

## Hydration

Do not read localStorage during server render or first hydration render.

Bad:

- lazy `useState` initializer that reads `window.localStorage` and changes rendered text before hydration

Good:

- render stable default first
- after mount, read localStorage and update state

---

# 17. Timer Sound Settings

## Sound Files

Sound files live in:

```txt
/public/sound/
```

Current files:

```txt
beep1.wav
beep2.wav
beep3.wav
beep4.wav
beep5.wav
beep6.wav
```

## localStorage Keys

```txt
connexion_timer_sound
connexion_timer_volume
```

Defaults:

```txt
sound: beep1.wav
volume: 70
```

Gameplay fallback:

```txt
/sound/beep1.wav
volume: 0.7
```

## Profile Timer Sound Modal

Behavior:

- sound options Beep 1–6
- each option has preview/play
- each option has stop
- only one preview sound can play at a time
- switching row stops previous preview
- closing modal stops preview
- unmount stops preview
- selected sound and volume saved to localStorage
- gameplay uses selected sound and volume

Important bug fixed:

No nested `<button>` inside `<button>` in sound selector.

---

# 18. Profile Page

Route:

```txt
/profile
```

Implemented:

- protected page
- user name/email display
- plan placeholder
- disabled premium action
- Daily connection disabled toggle
- Help & Support modal
- Language modal placeholder
- Timer sound modal
- Logout

Not implemented:

- real subscription management
- Stripe
- avatar
- profile editing
- real i18n
- real notifications/reminders

---

# 19. PWA Status

## Current PWA State

Basic PWA was added and installation works.

Important distinction:

```txt
PWA installable ≠ full offline app
```

Current PWA goal:

- app can be installed
- service worker registers
- manifest works
- icons work
- auth/game online behavior not broken

## Manifest

App:

```txt
Name: Connexion Space
Short name: Connexion
Description: Connexion Space card game
Start URL: /
Scope: /
Display: standalone
Orientation: portrait
```

Icons expected:

```txt
public/icons/icon-192.png
public/icons/icon-512.png
```

If icon paths are in manifest, files must exist and be valid images.

There was a 404 issue for:

```txt
/icons/icon-192.png
```

Fix was to add valid icon files or update manifest paths.

## Service Worker

File:

```txt
public/sw.js
```

Current requirement:

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

Important logic in `fetch` handler:

```txt
if request method is not GET → network only
if URL protocol is not http/https → ignore / do not cache
only cache static assets/icons/manifest
everything else → network only
```

Before `cache.put`, check:

- request method is GET
- URL is http/https
- response exists
- response.ok is true
- request is an allowed static/offline asset

## Service Worker Bug Fixed / Discussed

There was an error:

```txt
Failed to execute 'put' on 'Cache':
Request scheme 'chrome-extension' is unsupported
```

Cause:

Service worker tried to cache unsupported `chrome-extension://` requests.

Fix:

Add protocol guard before fetch/cache logic.

## Offline Mode

Current offline behavior:

- full offline gameplay is not implemented
- this is intentional/safe for now

Reason:

- Supabase auth does not work offline
- DB cards do not load offline
- aggressive caching can break auth/callback
- offline game state requires careful design

Recommended safe offline MVP:

- show offline fallback page instead of full offline gameplay

Suggested offline fallback:

```txt
You’re offline

Connexion Space needs an internet connection to load your cards.
Please reconnect and try again.

Try again
```

Do not implement full offline gameplay yet.

## Install Button / Banner

User asked how to show installation button on site.

Recommended future implementation:

Component:

```txt
src/components/PwaInstallPrompt.tsx
```

Behavior:

- Chromium:
  - listen for `beforeinstallprompt`
  - preventDefault
  - store event
  - show banner/button
  - on user click call `prompt()`
  - hide after accepted/dismissed
- iOS Safari:
  - no `beforeinstallprompt`
  - show instructions:
    1. Tap Share
    2. Tap Add to Home Screen
    3. Tap Add
- do not show if already installed
- do not show on `/auth/callback`
- store dismissal timestamp in localStorage for 7 days

Suggested dismissal key:

```txt
connexion_pwa_install_dismissed_at
```

Important:

- Browser decides when native install prompt is available.
- Site cannot force install prompt automatically on page load.
- It must be triggered by user gesture.

---

# 20. Known Warnings / Cleanup

There were lint warnings:

- unused imports in `welcome/page.tsx`
- unused imports in `ProfileClient.tsx`
- `<img>` warnings from Next.js

Suggested cleanup order:

1. remove unused imports only
2. leave `<img>` warnings for later unless they block deployment
3. do not blindly replace all `<img>` with `next/image`, because it may require dimensions/domain config

Known warning examples:

```txt
Card is defined but never used
Image is defined but never used
Link is defined but never used
```

---

# 21. Component Structure Warning

Claude once created bad duplicated folders:

```txt
components/
  game/
    game/
      game/
```

This should not happen.

Desired:

```txt
src/components/
  game/
    ...game components here
```

Important:

- no `components/game/game`
- no `components/game/game/game`
- update imports if this happens
- remove empty duplicate folders

Search command:

```powershell
Select-String -Path "src/**/*.*" -Pattern "components/game/game"
```

---

# 22. Claude Prompting Rules

Always use scoped prompts.

Good constraints:

```txt
Strict limitations:
- Do NOT install packages
- Do NOT change Prisma schema
- Do NOT refactor unrelated files
- Do NOT change auth logic
- Do NOT change gameplay logic unless this task requires it
- Keep implementation minimal
```

For visual sync tasks:

```txt
Use Intuitive as the source of truth.
Do not invent new styles.
Copy/reuse existing classes/layouts carefully.
Small duplication is OK.
Do not refactor into a huge design system.
```

For DB HTML tasks:

```txt
Render trusted DB card fields as HTML.
Use dangerouslySetInnerHTML only for Card.description and Card.additional.
Do not use it for static instruction components.
```

For service worker tasks:

```txt
Do not cache authenticated pages.
Do not cache /auth/callback.
Do not implement offline gameplay.
Keep SW conservative.
```

For Prisma/Vercel:

```txt
Make sure build runs prisma generate && next build.
Do not change Prisma schema unless explicitly asked.
```

---

# 23. Important Current Rules

## Game Flow Rules

- `/game` is the only mode selection page.
- Intuitive result route: `/game/intuitive/result`.
- Surprise me result route: `/game/surprise-me/result`.
- Surprise me selection is inside `/game`, not `/game/surprise-me`.
- Journey mode is not implemented yet.

## Timer Rules

- timer reaching `00:00` must not navigate automatically
- at 00:00 show `Time is up`
- Play is disabled while time is 0
- pressing `+` adds time and stops sound
- sound stops on next card / finish / change cards / unmount
- each mode has its own timer key

## Auth Rules

- Supabase Google Auth works
- do not hardcode localhost redirect
- production redirect must use `/auth/callback`
- Prisma user sync is by email
- do not force Supabase UUID into Prisma `User.id`

## PWA Rules

- app is installable
- full offline gameplay is not implemented
- service worker should be conservative
- do not cache auth/dynamic/game pages
- install banner can be added later

---

# 24. Recommended Next Tasks

## Immediate Stabilization

1. Verify production deploy:
   - `/`
   - `/login`
   - `/auth/callback`
   - `/welcome`
   - `/game`
   - `/profile`
   - `/game/intuitive/result`
   - `/game/surprise-me/play`
   - `/game/surprise-me/result`

2. Verify auth on production:
   - Google login
   - new user privacy flow
   - returning user welcome flow
   - logout

3. Verify PWA:
   - manifest valid
   - icons load
   - service worker active
   - install works on Android/Chrome
   - install works on iPhone/Safari through Add to Home Screen
   - no service worker console errors

4. Verify service worker cache:
   - Cache Storage should not contain `/game`, `/login`, `/auth/callback`, `/welcome`
   - only static assets/icons/manifest/offline fallback if implemented

## Useful Next Feature Tasks

### Task A — Add PWA Install Prompt Banner

Add `PwaInstallPrompt.tsx`.

Behavior:

- Chromium native prompt via `beforeinstallprompt`
- iOS Safari instruction modal
- hide if installed
- dismiss for 7 days

### Task B — Add Offline Fallback Page

Add:

```txt
public/offline.html
```

Service worker:

- cache `/offline.html`
- for navigation requests, network first
- if network fails, return offline fallback
- do not cache dynamic pages

### Task C — Free Session Tracking

This is an important product logic task.

Suggested MVP definition:

- free session starts when user clicks `Start Free Session` on `/welcome`
- user can play modes during that session
- free session becomes used when user reaches any result screen
- after used, `Start Free Session` leads to premium placeholder

Possible Prisma field:

```prisma
freeSessionUsedAt DateTime?
```

Maybe also:

```prisma
freeSessionStartedAt DateTime?
```

Keep minimal.

### Task D — Premium Placeholder Screen

Create:

```txt
/premium
```

Behavior:

- plan cards
- disabled buttons
- no Stripe yet

### Task E — Journey Mode

Not started.

Do after:

- current modes are stable
- free session logic is decided
- premium placeholder exists

### Task F — Real Text / Content

Need to replace placeholders:

- mode instruction text
- intro modal text
- more suggestions text
- legal/privacy text
- support email maybe

### Task G — i18n

Language modal exists but no real language system.

Do later.

### Task H — Push Notifications / Reminders

Not implemented.

Do later after PWA is stable.

---

# 25. Suggested Git Commit Messages

For current stable MVP:

```bash
git add .
git commit -m "Complete MVP game flows and deployable PWA foundation"
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

---

# 26. Short Summary For New Chat

Connexion Space is a Next.js App Router PWA card game MVP.

Current state:

- deployed on Vercel
- Supabase Google Auth works
- Prisma build fixed with `prisma generate && next build`
- root/login/welcome flow works
- privacy acceptance flow exists
- `/game` has mode tabs
- Intuitive mode works
- Surprise me mode works
- Journey mode is not implemented
- mode-specific timers are required/implemented with separate localStorage keys
- timer sound cleanup was fixed
- DB card descriptions/additional content should render trusted HTML
- category themes exist/are needed across Intuitive and Surprise me
- PWA installability works
- full offline gameplay is not implemented
- service worker must stay conservative and not cache auth/game pages

Most likely next tasks:

1. Add PWA install prompt/banner.
2. Add safe offline fallback page.
3. Implement real free session tracking.
4. Add premium placeholder screen.
5. Later add Journey mode.
