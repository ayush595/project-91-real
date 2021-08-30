function adduser() {
name1= document.getElementById("name1").value ;
name2= document.getElementById("name2").value ;
localStorage.setItem("name1", name1);
localStorage.setItem("name2", name2);
window.location= "index.html";

}
function send() {
    number1= document.getElementById("word").value;
    number2=document.getElementById("word2").value

    actual_answer= parseInt(number1) * parseInt(number2);


    question_no= "<h4>" + number1 + " X " + number2 + "</h4>";
    inputbox= "<br>Answer : <input type='text' id='inputbox'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row= question_no + inputbox + check_button;


    document.getElementById("container-que").innerHTML= row;

    document.getElementById("no.1").value= "";
    document.getElementById("no.2").value= "";
}