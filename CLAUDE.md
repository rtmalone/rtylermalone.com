# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (Create React App / react-scripts)
- `npm run build` — Production build
- `npm run deploy` — Build + deploy to Firebase Hosting
- `npm test` — Run tests (Jest via react-scripts, interactive watch mode)
- `npm run images` — Optimize static images with sharp/svgo

## Issue Tracking (beads)

Issues are stored in `.beads/issues.jsonl` (one JSON object per line).

**Known bug:** `bd` CLI v0.55.4 has a dolt backend detection bug that prevents all commands from working in JSONL-only mode ([beads#1860](https://github.com/steveyegge/beads/issues/1860)). Until fixed, read and write issues directly via the JSONL file.

**Reading issues:**
- Use `Read` tool on `.beads/issues.jsonl` to see all issues
- Each line is a JSON object with `id`, `title`, `description`, `status`, `priority`, `issue_type` fields
- Status values: `open`, `in_progress`, `blocked`, `deferred`, `closed`
- Priority: 0=critical, 1=high, 2=medium, 3=low, 4=backlog

**Writing/updating issues:**
- To create: append a new JSON line to `.beads/issues.jsonl`
- To update: edit the existing line (change `status`, add `updated_at`, etc.)
- ID format: `rtm-NNN` (sequential)
- Always include `created_at` (RFC3339) and `created_by` fields on new issues

**When `bd` is fixed**, switch back to CLI commands:
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

## Chrome DevTools MCP

A Chrome DevTools MCP server is available for browser-based debugging and visual verification. Use it to inspect the running dev server (`npm run dev` on `localhost:3000`).

**Key capabilities:**
- `take_snapshot` — Get an accessibility-tree text snapshot of the page (preferred over screenshots for most checks)
- `take_screenshot` — Capture a visual screenshot of the page or a specific element
- `navigate_page` — Navigate to a URL, reload, or go back/forward
- `click`, `fill`, `hover`, `press_key` — Interact with page elements using their `uid` from a snapshot
- `evaluate_script` — Run JavaScript in the page context
- `list_console_messages` / `get_console_message` — Read browser console output
- `list_network_requests` / `get_network_request` — Inspect network activity
- `performance_start_trace` / `performance_stop_trace` — Record and analyze performance traces

**Workflow:** Start the dev server, then use `take_snapshot` to get element uids before interacting. Always use the latest snapshot — uids change between navigations.
