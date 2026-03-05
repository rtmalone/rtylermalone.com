# Agent Instructions

## Git Workflow

- **Main branch**: `master` — create all feature branches from `master` and merge back into `master`
- **Feature branches**: `feature/<name>`
- There is no `develop` branch

This project uses **bd** (beads) for issue tracking. Issues live in `.beads/issues.jsonl`.

## Issue Tracking (JSONL workaround)

**The `bd` CLI is currently broken** (v0.55.4 dolt backend bug). Read and write issues directly via the JSONL file until fixed.

### Reading issues

Read `.beads/issues.jsonl` — each line is one issue as JSON:

```json
{"id":"rtm-001","title":"...","description":"...","status":"open","priority":1,"issue_type":"task","created_at":"2026-02-22T16:00:00Z","created_by":"tyler"}
```

Key fields:
- `status`: `open` | `in_progress` | `blocked` | `deferred` | `closed`
- `priority`: 0=critical, 1=high, 2=medium, 3=low, 4=backlog
- `issue_type`: `task` | `feature` | `bug` | `chore`

### Creating issues

Append a new JSON line to `.beads/issues.jsonl`:
- Use ID format `rtm-NNN` (next sequential number)
- Required fields: `id`, `title`, `status`, `priority`, `created_at` (RFC3339), `created_by`
- Optional: `description`, `issue_type`, `assignee`, `labels`

### Updating issues

Edit the existing JSON line in `.beads/issues.jsonl`:
- Change `status` to `in_progress` when starting work
- Change `status` to `closed` and add `closed_at` when done
- Add `updated_at` timestamp on any change

### When `bd` CLI is fixed

Switch back to CLI commands:

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

## Chrome DevTools MCP

Use the Chrome DevTools MCP server to visually verify changes and debug in the browser. Start the dev server (`npm run dev`) first.

**Common workflows:**
- **Visual verification**: `take_snapshot` to read page structure, `take_screenshot` to capture visuals
- **Interactive testing**: Use `click`, `fill`, `hover` with element `uid` values from a snapshot
- **Debugging**: `list_console_messages` for errors, `list_network_requests` for failed requests, `evaluate_script` to inspect state
- **Performance**: `performance_start_trace` with `reload: true` and `autoStop: true` to profile page load

**Tips:**
- Always `take_snapshot` before interacting — element uids change after navigation
- Use `navigate_page` with `type: "url"` to go to a specific route, or `type: "reload"` to refresh
- Prefer snapshots over screenshots for verifying content and structure; use screenshots for layout/visual checks

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds

