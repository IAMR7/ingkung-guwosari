"use strict";

var chats = [
  {
    text: 'Hi, dude!',
    position: 'left'
  },
  {
    text: 'Wat?',
    position: 'right'
  },
  {
    text: 'You wanna know?',
    position: 'left'
  },
  {
    text: 'Wat?!',
    position: 'right'
  },
  {
    typing: true,
    position: 'left'
  }
];
for(var i = 0; i < chats.length; i++) {
  var type = 'text';
  if(chats[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox', {
    text: (chats[i].text != undefined ? chats[i].text : ''),
    picture: (chats[i].position == 'left' ? '../dist/img/avatar/avatar-1.png' : '../dist/img/avatar/avatar-2.png'),
    position: 'chat-'+chats[i].position,
    type: type
  });
}

$("#chat-form").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox', {
      text: me.find('input').val(),
      picture: '../dist/img/avatar/avatar-2.png',
    });
    me.find('input').val('');
  } 
  return false;
});

// CHAT PENJUAL
var chats = [
  {
    text: 'Halo kak, Batik gamisnya ada ?',
    position: 'left'
  },
  {
    text: 'Masih ada kak, mau yang model gimana',
    position: 'right'
  },
  {
    text: 'Yang dapet kerudung dan blouse nya itu kak',
    position: 'left'
  },
  {
    text: 'Oooh itu kebetulan stoknya kosong kak, adanya yang model atasan saja',
    position: 'right'
  },
];
for(var i = 0; i < chats.length; i++) {
  var type = 'text';
  if(chats[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox2', {
    text: (chats[i].text != undefined ? chats[i].text : ''),
    picture: (chats[i].position == 'left' ? 'https://media-exp1.licdn.com/dms/image/C5103AQHuaOhr9MFJMA/profile-displayphoto-shrink_200_200/0/1538807129666?e=1628121600&v=beta&t=TwSg7xaLHzooulZbhQoXB4bce5m0_b-qdpssywcVRkY' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXQr_WMRVbfOokFa-HWqdrQGb5pDUkyoG9A&usqp=CAU'),
    position: 'chat-'+chats[i].position,
    type: type
  });
}
$("#chat-form2").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox2', {
      text: me.find('input').val(),
      picture: 'http://www.baliutd.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
    });
    me.find('input').val('');
  } 
  return false;
});

// CHAT PEMBELI
var chatsPembeli = [
  {
    text: 'Halo kak, mau tanya ingkung yang ready yang rasa apa aja ya?',
    position: 'right'
  },
  {
    text: 'Yang tampil di halaman toko, itu ready semuanya kak',
    position: 'left'
  },
  {
    text: 'Oooh kok saya gak liat yang rica rica kak',
    position: 'right'
  },
  {
    text: 'Yang bumbu rica rica nya sedang kosong',
    position: 'left'
  },
];
for(var i = 0; i < chatsPembeli.length; i++) {
  var type = 'text';
  if(chatsPembeli[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox3', {
    text: (chatsPembeli[i].text != undefined ? chatsPembeli[i].text : ''),
    picture: (chatsPembeli[i].position == 'left' ? 'https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_000-960x720-FIT_AND_TRIM-cc75c94b625065a494326affcd53ebc5.jpeg?tr=q-40,w-300,h-300&_src=imagekit' : 'assets/img/avatar/avatar-1.png'),
    position: 'chat-'+chatsPembeli[i].position,
    type: type
  });
}
$("#chat-form3").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox3', {
      text: me.find('input').val(),
      picture: 'assets/img/avatar/avatar-1.png',
    });
    me.find('input').val('');
  } 
  return false;
});

// CHAT DETAIL PRODUK DAN TOKO
var chatDetail = [
  {
    text: 'Yang rasa rica rica nya masih ada gak kak ?',
    position: 'right'
  },
  {
    text: 'Yang bumbu rica rica nya sedang kosong',
    position: 'left'
  },
];
for(var i = 0; i < chatDetail.length; i++) {
  var type = 'text';
  if(chatDetail[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox4', {
    text: (chatDetail[i].text != undefined ? chatDetail[i].text : ''),
    picture: (chatDetail[i].position == 'left' ? 'https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/tvlk-prod-cul-assets/culinary/asset/REST_000-960x720-FIT_AND_TRIM-cc75c94b625065a494326affcd53ebc5.jpeg?tr=q-40,w-300,h-300&_src=imagekit' : 'assets/img/avatar/avatar-1.png'),
    position: 'chat-'+chatDetail[i].position,
    type: type
  });
}
$("#chat-form4").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox4', {
      text: me.find('input').val(),
      picture: 'assets/img/avatar/avatar-1.png',
    });
    me.find('input').val('');
  } 
  return false;
});
