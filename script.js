// tshirt canvas

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d'); 

var imageUpload = document.getElementById('image-upload');
imageUpload.addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    var file = event.target.files[0];
}