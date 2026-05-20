# Connexion Space — CLAUDE.md Current Project Status

This file is the current working context for Claude Code.

Use it to understand the current project state, architecture decisions, implemented MVP features, deployment/PWA status, and what should or should not be changed.

---

## Project Overview

Connexion Space is a mobile-first PWA card game MVP for couples/adults.

The app allows users to:

- log in or bypass auth during MVP testing
- accept privacy/game information
- enter the game from `/welcome`
- choose a game mode on `/game`
- play through cards with a timer
- finish on a result screen
- install the app as a PWA

Current implemented modes:

- Intuitive
- Surprise me

Not implemented yet:

- Journey mode
- Stripe/payments
- Apple login
- real free session tracking
- real push notifications
- real reminder scheduling
- real i18n
- full offline gameplay

---

## Stack

The app uses:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma 5
- Supabase Auth
- Supabase PostgreSQL
- pnpm
- Vercel
- native PWA setup

Important:

- use `pnpm`, not `npm`
- do not install packages unless explicitly needed
- do not change Prisma schema unless explicitly requested

---

## Package / Build

Vercel requires Prisma Client generation during build.

`package.json` build script must include:

```txt
prisma generate && next build
```

Do not remove `prisma generate`.

---

## Environment Variables

Likely env variables:

```txt
DATABASE_URL
DIRECT_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_DISABLE_AUTH
```

Local development uses:

```txt
.env.local
```

Production uses:

```txt
Vercel Environment Variables
```

Do not commit secrets.

---

## Temporary Auth Bypass

For MVP/testing, authentication can be bypassed with:

```txt
NEXT_PUBLIC_DISABLE_AUTH=true
```

Current desired behavior:

When `NEXT_PUBLIC_DISABLE_AUTH=true`:

- skip auth in any environment
- `/` redirects to `/welcome`
- `/login` redirects to `/welcome`
- protected pages open without Supabase session
- `/welcome`, `/privacy`, `/profile`, `/game`, and all game routes work
- profile fallback user:
  - `Dev User`
  - `dev@local.test`

When the variable is missing or not `true`:

- normal Supabase auth works
- unauthenticated users go to `/login`
- Google login works normally

Important:

- This is temporary and unsafe for real public release.
- Do not remove Google auth.
- Do not add cookies/buttons/API routes for this bypass.
- Keep bypass controlled only by env variable.

---

## Supabase Auth

Implemented:

- Google login
- Supabase callback route
- Prisma user sync by email
- protected routes
- logout
- privacy acceptance flow

Important:

- Prisma `User.id` is not Supabase UUID.
- Users are matched by email.
- Do not force Supabase UUID into Prisma `User.id`.

OAuth redirect should be environment-safe:

```txt
redirectTo: `${window.location.origin}/auth/callback`
```

Do not hardcode localhost or production domain.

Supabase Dashboard must allow relevant redirect URLs:

```txt
http://localhost:3000/auth/callback
https://PRODUCTION_DOMAIN/auth/callback
```

For phone testing on local network, Supabase may also need:

```txt
http://192.168.x.x:3000/auth/callback
```

---

## Local Phone Testing

To open local dev server from phone on same Wi-Fi:

```bash
pnpm dev --hostname 0.0.0.0
```

Then open actual PC IP on phone:

```txt
http://192.168.x.x:3000
```

Do not open `0.0.0.0` on phone.

If HMR websocket fails on phone:

```txt
/_next/webpack-hmr
```

This is usually dev-only HMR, not app logic.

Possible Next config fix:

```ts
allowedDevOrigins: [
  '192.168.x.x:3000',
]
```

---

## Root / Login / Welcome Flow

Routes:

```txt
/
 /login
/welcome
```

Behavior:

- `/` unauthenticated → `/login`
- `/` authenticated or auth bypass → `/welcome`
- `/login` unauthenticated → login screen
- `/login` authenticated or auth bypass → `/welcome`
- `/welcome` is protected unless auth bypass is enabled

Login screen includes:

- logo/text logo
- `Sign in or Join now!`
- `Continue with Gmail`
- disabled `Continue with Apple`
- placeholder Terms & Conditions / Privacy Policy links

