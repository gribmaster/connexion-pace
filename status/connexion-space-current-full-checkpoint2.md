# Connexion Space — Full Current Checkpoint

_Last updated: May 2026_

This file is a full working checkpoint for continuing Connexion Space in a new ChatGPT / Claude Code conversation.

It includes current MVP status, architecture, route structure, auth/env behavior, local/mobile development notes, Vercel deployment notes, PWA status, service worker rules, game modes, timer behavior, category themes, DB HTML rendering, preloaders/loading behavior, current decisions, next tasks, and safe prompting rules for Claude.

---

# 1. Project Overview

## Project Name

Connexion Space

## Product Type

Mobile-first PWA card game for couples/adults.

The app lets users choose a game mode, select or generate cards, play through cards with a timer, and finish on a final reflection/result screen.

## MVP Current State

The MVP is functionally working.

Implemented:

- Next.js App Router project
- TypeScript
- Tailwind CSS
- Prisma
- Supabase Auth
- Supabase PostgreSQL
- Vercel deployment
- production Google login
- temporary auth bypass via env variable
- onboarding/privacy flow
- welcome/free-session intro screen
- profile page foundation
- global styling foundation
- Poppins font
- CSS reset
- Intuitive mode
- Surprise me mode
- category-based visual themes
- rich HTML rendering from database for card content
- timer settings
- mode-specific timer settings
- timer sound settings
- timer sound cleanup
- PWA manifest/service worker
- PWA install works
- local network mobile testing setup discussed
- preloaders/loading states partially implemented

Not implemented yet:

- real free session tracking
- real paywall/premium logic
- Stripe
- Journey mode
- Apple login
- real legal text
- real i18n
- push notifications
- real reminder scheduling
- full offline gameplay
- final production security hardening

---

# 2. Tech Stack

## Core Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma 5
- Supabase Auth
- Supabase PostgreSQL
- pnpm
- Vercel
- Native PWA setup

## Package Manager

Use `pnpm`.

Do not use `npm install`.

Correct:

```bash
pnpm add package-name
pnpm dev
pnpm build
```

Incorrect:

```bash
npm install
```

---

# 3. Current Development Workflow

The project is being developed feature-by-feature with Claude Code CLI / vibe coding.

Important rules:

- one prompt = one task
- avoid huge prompts that combine many systems
- test manually after every task
- commit stable checkpoints
- do not let Claude do broad refactors unless explicitly needed
- do not install packages unless task requires it
- do not change Prisma schema unless explicitly requested
- prefer minimal working MVP-friendly code
- small duplication is acceptable if it avoids overengineering

Good Claude prompt constraints:

```txt
Strict limitations:
- Do NOT install packages
- Do NOT change Prisma schema
- Do NOT change auth flow
- Do NOT refactor unrelated files
- Do NOT create service/repository layers
- Do NOT add global state management
- Keep implementation minimal
```

---

# 4. Prisma / Database

## Important Models

Current important Prisma models are approximately:

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

- `Card.description` can contain HTML markup.
- `Card.additional` can contain HTML markup.
- `Card.additional` is optional.
- User may manually update DB content.
- Do not change Prisma schema unless specifically requested.

## Prisma Client Import

Correct import:

```ts
import { prisma } from '@/lib/prisma'
```

Wrong import:

```ts
import prisma from '@/lib/prisma'
```

Prisma singleton is expected around:

```txt
src/lib/prisma.ts
```

## Prisma on Vercel

Vercel caches dependencies, so Prisma Client must be generated during build.

The `package.json` build script must include:

```txt
prisma generate && next build
```

Expected:

```json
"build": "prisma generate && next build"
```

This fixed the Vercel PrismaClientInitializationError:

```txt
Prisma has detected that this project was built on Vercel, which caches dependencies.
This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered.
```

Do not remove `prisma generate` from the build script.

---

# 5. Environment Variables

## Important Env Variables

Likely used env variables:

```txt
DATABASE_URL
DIRECT_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_DISABLE_AUTH
```

