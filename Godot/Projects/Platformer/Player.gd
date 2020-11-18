extends KinematicBody2D

#Score
var score = 0;
#Physics
var speed = 80;
var drag = 0.9;
var jumpForce = 400;
var gravity = 800;
var vel = Vector2();
var grounded = false;
#Components
onready var sprite = $Sprite;

func _physics_process(delta):
	print(grounded)
	vel.x *= drag
	if Input.is_action_pressed("move_left"):
		vel.x -= speed;
	if Input.is_action_pressed("move_right"):
		vel.x += speed;	
	vel = move_and_slide(vel, Vector2.UP);
	vel.y += gravity * delta;
	if Input.is_action_pressed("jump") and is_on_floor():
		vel.y -= jumpForce
	if vel.x < 0:
		sprite.flip_h = true;
	elif vel.x > 0:
		sprite.flip_h = false;


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
