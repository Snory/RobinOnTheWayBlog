---
title: To continue on LudumDare 53
date: "2023-05-14T08:00:00.000Z"
description: "aka my notes to desinging 'Aztec calendar clash'"
---

I have had difficulty finishing my game projects in the past, as I often feel like they are missing something. This has led to a year-long hiatus from game development, but I am determined to break through this barrier. 

Even though I had originally planned to work on a different game, one that my partner and I would enjoy playing and that I could potentially convince my LAN party friends to try, I have decided to focus on finishing the game I started during Ludumdare 53. 

While I envision the final game to be in 3D, my current skills are not sufficient, so I will start with a 2D version. But before I begin planning, let`s review the feedback I received from Ludumdare 53 [ludumdare](https://ldjam.com/events/ludum-dare/53/hungerztec-games "Ludumdare 53")

As usual, I will continuously update this blog as time goes on. :)

## Table of Contents

```toc
# This code block gets replaced with the TOC
```

## Feedback

I am great at receiving feedbacks, so lets get this over with.

They dont understand how to play it. They dont know what is happening. They just dont get it.

Ok, thanks, bye.


## Gameplay

No, I don't want to be like the guy I ran into this morning when I was going to boulder. My door chip didn't work for the second time, and honestly, 
I couldn't care less about it. However, to my surprise, the cashier confronted me, asking, "Why the heck didn't you use the chip to open the door?" 
They have to open the door remotely if it cant be open. Annoyed, I replied, "Well, it didn't work twice in a row." 
To my disbelief, he retorted, "No, it worked." Confused, I reiterated, "Excuse me? I just told you it didn't work." Their response? "No, the chips are just fine..."

So in order to be better I'll take this feedback on board and sprinkle some magic dust to make the game more intuitive and understandable. 

I can handle not understanding how to play a game if there's a good tutorial available. So, I won't dwell on that aspect, as it's not directly related to the gameplay itself. However, let's address the issue of "not knowing what is happening." 
I believe that besides the underlying issue of not understanding, this could also be attributed to the game's fast pace. While it may benefit from better visual clues, it's worth noting that someone managed to finish second, and I even emerged as the winner.

### Pace of play

I found myself pondering over ways to decelerate the frantic pace of gameplay. One idea that crossed my mind was introducing a slight delay before triggering actions, 
accompanied by visual cues to signal players that something is about to unfold. 

However, in the midst of my musings, a particular passage from Keith Burgun's "Game Design Theory" sprang to my mind which shed light on an interesting aspect of the real-time strategy games. It emphasizes that even with a well-crafted strategy in place, success often boils down to the player's ability to efficiently manage their actions and perform numerous tasks within limited time frames.The fast-paced nature of these games demands swift decision-making and effective micromanagement, where every second counts. While strategic thinking remains important, the execution of actions plays a vital role in achieving victory. 

I think he wrote that turn-based strategy games are better for executing strategic gameplay. So I started thinking - how to turn the gameplay into a turn-based system? The first idea was to introduce a time limit for each round and allow the player to take both movement and attack actions. However, with a twist, the results of the attack action would be evaluated at the end of the round of next player. It was because I wanted to give the other player the ability to react and engage with the gameplay in a meaningful way. But I quickly realized that the last player would be bullied.

Another idea I had was to introduce a restriction where attacks can only be made in a clockwise direction, while also implementing a rule that prevents players from switching places with someone who has already switched places. The intention behind this concept was to create a dynamic where, with each player's turn, the available options for switching places gradually decrease. By implementing this limitation, they could no longer bullied the last player. Unfortunatelly if I were to set a time limit of, let's say, 10 seconds for each player's turn, the waiting time between rounds would 70 second if all player would be alived and I have a friend who mentioned that they would be interested in playing the game during their daily commute on the metro. It became clear that I needed to find a balance that allowed for strategic gameplay without excessive waiting periods, ensuring an enjoyable experience for players even in shorter sessions.

![PacePlan1](./PacePlan1.png "Clockwise attack idea")

While I was taking a break at work I logged in into ludumdare account and found this [game]( https://becher.itch.io/rpg-the-game-2 "game") and I liked the timeline a lot! During my train ride back home, I contemplated on how to incorporate a timeline into the game. I believed that it would provide players with the opportunity to plan their rounds simultaneously and I think I found the way. I have decided to implement a timeline divided into five periods in the game. Each player will be able to plan one action for each period. However, there will be a limitation on the number of player actions, allowing only three actions in total. This means that there will be periods where players will have to endure and potentially receive some damage. Now it takes all of the players 10 second to plan their actions. But should I show the player what other players are planning or should it remain a mystery? For sure if I will show what other are planning, it will be only information about in what period they plan something rather than what exactly they planned to keep element of uncertainity and anticipation.

![PacePlan2](./PacePlan2.png "Timeline idea")

As I continued to delve into the concept of the timeline and explore UI designs in Inkscape, I began to question the balance between strategic elements and the pacing of the game. While I wanted to enhance the strategic depth, I realized that I might have slowed down the gameplay too much. This led me to a new idea: reducing the round length to one period. This would maintain the turn-based nature of the game while bringing back a faster pace, akin to the original Ludumdare concept.

However, a new challenge arose regarding handling conflicts when two players wanted to move to the same place. If I executed actions based solely on place order and allowed switching at any time, the issue of the "last bullied" player would resurface. Previously, I had mitigated this problem by gradually reducing the available switching options, but that approach relied on non-simultaneous execution.

To address this, one potential solution I'm considering is introducing priority based on place number. By assigning priority levels to each place, conflicts can be resolved in a fair and systematic manner. This approach will require further testing to ensure it maintains a balance of fairness and strategic decision-making within the game.

