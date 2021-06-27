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
