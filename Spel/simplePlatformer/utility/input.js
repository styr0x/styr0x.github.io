    
        export let moveDirX = 0;
        export let moveDirY = 0;
        document.onkeydown = (function(e) {
            if (e.code == "ArrowLeft") moveDirX = -1;
            if (e.code == "ArrowRight") moveDirX = 1;

            if (e.code == "ArrowUp") moveDirY = -1;
            if (e.code == "ArrowDown") moveDirY = 1;
            console.log("you have pressed ", e.code);
            console.log(moveDirX, moveDirY)
        }).bind(this);
        
        document.onkeyup = (function(e) {
            if (e.code == "ArrowLeft") moveDirX = 0;
            if (e.code == "ArrowRight") moveDirX = 0;
            if (e.code == "ArrowUp") moveDirY = 0;
            if (e.code == "ArrowDown") moveDirY = 0;
            console.log("you have released ", e.code);
        }).bind(this);

