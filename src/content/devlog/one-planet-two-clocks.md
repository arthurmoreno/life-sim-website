---
title: One planet, two clocks
date: 2026-10-18
summary: You only ever see a small window of the planet. Here is how the rest of it keeps living, and the chain of cause and effect we are building toward.
tags: [simulation, design]
cover: art/scenes/meadow-golden-hour.png
coverAlt: A meadow with a pond under a golden sky.
---

The planet in **The Rewilding Rite** is far too big to simulate in detail all at once. So the game keeps two versions of the world, running on two different clocks.

- **The live window.** The patch of ground around you is simulated in full: every drop of water, every plant, every boar with its own brain.
- **The planet's memory.** Everything outside that window is kept as a handful of numbers per region: how many boars, how wet the soil is, what the weather has been doing.

When you walk away, the window is boiled down into numbers. When you come back, it is rebuilt to match them. The hard part is making sure both versions tell the same story, so the world you left is the world you find.

## The chain we are building toward

<figure class="rr-diagram">
<svg viewBox="0 0 880 400" role="img" aria-label="Diagram. Planet, built once: terrain feeds rivers and lakes. Live window: weather feeds water, water feeds soil moisture, soil moisture feeds plants, plants feed boars, boars feed predators. Boars return dung and meat to soil fertility, which feeds plants. The live window and the planet's memory exchange numbers whenever you cross a region edge. Villages hunt boars and feed the stories the game tells.">
<defs>
<marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#9ae5d5"/></marker>
<marker id="e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#e1a845"/></marker>
</defs>
<style>
.rr-diagram svg text{fill:#e8eef6;font:14px "Atkinson Hyperlegible",sans-serif}
.k{fill:#9ab0c8;font-size:12px;letter-spacing:.08em}
.n{fill:#1e314b;stroke:#9ae5d5;stroke-width:2}
.d{fill:none;stroke:#9ab0c8;stroke-width:2;stroke-dasharray:6 5}
.b{fill:#1e314b;stroke:#e1a845;stroke-width:2}
.l{stroke:#9ae5d5;stroke-width:2;fill:none}
.le{stroke:#e1a845;stroke-width:2;fill:none}
</style>
<text class="k" x="20" y="28">PLANET · BUILT ONCE</text>
<rect class="n" x="20" y="40" width="150" height="44" rx="4"/><text x="95" y="67" text-anchor="middle">Terrain</text>
<rect class="n" x="230" y="40" width="170" height="44" rx="4"/><text x="315" y="67" text-anchor="middle">Rivers and lakes</text>
<path class="l" d="M170 62H228" marker-end="url(#a)"/>
<text class="k" x="20" y="132">THE LIVE WINDOW</text>
<rect class="d" x="20" y="146" width="130" height="44" rx="4"/><text x="85" y="173" text-anchor="middle">Weather</text>
<rect class="n" x="190" y="146" width="130" height="44" rx="4"/><text x="255" y="173" text-anchor="middle">Water</text>
<rect class="n" x="360" y="146" width="130" height="44" rx="4"/><text x="425" y="173" text-anchor="middle">Plants</text>
<rect class="b" x="530" y="146" width="130" height="44" rx="4"/><text x="595" y="173" text-anchor="middle">Boars</text>
<rect class="n" x="700" y="146" width="160" height="44" rx="4"/><text x="780" y="173" text-anchor="middle">Predators</text>
<path class="l" d="M150 168H188" marker-end="url(#a)"/><path class="l" d="M320 168H358" marker-end="url(#a)"/>
<path class="l" d="M490 168H528" marker-end="url(#a)"/><path class="le" d="M660 168H698" marker-end="url(#e)"/>
<path class="l" d="M315 84V120H255V144" marker-end="url(#a)"/>
<rect class="n" x="360" y="236" width="130" height="44" rx="4"/><text x="425" y="263" text-anchor="middle">Soil fertility</text>
<path class="le" d="M595 190V258H492" marker-end="url(#e)"/><text class="k" x="602" y="234">dung, meat</text>
<path class="l" d="M425 236V192" marker-end="url(#a)"/>
<text class="k" x="20" y="322">BETWEEN VISITS</text>
<rect class="d" x="190" y="336" width="470" height="44" rx="4"/><text x="425" y="363" text-anchor="middle">The planet's memory</text>
<path class="l" d="M255 190V334" marker-start="url(#a)" marker-end="url(#a)"/>
<text class="k" x="262" y="300">cross a region edge: boil down, rebuild</text>
<rect class="n" x="700" y="236" width="160" height="44" rx="4"/><text x="780" y="263" text-anchor="middle">Villages</text>
<path class="le" d="M780 236V192" marker-end="url(#e)"/><text class="k" x="788" y="218">hunt</text>
<rect class="d" x="700" y="336" width="160" height="44" rx="4"/><text x="780" y="363" text-anchor="middle">Stories</text>
<path class="l" d="M780 280V334" marker-end="url(#a)"/>
</svg>
<figcaption>Solid boxes exist in the prototype in some form. Dashed boxes are still ahead, or only partly there.</figcaption>
</figure>


Each arrow carries one small number, not a tangle of reaching into each other's internals. The plants know how wet the soil is. They do not know about boars. The boars know how much food is around. They do not know about water. That keeps every link simple to test, and it is what lets the planet's memory stand in for a region you are not looking at.

## Why bother

Because the point is a world with consequences. A dry spell should thin out the plants, then the boars, then the predators, whether you were there to see it or not. And the boars you hunt for the village should be missed by the food chain afterwards.

## What the prototype does today

The prototype has water, plants, boars and their predators running in the live window, and villages you can walk between. The planet's memory is only partly there, weather is not yet part of what you will feel in play, and the stories the villages tell are a rough first cut. Expect gaps. Tell us where the world stops making sense; that is exactly the feedback this build is for.
