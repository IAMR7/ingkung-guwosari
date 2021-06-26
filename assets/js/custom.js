"use strict";

// Untuk input quantity auto increments
$(document).ready(function(){

    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
                
    
              
                // Increment
            
        });
    
        $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
        
});

// Chat popup
function bukaChat() {
    document.getElementById("popup-chat").style.display = "block";
    document.getElementById("tombol-tutup-chat").style.display = "block";
    document.getElementById("tombol-chat").style.display = "none";
}
  
function tutupChat() {
    document.getElementById("popup-chat").style.display = "none";
    document.getElementById("tombol-chat").style.display = "block";
}

// countdown timer verifikasi
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {

        seconds = parseInt(timer % 31, 10);

        display.text(seconds);

        if (--timer < 0) {
            timer = duration;
        }

    }, 1000);
}

// Fungsi Hitungan Mundur
jQuery(function ($) {
    var tigapuludetik = 31,
        display = $('#time');
    startTimer(tigapuludetik, display);
});

//Multi Upload Daftar UMKM
var previewGambar = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var uploadGambarSatu = document.getElementById('upload-gambar-1');
      uploadGambarSatu.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var previewGambarDua = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var uploadGambarDua = document.getElementById('upload-gambar-2');
      uploadGambarDua.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var previewGambarTiga = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var uploadGambarTiga = document.getElementById('upload-gambar-3');
      uploadGambarTiga.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var previewGambarEmpat = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var uploadGambarEmpat = document.getElementById('upload-gambar-4');
      uploadGambarEmpat.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

function uploadFile (data) {
    // define data and connections
var blob = new Blob([JSON.stringify(data)]);
var url = URL.createObjectURL(blob);
var xhr = new XMLHttpRequest();
xhr.open('POST', 'myForm.php', true);

    // define new form
var formData = new FormData();
formData.append('someUploadIdentifier', blob, 'someFileName.json');
    
    // action after uploading happens
xhr.onload = function(e) {
    console.log("File uploading completed!");
};

    // do the uploading
console.log("File uploading started!");
xhr.send(formData);
}

// This data/text below is local to the JS script, so we are allowed to send it!
uploadFile({'hello!':'how are you?'});