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