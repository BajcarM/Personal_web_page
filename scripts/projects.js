export const projects = [
  {
    name: "Visualization-Pathfinder-Algorithm",
    linkPage: "https://bajcarm.github.io/Visualization-Pathfinder-Algorithm/",
    linkGithub: "https://github.com/BajcarM/Visualization-Pathfinder-Algorithm",
    article: `
        Algorithm will find the <b>shortest paths</b> between 3 given
        points. (start -> middle stop -> end)<br>
        <b>Nodes are movable</b> via click and drag, paths will change
        accordingly. See the algorithm step by step. <br>I used mainly
        JavaScript and some CSS for styling.`,
  },
  {
    name: "Maze_Generator",
    linkPage: "https://bajcarm.github.io/Maze_Generator/",
    linkGithub: "https://github.com/BajcarM/Maze_Generator",
    article: `
        Visualize how <b>random maze</b> is created step by step.
        Press Start and the drill will make you a new random maze.<br> 
        Uses <b>Recursive backtracker algorithm</b>.<br>   
        Best fits big screens.`,
  },

  {
    name: "Visualizer_Sight_and_Obstacles",
    linkPage: "https://bajcarm.github.io/Visualizer_Sight_and_Obstacles/",
    linkGithub: "https://github.com/BajcarM/Visualizer_Sight_and_Obstacles",
    article: `
        Just a little project to visualize the line of sight - or shadow.<br>
        Place some Walls and then the Lightbulb.<br>    
        <b>Tiles will change color</b> based on walls shadow.<br>
        I used JavaScript to compute the visibility, based on the <b>angle</b> between every Tile, Wall and Lightbulb.`,
  },
  //   {
  //     name: "Visualizer_Sight_and_Obstacles",
  //     linkPage: "https://bajcarm.github.io/Visualizer_Sight_and_Obstacles/",
  //     linkGithub: "https://github.com/BajcarM/Visualizer_Sight_and_Obstacles",
  //     article: `
  //         Yust a little project to visualize line of sight - or shadow.<br>
  //         Place some Walls and then the Lightbulb.
  //         <br><b>Tiles will change color</b> based on walls shadow.<br>
  //         I used JS to compute the visibility based on the angle between every Tile, Wall and Lightbulb.`,
  //   },
  {
    name: "Game_Mouse_In_Maze",
    linkPage: "https://bajcarm.github.io/Game_Mouse_In_Maze/",
    linkGithub: "https://github.com/BajcarM/Game_Mouse_In_Maze",
    article: `
        A prototype. Implemented <b>joystick for touchscreen</b>.<br>
        <b>Modular</b> platform so more games can be easily added as JS objects. Now there is only this game in the menu. Just four times - as a placeholder. <br>   
        Control mouse by click and drag or with joystick on touchscreens.    
        Maze will resize in respond to screensize. Number of cheeses will adjust too. (1 or 3).<br>    
        I used the maze algorithm from my previous project Maze_Generator.`,
  },
  {
    name: "Drag_and_Drop_game",
    linkPage: "https://bajcarm.github.io/Drag_and_Drop_game/",
    linkGithub: "https://github.com/BajcarM/Drag_and_Drop_game",
    article: `
        Choose how many rows and columns you want and press <b>SHUFFLE</b> button. Then you can play and reconstruct the image. Works on <b>touchscreens</b> too.<br>
        You can increase the number of tiles so make it harder.
        Shuffle uses sequence of many random moves so every time image CAN be reconstructed.`,
  },
];
