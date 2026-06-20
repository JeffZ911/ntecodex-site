---
title: "ZZZ 3.0 Velina Wind Anomaly Mechanics: NTE Guide & Comparison"
slug: zzz-3-0-velina-wind-anomaly-mechanics-nte-explained
article_type: faq
qa_score: 10.0
word_count: 2034
published_at: "2026-06-17T11:42:27.071138+00:00"
published_url: /faq
sources:
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGS96nykacTATEX-6JmKznMfGeXdct3YXLCmU8mcGq0UGQSqaCVK7Wi9WN8dqbhYnYaS_t66YfDBeCOjhfLD5GUajXH7Ojc-hK2uVZA8wRSxAlplnzAicPdJceQ9AIEa2FY2Xa22I8="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHuc0GYJ7bUKBqDLzsIELfAR15KV8dLJOHNSb_aD0HXCLrQzJ7KkeJePCrIwn-P8jaVSFm9TGi3ubcF25JNFxxxJhGYYNVAl0iOJG9Q9DvbT2G8gBccuHWBjdRBrHV1LQkYMwl-66tqLueH7DxISFUHL7AMUGVOUZfBuEr5MCpqXji4G6fiVRG2QEOS0EeCo1kYduXND4C76g3d12ivKtYmGnk="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFGm2ODIKTb8kMc8AKdJuVA6zv9hqjbBxp81LOSpv2TaCEFqmgBAE_zEaELeP4_p72S2Cn-ZzWcmJulNlkFoX4_yfGWRqaV-Ox-wVTyW2DqRINDT5bwouFAvqqG1l2ny8c="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFn2pnes3efg5QbC1Pw2okiPsWXyaU95OwYCO03bNMoKZZ8u4qMYk0IoDLmWLcbsVfdV2-GKP8MxtMU3voFEAtoBicVsTj2ykTTDT4t0Ch-J1YWwQ=="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEkWgqmoDyu87n2XXpS2CRUrYov2hTiAyiFFMEUgsRfBghO-nfg-42DUhWFex9OsezdD-0wty3EwpCYjtOOHbL2lTuG44XGA2uhjZmCz5Qjdr0bOLn-PPHh0VKstE-VkmPA-K0EPu2Uez-w7qkQ3GWxICpRmF_fiVju1MXkGH3z"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGnxgeF4T-V-a5DXPe8BDhk5FQbuhvkd9jyAHzY-yWCzsm1LEiX9x_rixwOpHCL4z8-679Wz4_oHmPK62QVrT4vxFwEU8VKxNQOrfNzd1moyjEcIRVEkgLAS-iAMLyl9Qnko2FT"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHo_WtUek8MDm-Gn8N1EbwsaotPdUapsE9T9UtcC6oSOh6aj370JFFoqmbQDJJvGZCNzmZWTEJK6mciZK8fLwZlZoHrPp4vMqf-hbls6_gmikDLZiATzULruMfn4Iiyx1k="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGJwq7PzWO1DiBtVSP5062GNA5sc_XnDtvqC00NIY1_G9XvXx1B-QsqpRmzkwIcyNk2r1uRuUqJcFdkxX-9oYGRdjZZ-93ac9EvAtXzVWuXSRtslfkJnyEomYS7O6hUsSyYu4F6ipP8moRrRow="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEZYR5Ez38xP9voDNeVwFjYR5sX8EvCC8cPmdKg3twkRBtpecm_1y_GLoSNmli_edDaix-vhDrBLZEfRejlqGJWyxHpemDHYToxUalDPTra07iqY-6bihzrq9yyKfh3bko="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH7kpIRw-WTA0pAuYVehrlmPdJBCSW27GVZfXAXtBB-a3IQDR47TIk2sGQob_enqkGzkNeXiKuUvmf3EMpNHxUCuz26v4y4m0CoCEn28sgQ1ilusO8jlIyI"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFFefJNi7mztSZZXINQadeNPqCGzhnCQZMU_93mlvhAhin7uQKRp6TrMz5vK_3FZoA16HCMD98AUqgDvgCX7zPIqiJafH1RAty6tvvmlfLFPXSlbSlZ3SMcczNXhXii-6U96yxls7EaafIb7ezYs273FM5_QRIZtJkCtyw2Z4X-TkDRf4w="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE1ipnk8eWajjeqIrL3fMZx5nlbEoHF4YD__v8ra9VFKGIqO4jFavRmrTiOytPgAT1jQcVEbeQae6ByK2fT0PhqYOtDlMi3DgqiroaPsrPnyVlpfE6mopfV17-_ipZ6ekuqPDGjTQ=="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFtJ2png5ELVvczFKifHrHDZflU8IMkJQtMUM6JZnZ_ZUI2RkMH53H4mkYwQArImpBUB2Pkp95vntlviC-3F1mrZcIx-WuETm1vtggWZKq2NquEQuXBRb0ndWeqayx8vYunka2PzzpO2ePaQi8JyalqhlKv3bRl1lMD"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF1un2tdfc2ibzGYXWcFGDOCYa4NeyhkS1oEcQIKha7VqR21spPh_4ngYL_2Qh_V-NQ8ZyUQceGa_WVg7AiQ9jp-DKFl0O-auFgVkgQkJNQoptpZKRpkCmEsaOU17nr8fWV0v1A-zllhYUEjF--DY6BX30aTMa9ejxB3DYFfqkTMhkyaqyJwBy6Qwdr3nVQE8v6RQ-Zd2Ny3ybcI1kr_I7tDqblgvJtraJSP48aLwFl6v7voMi9GAGhzcZ0LQ=="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEjKLq7T67dAih1HdInAxRFE_TPorfN675cFdcNLiiLB5aQgFVd9evO1wWpII5YMoLGk7sC0q81lPq6JGdCAB2BT9MltobI9HOElNRv_UsX-vw-bM2VtZ8vpj2P80lv6-Fd_TGdY_5kTRdJyuegzSNeK1um5XZ7YQNSk0qsfwRtYIPBgXFnLaa-XJM9"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGig5FmKa4Yom61RDJI493D1fcLlfvTrJf_ExoBl6MuuwxHiLTIsYqQzlK702Ezw2SE3uDXipRO7xii-l3tdtAlJE7QSTflAqisYu1gAMldxbqHSSBND2GzVZ4sL4YUXKMZjTRZeyBfufy1IuGM45aWvdh21S9yrRQ="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF7_VbQcJ_dGZkrpfQc3rqfADL3koqZW-ug2U13PwO8n8CRWqIhV-mvK10I9pNlOMyGgN_DvpykEiIzctwa0onhXVkCOLZUg1XyBlnRF30GudFWKXW7G2bcqaNsN9rd2VbZ6gO__Tf7FrSqN7UlT5dZO97C6N9cZGu0mZvybQ5MIHxyBoZusH_d80h9UagPqOVz4hYx9YecOkbl"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGJOfFknxLU-aCgj_MCqISHLaSeEbazb7ddkhELS0ld3W-xn57LkTE192tTlWilqq9np65P-gS47GP7girpA1XOkNbwCtf6eyf_Qr7zvQ3eYkDkIVwjeVOWMETh"
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQErLTcTg5BhN3yOpUmTT-NwXjSCl4rlwbpq8cTlunGAoLfxIFp1sN_lUcMZl6LwSqOMO_UlCeiVEpwG3GTsh2zwRidbIC3L2MTR_eMP7xv4HxL4vMa1GRcM9lKGX6EUPgIJqCXTHqA="
  - "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEqYK6YlWEFDA3ftbhzG61QyXn7Up-oIefxPe1hG1OL8GDwmuowvT6vlZcufT9PCKkwdblPRqLOhOlIVLZIlq9Z8nzDhlPi4PP2CFp9C4vPedo36fZjsEx9i-U6ntmaLso="
