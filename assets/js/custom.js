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
var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var uploadDaftarUmkmSatu = document.getElementById('upload-daftar-umkm-1');
      uploadDaftarUmkmSatu.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var loadFileDua = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var uploadDaftarUmkmDua = document.getElementById('upload-daftar-umkm-2');
      uploadDaftarUmkmDua.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

var loadFileTiga = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var uploadDaftarUmkmTiga = document.getElementById('upload-daftar-umkm-3');
      uploadDaftarUmkmTiga.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};