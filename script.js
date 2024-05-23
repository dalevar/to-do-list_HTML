function addTask() {
  let taskTitle = document.getElementById("task-title").value;
  let taskDesc = document.getElementById("task-desc").value;

  if (taskTitle.trim() && taskDesc.trim()) {
    // berfungsi untuk mengecek apakah inputan kosong atau tidak. trim berfungsi untuk menghapus spasi di awal dan akhir string
    let cardContainer = document.querySelector(".card-container"); // mengambil card-container
    let card = document.createElement("div"); // membuat elemen div

    card.classList.add("card-task"); // menambahkan class task ke elemen div
    card.setAttribute("id", "card-container"); // menambahkan atribut id ke elemen div

    card.innerHTML = `
                <h2 class="card-title">${taskTitle}</h2>
                <p class="text-secondary">${taskDesc}</p>
                <div class="btn-group">
                  <button class="edit-btn" onclick="editTask(this)">Edit</button>
                  <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                  <button class="complete-btn" onclick="completeTask(this)">Complete</button>
                </div>
              `; // menambahkan elemen html ke dalam elemen div card yang sudah dibuat sebelumnya

    cardContainer.appendChild(card); // menambahkan elemen card ke dalam card-container, appendChild berfungsi untuk menambahkan elemen sebagai anak dari elemen yang dipilih sebelumnya

    document.getElementById("task-title").value = ""; // mengosongkan inputan title
    document.getElementById("task-desc").value = ""; // mengosongkan inputan description
  } else if (taskTitle.value == null && taskDesc.value == null) {
    alert("Title and Description must be filled");
  }
}

function editTask(button) {
  let card = button.parentElement.parentElement; //parentElement berfungsi untuk mengambil elemen parent dari elemen yang dipilih
  let taskTitle = card.querySelector(".card-title").innerText;
  let taskDesc = card.querySelector(".text-secondary").innerText;

  document.getElementById("task-title").value = taskTitle;
  document.getElementById("task-desc").value = taskDesc;

  card.remove(); // berfungsi untuk menghapus elemen card yang dipilih
}

function deleteTask(button) {
  let card = button.parentElement.parentElement;
  card.remove();
}

function completeTask(button) {
  let card = button.parentElement.parentElement;
  card.classList.toggle("complete");
  card.setAttribute("id", "bg-complete");
}

function emptyTask() {
  let cardContainer = document.getElementById("card-container");
  cardContainer.remove();
}
