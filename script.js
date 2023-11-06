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
const weekBtnsArr = [firstWkBtn, secondWkBtn, thirdWkBtn]; // -----------------------------

function buttonChange(btnsArr, currentBtn) {
  btnsArr.forEach((btn) => {
    if (btn !== currentBtn) {
      btn.classList.remove("buttons-clicked");
    }
    currentBtn.classList.add("buttons-clicked");
  });
}

// event listeners for week buttons

buttonChange(weekBtnsArr, firstWkBtn);
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

const geoGrades = {
  firstWeek: [],
  secondWeek: [],
  thirdWeek: [],
};
const mathGrades = {
  firstWeek: [],
  secondWeek: [],
  thirdWeek: [],
};
const engGrades = {
  firstWeek: [],
  secondWeek: [],
  thirdWeek: [],
};

// function for adding default elements to table every time it loads
function tableTitles() {
  const name = document.createElement("div");
  name.classList.add("table-name");
  name.textContent = "სახელი:";
  const surname = document.createElement("div");
  surname.classList.add("table-name");
  surname.textContent = "გვარი:";

  const weekDay1 = document.createElement("div");
  weekDay1.classList.add("table-item-title");
  weekDay1.textContent = "ორშაბათი";
  const weekDay2 = document.createElement("div");
  weekDay2.classList.add("table-item-title");
  weekDay2.textContent = "სამშაბათი";
  const weekDay3 = document.createElement("div");
  weekDay3.classList.add("table-item-title");
  weekDay3.textContent = "ოთხშაბათი";
  const weekDay4 = document.createElement("div");
  weekDay4.classList.add("table-item-title");
  weekDay4.textContent = "ხუთშაბათი";
  const weekDay5 = document.createElement("div");
  weekDay5.classList.add("table-item-title");
  weekDay5.textContent = "პარასკევი";

  studTable.append(name, surname);
  gradesTable.append(weekDay1, weekDay2, weekDay3, weekDay4, weekDay5);
}

buttonChange(subBtnsArr, geoBtn);

geoBtn.addEventListener("click", () => {
  studTable.innerHTML = "";
  gradesTable.innerHTML = "";

  tableTitles();

  buttonChange(subBtnsArr, geoBtn);
  loadTable(students, geoGrades.firstWeek);

  const grades = gradesTable.querySelectorAll(".table-item");

  grades.forEach((grade) => geoGrades.firstWeek.push(grade.textContent)); // not READY!
  console.log(geoGrades.firstWeek);
});

mathBtn.addEventListener("click", () => {
  buttonChange(subBtnsArr, mathBtn);
});

engBtn.addEventListener("click", () => {
  buttonChange(subBtnsArr, engBtn);
});

// students array
const students = [];
let nameCheck = false;
let surnameCheck = false;

// event listener for add students button
addBtn.addEventListener("click", () => {
  

  const student = {};

  myModal.style.display = "block";
  nameInput.focus();

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
          // students.push(student);
          newStudentTable(student);
          console.log(students);
          students.push(Object.assign({},student));
        }

      }
    });
  });
  confirmBtn.addEventListener("click", () => {
    if (nameInput.value !== "" && surnameInput.value !== "") {
      if (nameCheck === false) {
        student.name = nameInput.value;
      }
      if (surnameCheck === false) {
        student.surname = surnameInput.value;
        // students.push(student);
      }
      students.push(Object.assign({}, student));
      newStudentTable(student,);
      nameInput.value = "";
      surnameInput.value = "";
      myModal.style.display = "none";
    }
    console.log(students);
  });
});

// function for creating table
function newStudentTable(student, gradesArr) {
  // const currentStudent = studArr[studArr.length - 1]; // IDK why

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

  const gradeDivs = [gradeDiv1, gradeDiv2, gradeDiv3, gradeDiv4, gradeDiv5];

  gradeDivs.forEach((gradeDiv) => {
    gradeDiv.classList.add("table-item");
    editableDiv(gradeDiv);
    if (gradesArr === undefined) {
      gradeDiv.textContent = "-";
    } else {
      gradesArr.forEach((grade) => {
        gradeDiv.textContent = grade;
      });
    }
  });

  gradesTable.append(gradeDiv1, gradeDiv2, gradeDiv3, gradeDiv4, gradeDiv5);
  studTable.append(nameDiv, surnameDiv);

  // studArr.push(student);
}

// making divs editable
function editableDiv(div) {
  div.addEventListener("click", () => {
    div.setAttribute("contenteditable", "true");
    div.focus();
    div.textContent = "";
    div.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        div.removeAttribute("contenteditable");
        if (div.textContent === "") {
          div.textContent = "-";
        }
      }
    });
  });
}

// students = [
//   {
//     name: "whatever",
//     surname: "whateverenever",
//     grades: [geoGrades, mathGrades, engGrades],
//   },
// ];

// function for loading table
function loadTable(students, subject, week) {
  students.forEach((student) => {
    newStudentTable(students, subject.week);
  });
  console.log(students);
}

// 
// const someArr = [];


// function someFunc(array, firstName, lastName) {
//   const person = {};

//   person.name = firstName;
//   person.surname = lastName;

//   array.push(person);

//   console.log(array);
// };

// someFunc(someArr, "nika", "chichua");
// someFunc(someArr, "beber", "beberson");