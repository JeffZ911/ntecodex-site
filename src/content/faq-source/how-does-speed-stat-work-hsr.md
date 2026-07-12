---
title: "How Does Speed Work in Honkai: Star Rail? HSR SPD Guide"
slug: how-does-speed-stat-work-hsr
game: hsr
article_type: faq
qa_score: 8.3
word_count: 1931
published_at: "2026-05-13T02:36:43.132228+00:00"
published_url: /faq
sources: []
hero_image: /img/how-does-speed-stat-work-hsr/hero.webp
inline_images:
  - /img/how-does-speed-stat-work-hsr/inline-1.webp
  - /img/how-does-speed-stat-work-hsr/inline-2.webp
  - /img/how-does-speed-stat-work-hsr/inline-3.webp
  - /img/how-does-speed-stat-work-hsr/inline-4.webp
inline_image_sections:
  - "Question Restated"
  - "Direct Answer"
  - "Detailed Explanation"
  - "Related"
---

Success in the turn-based combat of the Astral Express requires more than just high damage numbers; it requires a mastery over time itself.

# How Does Speed Work in Honkai: Star Rail? A Complete SPD & Action Value Guide

The Speed (SPD) stat in Honkai: [Star Rail](https://ntecodex.com/guides/genshin-impact-vs-honkai-star-rail-battery-drain-gear) is often the deciding factor between a narrow victory and a frustrating defeat in high-level content like the Memory of Chaos. Unlike traditional RPGs where speed might only determine who goes first at the start of a fight, SPD in this game dictates how many times your characters can act within a fixed window of time. This guide breaks down the underlying mathematics of the Action Bar and explains how to optimize your team's turn frequency.

## Question Restated

![Question Restated](/img/how-does-speed-stat-work-hsr/inline-1.webp)


Players frequently encounter several points of confusion regarding the SPD stat and how it translates to gameplay performance.

### The Mystery of the SPD Stat
What exactly does the Speed (SPD) stat do in Honkai: [Star Rail](https://ntecodex.com/guides/genshin-impact-vs-honkai-star-rail-battery-drain-gear)? On the surface, it appears to be a simple priority system, but players often notice that characters with high SPD eventually "lap" slower allies or enemies, taking two turns before others take one. Understanding the mechanics behind this behavior is essential for clearing endgame content within the required cycle limits.

### Common Player Confusion: SPD vs. Turn Order
Why are specific numbers like 134 or 161 considered "breakpoints" for endgame content? Many players build their characters to reach 134 SPD because they are told it is the "golden standard," yet they may not understand why that specific integer is significant. Furthermore, there is often confusion regarding how SPD interacts with the Action Value (AV) numbers seen on the turn order bar. Does having more SPD always mean you go first in every wave, or are there other factors, like "Action Advance" or "Base SPD," that override your total stats?

## Direct Answer

![Direct Answer](/img/how-does-speed-stat-work-hsr/inline-2.webp)


In Honkai: [Star Rail](https://ntecodex.com/guides/genshin-impact-vs-honkai-star-rail-battery-drain-gear), SPD determines how frequently a character takes a turn by reducing their Action Value (AV). While SPD is the stat you see on your character sheet, AV is the actual measurement of "time" used by the game's engine to determine the turn order.

> **The Core Formula:**
> **Action Value (AV) = 10,000 / SPD**

Higher SPD results in a lower AV. Because the game calculates turn order by counting down AV, a lower number means your character reaches the "finish line" of the turn cycle faster.

### The Short Version: More SPD = More Turns
The simplest way to view SPD is as a multiplier for your character's total actions. If a character has 200 SPD, they will take exactly twice as many turns as a character with 100 SPD over the course of a long battle. In the context of Honkai: Star Rail’s endgame modes, having more SPD allows your characters to "lap" slower enemies, potentially attacking, healing, or generating Skill Points multiple times before an enemy can even move once.

### Why SPD is the Most Important Stat in HSR
In endgame modes like Memory of Chaos (MoC), you are fighting against a cycle timer. SPD is used to secure multiple actions within a single cycle's time limit. If your DPS character is too slow, they may only attack once per cycle, whereas a high-speed DPS could attack twice. This effectively doubles your damage output without changing your Attack or Critical Hit stats. Similarly, high SPD on supports ensures they generate enough Skill Points to keep the team functioning and charge their Ultimates faster through more frequent basic attacks and skills.

## Detailed Explanation

![Detailed Explanation](/img/how-does-speed-stat-work-hsr/inline-3.webp)


To master speed tuning, you must look past the character screen and understand how the game processes every tick of combat time.

### The Math Behind the Action Bar
Think of combat as a 10,000-meter race where SPD is your running velocity. Every character starts at the beginning of the track (0 meters) and must reach the end (10,000 meters) to take an action.

*   If your SPD is 100, it takes you 100 "ticks" of time to reach the end (10,000 / 100 = 100 AV).
*   If your SPD is 200, it only takes you 50 "ticks" to reach the end (10,000 / 200 = 50 AV).

You can see these "ticks" or Action Values in-game. To do this, go to **Settings > Other Settings** and enable **"Display Action Value during battle."** This will replace the simple portraits on the left side of the screen with numbers. These numbers indicate how many AV ticks remain before that unit takes their turn.

### Critical SPD Breakpoints for MoC and Pure Fiction
The Memory of Chaos (MoC) operates on a "Cycle" system. The first cycle (Cycle 0) is unique because it lasts for 150 AV. Every subsequent cycle (Cycle 1, Cycle 2, etc.) lasts for 100 AV. This is why 134 SPD is the most famous breakpoint in the community: it allows a character to act twice in Cycle 0.

**MoC SPD Breakpoints Table**

| Actions | Cycles | Required SPD | Why it matters |
| :--- | :--- | :--- | :--- |
| 2 | 1 (Cycle 0) | 133.4 | Allows 2 actions in the very first cycle. |
| 3 | 2 (0-1) | 142.9 | Secures 3 actions before the end of Cycle 1. |
| 4 | 2 (0-1) | 160.1 | Allows 2 actions in Cycle 0 AND 2 actions in Cycle 1. |
| 5 | 3 (0-2) | 155.6 | Total of 5 actions across the first three cycles. |
| 6 | 4 (0-3) | 155.6 | Consistent high-frequency actions. |
| 2 per cycle | Every | 200.1 | The character acts twice every 100 AV cycle. |

In Pure Fiction, the total AV is usually 450 (150 for the first cycle + 100 for each of the three subsequent cycles). To get 7 actions in Pure Fiction, you would need approximately 156 SPD (450 / 7 = 64.2 AV per turn; 10,000 / 64.2 = 155.7 SPD).

### Hidden Decimals and Rounding Errors
Relic substats have hidden decimals that the game UI rounds to the nearest whole number. For example, a relic might show "+2 SPD," but it could actually be 2.3 or 2.6 SPD. This is why you might sometimes have a character with exactly 134 SPD on the stat screen who fails to take two turns in Cycle 0. They might actually have 133.8 SPD, which is just short of the 133.34 required for the double turn. If you find yourself missing a turn by 1 AV, you likely need one more SPD substat roll to overcome the rounding.

### Base SPD vs. Total SPD
When a relic or ability provides a percentage-based SPD buff (like the 6% bonus from the 2-piece Messenger Traversing Hackerspace set), the bonus is calculated based on the character's **Base SPD**, not their total SPD.

*   **Example:** If Seele has a Base SPD of 115 and is wearing the Messenger set (6% SPD) and +25 SPD Boots:
*   Bonus from set: 115 * 0.06 = 6.9 SPD.
*   Total SPD: 115 + 6.9 + 25 = 146.9 SPD.

Flat SPD bonuses from substats are added after percentage bonuses are calculated.

### Action Advance Forward vs. Speed Buffs
There is a major difference between increasing a character's SPD and "Advancing" their action.

1.  **SPD Buffs:** These increase the velocity of the character. If a character is mid-race and receives a SPD buff (like from Asta’s Ultimate), their remaining AV is recalculated based on the new, higher speed.
2.  **Action Advance Forward:** This is a literal "teleport" forward on the race track. If Bronya uses her Skill to provide a 100% Action Advance, the target character is moved immediately to the front of the line (AV becomes 0), regardless of their current SPD. If a character receives a 25% Action Advance (like from the Dance! Dance! Dance! Light Cone), they move forward by 2,500 units on the 10,000-unit track.

### Action Delay
Conversely, enemy abilities or player effects like "Imprisonment" (Imaginary Break) or "Entanglement" (Quantum Break) cause **Action Delay**. This pushes the unit backward on the track, increasing their AV and making them wait longer for their next turn. Welt is the premier character for this mechanic, as his kit revolves around slowing enemies (reducing their SPD) and delaying their actions (pushing them back on the bar).

### The Art of Speed Tuning Your Team
Speed tuning is the process of ensuring your characters act in a specific order. Generally, you want your supports to act before your Main DPS.

*   **Pela/Silver Wolf:** Should be faster than your DPS to apply Defense Shred debuffs before the DPS attacks.
*   **Tingyun/Huohuo:** Should be fast to generate Energy and provide buffs before the DPS takes their turn.
*   **The "Bronya/Sparkle" Tuning:** A common strategy is to make your DPS slightly faster than Bronya (e.g., DPS 135 SPD, Bronya 134 SPD). The DPS acts, then Bronya immediately uses her skill to Advance the DPS, allowing them to act again instantly.

## Related

![Related](/img/how-does-speed-stat-work-hsr/inline-4.webp)


Beyond the basic math, SPD interacts with specific gear and character kits in unique ways.

### SPD-Scaling Characters and Skills
Some characters gain direct combat benefits from their SPD stat:
*   **Seele:** Her Skill increases her SPD by 25% for two turns. This allows her to reach very high SPD thresholds without needing SPD boots, often allowing her to run ATK% boots instead.
*   **Sushang:** She gains a massive Action Advance when an enemy's Weakness is broken, and her Ultimate provides a 100% Action Advance, effectively giving her an extra turn.
*   **Hanya:** Her Ultimate increases an ally's SPD based on a percentage of her own SPD, making her one of the few characters who wants as much SPD as possible (often pushing 160+).

### Best Relics and Light Cones for Speed
If you are struggling to hit your breakpoints, consider the following equipment:

**Relic Sets:**
*   **Messenger Traversing Hackerspace:** The 2-piece set provides a 6% SPD increase. The 4-piece set increases the SPD of all allies for 1 turn when the wearer uses their Ultimate on an ally.
*   **Forge of the Kalpagni Lantern (Planar Ornament):** Provides a 6% SPD increase and increases Break Effect by 40% when hitting enemies with Fire Weakness.
*   **Firmament Frontline: Glamoth (Planar Ornament):** Increases ATK by 12%. When the wearer's SPD is 135/160 or higher, the wearer deals 12%/18% more DMG.

**Light Cones:**
*   **Dance! Dance! Dance! (Harmony):** When the wearer uses their Ultimate, all allies' actions are Advanced Forward by 16% to 24%.
*   **But the Battle Isn't Over (Harmony):** While it doesn't give SPD, its 30% DMG buff for the next acting ally requires strict speed tuning to ensure the DPS acts immediately after the wearer.
*   **Adversarial (3-Star Hunt):** Increases SPD by 10% to 18% for 2 turns after the wearer defeats an enemy. This is a powerful "poverty" option for early-game players.

### When is Low Speed Better?
While SPD is generally king, some characters prefer to be slow:
*   **Clara:** Her damage comes from counter-attacking when hit. If she is too fast, her "Svarog's Protection" buffs (which often last for a set number of *her* turns) will expire too quickly. A "Slow Clara" build focuses entirely on ATK and Crit.
*   **0-Cycle "Slow" DPS:** In specific team compositions featuring 160+ SPD supports (like Sparkle or Bronya), the DPS can sometimes afford to have base SPD. The support simply pulls the "slow" DPS forward constantly, allowing the DPS to ignore SPD substats in favor of pure damage.

Mastering SPD is the difference between playing the game and controlling it. By reaching the 134 or 161 breakpoints, you grant your team the breathing room necessary to survive the hardest encounters the Galaxy has to offer.

## Sources
- Prydwen Institute
- Game8 Honkai: Star Rail Wiki — https://game8.co/games/Honkai-Star-Rail/archives/411835
- KeqingMains HSR
- HoYoLAB Official Community — https://www.hoyolab.com/article/18063162
- Official Honkai: Star Rail Website — https://hsr.hoyoverse.com/en-us/