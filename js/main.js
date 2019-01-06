//Toggles the hamburger arrow menu on small screens
function toggleHam() {

     
    document.getElementById("ham").classList.toggle("is-active");

}

//For the ratings in the modal
function toggleAllButtons() {

      
    if (document.getElementById("btn5").classList.contains("btn-warning")) {


        document.getElementById("btn5").classList.add("btn-default");
        document.getElementById("btn5").classList.remove("btn-warning");
        document.getElementById("btn4").classList.add("btn-default");
        document.getElementById("btn4").classList.remove("btn-warning");
        document.getElementById("btn3").classList.add("btn-default");
        document.getElementById("btn3").classList.remove("btn-warning");
        document.getElementById("btn2").classList.add("btn-default");
        document.getElementById("btn2").classList.remove("btn-warning");
        document.getElementById("btn1").classList.add("btn-default");
        document.getElementById("btn1").classList.remove("btn-warning");

    } else {
        document.getElementById("btn5").classList.add("btn-warning");
        document.getElementById("btn4").classList.add("btn-warning");
        document.getElementById("btn3").classList.add("btn-warning");
        document.getElementById("btn2").classList.add("btn-warning");
        document.getElementById("btn1").classList.add("btn-warning");
    };



}

function toggleFourButtons() {

      
    if (document.getElementById("btn4").classList.contains("btn-warning")) {


        document.getElementById("btn5").classList.remove("btn-warning");
        document.getElementById("btn4").classList.add("btn-default");
        document.getElementById("btn4").classList.remove("btn-warning");
        document.getElementById("btn3").classList.add("btn-default");
        document.getElementById("btn3").classList.remove("btn-warning");
        document.getElementById("btn2").classList.add("btn-default");
        document.getElementById("btn2").classList.remove("btn-warning");
        document.getElementById("btn1").classList.add("btn-default");
        document.getElementById("btn1").classList.remove("btn-warning");

    } else {
        document.getElementById("btn4").classList.add("btn-warning");
        document.getElementById("btn3").classList.add("btn-warning");
        document.getElementById("btn2").classList.add("btn-warning");
        document.getElementById("btn1").classList.add("btn-warning");
        document.getElementById("btn5").classList.remove("btn-warning");
        document.getElementById("btn5").classList.add("btn-default");
    };
}

function toggleThreeButtons() {

     
    if (document.getElementById("btn3").classList.contains("btn-warning")) {


        document.getElementById("btn5").classList.remove("btn-warning");
        document.getElementById("btn4").classList.remove("btn-warning");
        document.getElementById("btn3").classList.add("btn-default");
        document.getElementById("btn3").classList.remove("btn-warning");
        document.getElementById("btn2").classList.add("btn-default");
        document.getElementById("btn2").classList.remove("btn-warning");
        document.getElementById("btn1").classList.add("btn-default");
        document.getElementById("btn1").classList.remove("btn-warning");

    } else {

        document.getElementById("btn3").classList.add("btn-warning");
        document.getElementById("btn2").classList.add("btn-warning");
        document.getElementById("btn1").classList.add("btn-warning");
        document.getElementById("btn4").classList.remove("btn-warning");
        document.getElementById("btn4").classList.add("btn-default");
        document.getElementById("btn5").classList.remove("btn-warning");
        document.getElementById("btn5").classList.add("btn-default");
    };
}

function toggleTwoButtons() {

     
    if (document.getElementById("btn2").classList.contains("btn-warning")) {


        document.getElementById("btn5").classList.remove("btn-warning");
        document.getElementById("btn4").classList.remove("btn-warning");
        document.getElementById("btn3").classList.remove("btn-warning");
        document.getElementById("btn2").classList.add("btn-default");
        document.getElementById("btn2").classList.remove("btn-warning");
        document.getElementById("btn1").classList.add("btn-default");
        document.getElementById("btn1").classList.remove("btn-warning");

    } else {
        document.getElementById("btn2").classList.add("btn-warning");
        document.getElementById("btn1").classList.add("btn-warning");
        document.getElementById("btn3").classList.add("btn-default");
        document.getElementById("btn3").classList.remove("btn-warning");
        document.getElementById("btn4").classList.remove("btn-warning");
        document.getElementById("btn4").classList.add("btn-default");
        document.getElementById("btn5").classList.remove("btn-warning");
        document.getElementById("btn5").classList.add("btn-default");
    };
}

function toggleOneButton() {

     
    document.getElementById("btn1").classList.toggle("btn-warning");
    document.getElementById("btn1").classList.remove("btn-default");
    document.getElementById("btn2").classList.remove("btn-warning");
    document.getElementById("btn2").classList.add("btn-default");
    document.getElementById("btn3").classList.remove("btn-warning");
    document.getElementById("btn3").classList.add("btn-default");
    document.getElementById("btn4").classList.remove("btn-warning");
    document.getElementById("btn4").classList.add("btn-default");
    document.getElementById("btn5").classList.remove("btn-warning");
    document.getElementById("btn5").classList.add("btn-default");

}

//When the submit button is click on the modal, show the below

function updateModal() {

    document.getElementById("submitFeedback").onclick = function () {

        document.getElementById("modalBody").innerHTML = "Thank you for your Feedback <br/> Please give us time to review your feedback so we can ensure the content posted is constructive and relevant.<br/><br/> We will inform you when your feedback is posted.";

    }

}
