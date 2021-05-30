P1_N = localStorage.getItem("Player_1");
P2_N = localStorage.getItem("Player_2");

P1_S = 0;
P2_S = 0;

document.getElementById("P1").innerHTML = P1_N + " :";
document.getElementById("P2").innerHTML = P2_N + " :";

document.getElementById("P1_S").innerHTML = " "+P1_S;
document.getElementById("P2_S").innerHTML = " "+P2_S;

document.getElementById("Q_T").innerHTML = "Question Turn : " + P1_N;
document.getElementById("A_T").innerHTML = "Answer Turn : " + P2_N;

function send() {
    Number_1 = document.getElementById("First").value;
    Number_2 = document.getElementById("Second").value;
    console.log(Number_1);
    console.log(Number_2);
    answer = parseInt(Number_1) * parseInt(Number_2);
    console.log("Answer = " + answer);
    Q_Number = "<h4> Q: " + Number_1 + " X " + Number_2 + "</h4>"
    input = "<br> Answer: <input type='text' id='Answer_input'>"
    button = "<br><br><button class='btn btn-info btn-sm' onclick='check()'>Check</button>"
    Final_output = Q_Number + input + button;
    document.getElementById("output").innerHTML = Final_output;
    document.getElementById("First").value = "";
    document.getElementById("Second").value = "";
}