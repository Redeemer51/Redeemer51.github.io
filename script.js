//------------------------------------------------load tshirt canvas---------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {


    const canvas = document.getElementById('tshir-canvas');
		const ctx = canvas.getContext('2d');
		
		const img = new Image();
		img.src = 'tshirtcanvas.png';
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
  
    toggleArrow.addEventListener("click", function() {
      sideBar.classList.toggle("close");
    });
  });


document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("tshir-canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "tshirtcanvas.png";

    img.onload = function() {
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
    // Set the red value to 255
    data[i + 2] = 2;
  }

  ctx.putImageData(imageData, 0, 0);
};
  });

