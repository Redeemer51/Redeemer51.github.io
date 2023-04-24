//------------------------------------------------load tshirt canvas---------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById('tshir-canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  img.onload = function() {
    var scaleFactor = Math.min(canvas.width / img.width, canvas.height / img.height);
    var scaledWidth = img.width * scaleFactor;
    var scaledHeight = img.height * scaleFactor;
    var x = (canvas.width - scaledWidth) / 2;
    var y = (canvas.height - scaledHeight) / 2;
    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
  };

  img.src = 'media/tshirtcanvas.png';

  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var scaleFactor = Math.min(canvas.width / img.width, canvas.height / img.height);
    var scaledWidth = img.width * scaleFactor;
    var scaledHeight = img.height * scaleFactor;
    var x = (canvas.width - scaledWidth) / 2;
    var y = (canvas.height - scaledHeight) / 2;
    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
  });
});

  //------------------------------------------------Side bar---------------------------------------------------------------------

  document.addEventListener("DOMContentLoaded", function() {
    const sideBar = document.querySelector(".side-bar");
    const toggleArrow = document.querySelector(".toggle-arrow");
  
    // Check if the sidebar was previously closed
    const isSidebarClosed = localStorage.getItem("isSidebarClosed");
    if (isSidebarClosed === "true") {
      sideBar.classList.add("close");
    }
  
    toggleArrow.addEventListener("click", function() {
      sideBar.classList.toggle("close");
      // Update local storage with the state of the sidebar
      const isClosed = sideBar.classList.contains("close");
      localStorage.setItem("isSidebarClosed", isClosed.toString());
    });
  });