quick_answer: "Velina is a character from Zenless Zone Zero (ZZZ), not Neverness to Everness (NTE). While ZZZ uses 'Anomaly' as a combat status, NTE uses 'Anomalies' to refer to supernatural entities, missions, and boss hunts in Hethereau."
game: unknown
hero_image: /img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/hero.webp
inline_images:
  - /img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/inline-1.webp
  - /img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/inline-2.webp
  - /img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/inline-3.webp
  - /img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/inline-4.webp
inline_image_sections:
  - "Question Restated"
  - "Direct Answer"
  - "Detailed Explanation"
  - "Related"
---

With the recent arrival of the Version 3.0 update in Zenless Zone Zero and the ongoing success of Neverness to Everness (NTE) since its April release, many players are finding themselves crossing the streams between New Eridu and Hethereau. Specifically, the debut of a high-profile Wind character has sparked questions about how these mechanics translate between the two urban-fantasy titles.

# ZZZ 3.0 Velina Wind Anomaly Mechanics Explained (for NTE Players)

Velina is a character from Zenless Zone Zero (ZZZ), not Neverness to Everness (NTE). While ZZZ uses "Anomaly" as a combat status effect that builds up to trigger elemental damage, NTE uses "Anomalies" to refer to the supernatural entities, world-distorting missions, and high-risk boss hunts found throughout the city of Hethereau.

## Question Restated

![Question Restated](/img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/inline-1.webp)

<!-- auto-related -->
*Related: [Best mechanical keyboard for fast-paced raid leaders in 2026](/guides/best-mechanical-keyboard-for-fast-paced-raid-leaders-2026) · [Best multi-button gaming mouse for MMO macro players during 8-hour gri](/guides/best-multi-button-gaming-mouse-for-mmo-macro-players) · [Best Gaming Gear for High-Efficiency Gacha Grinding Sessions](/guides/norma-stun-efficiency-comparison-zzz-3-0-gear-guide)*


