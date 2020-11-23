using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerController : MonoBehaviour
{
    public float speed;
    public float jumpForce;
    float moveDir;
    bool facingRight;
    bool isGrounded;
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
    }

    void playerMove()
    {
        if (Input.GetKey("right"))
        {
            facingRight = true;
            moveDir = 1;
            player.velocity = new Vector2(moveDir * speed, player.velocity.y);
            
            
        }
        
        if (Input.GetKey("left"))
        {
            facingRight = false;
            moveDir = -1;
            player.velocity = new Vector2(moveDir * speed, player.velocity.y);


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
