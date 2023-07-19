---
title: "To design a 'Psychopomp'"
date: "2023-05-10T10:00:00.000Z"
description: "Notes from designing a 'Psychopomp' game"
---

So, the next idea I want to test out is something I have already been working on. It's a multiplayer game that I originally planned to showcase at the LAN party I annually attend, but it's also something I can play with my all-knowing partner. If there's one thing I learned from the last game jam, it's that if I want to test out an idea, I need to do it quick and dirty so that I can finish it quickly. Therefore the code is going to be ugly as hell.


## Table of Contents

```toc
# This code block gets replaced with the TOC
```

### Iterations of basic idea

The basic idea is quite simple. You have a circular map (I seem to have a soft spot for circles, don't you think?). Two doors are spawned for each player, one acting as the entrance to the circle and the other as the exit. The doors are located on opposite sides of the circle, so in order to get from the entrance to the exit, units must traverse the entire circle.

#### First idea

When a unit exits the circle, you receive points. The player with the most points at the end of the game wins. Player is able to determine the path of the unit in advance, but once the unit enter the circle, the path can't be changed. To prevent your opponent from winning, you must find a way to stop them from reaching the doors. Therefore, everything implemented in the game should support this.

There is going to be a queue unit which player wants to send to the circle. Each unit in queue can have a path assigned. Path is created by player in advance. He can reuse the path for different units in queue. To support units on in the circle, player has different types of powers - from adding attack to the units to increasning their speed.

#### Second idea

After I created a prototype for the first idea and played it with my all knowing partner I had a feeling that is just not what I had in my mind. By happy accident (as it happens in my life, I call it "the universe") I was watching a video about MDA framework for analysing game the very same day we were testing the prototype. I then went to my girlfriend and asked her "How do you want the game to make you feel?" and she told my "rascally". So I started reworking the idea.

The basic idea is still the same, but there is no queue this time or predetermined path. Units are spawn each xx seconds. You can control the direction the unit goes (not exact location to go, just the direction).



