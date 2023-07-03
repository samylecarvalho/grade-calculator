function calculateGrade (event) {
    event.preventDefault();

    let gradeOne = 
        parseFloat(document.querySelector("#gradeOne").value);
    let gradeTwo = 
        parseFloat(document.querySelector("#gradeTwo").value);
    let gradeThree = 
        parseFloat(document.querySelector("#gradeThree").value);
    let gradeFour = 
        parseFloat(document.querySelector("#gradeFour").value);

    let finalGrade = 
        (gradeOne + gradeTwo + gradeThree + gradeFour) / 4;
    finalGrade = finalGrade.toFixed(1);
    document.getElementById("average").innerHTML = finalGrade;
    document.querySelector(".result-banner").style.display = "block"
}

document.querySelector(".result-banner").style.display = "none";

const gradesForm = document.querySelector(".grades-form");
gradesForm.addEventListener("submit", calculateGrade);