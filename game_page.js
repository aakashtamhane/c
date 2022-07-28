player1=localStorage.getItem("nam01");
player2=localStorage.getItem("nam02");
player1score=0;
player2score=0;
document.getElementById("nam001").innerHTML=player1+"-";
document.getElementById("nam002").innerHTML=player2+"-";
document.getElementById("score1").innerHTML=player1score;
document.getElementById("score2").innerHTML=player2score;
document.getElementById("question").innerHTML="Question Turn-"+player1;
document.getElementById("answer").innerHTML="Answer Turn-"+player2;
function send(){
    word =document.getElementById("word").value;
    question=word.toLowerCase();
    char1=question.charAt(1);
    divby2=Math.floor(question.length/2);
    char2=question.charAt(divby2);
    lensub1=question.length-1;
    char3=question.charAt(lensub1);
    console.log(char1,char2,char3);
    nochar1=question.replace(char1,"_");
    nochar2=nochar1.replace(char2,"_");
    nochar3=nochar2.replace(char3,"_");
    console.log(nochar3);
    questionword="<h4 id='word_display'>Q. "+ nochar3+"</h4>";
    inputbox="<br>Answer.<input type='text' id='input_check_box'>";
    checkbutton="<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
    rightrow=questionword+inputbox+checkbutton;
    document.getElementById("output").innerHTML=rightrow;
    document.getElementById("word").value ="";
}
qturn="player1";
aturn="player2";
function check(){
    getanswer=document.getElementById("input_check_box").value;
    aman=getanswer.toLowerCase();
    if(aman==question){
        if(aturn=="player1"){
            player1score=player1score+1;
            document.getElementById("score1").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("score2").innerHTML=player2score;
        }
    }
    if(qturn=="player1"){
        qturn="player2";
        document.getElementById("question").innerHTML="Question Turn-"+player2;
    }
    else{
        qturn="player1";
        document.getElementById("question").innerHTML="Question Turn-"+player1;
    }
    if(aturn=="player1"){
        aturn="player2";
        document.getElementById("answer").innerHTML="Answer Turn-"+player2;
    }
    else{
        aturn="player1";
        document.getElementById("answer").innerHTML="Answer Turn-"+player1;
    }
    if(aman==question){
    document.getElementById("output").innerHTML="<h1> "+aturn+" won</h1>";
    }
    else{
        document.getElementById("output").innerHTML="<h2>Word was wrong</h2>";
    }
    setTimeout(() => {
        document.getElementById("output").innerHTML="";
    }, 1000);
}