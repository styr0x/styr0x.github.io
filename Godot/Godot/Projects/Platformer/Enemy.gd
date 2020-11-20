extends KinematicBody2D
#Vem ere
onready var blob = $AnimatedSprite;
# Rörelsestuff
var jumpForce = 300;
var gravity = 981;
var vel = Vector2();
var distanceTravelled = 0;
var moveDir = 20;
#Damage health stuff
var health = 30;
var damage = 10;
#Positions
var playerPosX;
var selfPosX;
#Player
var player;
# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.
	

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _physics_process(delta):
	checkPlayerCollision();
	getInfo();
	moveBlob(delta);
	
func moveBlob(delta):
	vel.y += gravity * delta;
	vel = move_and_slide(vel, Vector2.UP);
	distanceTravelled += 1
	vel.x = moveDir
	
	if distanceTravelled == 100:
		moveDir = moveDir *-1;
		distanceTravelled = 0;
		
	if moveDir == 20:
		blob.flip_h = false;
	elif moveDir == -20:
		blob.flip_h = true;
		
	if playerPosX - selfPosX < 100 and playerPosX - selfPosX > 0:
		moveDir = 20;
	elif playerPosX - selfPosX > -100 and playerPosX - selfPosX < 0:
		moveDir = -20;
	else:
		pass

func getInfo():
	player = get_parent().get_node("Player");
	playerPosX = get_parent().get_node("Player").position[0];
	selfPosX = get_node(".").position[0];

func checkPlayerCollision():
	for i in get_slide_count():
		var collision = get_slide_collision(i)
		if collision.collider.name == "Player":
			player.damagePlayer();
