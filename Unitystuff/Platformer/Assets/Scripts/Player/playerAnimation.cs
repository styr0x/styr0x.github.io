using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerAnimation : MonoBehaviour
{
    Animator animation;
    playerController playerControllerScript;
    // Start is called before the first frame update
    void Start()
    {
        animation = GetComponent<Animator>();
        playerControllerScript = GetComponent<playerController>();
    }

    void Update()
    {
        
    }

    private void FixedUpdate()
    {
        animate();

    }

    void animate()
    {
        if (playerControllerScript.isMoving)
        {
            animation.Play("playerWalk");
        }
        else
        {
            animation.Play("playerIdle");
        }

        if (playerControllerScript.isGrounded == false)
        {
            animation.Play("playerJump");
        }
    }
}
