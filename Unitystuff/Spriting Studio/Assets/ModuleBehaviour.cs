using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ModuleBehaviour : MonoBehaviour
{

    public bool rotating = false;


    private void Update()
    {
        if (!rotating)
        {
            if (Input.GetKeyDown(KeyCode.A))
            {
                rotating = true;
                StartCoroutine(RotatePlatform(45));
            }
            if (Input.GetKeyDown(KeyCode.D))
            {
                rotating = true;
                StartCoroutine(RotatePlatform(-45));
            }
        }
    }

    private IEnumerator RotatePlatform(float dir)
    {
        Vector3 target = new Vector3(0, (transform.eulerAngles.y + dir + 360) % 360, 0);
        while (Mathf.Abs(transform.eulerAngles.y - target.y) >= Mathf.Abs(dir * Time.deltaTime * 2))
        {
            transform.Rotate(new Vector3(0, dir, 0) * Time.deltaTime);
            yield return null;
        }
        transform.eulerAngles = target;
        rotating = false;
    }
}