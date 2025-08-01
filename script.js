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
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    window.location.href = "Main.html";
    document.body.classList.add("fade-out");

    setTimeout(()=>{
     document.getElementById("intro").style.display = "none";
     document.getElementById("main-portfolio").classList.remove("hidden")
      
    },1000);
    
  }
});