Exact variables may differ. Always inspect existing `.env` usage before changing.

## Local vs Production

Local development should use:

```txt
.env.local
```

Vercel production should use:

```txt
Vercel Project Settings → Environment Variables
```

Do not hardcode local/prod URLs in code.

## Git Ignore

Make sure env files are ignored:

```gitignore
.env
.env.local
.env.*.local
```

Do not commit secrets.

---

# 6. Temporary Auth Bypass

## Current Product Decision

For MVP/testing, auth can be bypassed through one env variable.

Env variable:

```txt
NEXT_PUBLIC_DISABLE_AUTH=true
```

Current desired behavior:

When `NEXT_PUBLIC_DISABLE_AUTH=true`:

- auth is skipped in any environment
- local dev opens without login
- Vercel can open without login after redeploy
- user is treated as authenticated
- `/` redirects to `/welcome`
- `/login` redirects to `/welcome`
- protected pages open without Supabase session:
  - `/welcome`
  - `/privacy`
  - `/profile`
  - `/game`
  - all game routes
- if profile needs user data and there is no Supabase user, show fallback:
  - name: `Dev User`
  - email: `dev@local.test`

When `NEXT_PUBLIC_DISABLE_AUTH` is missing or not exactly `true`:

- normal Supabase auth works
- unauthenticated users go to `/login`
- Google login works normally

Important:

- This is intentionally unsafe for MVP/testing.
- Remove or disable before public release.
- On Vercel, after changing env variables, redeploy is required.

## Implementation Rule

There should be a shared helper/check for auth bypass.

Expected logic:

```txt
process.env.NEXT_PUBLIC_DISABLE_AUTH === 'true'
```

Do not restrict it to `NODE_ENV === 'development'` if the current goal is to allow bypass on Vercel too.

## Redirect Loop Bug

There was a redirect loop after enabling bypass:

```txt
GET / 307
GET /login 307
GET /login 307
...
```

Cause:

- bypass was not applied consistently in all auth redirect points
- `/login` was redirecting incorrectly

Required behavior with bypass enabled:

- `/` → `/welcome`
- `/login` → `/welcome`
- no `/login` redirect loop
- protected pages allowed

All auth guards should use the same bypass helper/check.

---

# 7. Supabase Auth

## Implemented

- Supabase Google login
- Supabase callback route
- Prisma user sync by email
- protected routes
- logout
- first-login privacy acceptance
- welcome/free session intro screen

## Important Auth Behavior

- Supabase user ID is not used as Prisma user ID.
- Prisma user is matched by email.
- Do not force Supabase UUID into Prisma `User.id`.

## OAuth Redirects

Production OAuth issue was fixed.

Problem:

After deploy, Google login redirected to:

```txt
http://localhost:3000/?code=...
```

Cause:

- Supabase Auth URL config still pointed to localhost.

Fix in Supabase Dashboard:

Authentication → URL Configuration

Production callback must be allowed:

```txt
https://PRODUCTION_DOMAIN/auth/callback
```

Local callback should also be allowed:

```txt
http://localhost:3000/auth/callback
```

If testing from phone on local network IP, Supabase Redirect URLs may need:

```txt
http://192.168.x.x:3000/auth/callback
```

Google Cloud Console generally should contain Supabase callback, not local IP:

```txt
https://YOUR_SUPABASE_PROJECT_REF.supabase.co/auth/v1/callback
```

## Recommended Client-Side Redirect

If using `signInWithOAuth`, redirect should be dynamic:

```txt
redirectTo: `${window.location.origin}/auth/callback`
```

So it works for:

- localhost
- local IP
- Vercel production
- custom domain

Do not hardcode localhost or production domain.

---

# 8. Local Development on Phone

Goal:

View local dev server from phone on same Wi-Fi network without deploying.

## Start Next Dev Server for Network Access

Use:

```bash
pnpm dev --hostname 0.0.0.0
```

or:

```bash
pnpm dev -H 0.0.0.0
```

Next may show:

