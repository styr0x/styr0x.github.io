extends KinematicBody2D

#Playern
onready var player = $AnimatedSprite;
#Rukasi
var speed = 20;
var drag = 0.9;
var jumpForce = 300;
var gravity = 981;
var vel = Vector2();
#Health damage osv
var currentHealth = 100;
var maxHealth = 100;
#Enemy
var enemy;
# Called when the node enters the scene tree for the first time.
func _ready():
	pass;

#Allt som har me flyttas å animeras att göra
func _physics_process(delta):
	getInfo();
	movePlayer(delta);
	animatePlayer();
#He som flyttar duudn
func movePlayer(delta):
	vel.x *= drag
	vel.y += gravity * delta;
	vel = move_and_slide(vel, Vector2.UP);

	if Input.is_action_pressed("move_left"):
		vel.x -= speed;

		
	if Input.is_action_pressed("move_right"):
		vel.x += speed;

		
	if Input.is_action_pressed("jump") and is_on_floor():
		vel.y -= jumpForce;
#Animerar duudn		
func animatePlayer():
		
	if vel.x == 0 and vel.y == 0 and is_on_floor():
		player.play("idle"); 
	
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
	elif vel.y > 13 and !is_on_floor():
		player.play("fall");
	elif vel.x < 0 and vel.x > -50 and is_on_floor() or vel.x > 0 and vel.x < 50 and is_on_floor():
		player.play("idle");
		
	if vel.x < 0:
		player.flip_h = true;
	
	elif vel.x > 0:
		player.flip_h = false;	
		

	

func damagePlayer():
	currentHealth -=5;
	vel.x += enemy.moveDir * 4 
	vel.y -= jumpForce / 3;
	player.play("damaged");
	if currentHealth <= 0:
		playerDie();

func playerDie():
	player.play("die");
	print("Yadead")
	

func getInfo():
	enemy = get_parent().get_node("Enemy");
