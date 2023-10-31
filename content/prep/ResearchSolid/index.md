---
title: To research SOLID principles
date: "2023-05-14T08:00:00.000Z"
description: "aka my notes from researching SOLID principles"
tags: ["Research"]
---

![PacePlan2](./PacePlan2.png "Timeline idea")


## Table of Contents

```toc
# This code block gets replaced with the TOC
```


## What is it about

Solid principles

* Single responsibility (SRP)
* Open / closed (OCP)
* Liskov substition (LSP)
* Interface segregation (ISP)
* Dependency inversion (DIP)

Think aboud PDD when thinking about applying SOLID. 

PDD (Pain driven development) - write your code the simpliest technique you know. Applying SOLID in advance is premature optimization. If current design is painful to work with, use principles to guide redesign

### Our case to study

As you can guess from the rest of the blog I am tyring to learn how to make games in my free time, therefore I am not going to focus on "business" examples, but rather on "game development" examples, as it is closer to my hearth. :)

```csharp
public class Enemy
{
    public int health { get; protected set; }

    public void TakeDamage(int damage)
    {
        health -= damage;
        if (health <= 0)
        {
            // Enemy is defeated
        }
    }
}
```

## Single responsibility

As I undrestand it means that each class/function should have only one responsibility and therefore only one reason to change. So, lets break it down.

### What is class?

(Baby dont hurt me)

Class is blueprint for creating objects. It defines what object should look like (variables) and what it does (methods). In other words it can tell us what application can do and how does it do.

As it is somehow related to the rest, we should also discuss coupling, cohesion and separation of concern.

#### Coupling

Bind two or more details together. 

Loose copuling > modular way to choose which details are involed in a particular operation

#### Cohesion

Class elements that belong together are cohesive. So for example if I have class where some fields are used only for some methodes, but not for the rest, it means it can be probably separated as it has low cohesion


#### Separation of concern

Separation > business logic does not care how the data are stored (keeping plumbing code from business)

### What is responsibility?

I think we could say that if we know "how" the class handle something, it means it is responsbile for it. So if the class know how to handle input from player and also how to handle attack, it is responsible for these two things - handling inputs and handling attacks.

### What is reason to change?

I believe that reason to change is tightly coupled to its responsibilities. More responsibility it has the more axes for change it has.

Let say that someone will come to you at tell you that you dont want to handle inputs from keyboard, but from gamepad. Doing the changes means you can also break logic for attacks, or other collegue from your team who is working on attack will later have to merge changes for inputs which are not related to what he was doing.., and also tester will have to test also the attacks, as it is part of the class.

### How to achieve single responsibility principle?

Each class should have one and only one reason to change. It does that through separation of "WHAT" and "HOW" which is done by delegation and encapsulation.

#### Delegation

#### Encapsulation

### How do I know that I am violating SRP?

## Open/Closed principle

Classes/Functions should be open for extension, but close for modification. Ok, lets break it down again.

?? inheritance
 - (virtual)
 - IS-A relationship, enagle IS-A bird
?? properities
?? abstraction
?? composition / injection
 - its own class
 - also part of single responsibility
?? extension methods
?? strategy design pattern
?? factory design pattern

### What is extension?

Easy to add new behavior. 

### What is modification?

Not necessary to modify source code. Why do we want it? Lees likely introduce bugs, simplier code

### When we need to extend?

Ok, se we know what is extension and what does it mean modification. So in another words we would like to extend the behavior without touching the source code. It is like building new floor of the building without touching the existing structure.


## Liskov substition

"Subtypes must be substitutable for their base types"

This one sounds scary, but it is not. 

Provide guidance for inheritance. Also provide code wich better follow open closed principle
    -- protože to odstraní type checking, tj. ifíky

?? null object pattern

-- když se některé property chovají jinak pro potomky, než pro předky
-- částečně implementované metody (interface segregation principle)
    ?? interface segregation

IS-SUBSTITABLE-FOR

### When to correct violation LSP

?? tell, dont ask principle
    ?? dont ask instance for their type, but tell instance to perform action

## Interface segregation

How we should design and use interface. Clients (calling code) should not be forced on method that they dont use.
 -- preferace small, cohesive interfaces to fat once

Classes then depend on something they dont need or use.

?? adapter design pattern
?? interface inheritance

## Dependency inversion

Critical for loosely coupled, build on several other principles.

High-level moduls should not depend on low level modules. Both should depend on abstraction.

Abstraction should not depend on detail.

Detail should depend on abstraction.

Compile time vs runtime dependencies

?? High level
    - busines rulles, more abstracted
    - processed oriented
    - futher from IO

?? low level
    - closer to the metal (i/o)
    - so called "plumbing" code

?? what is an abstraction in c#
    - interfaces
    - abstract base classes
    - describe what, not how
        - send a message
        - store a customer reccord
?? details
    - desribe "how"

?? new = glue > lead to tight copuling and also means direct dependencies

?? achieved by dependency injection 
    - implementation of (strategy design pattern)