```txt
Local:   http://localhost:3000
Network: http://0.0.0.0:3000
```

Do not open `0.0.0.0` on phone.

Find actual PC IP.

On Windows:

```powershell
ipconfig
```

Find Wi-Fi IPv4:

```txt
IPv4 Address . . . : 192.168.1.104
```

Open on phone:

```txt
http://192.168.1.104:3000
```

## If Phone Cannot Open Local Server

Check:

- phone and PC are on the same Wi-Fi
- phone is not on mobile data
- PC is not on VPN
- phone is not on guest Wi-Fi
- router does not have AP/client isolation enabled
- Windows network is Private, not Public
- Windows Firewall allows Node.js on Private networks

Firewall path:

```txt
Windows Security → Firewall & network protection → Allow an app through firewall → Node.js JavaScript Runtime → Private
```

## Next Dev HMR WebSocket Error

Observed error:

```txt
WebSocket connection to 'ws://192.168.1.104:3000/_next/webpack-hmr?...' failed
```

This is usually Next dev hot reload WebSocket, not necessarily app logic.

Possible fix:

Add `allowedDevOrigins` to `next.config.ts`:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    '192.168.1.104:3000',
  ],
}

export default nextConfig
```

Then restart dev server.

Alternative:

Run dev server on the exact IP:

```bash
pnpm dev --hostname 192.168.1.104
```

or:

```bash
pnpm dev -H 192.168.1.104
```

If only checking production-like mobile behavior:

```bash
pnpm build
pnpm next start -H 0.0.0.0 -p 3000
```

Note:

- production-like local start has no HMR
- after changes, rebuild is required

---

# 9. Root / Login / Welcome Flow

## Root Route

Route:

```txt
/
```

Desired behavior:

- unauthenticated → `/login`
- authenticated → `/welcome`
- auth bypass enabled → `/welcome`

## Login Route

Route:

```txt
/login
```

Desired behavior:

- unauthenticated → show login screen
- authenticated → `/welcome`
- auth bypass enabled → `/welcome`

## Login Screen

Current UI:

```txt
Logo / Connexion Space
Sign in or Join now!
Continue with Gmail
Continue with Apple
By clicking continue, you agree our Terms & Conditions and Privacy Policy.
```

Behavior:

- Gmail button active
- Apple button visible but disabled
- Terms/Privacy placeholder links
- do not implement Apple login yet

## Welcome Screen

Route:

```txt
/welcome
```

Purpose:

Free session intro screen after login/privacy acceptance.

Current content:

```txt
Welcome to
Connexion Space

You can play the full game once for free.
After your free session ends, you’ll need to upgrade to continue playing.
```

Buttons:

- `Start Free Session` → `/game`
- `View Premium Options` → disabled
- `Choose next play time` → disabled

Important:

- real free session tracking is not implemented
- payments are not implemented
- reminders are not implemented

---

# 10. Privacy Flow

Route:

```txt
/privacy
```

Purpose:

First-time users must accept privacy/game information before continuing.

Behavior:

- user reads/scrolls text block
- user checks agreement checkbox
- `Start now` disabled until requirements are met
- after acceptance, `privacyAcceptedAt` saved
- redirect to `/welcome`

Current state:

- real legal text still placeholder/MVP
- do not overbuild legal system yet

---

# 11. Global Styling

Implemented:

- Poppins globally through `next/font/google`
- CSS reset
- global `box-sizing: border-box`
- full-height `html`, `body`

Important:

- no raw Google Fonts `<link>`
- no `@import` for fonts
- keep `next/font/google`
- keep reset lightweight

CSS base should include:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---

# 12. Current App Route Structure

Expected structure:

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

- `/game` is the mode selection page.
- `/game/intuitive/result` is Intuitive final screen.
- `/game/surprise-me/play` is Surprise me gameplay.
- `/game/surprise-me/result` is Surprise me final screen.
- old `/game/result` should not be used anymore.

---

# 13. Component Structure Warning

Claude previously created bad nested folders:

```txt
components/
  game/
    game/
      game/
