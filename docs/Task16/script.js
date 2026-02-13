const userList = document.getElementById("userList");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const searchInput = document.getElementById("search");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

let users = [];
let currentPage = 1;
const perPage = 4;

// Fetch users
async function fetchUsers() {
  try {
    loading.style.display = "block";
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("API error");

    users = await res.json();
    render();
  } catch (err) {
    error.textContent = "Failed to load data.";
  } finally {
    loading.style.display = "none";
  }
}

// Render users with pagination + search
function render() {
  const searchText = searchInput.value.toLowerCase();

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(searchText)
  );

  const start = (currentPage - 1) * perPage;
  const pageUsers = filtered.slice(start, start + perPage);

  userList.innerHTML = pageUsers.map(u => `
    <div class="card">
      <h3>${u.name}</h3>
      <p><b>Email:</b> ${u.email}</p>
      <p><b>City:</b> ${u.address.city}</p>
      <p><b>Company:</b> ${u.company.name}</p>
    </div>
  `).join("");

  pageInfo.textContent = `Page ${currentPage} / ${Math.ceil(filtered.length / perPage)}`;
}

// Pagination
prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    render();
  }
};

nextBtn.onclick = () => {
  const maxPage = Math.ceil(users.length / perPage);
  if (currentPage < maxPage) {
    currentPage++;
    render();
  }
};

// Search
searchInput.oninput = () => {
  currentPage = 1;
  render();
};

fetchUsers();
