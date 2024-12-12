let inputBox = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let listContainer = document.querySelector(".list-name");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputBox.value === "") {
    alert("Please Enter Task");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value;
    listContainer.appendChild(listItem);
    let closeBtn = document.createElement("a");
    listItem.appendChild(closeBtn);
    closeBtn.innerHTML = '<i class="ri-close-line"></i>';
  }
  inputBox.value = "";
  saveTask();
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTask();
    } else if (e.target.tagName === "I") {
      e.target.parentElement.parentElement.remove();
      saveTask();
    }
  },
  false
);

function saveTask() {
  localStorage.setItem("task", listContainer.innerHTML);
}

function loadTask() {
  listContainer.innerHTML = localStorage.getItem("task");
}

loadTask();