---
title: "Leaderboard update!"
date: 2024-01-5
draft: false
description: "Leaderboard update #1"
slug: "leaderboard-update"
tags: ["leaderboard-update", "blog", "leaderboard", "firstupdate"]
---
{{< alert "steam" >}}
If you haven't already, [WISHLIST](https://store.steampowered.com/app/2749370/Fishermans_Palace/) the game on steam.
{{< /alert >}}

Hello everyone, hope You are doing wonderfully. Today we have a brand new update on our leaderboards. 

Currently the plan is to have the leaderboards automatically update each day on the amount of points each contestant has gathered throughout the day.

Each contestant has it's own skill level in fishing and in tournaments, and apart from that, is the form. His form can influence his skill, thus making the competition
more fierce, changing and challenging.

You as a player can take advantage of this with the correct strategy and planning, and obviously good fishing.

Here is the current timeline of the Leaderboard mechanic.

{{< timeline >}}

{{< timelineItem icon="bell" header="Implementation" >}}
Implement the TEST leaderboard ui and import 10 random contestants, each with it's own unique name, faction and skill level.
{{< gallery >}}
  <img src="leaderboardupdateimages/1.png" class="grid-w33" />
{{< /gallery >}}
{{< /timelineItem >}}


{{< timelineItem icon="bug" header="Test stuff added" >}}
Add a TEST faction color, a TEST badge to each individual contestant.
{{< gallery >}}
  <img src="leaderboardupdateimages/2.png" class="grid-w33" />
{{< /gallery >}}
{{< /timelineItem >}}

{{< timelineItem icon="code" header="Point generation" >}}
Now figure out the algorithm for having the player generate points(for obvious purposes i will not be explaining that any further :)
{{< gallery >}}
  <img src="leaderboardupdateimages/3.png" class="grid-w33" />
{{< /gallery >}}
{{< /timelineItem >}}

{{< timelineItem icon="code" header="Accolades" >}}
Make it so that when the season ends, there's a huge crowd crowning the winners, the top 3 will get all of the accolades, while the rest will have to try harder next season!
{{< gallery >}}
  <img src="leaderboardupdateimages/5.png" class="grid-w33" />
{{< /gallery >}}
{{< /timelineItem >}}

{{< timelineItem icon="code" header="The final version won't look like this i swear!" >}}
Apart from the usual celebrations full of crowds, and obviously rewards like coins and baits, fishing rods and what not, the top 3 contestants will receive
a custom name plate for that entire season.
{{< gallery >}}
  <img src="leaderboardupdateimages/4.png" class="grid-w33" />
{{< /gallery >}}
{{< /timelineItem >}}
{{< /timeline >}}

That is currently what's been done, we have a lot of plans for the future (take this with the grain of salt.) 
but adding tournaments will be the next thing that needs to be done. Having contestants go once a week and compete against the player for some additional points, which can
increase your chances of becoming a champion!

But yes that is all I have for you this update, stay tuned for the main menu update, probably by the end of the week with some sneak pics from that as well. 

{{< typeit 
  tag=h1
  lifeLike=true
>}}
Thanks for reading!
{{< /typeit >}}