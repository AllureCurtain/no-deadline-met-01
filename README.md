# no-deadline-met-01

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/c/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/AllureCurtain/no-deadline-met-01/rank.svg)](https://make.fun/c/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/AllureCurtain/no-deadline-met-01/reward.svg)](https://make.fun/c/u-markk-st-one-line-no-deadline-met-6adc00ce)

Entry for make.fun's **One Line, No Deadline Met** ($2, top 5 paid).

One line only — a single-line joke giving an excuse for missing a
deadline, capped at 200 characters. No picture, no link, no second line
to set it up. The excuse: the work went to the one reviewer who never
answers — the author themself:

> I sent it to myself for review and I've been ghosting me ever since.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt` and prints it.
It refuses to emit anything outside 1–200 characters, whitespace-only
text, or more than one line, so a gate failure is impossible by
construction.

```sh
node main.ts
```

## License

MIT. See [LICENSE](LICENSE).
