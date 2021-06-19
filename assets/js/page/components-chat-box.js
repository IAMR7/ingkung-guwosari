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

var chats = [
  {
    text: 'Selamat datang di Ingkung Kuali, ada yang bisa kami bantu ?',
    position: 'left'
  },
  {
    text: 'Paket ingkung original nya masih ada ?',
    position: 'right'
  },
  {
    text: 'Nggih mas/mbak masih ada',
    position: 'left'
  },
];
for(var i = 0; i < chats.length; i++) {
  var type = 'text';
  if(chats[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox2', {
    text: (chats[i].text != undefined ? chats[i].text : ''),
    picture: (chats[i].position == 'left' ? '.../dist/img/avatar/avatar-5.png' : '../dist/img/avatar/avatar-2.png'),
    position: 'chat-'+chats[i].position,
    type: type
  });
}
$("#chat-form2").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox2', {
      text: me.find('input').val(),
      picture: '../dist/img/avatar/avatar-2.png',
    });
    me.find('input').val('');
  } 
  return false;
});
