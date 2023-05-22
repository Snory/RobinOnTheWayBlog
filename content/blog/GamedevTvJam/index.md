---
title: To Gamedev.tv game jam
date: "2023-05-20T10:00:00.000Z"
description: "notes from taking gamedev.tv game jam"
---


I've signed up for a week-long [gamejam](https://itch.io/jam/gamedevtv-jam-2023? "gamejam") called GameDevTV Jam 2023 because they're offering a free course on their site just for participating and submitting a game!

Now, I'm not saying I'm addicted to tutorials or anything like that. I believe I've moved past that stage. But they have courses on Blender and drawing, which could be interesting additions to my skill set. I mean, who knows? Besides, the theme of the game jam is "Life in 2 dimensions," which perfectly aligns with an [idea] (https://robinontheway.com/30DayGDChallenge/#one-room "idea") from  my personal challenge I've been obsessing over lately. I just need to make a few adjustments, like switching from day night cycle to dimensions with lights and no lights, and voilà!

I should note that my available time for working on the game will be limited due to other commitments. Over the weekend, I'll be away in nature, and during the work week, I'll only have mornings to dedicate to the game development. This leaves me with approximately 15 hours to complete the game, which far less then I have ever tried, but we will see. :)

As usual, I will continuously update this blog as time goes on. :)


## Table of Contents

```toc
# This code block gets replaced with the TOC
```

### Timeline

#### 0:00:00 - 2:30:00

I spent around two and a half hours playing around with designs in Inkscape and then some time in Unity creating the light rays. There were numerous approaches I could have taken, but ultimately I decided to use particle effects. This choice not only achieved the desired effect of light rays but also added a dynamic element to the scene, giving it a nice touch of liveliness. Next goal is to create a character with 6-directional movement. I've found some inspiration on the internet that I'll use as a reference for the movement ratios. 

![230](./230.png "After 2 hours and 30 minutes")

#### 2:30:00 - 5:00:00

Seems like my attention span is only two hours and thirty minutes, good to know. Anyway, the original plan was to create a character with 6-directional movement. However, I realized that without knowing the "story behind" or the concept, I wasn't sure what to draw. Rather than spending too much time pondering over it, I decided to eat the frog first. So, I jumped right into generating the hex grid. I must say, [this] (https://www.redblobgames.com/grids/hexagons/ "this") article was a godsend and provided valuable guidance. I decided to use pointy top with axial coordinates as it will allow me to simply identify neighbors.

![hexgridnotes] (./(hexgridnotes.png "Notes from hexgrid generation")

At first, I was contemplating generating just the grid in memory since it wasn't necessary for players to see it in order to play the game. However, I was curious about how to generate a visible hex grid, so I went ahead and implemented it anyway. 

![hexgridnotes1] (./(hexgridnotes1.png "Notes from finding wolrd position of hex tiles")

 I also made the decision to change the particle effects for the light because I have a slightly different vision for it. However, in order to achieve that, I will need to learn more about particle effects.