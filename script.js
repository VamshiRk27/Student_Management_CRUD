let studentId = 1;
let students = [];

// Render Function
function renderTable(students) {
  console.log("render Table is working");
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  for (student of students) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${student.ID}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>${student.email}</td>
            <td>${student.degree}</td>
            `;
    tableBody.appendChild(row);
  }
}



// Add Student
function addStudent() {
  const studentName = document.getElementById("inputName").value;
  const studentEmail = document.getElementById("inputEmail").value;
  const studentGPA = document.getElementById("inputGPA").value;
  const studentAge = document.getElementById("inputAge").value;
  const studentDegree = document.getElementById("inputDegree").value;

  let studentObject = {
    ID: studentId,
    name: studentName,
    age: studentAge,
    grade: studentGPA,
    email: studentEmail,
    degree: studentDegree,
  };
  studentId++;
  students.push(studentObject);
  renderTable(students);
}

function addButtons(){
    const studentDegree = document.getElementById("inputDegree");
    let editButton=document.createElement('button');
    let deleteButton=document.createElement('button');
    editButton.style.backgroundColor="red";
    deleteButton.style.backgroundColor="red";
    editButton.style.color="white";
    deleteButton.style.color="white";
    editButton.style.cursor="pointer";
    editButton.innerText='Edit';
    // editButton.innerHTML=https://icons8.com/icon/9fYfwBJNoMpV/create
    deleteButton.innerText='Delete';
    studentDegree.innerHTML+=editButton;
    // document.querySelector('#inputDegree').appendChild(editButton);
    // document.querySelector('#inputDegree').appendChild(deleteButton);
    console.log("Buttons Added");
}

// Search function
document.getElementById("searchInput").addEventListener("keyup", (event) => {
  const searchValue = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  if (searchValue == "") {
    renderTable(data);
    return;
  }
  const filteredStudents = students.filter((element) => {
    const studentName = element.name.toLowerCase();
    const studentEmail = element.email.toLowerCase();
    const studentDegree = element.degree.toLowerCase();

    return (
      studentName.includes(searchValue) ||
      studentEmail.includes(searchValue) ||
      studentDegree.includes(searchValue)
    );
  });
  renderTable(filteredStudents);
});
