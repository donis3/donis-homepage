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

That writes a portable folder at `dist\Donsraad-<version>\` (currently `dist\Donsraad-0.1.4\`). Copy that folder anywhere and run `Donsraad.exe`. AutoHotkey does not need to be installed on the machine that runs it.

JSON and PNG files stay **next to the exe**, not locked inside it:

| File | Role |
| --- | --- |
| `settings.json` | App settings (defaulted at compile; written by the GUI) |
| `profiles.json` | Character profiles (defaulted at compile; written by the GUI) |
| `player_state.json` | Active session / stats (defaulted at compile; written while running) |
| `db\landsraad_houses.json` | House database (read; you can edit) |
| `db\landsraad_missions.json` | Mission database (read; you can edit) |
| `ui\donis.png` | About-tab photo |
| `ui_elements\*.png` | In-game image-search anchors |

`settings.json`, `profiles.json`, and `player_state.json` are user-specific and gitignored. The build copies clean templates from `defaults/` into the portable folder. If you drop only `Donsraad.exe` into an empty folder, it seeds PNG files and mission databases from built-in copies, then **creates** those JSON files on first run. Files that already exist are never overwritten.

Rebuild after source changes with `.\build.cmd`.

### From source

1. Install [AutoHotkey v2](https://www.autohotkey.com/).
2. Clone this repo.
3. Run `main.ahk`.

```text
Donsraad/
├── main.ahk              # source entry
├── build.cmd             # compile to dist\Donsraad-<version>\
├── defaults/             # clean JSON templates for the portable build
├── db/                   # Landsraad houses and missions
├── ui/                   # dashboard and overlay
├── ui_elements/          # ImageSearch PNGs
├── scenarios/            # initialize, accept, disband, orchestrate
└── core/                 # state, OCR, input, resolution, Version.ahk
```

## Usage

1. **Settings** — Character name, guild name, and faction. The guild name is required for the disband refresh. Add extra profiles if you have alts. Optionally enable **AutoRun** (see step 5).
2. **Choose targets** — On Mission Picker, click a house cell and assign up to **3 missions** total. One specialization per cell, and it must be the specialization that house actually offers. Green cells are your targets. If the offers on that cell are a different spec, the run stops with **Wrong specialization** so it cannot loop forever.
3. **First setup** — Have Dune: Awakening focused. Landsraad does not need to be open. Press **Initialize**, or press the Start key once, so Donsraad can read your current actives and mnemonic devices. If the menu is closed, the app opens it.
4. **Run the picker** — Press **Start** (default `Home`) for each pass. The app fills leftover slots, disbands to refresh offers, and takes your targets when they show. You can press Start again after a run if AutoRun is off.
5. **AutoRun** — Enable it in Settings. After your targets are accepted and the play timer is running, fly to the ornithopter and **leave the Travel confirmation window open**. Do not close it and do not confirm travel yet — that popup is what Donsraad looks for. When it sees Travel, it treats the run as complete, closes the popup, and starts the next picker loop. The overlay **AUTO** icon is green when the setting is on, gray when it is off.
6. **Overlay** — Status, run, targets, mnemonic devices, and profile stay at the top of the screen. The target count turns green when all targets are active. Toggle most blocks in Settings.
7. **Dashboard** — The window **X** hides the UI so you can play. Press **Delete** (default) to bring it back. `Pause` (default) closes Donsraad. All three keys can be changed in Settings → Keybinds.

## Keybinds

| Action | Default |
| --- | --- |
| Start / run mission picker | `Home` |
| Show / hide dashboard | `Delete` |
| Exit Donsraad | `Pause` |

Rebind them in **Settings → Keybinds**. Click a bind, press a key, `Esc` cancels.

## Changelog

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
