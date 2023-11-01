// QUERYING ITEMS FROM HTML

// button for adding students

const addBtn = document.querySelector("#addBtn");

// grades table

const gradesTable = document.querySelector("#grades");
const grades = gradesTable.querySelectorAll(".table-item");


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


// event listener for add students button
addBtn.addEventListener("click", () => {
  
});