As the gaming landscape evolves in mid-2026, players are increasingly looking for clarity on the crossover between the "Big Two" urban open-world RPGs. The primary confusion stems from the term "Anomaly," which serves as a core pillar for both games but represents entirely different systems.

### Is Velina in Neverness to Everness?
No, Velina Airgid is an S-Rank Agent exclusive to Zenless Zone Zero Version 3.0. She is the head of the Roscaelifer External Strategy Department and serves as the game's first-ever Wind-attribute Anomaly specialist. While her design fits the "supernatural urban" aesthetic shared by Neverness to Everness, she does not appear in the NTE roster, which features characters like Nanally, Mint, and Iris.

### Defining "Anomaly" in the Context of NTE
In Neverness to Everness, "Anomaly" is a noun rather than a combat mechanic. It refers to the paranormal phenomena investigated by the Bureau of Anomaly Control. Players take on the role of an unlicensed Anomaly Hunter operating out of the Eibon antique shop. While ZZZ players "build up Anomaly" to stun enemies, NTE players "hunt Anomalies" to progress the story and gear up their characters.

## Direct Answer

![Direct Answer](/img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/inline-2.webp)


The fundamental difference between these systems lies in how "Wind" (or its equivalent) and "Anomaly" are categorized. In Zenless Zone Zero, Wind is an element that triggers the Windswept status. In Neverness to Everness, the closest thematic equivalent to a Wind element is the Gas attribute, which defines certain weapons (Arcs) and character playstyles.

