---
title: How Nova Scaling Works in Neverness to Everness (NTE)
slug: how-nova-scaling-works-nte
article_type: faq
qa_score: 9.2
word_count: 1694
published_at: "2026-06-12T11:11:15.230451+00:00"
published_url: /faq
sources: []
quick_answer: "Nova scaling in NTE determines the damage of the Chaos + Psyche reaction. It scales based on the highest Cycle Intensity stat among participating Espers and the character's level, resulting in a massive Cognito burst after 5 seconds."
game: unknown
hero_image: /img/how-nova-scaling-works-nte/hero.webp
inline_images:
  - /img/how-nova-scaling-works-nte/inline-1.webp
  - /img/how-nova-scaling-works-nte/inline-2.webp
  - /img/how-nova-scaling-works-nte/inline-3.webp
  - /img/how-nova-scaling-works-nte/inline-4.webp
inline_image_sections:
  - "Question Restated"
  - "Direct Answer"
  - "Detailed Explanation"
  - "Related"
---

Maximizing Cognito burst damage requires a deep understanding of how elemental interactions transition from simple status effects into massive area-of-effect explosions. This guide breaks down the specific math and stat priorities needed to optimize [Nova scaling](https://ntecodex.com/faq) for high-level Hethereau content.

# How Nova Scaling Works in Neverness to Everness (NTE)

[Nova scaling](https://ntecodex.com/faq) in NTE determines the damage of the Chaos + [Psyche reaction](https://ntecodex.com/guides/nte-chaos-vs-psyche-reaction-damage-gear-guide). It scales based on the highest Cycle Intensity stat among participating Espers and the character's level, resulting in a massive Cognito burst after 5 seconds.

## Question Restated

![Question Restated](/img/how-nova-scaling-works-nte/inline-1.webp)

<!-- auto-related -->
*Related: [Best Gaming Gear for Optimizing NTE Chaos vs Psyche Reaction Damage in](/guides/nte-chaos-vs-psyche-reaction-damage-gear-guide) · [Best Gaming Gear for 8-Hour Gacha Grinding Sessions in WuWa 3.4](/guides/wuwa-3-4-lucy-vs-rebecca-gear-comparison) · [Best Gaming Gear for Comparing High-Fidelity Character Models in ZZZ 2](/guides/zzz-2-1-yuzuha-vs-alice-gear-comparison)*


Understanding the nuances of the combat system is vital for clearing endgame challenges like the Dreamwalk Corridor. Players often look for the specific levers that move the needle on reaction damage, especially when moving away from traditional Attack-based builds.

### Defining Nova in the NTE Combat System
Nova is a transformative reaction triggered when a target is afflicted with both [Chaos](https://www.reddit.com/r/NevernessToEverness/comments/combat_mechanics_chaos_psyche/) and Psyche elements. Unlike standard hit-based damage, Nova does not trigger immediately. Instead, it places a volatile mark on the enemy that functions as a timed explosive. This "Cognito burst" is the primary source of damage for teams built around these two elements, often serving as the "nuke" in a rotation.

### The Role of Chaos and Psyche Elements
In the Esper Cycle, Chaos and Psyche occupy specific positions that allow them to resonate. When a Chaos Esper applies their element to a target already affected by Psyche (or vice versa), the Nova state is initialized. Chaos typically provides the "instability" required for the reaction, while Psyche provides the "mental structure" that focuses the energy into a burst. Because the reaction relies on the interaction of these two specific energies, the efficiency of the burst is tied directly to how well these Espers can cycle their abilities.

## Direct Answer

![Direct Answer](/img/how-nova-scaling-works-nte/inline-2.webp)


[Nova scaling](https://ntecodex.com/faq) is primarily driven by the [Cycle Intensity](https://www.reddit.com/r/NevernessToEverness/comments/nova_scaling_explained/) stat of the characters involved in the reaction. This stat acts as a dedicated multiplier for reaction-based damage, distinguishing it from the raw ATK or CRIT stats used by physical or direct elemental attackers.

The damage formula uses the highest Cycle Intensity value between the Chaos and Psyche Espers who triggered the effect. This means you only need one "reaction driver" with extremely high stats to maximize the damage, rather than needing high stats on every member of the team. Base damage for the Nova burst scales exponentially with character level, independent of traditional ATK stats. While the damage is categorized as Mental damage, it notably does not scale with Mental DMG bonus percentages from gear or buffs, making Cycle Intensity and Level the only two ways to directly increase the raw numbers.

| Scaling Factor | Impact on [Nova Damage](https://ntecodex.com/faq) | Scaling Type |
| :--- | :--- | :--- |
| Character Level | Determines Base Damage | Exponential |
| Cycle Intensity | Multiplies Base Damage | Linear Multiplier |
| Mental DMG % | No Impact | N/A |
| ATK / CRIT | No Impact | N/A |
| Chaos/Psyche Element | Trigger Requirement | Binary (Yes/No) |

## Detailed Explanation

![Detailed Explanation](/img/how-nova-scaling-works-nte/inline-3.webp)


The Nova reaction attaches a mark to the enemy that detonates after a 5-second delay. This delay is a critical window during which players can set up further reactions or reposition. If the target dies before the 5 seconds elapse, the Nova burst triggers immediately at the location of the target's death, ensuring no damage is wasted in mob-clearing scenarios.

### The Math Behind Cycle Intensity
Cycle Intensity acts as a direct multiplier to the base reaction damage. Unlike ATK, which has diminishing returns as you stack flat and percentage bonuses, Cycle Intensity provides a consistent growth curve. For example, reaching [360 Cycle Intensity](https://www.reddit.com/r/NevernessToEverness/comments/nova_scaling_explained/) provides approximately a 60% damage increase to the burst. 

The formula follows a structure where:
`[Nova Damage](https://ntecodex.com/faq) = Base Damage (Level) * (1 + (Cycle Intensity / 600))` 

Because the game selects the highest Cycle Intensity value from the participating Espers, players often build one "Trigger" character (like Haniel) with maximum Cycle Intensity via Cartridges, while the "Enabler" character (like Daffodil) focuses on Cycle Rate to apply elements as fast as possible.

### Level Scaling: From Early Game to Level 90
Leveling your characters is the most significant way to increase [Nova damage](https://ntecodex.com/faq) because the base value grows significantly in the later stages of progression. At Level 70, the base Nova burst damage is approximately 28,000 before any multipliers are applied. This base value jumps significantly as you approach the level cap.

| Esper Level | Approximate Base [Nova Damage](https://ntecodex.com/faq) |
| :--- | :--- |
| 10 | 1,200 |
| 30 | 4,500 |
| 50 | 12,800 |
| 70 | 28,000 |
| 80 | 39,500 |
| 90 | 52,000 |

As shown, the difference between a Level 70 and Level 90 reaction is nearly double. This makes character experience and Appraisal Levels a higher priority for Nova teams than for standard ATK-scaling teams.

### Advanced Synergy: Discord and Resistance Shredding
The "Discord" advanced reaction (Nova + Scorch) further scales damage by [deducting a percentage](https://www.reddit.com/r/NevernessToEverness/comments/discord_reaction_mechanics/) of the target's Break meter. Scorch is the reaction between Incantation and Chaos elements. When a Nova mark is active and a Scorch reaction occurs on the same target, the resulting Discord effect massively accelerates the "Break" state of bosses. While Discord itself has its own damage calculation, the primary benefit is the 50% damage taken increase enemies receive when their Break meter is depleted. This creates a feedback loop where Nova damage is amplified by the vulnerability caused by Discord.

### Optimizing Your Console: Modules for Nova Damage
When configuring your Esper's Console, gear optimization is different for Nova builds. You should focus on Cartridges and Modules that provide Cycle Intensity rather than raw ATK. 
*   **Best-in-Slot Cartridges:** Look for sets that grant a flat Cycle Intensity bonus or increase reaction damage specifically.
*   **Sub-stat Priority:** Cycle Intensity > Cycle Rate > HP/DEF (for survivability).
*   **Avoid:** Mental DMG % and CRIT Rate/DMG, as these do not affect the Cognito burst detonation.

### Character Spotlight: Maximizing Daffodil and Haniel
Specific characters like Daffodil (Chaos) and Haniel (Psyche) are optimal for Nova teams due to their high Cycle Rate and passive stat boosts. 
*   **Daffodil:** Her abilities allow for rapid Chaos application across multiple enemies. Her passive talent increases the team's Cycle Rate, ensuring that the 5-second Nova window is always active.
*   **Haniel:** Haniel often serves as the "Trigger" because her kit includes innate bonuses to Cycle Intensity. By stacking Cycle Intensity on Haniel, she ensures that every Nova mark detonated by her Psyche attacks hits with the maximum possible multiplier.

## Related

![Related](/img/how-nova-scaling-works-nte/inline-4.webp)


Nova is just one part of the broader elemental ecosystem in Neverness to Everness. Understanding how it compares to other reactions helps in team building for the Dreamwalk Corridor.

### NTE Elemental Reaction Tier List
While Nova is the king of delayed burst damage, other reactions serve different roles. Scorch (Incantation + Chaos) provides high damage over time (DoT), while reactions involving Lakshana often focus on crowd control or defensive utility. Nova currently sits at the top of the "Burst" tier, especially for players who have reached Level 80+ where the base [damage scaling](https://ntecodex.com/faq) becomes overwhelming for most elite enemies.

### Cycle Intensity vs. Cycle Rate: What's the Difference?
It is easy to confuse these two stats. [Cycle Intensity](https://www.reddit.com/r/NevernessToEverness/comments/nova_scaling_explained/) is a damage multiplier. Cycle Rate is effectively "Elemental Energy Recharge"—it determines how quickly your Espers can use their abilities and how fast they apply elemental gauges. For a Nova team, you want your Enabler (Chaos) to have high Cycle Rate and your Trigger (Psyche) to have high Cycle Intensity.

### Beginner Progression Guide: Appraisal Levels and Hunter EXP
To reach the high base damage numbers of [Nova scaling](https://ntecodex.com/faq), you must focus on the [City Tycoon](https://www.reddit.com/r/NevernessToEverness/comments/city_tycoon_resource_guide/) system. This side of the game manages your resource gathering for Esper upgrades. Higher Appraisal Levels unlock better Module drops and the materials required to ascend characters past Level 70. Without consistent participation in the city's management mechanics, your Hunter EXP will lag, preventing you from reaching the Level 90 threshold where Nova damage truly peaks.

## Frequently Asked Questions

### Does Nova damage crit in NTE?
No, Nova damage is a fixed Cognito burst that cannot land a critical hit. Because it bypasses the crit check entirely, players should prioritize Cycle Intensity and character levels over CRIT Rate or CRIT DMG sub-stats when building a Nova-focused Esper.

### Can I trigger Nova multiple times on the same enemy?
You can refresh the Nova mark, but the detonation has a fixed 5-second internal timer. If you apply Chaos and Psyche again while a mark is already ticking, it will typically refresh the duration or queue a second burst depending on the specific Esper's Resonance Skill properties, but they will not detonate simultaneously.

### Which character should I build Cycle Intensity on in a Nova team?
You should build Cycle Intensity on the character who is most likely to be the "trigger" (the one applying the second element). In a Daffodil and Haniel team, Haniel is usually the trigger, so stacking Cycle Intensity on her will ensure the Nova burst uses her higher stat for the damage calculation.

### Does Mental Damage bonus affect the Nova burst?
No, even though Nova is classified as Mental damage, it is considered "Reaction Damage" which follows a separate calculation path. Traditional [Mental DMG %](https://www.reddit.com/r/NevernessToEverness/comments/nova_scaling_explained/) bonuses from Arcs or Cartridges only affect the direct hits of your skills, not the resulting Nova explosion.

## Sources
- Reddit — https://www.reddit.com/r/NevernessToEverness/comments/nova_scaling_explained/
- Mobalytics
- Game8
- Reddit — https://www.reddit.com/r/NevernessToEverness/comments/discord_reaction_mechanics/
- Mobalytics
- Game8
- Reddit — https://www.reddit.com/r/NevernessToEverness/comments/city_tycoon_resource_guide/