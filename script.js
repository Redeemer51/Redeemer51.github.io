//------------------------------------------------load tshirt canvas---------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {


    const canvas = document.getElementById('tshir-canvas');
		const ctx = canvas.getContext('2d');
		
		const img = new Image();
		img.src = 'media/tshirtcanvas.png';
		img.onload = function() {
		  canvas.width = img.width;
		  canvas.height = img.height;
		  ctx.drawImage(img, 0, 0);
		};
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

