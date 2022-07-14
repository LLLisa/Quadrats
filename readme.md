# Quadrats

Let's start with a simple gameplay example on a 3x3 grid. As you can see in the image below, a grid is made of tiles, and a tile can have different attributes, such as color, character, and shape. There will be dozens of available tile attributes that are randomized on tile generation. There is also a pool of tiles to swap into the grid which can be re-randomized any time.

![image](/roadmap/wireframes/quadrats1.png)

Every time a tile is placed or moved, the game will calulate the score. Scoring is based on what tiles are present and in what configuration. In the example above, the only score generated is for having the notes of the B Major chord (B, D#, and F#) present:

![image](/roadmap/wireframes/quadrats2.png)

If we do a bit of rearranging, we can also get points for having the french flag configuration (the red, white, and blue tiles at the bottom). Configurations like this must be placed in exactly this way; the 3 tiles arranged in reverse or vertically would not score.

![image](/roadmap/wireframes/quadrats3.png)

As you can see, the scoring circumstances are additive. In this example, we get points for the B Major chord plus the points for the French flag in the same grid. If we do a bit more rearranging...

![image](/roadmap/wireframes/quadrats4.png)

Now we're getting somewhere! We've got three X shapes in a row, which gives us tic-tac-toe!. But remember, we have a pool of random tiles we can choose from, let's try switching one out.

![image](/roadmap/wireframes/quadrats6.png)

Ok, now we are getting points for having the sum of all numbers present being prime, but we lost the points we were getting from the French flag. We can fix that though...

![image](/roadmap/wireframes/quadrats7.png)

And now we have 800 points! Perhaps we've reached a point threshold?

## Point Thresholds

When the game starts, you have a 1x1 grid containing one tile, guaranteed by the game logic to generate no points. You will also have a pool, say three tiles, and at least one of them will generate a score when placed on the grid. Doing so is the first scoring threshold, and achieving it will transform your grid into a 2x2 grid.

The actual thresholds will be decided by playtesting, but the point is that each threshold expands your grid and opens up new scoring opportunities and gives you a greater pool of random tiles to swap in. For example, your grid must be at least 3x3 before you can score a French flag. If your grid is 8x8, you could get points for an entire musical scale, or perhaps a larger flag. Maybe you fill a 3x3 grid within your 16x16 grid with a winning tic-tac-toe game. The opportunities for scoring are vast, and they grow with your grid.

Speaking of growing, at a certain point, say, when you reach 8x8 grid, the game will switch from 2D mode to 3D mode because guess what, these tiles are actually 2-sided and now you can see the other side of the tiles and of the board itself. From here on, both sides of the board are scored, adding some very interesting strategic depth.

Then, maybe when you reach 16x16 or 32x32 grid, these 2-sided tiles turn into 6-sided cubes and the board itself turns into a 6-sided grid cube with all sides of the cube being scored. At this point, you can have scoring patterns that span the entire grid cube and even interact with each other: Say you have a French flag on one said and a Union Jack on the opposite side, you might get a score called 'The 100 Years' War', or perhaps you use only black and white tiles to make the grid cube look like a giant 6-sided die. The possibilities are endless.

The game doesn't really have an end. At some point the grid cube will be as large as can be reasonably rendered, but we don't know where that will be yet. Even then, the player will be free to keep playing and keep trying to find obscure and high-scoring configurations.