```

This is wrong.

Desired:

```txt
src/components/
  game/
    ...game components here
```

Search:

```powershell
Select-String -Path "src/**/*.*" -Pattern "components/game/game"
```

If found:

- move real components to `src/components/game/`
- update imports
- remove empty duplicated folders

Do not let Claude create nested duplicate `game/game/game`.

---

# 14. Main Game Screen

Route:

```txt
/game
```

Main tabs:

```txt
Intuitive | Journey | Surprise me
```

Behavior:

- Intuitive active by default
- Journey visible but disabled/inactive
- Surprise me selectable
- tabs switch content on same `/game` page
- no separate Surprise me selection page

Important:

- `/game` is the only mode selection page.
- do not create `/game/surprise-me` selection route
- Journey not implemented yet

---

# 15. Main Game Instruction Modal

On `/game`, heading includes info icon:

```txt
id="game-main-instruction"
```

Clicking opens mode-specific instruction modal.

Modal content depends on active tab:

- Intuitive
- Surprise me
- Journey

Instruction content must be separate React JSX components, not HTML strings.

Expected structure:

```txt
src/components/game/instructions/
  IntuitiveInstruction.tsx
  SurpriseInstruction.tsx
  JourneyInstruction.tsx
```

Good config concept:

```txt
modeInstructions = {
  intuitive: { title, Content: IntuitiveInstruction },
  surprise: { title, Content: SurpriseInstruction },
  journey: { title, Content: JourneyInstruction }
}
```

Do not store static instruction markup as strings.

---

# 16. DB HTML Rendering

User needs database card text to render as HTML.

Fields:

```txt
Card.description
Card.additional
```

Applies to:

- Intuitive card preview modal
- full card description modal
- Learn more modal
- Intuitive gameplay card description
- Surprise me gameplay card description
- any shared card display component

Rule:

Use `dangerouslySetInnerHTML` only for trusted/admin-controlled DB card fields.

Do not use it for static instruction components.

Recommended reusable component:

```txt
HtmlContent
RichText
CardHtmlContent
```

Behavior:

- accepts `html`
- accepts optional `className`
- if html is empty, render nothing
- otherwise render wrapper div with `dangerouslySetInnerHTML`

Important:

- tags should not show as plain text
- class `card-full-description` must remain where it exists
- category theme classes must still apply

---

# 17. Category Theme System

Each category needs its own visual design/background.

Categories:

```txt
CONNECTION
INTIMACY
LOVEMAKING
```

Requirement:

- Intuitive category page uses selected category theme
- Intuitive gameplay uses current category theme
- Surprise me gameplay updates theme based on current card category
- card description modal uses category colors
- category card styles differ by category

Recommended helper/config:

```txt
src/lib/categoryThemes.ts
```

or:

```txt
src/components/game/categoryThemes.ts
```

Function:

```txt
getCategoryTheme(category)
```

Possible fields:

```txt
screenClassName
cardClassName
accentClassName
buttonClassName
modalClassName
descriptionModalClassName
```

Important:

- do not hardcode category styling in many components
- centralize theme class strings
- user can replace placeholder classes with exact design later

---

# 18. Intuitive Mode

## Flow

1. user opens `/game`
2. Intuitive tab active
3. user sees categories:
   - Connection
   - Intimacy
   - Lovemaking
4. each category has card count and `Choose`
5. clicking `Choose` opens:

```txt
/game/intuitive/[category]
```

Valid categories:

```txt
CONNECTION
INTIMACY
LOVEMAKING
```

Invalid category:

- call `notFound()`

## Category Page

Route:

```txt
/game/intuitive/[category]
```

Behavior:

- fetch cards from Prisma server-side
- pass cards to Client Component
- user selects a card
- selected card visually marked
- `Start game` becomes active
- clicking `Start game` opens intro modal
- clicking a card itself does not start game

Category page styling:

- uses selected category theme
- cards use selected category theme

## Start Modal

First modal:

```txt
Tune into the play
```

Buttons:

- OK
- More suggestions

Behavior:

- OK navigates to gameplay route
- More suggestions opens second modal
- closing first modal returns to card selection

Second modal:

```txt
More suggestions
```

Behavior:

- no bottom buttons
- top-right close only
- closing returns to first modal

## Card Preview Modal

On category page:

- card info/details opens preview modal
- modal shows:
  - title
  - image
  - description rendered as trusted DB HTML
  - Learn more

Learn more:

- active only if `card.additional` exists
- opens modal with `additional` rendered as trusted DB HTML
- disabled if no additional content

## Gameplay

Route:

```txt
/game/intuitive/[category]/[cardId]
```

Behavior:

- validates category
- validates cardId
- card must belong to selected category
- invalid data calls `notFound()`

Shows:

- title
- image
- description rendered as trusted DB HTML
- timer
- controls

Controls:

- Play / Stop
- Finish game
- Next card
- `+`
- `-`

## Intuitive Next Card / Loading

Important recent loading decision:

- When starting/opening game page, full-screen/page preloader is OK.
- When already inside gameplay and clicking `Next card`, full-screen/page preloader should not appear.
- `Next card` should show loading only inside the button.
- Current card should remain visible while switching.

Important:

In Intuitive mode, `Next card` originally navigated to another `[cardId]` route, which causes Next App Router route-level `loading.tsx` to show.

Desired long-term behavior:

- initial URL route still works for direct open/refresh
- after page is loaded, `Next card` should update current card client-side if possible
- avoid route navigation for normal in-game next-card transition
- show only button-level loading
- preserve random next card logic
- preserve timer reset
- preserve sound cleanup

This had been attempted and reverted once because the behavior was not precise enough.

If doing this later, prompt must be very precise:

- do not remove loader for initial game start
- only prevent full-screen loader for in-game `Next card`

## Finish

Finish route:

```txt
/game/intuitive/result
```

## Intuitive Result

Route:

```txt
/game/intuitive/result
```

Content:

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

- `Back to “Connexion space”`
  - active
  - currently should navigate to `/game` unless changed later

---

# 19. Surprise me Mode

Surprise me is inside `/game` as a tab.

Do not create separate selection route.

## Selection UI

Inside Surprise me tab:

Categories:

- Connection
- Intimacy
- Lovemaking

Each category:

```txt
Category name
X cards
- 0 +
```

Rules:

- count from DB
- amount starts 0
- `+` increments
- `-` decrements
- cannot go below 0
- cannot exceed available card count
- no per-category Choose button
- global `Start game`
- Start disabled if total = 0
- active if total > 0

Styling:

- should match finished Intuitive UI
- do not invent separate design
- use same category themes

## Start Modal

Clicking `Start game` opens modal first.

First modal:

```txt
Tune into the play
```

Buttons:

- OK
- More suggestions

Behavior:

- OK generates queue and starts play
- More suggestions opens second modal
- closing first modal returns to selection

Second modal:

```txt
More suggestions
```

Behavior:

- no bottom buttons
- top close only
- closing returns to first modal

## Queue

On OK, generate queue and save to localStorage.

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
- random cards inside each category
- no mixing categories
- no duplicates in one queue
- skip categories with 0 selected

Then navigate:

```txt
/game/surprise-me/play
```

## Gameplay

Route:

```txt
/game/surprise-me/play
```

Behavior:

- reads `connexion_surprise_queue`
- if missing/invalid, redirect to `/game`
- uses `currentIndex`
- displays current card
- description rendered as trusted DB HTML
- `Next card` increments currentIndex and saves localStorage
- after last card:

```txt
/game/surprise-me/result
```

Controls:

- Timer
- Play / Stop
- Change cards
- Next card

Change cards:

- returns to `/game`
- future improvement: return to `/game?mode=surprise`

Styling:

- must match Intuitive gameplay
- current card category determines theme
- when card category changes, theme changes

## Surprise me Next Card / Loading

Same desired loading behavior:

- initial/opening game can show full-screen loader
- clicking `Next card` inside gameplay should show loading only inside button
- current card remains visible
- no page-level full-screen loader during next-card transition

Surprise me already uses localStorage/currentIndex and is easier to keep client-side.

## Result

Route:

```txt
/game/surprise-me/result
```

Content:

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

- `Back to “Connexion space”`
  - active
  - currently navigates to `/game` unless changed later

---

# 20. Timer Settings

## Options

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

## Mode-Specific Timer Keys

Important update:

Timer settings must be separate per mode.

Keys:

```txt
connexion_timer_intuitive
connexion_timer_surprise
connexion_timer_journey
```

Old key:

```txt
intuitive_timer
```

Should not be used as active shared key anymore.

Behavior:

- Intuitive reads/writes `connexion_timer_intuitive`
- Surprise me reads/writes `connexion_timer_surprise`
- future Journey uses `connexion_timer_journey`
- changing one mode’s timer must not affect others
- default for every mode: 5 minutes

## Hydration Rule

Do not read localStorage during server render or first hydration render if it changes visible text.

Safe approach:

- initial render default stable value
- after mount, read localStorage and update
- avoid lazy state initializer that reads `window.localStorage` and changes first client render

## Timer Behavior

- timer resets when current card changes
- timer does not auto-finish game
- timer reaching `00:00` does not navigate
- `Time is up` shown
- sound plays
- Play disabled while at `00:00`
- pressing `+` adds time
- pressing `+` stops sound and clears `Time is up`

---

# 21. Timer Sound Settings

Available in Profile.

Sound files:

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

localStorage keys:

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

## Profile Sound Modal

Current desired behavior:

- user can select Beep 1–6
- one preview button per sound
- no separate Start and Stop buttons
- button toggles Play/Stop state
- when not playing: show Play
- when same sound playing: show Stop
- clicking Stop pauses audio and resets currentTime
- clicking another sound stops previous and starts new
- only one preview sound at a time
- closing modal stops preview
- unmount stops preview
- selected sound/volume saved to localStorage
- gameplay uses selected sound/volume

Important bug fixed:

- no nested `<button>` inside `<button>` in sound selector

## Timer Sound Cleanup

Timer sound must stop immediately when:

- user presses `+` after time is up
- user clicks Next card
- user clicks Finish game
- user clicks Change cards
- current card changes
- timer component unmounts

---

# 22. Profile Page

Route:

```txt
/profile
```

Implemented:

- protected page
- user name/email
- fallback user when auth bypass enabled and no Supabase user:
  - Dev User
  - dev@local.test
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
- profile editing
- avatar
- real i18n
- notifications/reminders

---

# 23. PWA Status

Basic PWA installability works.

Important:

```txt
PWA installable ≠ full offline gameplay
```

Current PWA goal:

- installable app
- valid manifest
- icons work
- service worker registers
- auth/game not broken
- conservative caching

## Manifest

Expected:

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
public/apple-touch-icon.png
```

