// Load Lottie animation (Laptop Opening)
document.addEventListener("DOMContentLoaded", function () {
    const animation = lottie.loadAnimation({
        container: document.getElementById('laptop-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'laptop.json' // Make sure this is present in same folder
    });

    console.log("✅ Animation loaded:", animation);
});
// Detect ENTER key to switch sections
function goToPortfolio() {
    window.location.href = "Main.html";
  }

  // ENTER key for desktop
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      goToPortfolio();
    }
  });

  // Mobile button click (inside DOMContentLoaded to ensure element exists)
  const enterBtn = document.getElementById("enter-btn");
  if (enterBtn) {
    enterBtn.addEventListener("click", goToPortfolio);
  }
});
