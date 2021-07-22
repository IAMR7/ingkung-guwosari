"use strict";

$("#swal-1").click(function() {
	swal('Hello');
});

$("#swal-2").click(function() {
	swal('Terima Kasih!', 'Pesanan anda akan segera diproses', 'success');
  setTimeout(function(){ 
    window.location.href = "invoice.html";
  }, 1500);
});

$("#swal-3").click(function() {
	swal('Good Job', 'You clicked the button!', 'warning');
});

$("#swal-4").click(function() {
	swal('Good Job', 'You clicked the button!', 'info');
});

$("#swal-5").click(function() {
	swal('Good Job', 'You clicked the button!', 'error');
});

$("#swal-6").click(function() {
  swal({
      title: 'Yakin lanjut membeli produk ini ?',
      text: 'Setelah menekan "OK" anda tidak dapat membatalkan pesanan',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      swal('Pesanan anda segera di proses ! Terimakasih telah memesan melalui Ingkung Guwosari', {
        icon: 'success',
      });
      setTimeout(function(){ 
        window.location.href = "pantau-pesanan.html";
      }, 1500);
      } else {
      swal('Anda membatalkan pesanan');
      }
    });
});

$("#swal-7").click(function() {
  swal({
    title: 'What is your name?',
    content: {
    element: 'input',
    attributes: {
      placeholder: 'Type your name',
      type: 'text',
    },
    },
  }).then((data) => {
    swal('Hello, ' + data + '!');
  });
});

$("#swal-8").click(function() {
  swal('This modal will disappear soon!', {
    buttons: false,
    timer: 3000,
  });
});

$("#swal-edit-profil-akun").click(function() {
	swal('Berhasil !', 'Data anda berhasil diperbaharui', 'success');
  setTimeout(function(){ 
    window.location.href = "profil-akun.html";
  }, 1500);
});

$("#swal-edit-info-umkm").click(function() {
	swal('Berhasil !', 'Informasi UMKM berhasil diperbaharui', 'success');
  setTimeout(function(){ 
    window.location.href = "info-umkm.html";
  }, 1500);
});

$("#swal-ubah-password").click(function() {
	swal('Berhasil !', 'Kata Sandi anda berhasil diubah', 'success');
  setTimeout(function(){ 
    window.location.href = "profil-akun.html";
  }, 1500);
});

$("#swal-batal-transaksi").click(function() {
  swal({
      title: 'Yakin ingin membatalkan transaksi ?',
      text: 'Setelah menekan "OK" transaksi akan dibatalkan',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      swal('Transaksi sukses dibatalkan ! Terimakasih', {
        icon: 'success',
      });
      setTimeout(function(){ 
        window.location.href = "index-1.html";
      }, 1500);
      } else {
      swal('Gagal Membatalkan');
      }
    });
});

$("#swal-beranda-umkm").click(function() {
	swal('Anda harus mendaftar sebagai UMKM terlebih dahulu');
  setTimeout(function(){ 
    window.location.href = "daftar-umkm.html";
  }, 1500);
});

$("#swal-daftar-umkm").click(function() {
  swal({
      title: 'Apakah Data Sudah Valid ?',
      text: 'Setelah menekan "OK" pendaftaran akan langsung divalidasi oleh tim Admin',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      swal('Pendaftaran Berhasil Dilakukan! Mulailah dengan mengunggah produk anda', {
        icon: 'success',
      });
      setTimeout(function(){ 
        window.location.href = "dashboard-penjual.html";
      }, 2500);
      } else {
      swal('Membatalkan Pendaftaran UMKM');
      }
    });
});

$("#swal-simpan-produk").click(function() {
  swal({
      title: 'Apakah Produk Sudah Benar ?',
      text: 'Setelah menekan "OK" produk akan langsung masuk kedalam daftar',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      swal('Produk Berhasil Ditambahkan! Silahkan melihat kembali daftar produk', {
        icon: 'success',
      });
      setTimeout(function(){ 
        window.location.href = "kelola-produk.html";
      }, 2500);
      } else {
      swal('Membatalkan menyimpan produk');
      }
    });
});