Icon sizes:

```txt
192x192
512x512
180x180 for apple-touch-icon
```

## Service Worker

File:

```txt
public/sw.js
```

Service worker must be conservative.

Allowed caching:

```txt
/icons/*
/apple-touch-icon.png
/manifest.webmanifest
/_next/static/*
/offline.html if implemented
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
if URL protocol is not http/https → ignore/do not cache
only cache static assets/icons/manifest/offline fallback
everything else → network only
```

Before `cache.put`, check:

- method is GET
- URL is http/https
- response exists
- response.ok is true
- request path is allowed static/offline asset

## Offline Mode

Current state:

- full offline gameplay is not implemented
- this is intentional

Recommended future safe offline MVP:

- offline fallback page only

File:

```txt
public/offline.html
```

Text:

```txt
You’re offline

Connexion Space needs an internet connection to load your cards.
Please reconnect and try again.

Try again
```

## PWA Install Prompt

Manual installation works.

Future task:

Add in-app install banner/button.

Component:

```txt
src/components/PwaInstallPrompt.tsx
```

Behavior:

Chromium:

- listen for `beforeinstallprompt`
- `preventDefault()`
- store event
- show custom banner
- on click call `prompt()`
- hide after accepted/dismissed

iOS Safari:

- no `beforeinstallprompt`
- show instructions:
  1. Tap Share
  2. Tap Add to Home Screen
  3. Tap Add

