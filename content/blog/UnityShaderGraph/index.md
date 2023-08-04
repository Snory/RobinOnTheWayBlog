---
title: To learn a Shader graph in Unity
date: "2023-07-19T10:00:00.000Z"
description: "Follow me along as I dive deep into the world of Shader graph, unraveling the techniques and tools to create stunning shaders and breathe life into virtual worlds"
---

This post will guide you through my journey of learning shaders in Unity. My ultimate objective is to create an environment reminiscent of the one found in 'Master of Anima.' While I aim to recreate some of its mechanics, I intend to infuse them with a unique interpretation.

## Table of Contents

```toc
# This code block gets replaced with the TOC
```

### Gabriel Tutorial

#### Portal

It was surprisingly fun and easy, contrary to my initial fears. However, the twirling effect remains a bit of a mystery to me. I expected to see colors ranging from white to black, but instead, there were all sorts of colors, which confused me in relation to the Voronoi noise effect. I may need to dive deeper into it to fully grasp how it works in combination with the other elements.

#### Fire

Fire made me question my understanding of how "UV" works in shader graphs, especially when I plugged noise into the UVs for Sample Texture 2D. To gain clarity, I connected a Vector2 node to the UVs of Sample Texture 2D, and that's when it clicked. I realized that the noise is providing a list of "UV" coordinates to the original texture, fetching colors from those positions. In essence, the "UV" node represents the original coordinates within the texture. By lerping between noise and original coordinates, you control how much the result is affected. It took me two sessions to figure this out, but the relief I felt when I finally did was worth it.

#### Moss

This one was quite interesting mainly because I learned how to apply other type of textures - normals and roughness texture. Last texture is displacement, still not sure how to apply it, but I did not even tried, so. :)

#### Cartoon water

So, after working on the last shader, I took a bit of a break when I got a new computer and decided to test its capabilities by playing games. But then, when I started working on the water shader, I felt like something was missing, as if I had forgotten some crucial information that would make everything click. It reminded me of the importance of routines when doing things, as without them, achieving true mastery is challenging.

To get that "click" moment back, I revisited the Fire shader and sketched it out to memorize the process. Now, here it is, and who knows, maybe it will come in handy in the future.

##### The click