Apple login is not implemented.

---

## Privacy Flow

Route:

```txt
/privacy
```

Behavior:

- first-time users must accept privacy/game info
- user must scroll/read
- user must check agreement checkbox
- `Start now` disabled until requirements met
- saves `privacyAcceptedAt`
- redirects to `/welcome`

Legal text is still placeholder.

---

## Current Route Structure

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

- `/game` is the only mode selection page.
- `/game/intuitive/result` is Intuitive result.
- `/game/surprise-me/play` is Surprise me gameplay.
- `/game/surprise-me/result` is Surprise me result.
- old `/game/result` should not be used.

---

## Main `/game` Screen

The `/game` screen contains tabs:

```txt
Intuitive | Journey | Surprise me
```

Current behavior:

- Intuitive is default active tab.
- Journey is visible but disabled/inactive.
- Surprise me is selectable.
- Tabs switch content on same `/game` page.
- Surprise me selection is inside `/game`.

Do not create separate `/game/surprise-me` selection route.

---

## Main Game Instruction Modal

The info icon with:

```txt
id="game-main-instruction"
```

opens a mode-specific instruction modal.

Instruction content depends on active tab:

- Intuitive
- Surprise me
- Journey

Instruction bodies should be separate JSX components:

```txt
src/components/game/instructions/
  IntuitiveInstruction.tsx
  SurpriseInstruction.tsx
  JourneyInstruction.tsx
```

Do not store static instruction markup as HTML strings.

Good pattern:

```txt
modeInstructions = {
  intuitive: { title, Content: IntuitiveInstruction },
  surprise: { title, Content: SurpriseInstruction },
  journey: { title, Content: JourneyInstruction }
}
```

Do not use `dangerouslySetInnerHTML` for these static instruction components.

---

## DB HTML Rendering

Database card text can contain HTML markup.

Fields:

```txt
Card.description
Card.additional
```

These fields should render as trusted HTML in:

- card preview modal
- full description modal
- Learn more modal
- Intuitive gameplay
- Surprise me gameplay
- any shared card content component

Use `dangerouslySetInnerHTML` only for trusted/admin-controlled DB card fields.

Do not use it for static instruction components.

Recommended component:

```txt
HtmlContent / RichText / CardHtmlContent
```

Important:

- HTML tags should render, not show as text.
- `card-full-description` class must remain where it exists.

---

## Category Theme System

Each category has its own visual theme:

```txt
CONNECTION
INTIMACY
LOVEMAKING
```

Themes apply to:

- Intuitive category pages
- Intuitive gameplay
- Surprise me gameplay
- cards
- modals where needed
- `card-full-description` modal

Recommended helper:

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

Keep category theme classes centralized.

Do not hardcode category styles separately in many components.

---

## Intuitive Mode

### Flow

1. user opens `/game`
2. Intuitive tab is active
3. user chooses category:
   - Connection
   - Intimacy
   - Lovemaking
4. user opens:

```txt
/game/intuitive/[category]
```

5. user selects card
6. clicks `Start game`
7. intro modal opens
8. OK starts gameplay
9. gameplay route:

```txt
/game/intuitive/[category]/[cardId]
```

Valid categories:

```txt
CONNECTION
INTIMACY
LOVEMAKING
```

Invalid category/card should call `notFound()`.

### Intuitive Category Page

Behavior:

- fetch cards server-side with Prisma
- pass to Client Component
- selected card visually marked
- Start game only active after selection
- card click does not start game immediately
- category theme applies

### Intuitive Start Modal

First modal:

```txt
Tune into the play
```

Buttons:

- OK
- More suggestions

Second modal:

```txt
More suggestions
```

Behavior:

- no bottom buttons
- top close only
- closing returns to first modal

### Intuitive Card Preview

Preview modal shows:

- title
- image
- description as trusted DB HTML
- Learn more

Learn more:

- active only if `card.additional` exists
- opens modal with additional HTML
- disabled if no additional text

### Intuitive Gameplay

Route:

```txt
/game/intuitive/[category]/[cardId]
```

Shows:

