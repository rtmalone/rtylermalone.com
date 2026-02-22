# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (Create React App / react-scripts)
- `npm run build` — Production build
- `npm run deploy` — Build + deploy to Firebase Hosting
- `npm test` — Run tests (Jest via react-scripts, interactive watch mode)
- `npm run images` — Optimize static images with sharp/svgo

## Issue Tracking (beads)

This repo uses `bd` (beads) for issue tracking. Run `bd onboard` at the start of a session. Key commands:

- `bd ready` — Find available work
- `bd show <id>` — View issue details
- `bd update <id> --status in_progress` — Claim work
- `bd close <id>` — Complete work
- `bd sync` — Sync with git

See `AGENTS.md` for the full session completion workflow (landing the plane).

## Architecture

React 19 single-page personal portfolio site using React Router 7 and CSS Modules.

**Routing**: `src/routes.js` defines routes rendered inside `src/App.js`. Currently a single route (`/`) rendering `Main`.

**Theme system**: Seasonal color themes defined in `src/theme.js` (`seasonalThemes` object). On mount, `App.js` picks a theme based on the current month (`utils/getMonth.js`) and applies it via `utils/setTheme.js`, which sets CSS custom properties (`--primary-color`, `--secondary-color`, `--text-color`, `--link-color`) on the document root and a gradient on `body`. The `ThemePicker` component lets users switch themes manually.

**Employment data**: `src/data/employment.js` exports `employmentHistory`, an array of job objects (id, company, title, startYear, employmentYears, stack, summary, description). The `Timeline` component renders clickable year nodes; selecting one shows job details in `Main`. Clicking the profile photo/name returns to the personal bio.

**Styling**: CSS Modules (`*.module.css`) co-located in `src/components/styles/`. Global styles in `src/index.css` and `src/app.module.css`.
