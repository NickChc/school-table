// QUERYING ITEMS FROM HTML

// button for adding students
const addBtn = document.querySelector("#addBtn");

// modal elements
const myModal = document.querySelector("#myModal");
const nameInput = document.querySelector("#studName");
const surnameInput = document.querySelector("#studSurname");
const confirmBtn = document.querySelector("#confirmStudAdd");

// grades table
const gradesTable = document.querySelector("#grades");
const grades = gradesTable.querySelectorAll(".table-item");

// students table
const studTable = document.querySelector("#studTable");

// buttons for choosing subject
const geoBtn = document.querySelector("#geoBtn");
const mathBtn = document.querySelector("#mathBtn");
const engBtn = document.querySelector("#engBtn");

// buttons for choosing week
const firstWkBtn = document.querySelector("#firstWeek");
const secondWkBtn = document.querySelector("#secondWeek");
const thirdWkBtn = document.querySelector("#thirdWeek");

// function for buttons to change color onclick
const subBtnsArr = [geoBtn, mathBtn, engBtn];
const weekBtnsArr = [firstWkBtn, secondWkBtn, thirdWkBtn];

function buttonChange(btnsArr, currentBtn) {
  btnsArr.forEach((btn) => {
    if (btn !== currentBtn) {
      btn.classList.remove("buttons-clicked");
    }
    currentBtn.classList.add("buttons-clicked");
  });
}

// event listeners for week buttons

firstWkBtn.addEventListener("click", () => {
  buttonChange(weekBtnsArr, firstWkBtn);
});

secondWkBtn.addEventListener("click", () => {
  buttonChange(weekBtnsArr, secondWkBtn);
});

thirdWkBtn.addEventListener("click", () => {
  buttonChange(weekBtnsArr, thirdWkBtn);
});

// event listeners for subjects buttons

const geoGrades = [];
const mathGrades = [];
const engGrades = [];

geoBtn.addEventListener("click", () => {
  buttonChange(subBtnsArr, geoBtn);

  grades.forEach((grade) => geoGrades.push(grade.textContent)); // not READY!
  console.log(geoGrades);
});

mathBtn.addEventListener("click", () => {
  buttonChange(subBtnsArr, mathBtn);
});

engBtn.addEventListener("click", () => {
  buttonChange(subBtnsArr, engBtn);
});

// students array
const students = [];

// event listener for add students button
addBtn.addEventListener("click", () => {
  let nameCheck = false;
  let surnameCheck = false;
  myModal.style.display = "block";
  nameInput.focus();
  const student = {};
  nameInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      if (nameInput.value !== "") {
        student.name = nameInput.value;
        nameCheck = true;
        surnameInput.focus();
      }
    }
    surnameInput.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        if (surnameInput.value !== "") {
          student.surname = surnameInput.value;
          surnameCheck = true;
          nameInput.value = "";
          surnameInput.value = "";
          myModal.style.display = "none";
          students.push(student);
          newStudentTable(students);
        }
      }
    });
  });
  confirmBtn.addEventListener("click", () => {
    if (nameInput !== "" && surnameInput !== "") {
      if (nameCheck === false) {
        student.name = nameInput.value;
      }
      if (surnameCheck === false) {
        student.surname = surnameInput.value;
        students.push(student);
      }
      newStudentTable(students);
      nameInput.value = "";
      surnameInput.value = "";
      myModal.style.display = "none";
    }
  })
});


// function for creating table
function newStudentTable(studArr) {
  studArr.forEach((student) => {
    const nameDiv = document.createElement("div");
    const surnameDiv = document.createElement("div");

    nameDiv.textContent = student.name;
    surnameDiv.textContent = student.surname;

    nameDiv.classList.add("table-item");
    surnameDiv.classList.add("table-item");

    const gradeDiv1 = document.createElement("div");
    const gradeDiv2 = document.createElement("div");
    const gradeDiv3 = document.createElement("div");
    const gradeDiv4 = document.createElement("div");
    const gradeDiv5 = document.createElement("div");

    gradeDiv1.classList.add("table-item");
    gradeDiv1.textContent = "-";
    gradeDiv2.classList.add("table-item");
    gradeDiv2.textContent = "-";
    gradeDiv3.classList.add("table-item");
    gradeDiv3.textContent = "-";
    gradeDiv4.classList.add("table-item");
    gradeDiv4.textContent = "-";
    gradeDiv5.classList.add("table-item");
    gradeDiv5.textContent = "-";

    gradesTable.append(gradeDiv1, gradeDiv2, gradeDiv3, gradeDiv4, gradeDiv5);
    studTable.append(nameDiv, surnameDiv);
  });
}
