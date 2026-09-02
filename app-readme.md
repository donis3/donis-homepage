# Donsraad

**Easy Mission Picker** for [Dune: Awakening](https://duneawakening.com/).

Project page: [donis.dev/projects/donsraad](https://donis.dev/projects/donsraad)

A Landsraad companion that locks in the three repeatable missions you actually want — usually in the same area — so you stop eating loading screens.

Random Landsraad boards scatter you across the map. Each wrong contract is another load and a slice of the session gone. Donsraad keeps you on missions in the same region. A workaround for Funcom’s board design: random offers, long travel, too many loading screens.

## How it works

Landsraad missions are repeatable, but each specialization only shows a random handful of offers. You pick up to three targets. Donsraad keeps rolling the board until those three are sitting in your active slots.

Refresh uses the **guild disband** method:

1. Filler offers are accepted until your three active slots are full.
2. Disbanding the guild clears those actives and rolls new random offers for every specialization.
3. Repeat until your targets appear, then accept them.

Same jobs. Same region. Fewer loading screens.

## Requirements

- Windows 10 or 11
- Dune: Awakening focused when you run a pass (Landsraad does not need to be open — the app opens it if needed)
- A guild name in Settings (used to disband and refresh the board)

Coordinates are authored for **3440×1440** (21:9). Other resolutions are scaled automatically; ultrawide side padding is accounted for so the game UI stays aligned.

## Getting started

### Standalone (recommended)

From the repo root (close `Donsraad.exe` first if it is running):

```powershell
.\build.cmd
```

That writes a portable folder at `dist\Donsraad-<version>\` (currently `dist\Donsraad-0.2.1\`). Copy that folder anywhere and run `Donsraad.exe`. AutoHotkey does not need to be installed on the machine that runs it.

JSON and PNG files stay **next to the exe**, not locked inside it:

| File | Role |
| --- | --- |
| `DISCLAIMER.txt` | Disclaimer (shipped in portable and source zips; Legal dialog reads it) |
| `TERMS.txt` | Terms of use (shipped in portable and source zips; Legal dialog reads it) |
| `settings.json` | App settings (created on first run; never shipped in the portable zip)
| `profiles.json` | Character profiles (created on first run; never shipped in the portable zip) |
| `player_state.json` | Active session / stats (created on first run; never shipped in the portable zip) |
| `db\landsraad_houses.json` | House database (read; you can edit) |
| `db\landsraad_missions.json` | Mission database (read; you can edit) |
| `db\landsraad_rewards.json` | Landsraad reward item database (read; you can edit) |
| `db\house_icons\` | House crest PNGs (UI badges and notifications) |
| `db\house_icons_scaled\` | Scaled house icons for grid and Rewards tab |
| `db\spec_icons\` | Specialization icons for the mission grid |
| `db\reward_icons\` | Reward tier icons for the UI |
| `sfx\` | Run-start and goal-reach sound cues (WAV; MP3 optional) |
| `ui\donis.png` | About-tab photo |
| `anchors\1080p\*.png` / `anchors\1440p\*.png` | In-game image-search anchors |

`settings.json`, `profiles.json`, and `player_state.json` are user-specific and gitignored. The portable zip does **not** include them, so extracting an update over an existing folder cannot overwrite your settings, profiles, or stats. If you drop only `Donsraad.exe` into an empty folder, it seeds PNG files and mission databases from built-in copies, then **creates** those JSON files on first run. On load, missing keys from older file shapes are filled with defaults; existing values stay.

Rebuild after source changes with `.\build.cmd`.

### From source

1. Install [AutoHotkey v2](https://www.autohotkey.com/).
2. Clone this repo.
3. Run `main.ahk`.

```text
Donsraad/
├── main.ahk              # source entry
├── build.cmd             # compile to dist\Donsraad-<version>\
├── release.cmd           # portable + source zips under releases\
├── defaults/             # first-run JSON shapes (not copied into the portable zip)
├── db/                   # Landsraad houses and missions
├── ui/                   # dashboard and overlay
├── anchors/              # ImageSearch PNGs (1080p / 1440p)
├── scenarios/            # initialize, accept, disband, orchestrate
└── core/                 # state, OCR, input, resolution, Version.ahk
```


## Usage

1. **Settings** — Character, guild name, and faction. Guild name is required for board refresh (new profiles get a random 5-letter name). Enable AutoRun if you want the next loop to start automatically.
2. **Landsraad** — Scan the in-game house grid once per week. Set contribution goals on houses you care about.
3. **Missions** — The grid matches the in-game Landsraad house board. Click the same house cell you use in game, then pick the mission(s) you want there. Up to 3 targets total; one specialization per cell.
4. **Run** — Focus Dune: Awakening, then press **Start** (`Home`). First Start runs setup, then the picker loop (claim → refresh → accept). **End** stops the picker and pauses AutoRun. **Delete** toggles AutoRun.
5. **Play** — Run your missions. With AutoRun on, leave Travel confirmation open at the ornithopter, or finish so View mission report? appears — either starts the next picker loop. Leftover report prompts in the first 10 seconds after ready are closed with Enter.
6. **Rewards** — Claim house tier rewards in game, then mark them claimed on the Rewards tab. Use **Reward Hunter** to mark items you are hunting.
7. **Stats / Overlay / Dashboard** — Completes and best times on Stats. Overlay pins to the game window and hides when unfocused. Window **X** hides the dashboard; tray or the dashboard key brings it back. Rebind keys in Settings.

## Keybinds

| Action | Default |
| --- | --- |
| Start picker | `Home` |
| Stop picker | `End` |
| Toggle AutoRun | `Delete` |
| Show / hide dashboard | `F8` |
| Show / hide overlay | `Insert` |
| Exit Donsraad | `Pause` |

Rebind them in **Settings → Keybinds**. Click a bind, press a key, `Esc` cancels.

## Changelog

### 0.2.1

- **House Swatches** — New **House Swatches** button on the Rewards tab opens a window with checkboxes for every house. Mark which cosmetic swatches you already own; reaching 14,000 contribution with a house still auto-marks it.
- **Contribution goal dialog** — Redesigned picker with clearer tier buttons and a read-only swatch status row. Swatch ownership is edited in House Swatches instead of the goal dialog.
- **Missions not revealed** — Landsraad rows and Missions grid cells gray out when a house is on the scanned board but missions are not unlocked yet. A dim overlay blocks clicks until missions appear in game.
- **Landsraad click rules** — Weekly goals open only for houses with revealed missions after a scan. Rows show **Scan grid first**, **Not on board**, or **Missions not revealed** when applicable.
- **House mission dialog** — A green track badge marks the reward tier that matches your active weekly goal.
- **Tab help** — Landsraad legend no longer shows hex color codes. Added entries for not-available and missions-not-revealed states.
- **Mission grid** — Grid rendering stays on the Missions tab with improved caching and tab-visibility handling to reduce flicker when switching tabs.
- **Fixes** — Landsraad week rollover no longer drops scanned house data on partial profile updates.

### 0.2.0

Major release: Landsraad house-grid companion, weekly goals, reward tracking, and a simpler picker workflow. Upgrading from 0.1.7 or earlier? The 0.1.8 section below lists the large Landsraad feature set that ships in this release.

- **Unified Start** — Removed the separate Initialize step. The **Start** button and `Home` keybind run first-time setup when needed, then continue straight into the mission picker loop (claim → refresh → accept).
- **Random guild names** — New profiles and **Reset** on the Settings profile row assign a random 5-letter guild name so you can refresh the board without choosing a name first.
- **Reward Hunter** — Browse `db/landsraad_rewards.json`, mark items you are hunting per profile, and see hunted icons on the Missions grid and Landsraad tab when those rewards appear on a scanned board.
- **House earned rewards** — Rewards tab rows open a detail window listing earned tiers, week labels, and resolved item names for that house.
- **Landsraad rewards database** — `db/landsraad_rewards.json` plus OCR matching for house tooltip reward lines during grid scans.
- **User guide** — **How to use** on the About tab opens an in-app guide (quick start, grid, Landsraad, rewards, keybinds).

### 0.1.8

- **Landsraad tab** — Scan the in-game 5×5 house grid from the dashboard. Shows house crests, specialization icons, personal contribution, progress bars, and weekly goal tracking. Click a house to set a contribution goal or mark swatch ownership. **Reset board** clears this week’s scan data for the active profile.
- **Missions grid** — After a Landsraad scan, the Missions tab switches to a revealed-house board with house/spec icons, contribution progress, tracked highlighting, and drag-and-drop to move or swap targets between cells.
- **Contribution on claim** — Claiming a completed mission OCRs the Landsraad contribution line from the reward panel and adds it to the tracked house. Goal reached shows a house-icon notification and plays a sound.
- **Missions-to-goal estimate** — After each claim on a tracked house, a notification shows contribution progress and how many similar missions remain until the weekly goal (e.g. `8,400 / 10,500 · 2 missions left`).
- **Rewards tab** — Tracks unclaimed Landsraad house reward tiers (700 → 14,000) per profile. One row per house for the current week; older weeks roll into the tier display until you claim. **Claim** marks the current week claimed and removes prior-week entries. **Reset rewards** clears all reward tracking for the profile.
- **Tab help** — `?` buttons on Missions and Landsraad open a legend explaining colors, badges, and grid states.
- **Sound effects** — Optional run-start and goal-reach cues (Settings → Sound effects). Uses bundled WAV/MP3 via a non-blocking player.
- **Settings** — Redesigned layout; configurable Landsraad weekly reset day/hour; sound toggle. Dashboard window is 1000×900.
- **Overlay** — Status bar pins bottom-left during picker/scan/claim scenarios so it does not cover Landsraad UI. Rich goal-reached and goal-progress splash notifications with house icons.
- **Run timer** — Stop pauses the current-run timer; Start resumes it if paused (elapsed time excludes the paused segment).
- **Claim rules** — Later Start will not claim completed missions unless every targeted mission is complete when all targets are already active (avoids partial claims). After a claim, if no targeted missions remain, the menu closes and the overlay shows “No targeted missions”.
- **Mission hunt** — Done-cell tracking: when a house cell already shows all your targets, it is marked done and skipped on later hunt passes (including after guild disband) until every targeted cell is ready, then targeted missions are accepted. Cuts redundant cell opens and OCR during the filler loop.
- **Fixes** — Landsraad swatch indicators no longer bleed onto other tabs. Settings/Stats tab overlap after Rewards was added. Rewards tab house icons and week-date sorting. Rewards claim button handler. ISO week strings compared with `StrCompare` instead of numeric `<`. Goal-progress notifications use a separate stacked toast queue (up to 4) so they are not replaced by other overlay messages. `Gui` / `gui` name clash crash when showing house progress toasts after claim.

### 0.1.7

- **Fixes — cursor clear** — Moving the mouse out of the way for ImageSearch now stays inside the game client with top/bottom padding and respects the monitor work area, so windowed mode no longer parks the cursor on the taskbar and leaves Unreal hover stuck.
- **Fixes — SESSION counter** — During first Initialize, only targeted leftover completions count toward SESSION; after init, every claimed completion counts even if you changed targets before claiming.
- **Fixes — profiles** — Guild name, faction, overlay, delays, and other character settings are stored per profile. Switching profiles loads that profile’s settings; new profiles start from defaults. Hotkeys stay global.
- **Missions grid drag** — Drag a filled house cell onto another to swap missions; drop on an empty cell to move them. Click without dragging still selects the cell as before.
- **Missions grid cursors** — Hand on empty selectable cells, move on filled/draggable cells, and not-allowed when the 3-mission cap blocks new picks.

### 0.1.6

- **Window-based resolution** — Coordinates and ImageSearch use the **game client** (`WinGetClientPos`), not the monitor. Windowed 1080p on a larger display works; ultrawide pillarbox padding is still handled. Anchor PNGs load from `anchors\1080p` or `anchors\1440p` by scale.
- **Mission report AutoRun** — Reliable detection of the in-world diamond `!` prompt across sky and rocky backgrounds via a white-masked ImageSearch needle (tan fill + black bang, eroded edges). Search box is a tight padded crop at the HUD icon. Works on ultrawide 1440p, standard 1440p, and windowed 1080p.
- **AutoRun safety** — Mission-report and travel confirmation polls no longer move the mouse (avoids yanking the gameplay camera). Polling only runs while the game is the foreground window.
- **Cursor clear** — Menu ImageSearch still moves the cursor off the search box when needed so Unreal hover states do not break button matching; AutoRun HUD polls skip that move.
- **Release** — `release.cmd` / `release.ps1` builds both the portable and source zips in one step.
- **Claim completion stats** — Claiming completed actives no longer credits the wrong mission when the stack shifts. Claims run bottom → top and wait for the UI to settle before the next OCR.
- **Keybinds** — Separate Start (`Home`), Stop (`End`), and Toggle AutoRun (`Delete`). Dashboard default is `F8`. Stop cancels a running picker and pauses AutoRun until Start again.
- **Leftover mission report** — For 10 seconds after targets are ready, leftover View mission report? prompts are confirmed, then closed with Enter (avoids opening chat). Multiple leftovers are dismissed one by one; normal complete detection starts after that window.
- **Overlay** — Pins to the game client (not the monitor) and hides when the game is unfocused. During Initialize / picker loops it moves to bottom left so Landsraad UI stays clear. Top middle is available again. New **SESSION** block counts completes this app run.
- **Guild name** — Settings field limited to 3–100 characters.
- **Settings UI** — Overlay section checkboxes laid out in two rows so labels no longer overlap.

### 0.1.5

- **AutoRun mission report** — Besides the Travel confirmation window, AutoRun watches the in-world **View mission report?** title. A masked ImageSearch of the tan glyphs (portable builds extract the PNG and generate the mask next to the exe) starts the next picker loop. Esc is never sent on that prompt (it would open the system menu). After targets are ready, that detection is paused for **30 seconds** so leftover HUD or a mid-mission report does not start another loop.
- **Availability** — Stats stores the last 30 pick cycles (`abandonsUntilReveal`, newest first) per mission and shows **Availability** as `1 / (average abandons + 1)`. Ten abandons average is 1 in 11, about 9%. **Only tracked when you target exactly one mission from that specialization.** Two or more targets in the same spec are ignored.
- **Ready notification** — When the picker finishes, the overlay also shows how many missions were abandoned that cycle.
- **Overlay** — Top middle placement is removed; it covered the Landsraad tab and broke image searches. Existing top-middle settings fall back to top left.
- **Mnemonic devices** — The HUD crop and parser now handle two-digit remaining counts (`11/35`). OCR often clipped the extra `1` or read `1 1/35`.
- **Tray menu** — If the dashboard is hidden with **X** and you forget the show-UI key, the tray icon brings it back. Left-click shows the dashboard. Right-click: show dashboard, overlay, AutoRun (checkmark when on), start/stop picker, and exit. AutoRun in the tray uses the same setting as Settings.
- **Fixes** — Later Start no longer extra-clicks the house grid after a claim when every target is already active. Mission-report AutoRun does not send Esc (that opened the system menu). Overlay no longer covers the Landsraad tab. Stats column headers line up with values.

### 0.1.4

- **Overlay position** — Settings can pin the status HUD to top left, bottom left, top middle, top right, or bottom right. Notifications stay against the bar. Bottom placements use the work area so they sit above the taskbar.
- **AutoRun** — Optional setting. After targets are accepted and the play timer is running, Donsraad watches for the Travel confirmation window at the ornithopter. Leave that popup open — do not close it. When it is found, the app treats the run as finished and starts the next picker loop. Overlay **AUTO** shows a green loop icon when the setting is on, gray when it is off.
- **Mnemonic devices** — Initialize reads remaining tokens from the active-missions HUD after that tab is confirmed. The overlay shows `7/35` (toggle in Settings). Each completed-mission claim subtracts one. Remaining is session-only and stays `—` until the HUD is read; **Mnemonic devices spent** on Stats counts tokens actually consumed. Claims still run at 0 tokens.
- **Travel confirmation** — Later Start runs also close Travel if it is blocking the menu. First-time initialize is unchanged.
- **Offer window** — The house offer dialog is confirmed by the close/Esc button image instead of the old header crop.
- **Fixes** — Portable `build.cmd` README here-string parse error. Renaming a profile then changing tabs while the name field still had focus no longer crashes. Stale saved mnemonic remaining no longer shows as `0` before a real HUD read.

### 0.1.3

- **Stats tab** — Per-mission completes and best times, grouped by specialization, with pagination when a spec has more than one screen of missions.
- **Run timers** — The current run starts after all targeted missions are accepted. Claiming those missions records the duration, updates last/best, and logs the mission names.
- **Session totals** — Total abandons and targeted accepts live on Stats. **Reset stats** clears completes, times, and those counters; Settings **Reset** only restores basic settings.
- **Overlay** — Moved to the top-left. Optional notifications for “Ready to run missions!” and a new best time.
- **Dashboard** — Tabs split into their own files. Missions grid uses the full width, header hotkeys show key vs action clearly, and profile copy no longer clips.

### 0.1.2

- **Action delay** — Settings now include an action-delay control so automation can be sped up or slowed down to match the client.
- **Claim on initialize** — Initialization claims any completed missions in the active list before comparing remaining slots to your targets.
- **Claim on Start** — After you finish your targets, press Start again: completed missions are claimed first, then the picker loop runs until the next targeted set is accepted.
- **Cancel a run** — Press the Start key again while the main loop is running to stop it and return to Ready. The overlay shows the cancel hint for the bound key.
- **Overlay** — Status bar copy, layout, and run hints are clearer during initialize, claim, and accept.
- Performance and reliability — Faster UI waits (image polling instead of long fixed sleeps), guild disband/create/align confirmation, and related bug fixes.

### 0.1.1

First release with a working main loop: target missions on the house grid, initialize actives, fill leftover slots, disband to refresh offers, and accept targets when they appear.

## Disclaimer

Unofficial personal tool. Not affiliated with Funcom or Dune: Awakening. Automating a live game can conflict with that game’s terms of use — run it only on your own account and at your own risk.

## Author

**Deniz Özkan** — [donis.dev](https://donis.dev) · [Donsraad](https://donis.dev/projects/donsraad)

© 2026 Deniz Özkan. All rights reserved.
