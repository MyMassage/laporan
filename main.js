function toggleNav() {
  document.querySelector(".nav-links").classList.toggle("active");
  }
  function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("active");
  }
  // Fungsi Logout
  function logout() {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userData");
      window.location.href = 'login.html';
  }