---
title: To Gamedev.tv game jam
date: "2023-05-20T10:00:00.000Z"
description: "notes from taking gamedev.tv game jam"
---


I've signed up for a week-long [gamejam](https://itch.io/jam/gamedevtv-jam-2023? "gamejam") called GameDevTV Jam 2023 because they're offering a free course on their site just for participating and submitting a game!

Now, I'm not saying I'm addicted to tutorials or anything like that. I believe I've moved past that stage. But they have courses on Blender and drawing, which could be interesting additions to my skill set. I mean, who knows? Besides, the theme of the game jam is "Life in 2 dimensions," which perfectly aligns with an [idea](https://robinontheway.com/30DayGDChallenge/#one-room "idea") from  my personal challenge I've been obsessing over lately. I just need to make a few adjustments, like switching from day night cycle to dimensions with lights and no lights, and voilà!

I should note that my available time for working on the game will be limited due to other commitments. Over the weekend, I'll be away in nature, and during the work week, I'll only have mornings to dedicate to the game development. This leaves me with approximately 15 hours to complete the game, which far less then I have ever tried, but we will see. :)

As usual, I will continuously update this blog as time goes on. :)


## Table of Contents

```toc
# This code block gets replaced with the TOC
```

### Timeline

I will now share a breakdown of my work sessions, highlighting the duration of each session rather than specific hourly increments.

#### Session 0 - 2:30 (2:30 in total)

I spent around two and a half hours playing around with designs in Inkscape and then some time in Unity creating the light rays. There were numerous approaches I could have taken, but ultimately I decided to use particle effects. This choice not only achieved the desired effect of light rays but also added a dynamic element to the scene, giving it a nice touch of liveliness. Next goal is to create a character with 6-directional movement. I've found some inspiration on the internet that I'll use as a reference for the movement ratios. 

![230](./230.png "After 2 hours and 30 minutes")

#### Session 1 - 2:30 (5 in total)

Seems like my attention span is only two hours and thirty minutes, good to know. Anyway, the original plan was to create a character with 6-directional movement. However, I realized that without knowing the "story behind" or the concept, I wasn't sure what to draw. Rather than spending too much time pondering over it, I decided to eat the frog first. So, I jumped right into generating the hex grid. I must say, [this](https://www.redblobgames.com/grids/hexagons/ "this") article was a godsend and provided valuable guidance. I decided to use pointy top with axial coordinates as it will allow me to simply identify neighbors.

![hexgridnotes](./hexgridnotes.png "Notes from hexgrid generation")

At first, I was contemplating generating just the grid in memory since it wasn't necessary for players to see it in order to play the game. However, I was curious about how to generate a visible hex grid, so I went ahead and implemented it anyway. 

![hexgridnotes1](./hexgridnotes1.png "Notes from finding wolrd position of hex tiles")


I also made the decision to change the particle effects for the light because I have a slightly different vision for it. However, in order to achieve that, I will need to learn more about particle effects.

#### Session 2 - 1:00 (6 in total)

During the day, I contemplated the capacity of players to remember and associate sounds with positions. While ChatGPT might suggest the idea of a "ducktilion" (which seems highly unlikely), I do not think so.A hexgrid of range 2 would need to accommodate 19 distinct sounds, which is already a considerable number.

While I was out shopping, an idea struck me. Instead of assigning a unique sound to each hex in the game, what if I only assigned sounds to the hexes surrounding the player within a range of two? As the player moves, the range would also move. Whenever an object within the range is interacted with, the corresponding tone would play. If an object within the range subsequently moves, the tone would be played again. This approach would require the player to remember only 19 tones and provide an opportunity for them to improve their skills over time. I also pondered the idea of integrating a handy minimap into the game. This nifty feature would give players a quick glimpse of their current position within the hexgrid, ensuring they always have their bearings. Moreover, the thought of empowering players to customize the assigned tones themselves crossed my mind. This would allow for a personal touch, letting players choose tones that resonate with their preferences and enhance their overall gameplay experience.

![plana](./plana.png "Range with minimap")

#### Session 3 - 3:00 (9 in total)

