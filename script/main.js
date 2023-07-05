function updateDateTime() {
  const dateTimeElement = document.getElementById("dateTime");
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // Ditambahkan 1 karena bulan dimulai dari 0
  var year = currentDate.getFullYear();

  // Format tanggal (dd/mm/yyyy)
  var formattedDate = day + "/" + month + "/" + year;
  dateTimeElement.textContent = formattedDate;
}
updateDateTime();

function updateUserInfo(user) {
  const userInfoElement = document.getElementById("userInfo");
  userInfoElement.innerHTML = `<i class="fas fa-user"></i> ${user}`;
}

// Call the function initially with a sample user
updateUserInfo("Pak Slamet");

function changePage(page) {
  // Remove active class from all navigation links
  const links = document.querySelectorAll(".sidebar a");
  links.forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to the clicked link
  const clickedLink = event.target;
  clickedLink.classList.add("active");

  // Update the page content based on the selected page
  if (page === "beranda") {
    document.getElementById("pageContent").innerHTML = `
    <div class="analytics-container">
      <div class="analytics-row">
        <div class="analytics-item">
          <div class="analytics-value">12</div>
          <div class="analytics-label">Jumlah Penghuni Kost</div>
        </div>
        <div class="analytics-item">
          <div class="analytics-value">12</div>
          <div class="analytics-label">Jumlah Kamar Kost</div>
        </div>
        <div class="analytics-item">
          <div class="analytics-value">12</div>
          <div class="analytics-label">Jumlah Komplain</div>
        </div>
      </div>
      <div class="analytics-row">
        <div class="analytics-item">
          <div class="analytics-value">12</div>
          <div class="analytics-label">Jumlah Tagihan</div>
        </div>
        <div class="analytics-item">
          <div class="analytics-value">1.000.000</div>
          <div class="analytics-label">Total Pendapatan</div>
        </div>
      </div>
    </div>
  `;
  } else if (page === "kamar kost") {
    document.getElementById("pageContent").innerHTML = "<h2>Kamar Kost Page</h2>";
  } else if (page === "penghuni kost") {
    document.getElementById("pageContent").innerHTML = "<h2>Penghuni Kost Page</h2>";
  } else if (page === "tagihan kost") {
    document.getElementById("pageContent").innerHTML = "<h2>Tagihan Kost Page</h2>";
  } else if (page === "laporan") {
    document.getElementById("pageContent").innerHTML = "<h2>Laporan Page</h2>";
  } else if (page === "komplain") {
    document.getElementById("pageContent").innerHTML = "<h2>Komplain Page</h2>";
  } else if (page === "akun penghuni") {
    document.getElementById("pageContent").innerHTML = "<h2>Akun Penghuni Page</h2>";
  }

  // Update the header title
  document.getElementById("headerTitle").textContent = page.charAt(0).toUpperCase() + page.slice(1);
}
