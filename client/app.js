var socket = io();

$('form').on('submit', function() {
  var text = $('#message').val();
  var name = $('#initials').val();
  socket.emit('initials', name);
  socket.emit('message', text);
  $('#initials').val('');
  $('#message').val('');
  return false;
});

socket.on('message', function(msg) {
  $('<li>').text(msg).appendTo('#history');
});