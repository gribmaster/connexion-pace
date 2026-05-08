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