Do not show if:

- already installed/standalone
- route is `/auth/callback`
- dismissed recently

Dismissal key:

```txt
connexion_pwa_install_dismissed_at
```

Suggested re-show:

- hide for 7 days after dismissal

---

# 24. Loading / Preloader Behavior

## Current Need

User said it is unclear when pages are loading.

Route-level `loading.tsx` was suggested/added.

Recommended reusable loader:

```txt
src/components/AppLoader.tsx
src/app/loading.tsx
```

Important:

- do not add fake delays
- use loader only for real route/data loading
- keep mobile-first and simple

## Important Gameplay Loading Rule

For active gameplay:

When starting/opening game:

- full-screen/page loader is OK

Examples:

```txt
Start game → gameplay route
direct refresh/open gameplay URL
```

When clicking `Next card` while already inside gameplay:

- do not show full-screen/page preloader
- show loading only inside the `Next card` button
- keep current card visible until next card is ready

This fix was attempted once and reverted because it was too broad/wrong.

Future implementation must be precise:

- do not remove global loader completely
- do not remove loader for initial game start
- only prevent full-screen loader for in-game next-card transitions
- likely requires avoiding route navigation on Intuitive `Next card`
- use client state for current card after initial load

---

# 25. PWA Icon / Home Screen Icon

