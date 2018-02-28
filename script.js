function calculateCurrentGrade() {

    var homeworkGrade = document.getElementById("homeworkPoints").value;
    var homeworkWeight = parseInt(document.getElementById("homeworkWeight").value);
    var homeworkArray = convertStringToNumber(homeworkGrade);
    var homeworkAverage = averageArray(homeworkArray);
    var homeworkTotal = (homeworkAverage * homeworkWeight) / 100;
    console.log(homeworkTotal);

    var classworkGrade = document.getElementById("classworkPoints").value;
    var classworkWeight = parseInt(document.getElementById("classworkWeight").value);
    var classworkArray = convertStringToNumber(classworkGrade);
    var classworkAverage = averageArray(classworkArray);
    var classworkTotal = (classworkAverage * classworkWeight) / 100;
    console.log(classworkTotal);

    var assessmentGrade = document.getElementById("assessmentPoints").value;
    var assessmentWeight = parseInt(document.getElementById("assessmentWeight").value);
    var assessmentArray = convertStringToNumber(assessmentGrade);
    var assessmentAverage = averageArray(assessmentArray);
    var assessmentTotal = (assessmentAverage * assessmentWeight) / 100;
    console.log(assessmentTotal);

    var participationGrade = document.getElementById("participationPoints").value;
    var participationWeight = parseInt(document.getElementById("participationWeight").value);
    var participationArray = convertStringToNumber(participationGrade);
    var participationAverage = averageArray(participationArray);
    var participationTotal = (participationAverage * participationWeight) / 100;
    console.log(participationTotal);

    var finalGrade = (participationTotal + homeworkTotal + assessmentTotal + classworkGrade);
    console.log(finalGrade);
    document.getElementById("percentage").innerHTML = participationWeight + homeworkWeight + assessmentWeight + classworkWeight + "%";
    document.getElementById("finalGrade").innerHTML = finalGrade + "%";

function convertStringToNumber(string){
        var grades = string.split(",");
        for(var i = 0; i < grades.length; i++){
            grades[i] = parseInt(grades[i]);
        }
        return grades;
    }
    function averageArray(array){
        var average = 0;
        for(var i = 0; i < array.length; i++){
            average += (array[i]);
        }
        return average/array.length;
    }
}
function calculateFinal() {
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var finalDesired = parseInt(document.getElementById("final").value);
    var currentWeight = 1 - (finalWeight / 100);
    var weightedCurrent = currentWeight;
    var finalGradeRequired = (finalDesired - weightedCurrent) / (finalWeight / 100);
    document.getElementById("gradeRequired").innerHTML = finalGradeRequired.toString() + "% required to get a " + finalDesired;
    console.log(finalGradeRequired);
}