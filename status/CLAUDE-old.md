# Connexion Space — Current MVP Status

Connexion Space is currently a mobile-first MVP with authentication, onboarding, profile foundation, timer settings, Intuitive mode, and Surprise me mode.

The app uses:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- Supabase Auth
- PostgreSQL via Supabase
- localStorage for temporary gameplay/settings state

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

---

## Auth / User Flow

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

- detailed placeholder text
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
  - description
  - `Learn more`

`Learn more` behavior:

- active only if `card.additional` exists
- opens second modal with additional text
- disabled if no additional text exists

Prisma `Card` includes:

```prisma
additional String?
```

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
- description
- timer
- controls

Controls:

- Play / Stop
- Finish game
- Next card
- timer `+`
- timer `-`

Important timer behavior:

- timer uses selected global timer setting from localStorage
- timer resets when card changes
- timer reaching `00:00` must NOT redirect automatically
- at `00:00`, countdown stops
- `Time is up` is shown
- selected timer sound plays
- user can add time with `+` and continue
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
  - navigates to `/game`

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

---

### Surprise me Start Modal Flow

Clicking `Start game` opens intro modal first.

First modal:

```txt
Tune into the play
Intro text placeholder.
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
Detailed suggestions placeholder.
```

Behavior:

- no bottom buttons
- only top-right close button
- closing it returns to first modal

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
  - description
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

---

### Surprise me Timer

Surprise me gameplay uses the same timer behavior as Intuitive mode.

Timer behavior:

- uses existing timer setting from localStorage
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
- user can add time and continue

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
  - navigates to `/game`

---

## Timer Settings

Timer settings are global and stored in localStorage.

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

Timer behavior:

- selected setting is used by Intuitive and Surprise me gameplay
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

Exact file names may differ. Always inspect before editing.

---

## Important Current Rules

- Timer reaching `00:00` must NOT redirect to result.
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

---

## Next Likely Tasks

Recommended next tasks:

1. Harden Surprise me play edge cases:
   - invalid localStorage
   - missing queue
   - deleted card id
   - currentIndex out of range
   - refresh behavior

2. Improve `Change cards` behavior:
   - navigate to `/game?mode=surprise`
   - open Surprise me tab automatically

3. Test Intuitive result route:
   - ensure `Finish game` goes to `/game/intuitive/result`
   - ensure old `/game/result` is no longer referenced

4. Implement free session tracking:
   - define when free session starts
   - define when it becomes used
   - redirect used users to premium placeholder later

5. Add Premium placeholder screen.

6. Later:
   - Journey mode
   - Stripe
   - Apple login
   - PWA
   - real i18n