Files:

```txt
public/icons/icon-192.png
public/icons/icon-512.png
public/apple-touch-icon.png
```

Check URLs:

```txt
https://DOMAIN/icons/icon-192.png
https://DOMAIN/icons/icon-512.png
https://DOMAIN/apple-touch-icon.png
```

They must not 404.

If already installed and icon not updating:

- remove installed PWA
- clear site data/cache
- reinstall

---

# 26. Known Warnings / Cleanup

Previously observed warnings:

- unused imports
- `<img>` warnings from Next.js

Suggested order:

1. remove unused imports only
2. leave `<img>` warnings unless blocking
3. avoid blindly converting to `next/image`

---

# 27. Current Architecture Decisions

Keep these rules:

- Prisma queries stay in Server Components where possible
- interactive logic stays in Client Components
- localStorage for temporary game/settings state
- no Redux
- no Zustand
- no global state manager
- no service layer
- no repository layer
- no unnecessary API routes
- no broad refactors
- no premature abstractions
- small duplication is acceptable for MVP

Important client components may include:

- `GameTimer`
- `TimerSettings`
- `IntuitiveCardSelector`
- game mode tabs/client component
- Surprise me play component
- Profile client component
- PWA registration component
- instruction content components
- AppLoader

Exact file names may differ. Always inspect current files before editing.

---

# 28. Important Current Rules

## Auth

- `NEXT_PUBLIC_DISABLE_AUTH=true` bypasses auth in any environment for MVP/testing.
- Remove/disable before real public release.
- Google auth should still remain intact.
- Do not remove Supabase auth.

## Game

- `/game` is only mode selection page.
- Surprise me selection is inside `/game`.
- no `/game/surprise-me` selection route.
- Intuitive result: `/game/intuitive/result`.
- Surprise me result: `/game/surprise-me/result`.
- Journey not implemented.

## Timer

- timer reaching `00:00` does not redirect
- Play disabled at `00:00`
- pressing `+` stops sound and continues
- sound stops on navigation/card change
- mode-specific timer keys

## PWA

- installability works
- full offline gameplay not implemented
- service worker must not cache auth/game pages
- conservative caching only

## Loading

- page loader OK for initial route load
- no full-screen loader on in-game Next card
- Next card should show button-level loading only

---

# 29. Recommended Next Tasks

