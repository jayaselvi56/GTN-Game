let guessno=document.querySelector(".guessno")
    let result=document.querySelector(".result")
    let checkBtn = document.querySelector(".check-btn")
    let randnum=Math.floor(Math.random()*10)+1
    let score=document.querySelector(".score")
    let totalscore=10
    


    checkBtn.addEventListener("click",() => {
        guessno.value= ""
    })

    function check(){
        let enternum = guessno.value

        if(randnum==enternum){
            result.textContent="Correct !";
            result.style.webkitTextStroke = "1px  rgb(41, 161, 17)"
            result.style.fontSize = "bold"
            totalscore=totalscore+1;
            score.textContent="Score :"+totalscore;
            alert("YOU WIN!");
            
        }else if (randnum <= 0 && enternum === !1) {
            result.textContent='Enter a Correct Number';
            result.style.color = "rgb(202, 102, 20)"
        }
        else if(enternum < 0){
            result.textContent='Enter a Possitive Number';
            result.style.color = "rgb(112, 39, 79)"
        }
        else if(enternum > 10){
            result.textContent = "Enter the number between 1-10"
            result.style.color = "rgb(202, 102, 20)"
        }
        else{
            result.textContent="Wrong, try again"
            result.style.color = "red"
            result.style.webkitTextStroke = "1px rgb(160, 20, 20)"
            result.style.fontSize = "bold"
            totalscore=totalscore-1;
            score.textContent="Score :"+totalscore;
        }
        
    }

    function scores() {
        if (enternum < 0) {
            result.textContent='Enter a correct Number';
        }
    }
    
