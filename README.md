# Iron Valhalla — Battlechess ♞🔥

A single-player **Battle Chess**-style browser game: full chess against a casual CPU
on a pseudo-3D isometric board. Captures are resolved as animated fights **on the
board** — the attacker walks over, duels the defender on its square, and the loser
explodes. Three visual themes (Mech / Viking / Classic Wood), hover tooltips, a hint
button, undo, a move log, a captured-pieces panel, synthesized sound effects, and an
optional **AI VIEW** mode that visualizes the engine's negamax search per CPU turn.

**▶️ Play it: https://github.freaxnx01.ch/game-iron-valhalla/**

## How to Play

Click your own piece to select it — legal targets pulse. Click a target square to
move, or an enemy piece to attack and trigger a battle animation.

- **THEME** — cycle Mech / Viking / Classic Wood (re-skins pieces and board; game
  state is untouched).
- **HINT** — runs the engine for you; the suggested move pulses gold for a few
  seconds.
- **UNDO** — reverts the last move pair.
- **BATTLES: CINEMA / INSTANT** — toggle whether captures play out as an animated
  duel or resolve immediately.
- **AI VIEW** — replays the CPU's search after each of its turns: a teal arrow for
  the move being evaluated, gold for the best line found so far, and a thick gold
  arrow for the final choice, alongside a live search-stats panel.
- **SOUND** — mute/unmute the synthesized effects.

Full chess rules apply: castling, en passant, pawn promotion (choose the piece via a
modal), check, checkmate and stalemate.

## Tech

- **Single self-contained `index.html`** plus a runtime `support.js` — no build step,
  no server, no external asset files beyond Google Fonts (Russo One, Chakra Petch).
- Chess engine: full legal move generation (castling rights, en passant, promotion,
  simulate-then-king-attacked legality checks) plus a negamax + alpha-beta CPU
  opponent with material/positional evaluation and move ordering.
- All piece art is inline SVG built from primitive shapes; all effects are CSS
  animations; all audio is synthesized with the Web Audio API.

## Running Locally

`index.html` loads `support.js` from the same folder, so serving the repo root is
enough:

```sh
# from the repo root
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

No license file yet — all rights reserved by default. Ask if you'd like to reuse it.

---

*`source/Iron Valhalla Battlechess v2.dc.html` is the original design-tool export,
kept for reference only — it isn't used by the deployed game (which loads the root
`support.js` runtime instead).*