## High Priority

### 1. Add / finalize PWA install prompt banner

Component:

```txt
src/components/PwaInstallPrompt.tsx
```

Behavior:

- Chromium `beforeinstallprompt`
- iOS Safari instruction modal
- hide if installed
- dismiss for 7 days
- do not show on `/auth/callback`

### 2. Add safe offline fallback page

File:

```txt
public/offline.html
```

Behavior:

- navigation network-first
- if offline, show offline page
- no full offline gameplay
- do not cache dynamic pages

### 3. Fix precise gameplay Next card loading

Goal:

- initial game start can show full-screen loader
- in-game Next card shows loading only inside button
- current card remains visible
- Intuitive may need client-side current card state instead of `router.push`

### 4. Harden Surprise me queue edge cases

Handle:

- missing localStorage queue
- invalid JSON
- empty queue
- invalid currentIndex
- currentIndex out of range
- deleted/missing card ID
- refresh behavior

### 5. Improve Change cards behavior

Currently:

- returns to `/game`

Better:

```txt
/game?mode=surprise
```

and open Surprise me tab automatically.

### 6. Test env auth bypass on Vercel

Ensure:

- with `NEXT_PUBLIC_DISABLE_AUTH=true`, production bypasses login
- with false/missing, Google auth is required
- redeploy after env changes

## Medium Priority

### 7. Free session tracking

MVP decision needed:

Suggested:

- free session starts when user clicks `Start Free Session`
- user can play modes
- free session becomes used when user reaches any result screen
- after used, redirect to Premium placeholder

Possible Prisma fields:

```prisma
freeSessionStartedAt DateTime?
freeSessionUsedAt DateTime?
```

Keep minimal.

### 8. Premium placeholder

Route:

```txt
/premium
```

No Stripe yet.

### 9. Replace placeholder text

Needed:

- legal/privacy
- mode instructions
- intro modals
- more suggestions
- support email/content

### 10. Journey mode

Not started.

Do after:

- Intuitive and Surprise me stable
- free session logic decided
- premium placeholder exists

## Later

- Stripe
- Apple login
- real i18n
- push notifications
- real reminder scheduling
- full offline strategy

---

# 30. Suggested Git Commit Messages

Current checkpoint:

```bash
git add .
git commit -m "Checkpoint MVP with PWA and auth bypass configuration"
```

PWA install banner:

```bash
git commit -m "Add PWA install prompt UI"
```

Offline fallback:

```bash
git commit -m "Add conservative PWA offline fallback"
```

Gameplay next-card loading:

```bash
git commit -m "Improve in-game next card loading state"
```

Free session tracking:

```bash
git commit -m "Add free session tracking foundation"
```

Premium placeholder:

```bash
git commit -m "Add premium placeholder screen"
```

---

# 31. Short Summary for New Chat

Connexion Space is a deployed Next.js App Router PWA MVP.

Current state:

- Vercel deploy works.
- Prisma build fixed via `prisma generate && next build`.
- Supabase Google auth works.
- Temporary MVP auth bypass uses `NEXT_PUBLIC_DISABLE_AUTH=true` in any environment.
- `/game` has tabs: Intuitive, disabled Journey, Surprise me.
- Intuitive mode works.
- Surprise me mode works.
- Category themes are required across screens/modals/gameplay.
- DB card `description` and `additional` render as trusted HTML.
- Timer settings are mode-specific.
- Timer sound settings work in Profile.
- Timer sound cleanup is important and mostly fixed.
- PWA install works.
- Service worker must stay conservative and not cache auth/game pages.
- Full offline gameplay is not implemented.
- Page loader exists/needed, but in-game `Next card` should use button loader only.

Best next tasks:

1. Add PWA install prompt/banner.
2. Add offline fallback page.
3. Fix precise in-game `Next card` loading behavior.
4. Harden Surprise me queue edge cases.
5. Improve Change cards to return to `/game?mode=surprise`.
6. Implement free session tracking.
7. Add premium placeholder.