| Feature | Zenless Zone Zero ([ZZZ 3](https://ntecodex.com/guides/best-gear-for-zzz-3-0-hexerei-secret-rite-rewards).0) | Neverness to Everness (NTE) |
| :--- | :--- | :--- |
| **Anomaly Definition** | A combat status/meter buildup. | A supernatural entity or mission. |
| **Wind Equivalent** | Wind Attribute (e.g., Velina). | Gas Attribute Arcs. |
| **Combat Focus** | Elemental Buildup & Disorder. | Esper Cycles & Reactions. |
| **Primary Resource** | Polychrome / Master Tapes. | Annulith / Tri-Keys. |
| **Setting** | New Eridu (Hollows). | Hethereau (Open World City). |

In NTE, combat revolves around the Esper Cycle system, which uses elements like Anima, Cosmos, and Lakshana to trigger reactions such as Remora and Blossom. This is a distinct departure from ZZZ’s focus on the Anomaly Mastery and Proficiency stats that drive Velina’s kit.

## Detailed Explanation

![Detailed Explanation](/img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/inline-3.webp)


Understanding the NTE ecosystem requires a shift in perspective. Instead of focusing on status bars, NTE players manage commissions, hunt world bosses, and optimize attribute interactions.

### How Anomaly Commissions Work in Hethereau
Anomaly Commissions are the primary way to engage with the supernatural side of Hethereau. These missions are tracked via the Anomagram, a dedicated map interface that identifies distorted zones. Commissions vary from simple investigations to complex puzzles. For instance, the Whose Leak Is This? commission in the Miguel District requires players to navigate a distorted elevator realm while avoiding environmental hazards.

Every commission provides a one-time reward upon its first completion. These often include Hunter EXP, Annulith (premium currency), and Fons (standard currency). High-difficulty commissions may even reward S-Rank Arcs, allowing F2P players to obtain signature-tier weapons without using the gacha system.

### Anomaly Zones and Daily Farming Priorities
Anomaly Zones serve as the core progression stages for account development. These areas, such as the Nameless Hospital, offer repeatable challenges that scale with your Hunter Level. Players typically prioritize these zones to farm Annulith and U-00NE materials.

Farming priorities in NTE generally follow this hierarchy:
1.  **Daily Commissions**: Quick tasks for Hunter EXP and Fons.
2.  **High-Risk Commissions**: Boss-level encounters for S-Rank Arc drops.
3.  **City Tycoon Missions**: Progression in the city simulation system to unlock business-related perks.

### Anomaly Hunts: Mastering World Boss Mechanics
For those seeking the ultimate challenge, Anomaly Hunts feature powerful world bosses scattered across different districts. Unlike the standard enemies found in commissions, these bosses have unique mechanics and significant Break meters.

| Boss Name | Location | Notable Reward |
| :--- | :--- | :--- |
| Rhythm Master | Illusion Town | Blow up the Crowd (S-Rank Solid Arc) |
| Headless Rider | Bridge Crossings | Raging Flames (S-Rank Solid Arc) |
| Serenetti | Illusion Town | Camellia Society (S-Rank Synthesis Arc) |
| Swallowtail | New Herland District | Reality Refuge (S-Rank Arc) |

The Rhythm Master (also known as the Beat King) is a particularly popular hunt because it rewards the Blow up the Crowd Arc, which is highly effective for support characters.

### NTE Combat: Attributes, Remora, and Blossom Explained
While ZZZ players focus on "Anomaly Buildup" to trigger status effects, NTE players use the Esper Cycle to generate powerful reactions. The system is based on six elements: Anima, Cosmos, Lakshana, Psyche, Incantation, and Chaos.

Key reactions include:
*   **Blossom**: Triggered by combining Cosmos and Anima. This spawns a turret-like entity that deals sustained damage over time.
*   **Remora**: Triggered by combining Cosmos and Lakshana. This marks enemies and slows their movement.
*   **Charge**: Occurs when a Blossom hit strikes an enemy already affected by Remora. This generates significant ultimate energy for the active character.

Furthermore, weapons in NTE are categorized by five physical attributes: Solid, Liquid, Gas, Plasma, and Synthesis. The **Gas attribute** is the closest parallel to ZZZ's Wind element. Characters like Sakiri utilize Gas-type Arcs (such as Good Boy's Grand Adventure) to enhance their mobility and critical dodge capabilities.

## Related

![Related](/img/zzz-3-0-velina-wind-anomaly-mechanics-nte-explained/inline-4.webp)


Beyond the core combat mechanics, Neverness to Everness offers a deep city-life simulation that complements the Anomaly hunting.

### Recommended NTE Character Builds
For June 2026, the meta is dominated by characters who can efficiently trigger the Charge reaction. The Main Character (Zero) remains a top-tier choice for F2P players when paired with Nanally to extend Blossom durations. High-investment players are currently focusing on the Lacrimosa build, which utilizes her Chaos element and unique ability to copy enemy skills.

### Hethereau Exploration Tips
Exploring Hethereau is made easier through the game's robust vehicle customization system. Upgrading your car's engine and handling is essential for Anomaly pursuits, which are high-speed chases through the city streets. Additionally, managing your own business via the City Tycoon system (such as your starting cafe) provides a steady stream of Fons for gear upgrades.

### NTE Version 1.1 Roadmap
The first major update, Version 1.1: Dreamwalk Corridor, launched on June 3, 2026. This patch introduced the Sunward Island map expansion and two new limited characters: Lacrimosa and Chaos (who, confusingly, is a Lakshana-element character rather than a Chaos-element one). Looking ahead, leaks suggest that characters like Shinku and Iroi will arrive in Version 1.2 to round out the elemental roster.

## Frequently Asked Questions

### Can I play as Velina in Neverness to Everness?
No, Velina is an S-Rank Agent in Zenless Zone Zero and is not part of the Neverness to Everness universe. She was introduced in ZZZ Version 3.0 as a Wind-attribute Anomaly character.

### What is the difference between ZZZ Anomaly and NTE Anomaly?
In ZZZ, Anomaly is a combat mechanic where players build up a meter to trigger elemental status effects. In NTE, Anomaly refers to supernatural incidents or entities that players hunt and investigate throughout the city of Hethereau.

### How do I get free S-Rank weapons in Neverness to Everness?
You can obtain S-Rank Arcs by completing specific Anomaly Commissions and defeating world bosses. For example, defeating the Rhythm Master rewards the Blow up the Crowd Arc, while beating the Headless Rider grants the Raging Flames Arc.

### Which NTE element is the same as Wind?
NTE does not have a "Wind" element, but the Gas attribute for weapons and the Anima element for characters share similar thematic qualities like high mobility and speed.

## Sources
- Neverness to Everness Official — https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGS96nykacTATEX-6JmKznMfGeXdct3YXLCmU8mcGq0UGQSqaCVK7Wi9WN8dqbhYnYaS_t66YfDBeCOjhfLD5GUajXH7Ojc-hK2uVZA8wRSxAlplnzAicPdJceQ9AIEa2FY2Xa22I8=
- NTE 1.1 Roadmap — https://www.youtube.com/watch?v=uNRA_BbIr_Y
- Prydwen ZZZ Velina Guide
- GosuGamers ZZZ 3.0 News — https://gosugamers.net/zenless-zone-zero-reveals-new-s-ranks-velina-and-norma-from-version-3-0-s-roscaelifer-region/
- All Things How NTE Anomaly Guide
- GameWith NTE Arc List
- NTE Combat Guide
- Kaiden.gg NTE Tier List
- OSLink NTE Beginner Guide — https://oslink.gg/nte/early-game-guide
- NTE Wiki Lacrimosa — https://www.fandom.com/nte/wiki/Lacrimosa
- GameWith Rhythm Master Guide
- Mobalytics NTE Teams — https://mobalytics.gg/nte/teams/zero-charge-team