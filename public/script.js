document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleTheme");
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
