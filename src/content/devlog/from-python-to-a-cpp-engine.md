---
title: From a Python prototype to a C++ engine
date: 2026-10-18
summary: The short story of how the game started as a Python experiment two and a half years ago, and slowly became a custom C++ engine.
tags: [engine, design]
cover: art/scenes/cave-descent.png
coverAlt: A cave mouth lit by two lanterns.
---

The Rewilding Rite did not start as a C++ game. It started about two and a half years ago as a Python prototype, a place to try out ideas about a living world.

## Python first
Python was the fastest way to try ideas, so the first versions were Python all the way down. When it got slow, I compiled parts of it at runtime. I also spent a while experimenting with CUDA to push the simulation onto the graphics card. It was a fun detour, but it did not work out, and it taught me that the simulation needed a different foundation.

## A little C++ at a time
The next step was small: a C++ library, wrapped with [pybind11](https://github.com/pybind/pybind11), to speed up the slowest parts while the game itself stayed in Python. It worked well enough that more and more moved across.

## Designing the engine
Eventually I stopped patching and sat down to design the engine properly, with SDL2 for windowing and input. The early builds drew the screen with [Pyglet](https://pyglet.org) through PySDL2. At the time Pyglet felt less restrictive to me than Pygame, so that is what I used. Over time the C++ side took over the parts that mattered.

## What is in it today
Two things that shaped the game most:

- **Water.** It is simulated across the world, and everything else leans on it. Plants need it, so the animals do too.
- **An entity-component core.** The creatures, plants and objects in the world are built on [EnTT](https://github.com/skypjack/entt), which lets the engine hold a lot of living things at once.

I will write about both in more detail in later posts. For now, the short version is that the game is still a Python-and-C++ mix, and the prototype you can download is the first time all of it is packaged into one build.
