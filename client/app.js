var socket = io();

$('form').on('submit', function() {
  var text = $('#message').val();
  var initials = $('#initials').val();
  socket.emit('message', initials + ' says: ' + text);
  $('#message').val('');
  return false;
});

socket.on('message', function(msg) {
  $('<li>').text(msg).appendTo('#history');
});