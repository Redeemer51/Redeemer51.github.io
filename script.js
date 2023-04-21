// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// const fileInput = document.getElementById('image-upload');

// fileInput.addEventListener('change', function(e) {
//   const file = e.target.files[0];
//   const reader = new FileReader();

//   reader.onload = function(e) {
//     const img = new Image();
//     img.onload = function() {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
//     }
//     img.src = e.target.result;
//   }

//   reader.readAsDataURL(file);
// });


// // Get the canvas element and its context
// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');

// // Add event listener to the image upload input
// var imageUpload = document.getElementById('image-upload');
// imageUpload.addEventListener('change', handleImageUpload);

// // Handle image upload
// function handleImageUpload(event) {
//   var file = event.target.files[0];
//   var fileType = file.type;
//   var fileSize = file.size;
//   var validFileTypes = ["image/jpeg", "image/png", "image/gif"];
//   var maxFileSize = 5000000; // 5MB
//   if (validFileTypes.indexOf(fileType) === -1) {
//     alert("Invalid file type. Please upload a JPEG, PNG, or GIF image.");
//     return;
//   }
//   if (fileSize > maxFileSize) {
//     alert("File size exceeds the limit. Please upload a smaller file.");
//     return;
//   }
//   var reader = new FileReader();
//   reader.onload = function(event) {
//     var image = new Image();
//     image.onload = function() {
//       context.drawImage(image, 0, 0);
//     }
//     image.src = event.target.result;
//   }
//   reader.readAsDataURL(file);
// }