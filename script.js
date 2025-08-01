document.addEventListener("DOMContentLoaded", function () {
  // Lottie animation
  lottie.loadAnimation({
    container: document.getElementById('laptop-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'laptop.json'
  });

  // Redirection function
  function goToPortfolio() {
    window.location.href = "Main.html";
  }

  // ENTER key press (for desktops)
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      goToPortfolio();
    }
  });

  // Button click (for mobile)
  const enterButton = document.getElementById("enter-btn");
  if (enterButton) {
    enterButton.addEventListener("click", function () {
      goToPortfolio();
    });
  }
});
