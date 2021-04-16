//Imports
import {Box} from "./lib/box.js";
import {Player} from "./lib/player.js";
import {MouseClass} from "./lib/mouse.js";

//Bövs fö att p5 ska funk me module
window.setup = setup;
window.draw = draw;

export let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    MouseConstraint = Matter.MouseConstraint,
    Bodies = Matter.Bodies,
    Runner = Matter.Runner,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Events = Matter.Events;

export let engine, canvas, world, ground, box1, mouse, player;


function setup() {
      canvas = createCanvas(800, 600);
      engine = Engine.create();
      world = engine.world;
      Runner.run(engine);
      ground = new Box(0, 500, 1600, 250, 0,0,255, true);
      player = new Player(400, 0, 25, 25, 255,0,0, false);
      World.add(world, ground);
      mouse = new MouseClass();
    }

    function draw(){

      background(0, 100, 0,);

      ground.draw();

      player.draw();

    } 