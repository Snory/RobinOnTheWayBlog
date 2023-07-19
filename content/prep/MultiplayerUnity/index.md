---
title: "To design a 'Psychopomp'"
date: "2023-05-10T10:00:00.000Z"
description: "Notes from designing a 'Psychopomp' game"
---

So, the next idea I want to test out is something I have already been working on. It's a multiplayer game that I originally planned to showcase at the LAN party I annually attend, but it's also something I can play with my all-knowing partner. If there's one thing I learned from the last game jam, it's that if I want to test out an idea, I need to do it quick and dirty so that I can finish it quickly. 


## Table of Contents

```toc
# This code block gets replaced with the TOC
```

### The idea

It should be a real-time strategy game, sort of. The core gameplay is quite simple. You have a circular map (I seem to have a soft spot for circles, don't you think?). Two doors are spawned for each player, one acting as the entrance to the circle and the other as the exit. The doors are located on opposite sides of the circle, so in order to get from the entrance to the exit, units must traverse the entire circle. When a unit exits the circle, you receive points. The player with the most points at the end of the game wins. Player is able to determine the path of the unit in advance, but once the unit enter the circle, the path can't be changed. To prevent your opponent from winning, you must find a way to stop them from reaching the doors. Therefore, everything implemented in the game should support this.


### Mechanics

#### Sending units

From the start I was thinking about some queue, but what is going to be the additional value of the queue? I was thinking that it would slow down the pace of the game and give a player time to think about it, reorganize what he wants to send and so on.