I initially struggled with deciding how to move the hex grid in my game. I couldn't come up with a clear solution at first. Should the player be responsible for movement while the camera follows them, or should the grid itself handle the movement? Eventually, I settled on the idea of moving the grid itself. I am going to implement a system where each node on the grid has an assigned "occupant." When the grid moves, it triggers a method on each node to adjust its world position. If a node has an occupant, their position will also be aligned with the new world position of the node. I considered placing the occupant under the node in the hierarchy, but I then the child would also be scaled which is not something I want.

![movinggrid](./movinggrid.png "Notes from thinking about moving grid")

After this initial struggle, I noticed that the movement was opposite along the Y-axis. It took me almost an hour and a half to realize that the problem lied in the Unity axis system, where Y is positive towards the top, while my algorithm assumed Y to be negative at the top. I considered correcting the algorithm to align with the Unity axis system, but instead, I decided to adjust the direction of movement to avoid messing with the algorithm itself.

So, halfway through the allotted time, it feels like I haven't accomplished much at all. Next step is going to be show range of the "dimension hearing" after player is moved. 

#### Session 4 - 0:30 (9:30 in total)

I adjusted the algorithm for converting world positions to hexgrid positions to align it with Unity's Y-axis, where positive values point upward. This change helped prevent unnecessary headaches and improved the smoothness of navigation.

![hextogrid](./hextogrid.png "Notes from converting world position to hex")

The grid movement is now functional. In my next session, I plan to implement keyboard controls and work on the promised highlights for the current range of "dimension hearing". Additionally, I'm considering propagating the current neighboring nodes to the layer, allowing the "arrows" indicating possible directions to be toggled on/off when there are no available places to step on. 

#### Session 5 - 1:30 (11:00 in total)

I have successfully implemented the mechanism for highlighting nodes. However, I encountered an issue with the sorting order of the hex tiles during the process. The sprite, being in "3D", appears as stairs instead of a flat surface when not aligned properly. I will need to address this problem and ensure the tiles are correctly positioned for a seamless visual experience. 

Boy, with only four days remaining until the end of the game jam, I have to start waking up at 3 am to put in some serious work.

#### Session 6 - 1:00 (12:00 in total)

Here comes the hero! While walking in nature with my all-knowing partner, we came across lily pads in the river. Suddenly, an idea struck me: "What if the hex tiles in the game are represented as lily pads and the main character is a frog?" And so, the story unfolds—a frog emerges from the pond, existing on the edge of two dimensions.

Where there is a hero, there is hope.

![lilipads](./lilipads.png "Lilipads") 

And indeed, when you step on a lily pad, it can now produce a "delightful" sound, and the highlight functionality is working as well. Next session, I plan to focus on creating some enemies for the game.

#### Session 7 - 1:00 (13:00 in total)

As promised, I have added monsters to the mix. They are now capable of generating themselves on the "pond" and make their presence known by playing a "dimensional tone" assigned to the lily pad. The next step is to program the interaction between the player and the enemies. When the player moves and an enemy is within the highlighted range, the enemy should notify the player of its presence. This should be relatively straightforward since I have already assigned audio clips to highlighted lily pads. I just need to ensure that the "MonsterMover," as I call it, is aware of the player's movement. This will trigger the movement of the monsters and result in the corresponding audio clip being played.

![firstmonsters](./firstmonsters.png "First monsters") 

#### The story

I asked the chatgpt to write me a story about the game and here it is:

Once upon a time, in a hidden cave deep within the heart of a mystical forest, there existed a unique pond. This pond was unlike any other, for it sat on the edge between two realms—the realm of light and the realm of darkness. Within this pond resided a solitary frog, whose duty was to guard the delicate balance between the two realms.

The frog, known as Kermit, was not an ordinary amphibian. He possessed the ability to illuminate the pond whenever he touched a lily pad. However, only the lily pad he touched would shine, casting a soft glow in the otherwise pitch-black cave. The lilypads, connected to another dimension by their roots, each emitted a distinct tone when someone stepped on them in the alternate realm.

Kermit's responsibility was to ensure that no one from the alternate dimension crossed over into his realm through the enchanted pond. He knew that they were aware of his presence and would try to eliminate him before attempting to cross over. Determined to fulfill his duty, Kermit remained ever vigilant, perched on a large lilypad at the center of the pond.

