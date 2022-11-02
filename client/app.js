var socket = io();

$('form').on('submit', function() {
  var text = $('#message').val();
  var initials = $('#initials').val();
  var concat = initials + ' says: ' + text;
  socket.emit('message', concat);
  $('#message').val('');
  return false;
});

socket.on('message', function(msg) {
  $('<li>').text(msg).appendTo('#history');
});