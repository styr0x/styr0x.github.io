extends KinematicBody2D

#Score
var score = 0;
#Physics
var speed = 50;
var drag = 0.9;
var jumpForce = 400;
var gravity = 800;
var vel = Vector2();
var grounded = true;
#Components
onready var player = $AnimatedSprite;
# Called when the node enters the scene tree for the first time.
func _ready():
	player.play("idle");# Replace with function body.

#Själva gameloop behavior
func _physics_process(delta):
	movePlayer(delta);
	animatePlayer(delta);


		
	if vel.x < 0:
		player.flip_h = true;
	
	elif vel.x > 0:
		player.flip_h = false;

func movePlayer(delta):
	vel.x *= drag
	vel = move_and_slide(vel, Vector2.UP);
	vel.y += gravity * delta;
	

	
	if Input.is_action_pressed("move_left"):
		vel.x -= speed;

		
	if Input.is_action_pressed("move_right"):
		vel.x += speed;

		
	if Input.is_action_pressed("jump") and is_on_floor():
		vel.y -= jumpForce;
		
func animatePlayer(delta):

	if Input.is_action_pressed("move_left") and is_on_floor():
		player.play("walk");
	elif Input.is_action_just_released("move_left") and is_on_floor():
		player.play("idle");
		
	if Input.is_action_pressed("move_right") and is_on_floor():
		player.play("walk");
	elif Input.is_action_just_released("move_right") and is_on_floor():
		player.play("idle");	
		
	if Input.is_action_pressed("jump") and is_on_floor():
		player.play("jump");
	elif vel.y > 13.333334 and !is_on_floor():
		player.play("fall");
		
	print(vel.x, vel.y)
	
