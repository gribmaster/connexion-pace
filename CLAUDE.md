## Current MVP Status

Implemented:
- `/game` main mode selection screen
- Intuitive mode category flow
- category card counts
- timer settings with localStorage persistence
- category selection screen
- card selection flow
- Start game flow
- game card screen
- game timer
- Play / Stop timer controls
- Finish game flow
- random next card navigation
- card preview modal
- category info modal
- result screen

Current Intuitive Flow:
1. User opens `/game`
2. User selects Intuitive category
3. User opens category screen
4. User selects a card
5. User can preview card details in modal
6. User clicks `Start game`
7. Game screen opens
8. User can:
   - pause/play timer
   - go to next card
   - finish game
9. Timer auto-finishes game at 00:00
10. Result screen allows replay

Current Architecture Decisions:
- Prisma queries stay inside Server Components
- Interactive logic stays in isolated Client Components
- localStorage is used for temporary game/session state
- no global state management
- no service layer
- no repository layer
- no API routes for MVP

Already Existing Client Components:
- `GameTimer`
- `TimerSettings`
- `IntuitiveCardSelector`

Important:
- Keep feature scope small
- Avoid architecture refactors
- Avoid premature optimization
- Prefer minimal working implementations

## Current Active State

The project now has:
- Supabase Google auth
- Prisma user sync by email
- first-login privacy acceptance flow
- welcome/free session screen
- protected game/profile routes
- Intuitive mode MVP flow
- card selection before game start
- card preview modal
- additional/Learn more modal
- category info modal
- timer settings with localStorage
- game timer with Play/Stop and +/- controls
- timer end behavior: no redirect, show `Time is up`, play selected sound
- profile page foundation
- timer sound selection with preview/stop and volume

Important current rule:
Timer reaching `00:00` must NOT redirect to result.
Only `Finish game` ends the game.

Current localStorage settings:
- timer duration
- `connexion_timer_sound`
- `connexion_timer_volume`

Next likely area:
- free session tracking
- premium placeholder
- profile/settings small fixes


## Current Update — Surprise me Mode

Implemented Surprise me mode inside the main `/game` screen.

### Main `/game` behavior

The game mode tabs now work on the same page:

- Intuitive
- Journey
- Surprise me

Current behavior:

- Intuitive is the default active mode.
- Intuitive keeps the existing category flow with `Choose` buttons.
- Journey remains visible but inactive/disabled.
- Surprise me is now selectable as a tab on `/game`.
- Surprise me does not use a separate selection route.

### Surprise me selection flow

Inside the Surprise me tab, the user can choose how many cards to play from each category:

- Connection
- Intimacy
- Lovemaking

Each category shows:

```txt
Category name
X cards
- 0 +

Rules:

Card counts come from the database.
Selected amount starts at 0.
+ increases selected amount.
- decreases selected amount.
Amount cannot go below 0.
Amount cannot exceed available cards count for that category.
Start game is disabled when total selected cards count is 0.
Start game becomes active when at least 1 card is selected.
Surprise me start modal

Clicking Start game opens the intro modal instead of starting immediately.

First modal:

Tune into the play
Intro text placeholder.

Buttons:

OK
More suggestions

Behavior:

OK starts the Surprise me queue flow.
More suggestions opens the detailed suggestions modal.
Closing the first modal returns to the Surprise me selection screen.

Second modal:

More suggestions
Detailed suggestions placeholder.

Behavior:

No bottom buttons.
Only top-right close button.
Closing it returns to the first modal.
Surprise me queue

When the user confirms with OK, the app generates a random card queue and saves it to localStorage.

localStorage key:

connexion_surprise_queue

Stored shape:

{
  cards: [
    {
      id: string,
      category: "CONNECTION" | "INTIMACY" | "LOVEMAKING"
    }
  ],
  currentIndex: 0
}

Queue rules:

Category order is fixed:
CONNECTION
INTIMACY
LOVEMAKING
Cards inside each category are randomized.
Categories are not mixed together.
No duplicate cards inside one generated queue.
Categories with selected amount 0 are skipped.

Example:

Connection: 3
Intimacy: 2
Lovemaking: 1

Generated queue order:

3 random CONNECTION cards
2 random INTIMACY cards
1 random LOVEMAKING card

After queue generation, the app navigates to:

/game/surprise-me/play
Surprise me gameplay

Route:

/game/surprise-me/play

Behavior:

Reads connexion_surprise_queue from localStorage.
If queue is missing or invalid, redirects back to /game.
Uses currentIndex to show the current card.
Displays card title, image if available, description, and category.
Next card increments currentIndex, saves it back to localStorage, and shows the next card.
After the last card, navigates to:
/game/surprise-me/result

Controls:

Timer
Play/Stop
Change cards
Next card
Surprise me timer

Surprise me gameplay now uses the same timer behavior as Intuitive mode.

Timer behavior:

Uses existing timer setting from localStorage.
Supports selected durations and No limit.
Resets when current card changes.
Play/Stop works.
+ adds time.
- removes time.
Cannot go below 00:00.
When timer reaches 00:00, it does not navigate automatically.
Shows Time is up.
Plays selected timer sound.
User can add time and continue.

Timer sound uses existing localStorage keys:

connexion_timer_sound
connexion_timer_volume

Fallback:

/sound/beep1.wav
volume: 0.7
Surprise me result screen

Route:

/game/surprise-me/result

This route exists and works.

It is shown after the final queued card.

Important current rules
Surprise me selection happens inside /game, not on a separate selection page.
/game/surprise-me/play is only for active gameplay.
/game/surprise-me/result is only for the final screen.
Do not create a separate /game/surprise-me selection route.
Do not enable Journey mode yet.
Do not implement payments yet.
Do not implement real reminder logic yet.
Keep mode logic minimal and MVP-friendly.