- title
- image
- description as trusted DB HTML
- timer
- Play / Stop
- Finish game
- Next card
- `+`
- `-`

Finish route:

```txt
/game/intuitive/result
```

---

## Surprise me Mode

Surprise me is inside `/game` as a tab.

Do not create separate selection route.

### Selection

Categories:

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

- count from DB
- amount starts at 0
- `+` increases
- `-` decreases
- cannot go below 0
- cannot exceed available count
- no per-category Choose button
- global Start game disabled when total is 0

Surprise me UI should match finished Intuitive UI.

### Start Modal

Same modal flow as Intuitive:

First modal:

```txt
Tune into the play
```

Buttons:

- OK
- More suggestions

Second modal:

```txt
More suggestions
```

### Queue

On OK, generate random queue.

localStorage key:

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
- do not mix categories
- no duplicates in one queue
- skip categories with amount 0

Gameplay route:

```txt
/game/surprise-me/play
```

### Surprise me Gameplay

Behavior:

- reads `connexion_surprise_queue`
- if missing/invalid, redirect to `/game`
- uses `currentIndex`
- displays current card
- description as trusted DB HTML
- current card category controls theme
- Next card increments currentIndex
- after last card, navigate to:

```txt
/game/surprise-me/result
```

Controls:

- Timer
- Play / Stop
- Change cards
- Next card

Change cards currently returns to `/game`.

Future improvement:

```txt
/game?mode=surprise
```

and open Surprise me tab automatically.

---

## Result Screens

Intuitive:

```txt
/game/intuitive/result
```

Surprise me:

```txt
/game/surprise-me/result
```

Both use same content:

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
  - currently goes to `/game`

Keep `/game` unless product decision changes.

---

## Timer Settings

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

Timer settings are mode-specific.

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

should not be used as active shared key anymore.

Rules:

- changing Intuitive timer must not affect Surprise me
- changing Surprise me timer must not affect Intuitive
- default for every mode is 5 minutes
- avoid hydration mismatch:
  - first render stable default
  - read localStorage after mount

Timer behavior:

- timer resets when current card changes
- timer reaching `00:00` does not navigate
- shows `Time is up`
- plays selected sound
- Play disabled while time is 0
- pressing `+` adds time
- pressing `+` clears Time is up and stops sound

---

## Timer Sound Settings

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

Profile sound modal desired behavior:

- one preview button per sound
- no separate Start and Stop buttons
- button toggles Play/Stop state
- clicking same playing sound stops it
- clicking another sound stops previous and starts new
- only one preview sound plays at a time
- closing modal stops sound
- unmount stops sound
- selected sound/volume saved

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

- protected page
- user name/email
- fallback user during auth bypass:
  - Dev User
  - dev@local.test
- plan placeholder
- disabled premium action
- Daily connection disabled toggle
- Help & Support modal
- Language modal placeholder
- Timer sound modal
- logout

Not implemented:

- real subscriptions
- Stripe
- profile editing
- avatar
- real i18n
- reminders/notifications

---

## PWA Status

Basic PWA installability works.

Important:

```txt
PWA installable != full offline gameplay
```

Current PWA features:

- manifest
- icons
- service worker
- install works
- conservative caching

Manifest expected values:

```txt
Name: Connexion Space
Short name: Connexion
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

Service worker:

```txt
public/sw.js
```

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
if URL protocol is not http/https → do not cache
only cache allowed static assets
everything else → network only
```

Full offline gameplay is not implemented and should not be added casually.

Future safe offline task:

- add `public/offline.html`
- return it only when navigation request fails due to offline
- do not cache dynamic pages

---

## PWA Install Prompt

Manual installation works.

Future task:

Add in-app install banner/button.

Component suggestion:

```txt
src/components/PwaInstallPrompt.tsx
```

Behavior:

Chromium:

- listen for `beforeinstallprompt`
- preventDefault
- store event
- show custom Install app banner
- on user click call `prompt()`
- hide after accepted/dismissed

iOS Safari:

- show instructions:
  1. Tap Share
  2. Tap Add to Home Screen
  3. Tap Add

Do not show if:

- already installed
- on `/auth/callback`
- dismissed recently

Dismissal key:

