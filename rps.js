 var userscore=0;
 var compscore=0;
 const userscore_span=document.getElementById("userscore");
 const compscore_span=document.getElementById("compscore");
 const results_div=document.querySelector(".results>p");
  const rock_button=document.getElementById("r");
 const paper_button=document.getElementById("p");
 const scissor_button=document.getElementById("s");
 const action_div=document.getElementById("action");

 function computerchoice(){
     var choices=["r","p","s"];
     var x=Math.floor(Math.random()*3);
     return choices[x];
 }

 function wordconverter(choice){
     if(choice=="r")return "ROCK";
     if(choice=="p")return "PAPER"; 
     else return "SCISSOR";
 }

 function win(userchoice,computerchoice){
     
    results_div.innerHTML=wordconverter(userchoice)+" beats "+wordconverter(computerchoice)+".<br>YOUU WIN";
    userscore++;
    userscore_span.innerHTML=userscore;
    action_div.innerHTML="YOU GOT THAT!!";
    document.getElementById(userchoice).classList.add("win_class");
    window.setTimeout(function(){ document.getElementById(userchoice).classList.remove("win_class");},500);
    if(userscore==10){
        document.write("<img src='PHOTOS/victory.png'  width=100% > ");    }
    if(compscore==10){
        document.write("<img src='PHOTOS/defeat.png'  width=100% > ");    }

 }

 function lose(userchoice,computerchoice){
    results_div.innerHTML=wordconverter(userchoice)+" loses against "+wordconverter(computerchoice)+".<br>YOU LOOSE";
compscore++;
compscore_span.innerHTML=compscore;
action_div.innerHTML="COME'ON YOU CAN DO IT..";
document.getElementById(userchoice).classList.add("lose_class");

window.setTimeout(function(){document.getElementById(userchoice).classList.remove("lose_class");},500);
if(userscore==10){
    document.write("<img src='PHOTOS/victory.png'  width=100% > ");    }
if(compscore==10){
    document.write("<img src='PHOTOS/defeat.png'  width=100% > ");    }


}

function tie(userchoice,computerchoice){
    results_div.innerHTML=wordconverter(userchoice)+" equals "+wordconverter(computerchoice)+"<br>IT'S A TIE";
    action_div.innerHTML="SO BORING,,,";
    document.getElementById(userchoice).classList.add("tie_class");

    window.setTimeout(function(){document.getElementById(userchoice).classList.remove("tie_class");},500);


}

 function game(userchoice){
    var x=computerchoice();
    switch(userchoice+x)
    {
        case "rs":
         case "sp":
        case "pr":
        win(userchoice,x);                 
            break;

        case "sr":
         case "ps":
        case "rp":
        lose(userchoice,x);
            break;

            case "rr":
         case "ss":
        case "pp":
         tie(userchoice,x);
            break;
        
        


    }
 


 
}
 
 
    
    rock_button.addEventListener("click",function(){
        game("r");
      });
      paper_button.addEventListener("click",function(){
        game("p");

    });
    scissor_button.addEventListener("click",function(){
        game("s");

    });

 

 
  