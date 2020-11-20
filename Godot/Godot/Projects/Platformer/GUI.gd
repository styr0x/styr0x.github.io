extends Control

onready var healthBar = $HealthBar

var player;

func _process(delta):
	getInfo();
	updateHealth();

func getInfo():
	player = get_parent().get_parent().get_parent().get_node("Player")
	
func updateHealth():
	healthBar.value = player.currentHealth;
	healthBar.max_value = player.maxHealth;	