```txt
connexion_pwa_install_dismissed_at
```

Suggested hide duration:

- 7 days

---

## Loading / Preloader

Route-level loader was added/suggested because page loading was unclear.

Recommended reusable loader:

```txt
src/components/AppLoader.tsx
src/app/loading.tsx
```

Important behavior:

- full-screen loader is OK when starting/opening a game page
- full-screen loader is OK on direct page refresh/open
- in active gameplay, clicking `Next card` should NOT show full-screen/page loader
- `Next card` should show loading only inside the button
- current card should remain visible while switching

This precise `Next card` behavior was attempted once and reverted because it was too broad.

Future implementation must be precise:

- do not remove global loader
- do not remove loader for initial game start
- only avoid full-screen loader during in-game Next card
- Intuitive may need client-side current card state instead of route push

---

## Architecture Decisions

Keep these rules:

- Prisma queries stay in Server Components where possible
- interactivity stays in Client Components
- localStorage is OK for temporary game/settings state
- no Redux
- no Zustand
- no global state manager
- no service layer
- no repository layer
- no unnecessary API routes
- no broad refactors
- small duplication is OK for MVP

Important client components may include:

- `GameTimer`
- `TimerSettings`
- `IntuitiveCardSelector`
- game tabs/client component
- Surprise me play component
- Profile client component
- PWA registration component
- instruction components
- AppLoader

Exact file names may differ. Inspect before editing.

---

## Component Structure Warning

Do not create nested duplicate folders like:

```txt
components/game/game/game
```

Desired:

```txt
src/components/game/
```

If duplicated folders appear:

- move components back to `src/components/game/`
- update imports
- remove empty folders

Search:

```powershell
Select-String -Path "src/**/*.*" -Pattern "components/game/game"
```

---

## Important Current Rules

- `NEXT_PUBLIC_DISABLE_AUTH=true` bypasses auth in any environment for MVP/testing.
- Remove/disable auth bypass before real public release.
- Do not remove Google auth.
- `/game` is the only mode selection page.
- Surprise me selection is inside `/game`.
- Journey mode is not implemented.
- Timer reaching `00:00` must not redirect.
- Play is disabled while timer is at 0.
- `+` after timeout stops sound and allows continuing.
- Timer sound stops on navigation/card changes.
- Timer settings are mode-specific.
- DB card content renders as trusted HTML.
- Static instruction components use JSX, not HTML strings.
- PWA is installable but not full offline.
- Service worker must not cache auth/game pages.
- Page loader is OK for initial loading, but not for in-game Next card.

---

## Next Likely Tasks

### High Priority

1. Add PWA install prompt/banner
   - Chromium `beforeinstallprompt`
   - iOS Safari instructions
   - hide if installed
   - dismiss for 7 days

2. Add safe offline fallback page
   - `public/offline.html`
   - navigation network-first
   - fallback only when offline
   - do not cache dynamic pages

3. Fix precise gameplay Next card loading
   - initial game start can show full-screen loader
   - in-game Next card uses only button loading
   - current card stays visible

4. Harden Surprise me queue edge cases
   - missing localStorage
   - invalid JSON
   - empty queue
   - invalid currentIndex
   - missing/deleted card ID
   - refresh behavior

5. Improve Change cards behavior
   - navigate to `/game?mode=surprise`
   - open Surprise me tab automatically

6. Test auth bypass on Vercel
   - `NEXT_PUBLIC_DISABLE_AUTH=true` bypasses login
   - false/missing restores Google auth
   - redeploy after env changes

### Medium Priority

7. Free session tracking
   - define when free session starts
   - define when it becomes used
   - likely after reaching result screen

8. Premium placeholder screen
   - no Stripe yet

9. Replace placeholder texts
   - legal/privacy
   - mode instructions
   - intro modals
   - more suggestions
   - support text/email

10. Journey mode

### Later

- Stripe
- Apple login
- real i18n
- push notifications
- real reminder scheduling
- full offline strategy

---

## Suggested Commit Messages

Current status checkpoint:

```bash
git add .
git commit -m "Update CLAUDE status for MVP PWA and auth bypass"
```

PWA install prompt:

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
