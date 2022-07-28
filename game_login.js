function login(){
    nam1 =document.getElementById("input1").value;
    nam2 =document.getElementById("input2").value;
    localStorage.setItem("nam01",nam1);
    localStorage.setItem("nam02",nam2);
    window.location="game_page.html"
}