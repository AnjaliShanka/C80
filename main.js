var students=[];
function submit(){
    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;
    students.push(name_1);
    students.push(name_2);
    students.push(name_3);
    students.push(name_4);
    console.log(students);
    document.getElementById("LoL").innerHTML =students;
     document.getElementById("buttonsubmit").style.display = "none";
      document.getElementById("sortit").style.display = "inline-block";
}
function sorting(){
    students.sort();
    console.log(students);
    document.getElementById("LoL").innerHTML =students;
}