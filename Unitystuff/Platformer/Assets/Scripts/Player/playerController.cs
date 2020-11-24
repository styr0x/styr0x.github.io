using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerController : MonoBehaviour
{
    public float speed;
    public float jumpForce;
    [HideInInspector]
    public float moveDir;
    [HideInInspector]
    public bool isMoving;
    [HideInInspector]
    public bool isGrounded;
    
    bool facingRight;
    
    Rigidbody2D player;
    SpriteRenderer sprite;
    BoxCollider2D collider;

    // Start is called before the first frame update
    void Start()
    {  
        player = GetComponent<Rigidbody2D>();
        sprite = GetComponent<SpriteRenderer>();
        collider = GetComponent<BoxCollider2D>();
        moveDir = 0;
        facingRight = true;
        isGrounded = true;
        isMoving = false;
    }

    // Update is called once per frame
    void Update()
    {

    }

   void FixedUpdate()
    {
        playerMove();
        playerFlip();
        playerJump();
        print(moveDir);
    }

    void playerMove()
    {

        if (Input.GetAxis("Horizontal") > 0 || Input.GetAxis("Horizontal") < 0)
        {
            moveDir = Input.GetAxis("Horizontal");
            isMoving = true;
            player.velocity = new Vector2(moveDir * speed, player.velocity.y);
            
            
        }
        else
        {
            isMoving = false;
            moveDir = 0;
        }

        if (Input.GetAxis("Horizontal") < 0)
        {
            facingRight = false;
        }

        if (Input.GetAxis("Horizontal") > 0)
        {
            facingRight = true;
        }

    }

    void playerFlip()
    {
        if (facingRight == true)
        {
            sprite.flipX = false;
        }
        else if (facingRight == false)
        {
            sprite.flipX = true;
        }
    }


    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.name == "Tilemap")
        {
            isGrounded = true;
        }
    }

    void OnCollisionExit2D(Collision2D collision)
    {
        if (collision.gameObject.name == "Tilemap")
        {
            isGrounded = false;
        }
    }
    



    void playerJump()
    {


        if (Input.GetKey("space") && isGrounded == true)
        {
            player.velocity = new Vector2(player.velocity.x, jumpForce);
 
        }
        
    }
}
