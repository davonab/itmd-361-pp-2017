$(document).ready(function() {
  var doorbell = new Audio('media/doorbell.mp3');
  //if a user has JavaScript, then delete the audio
  $("#dbell").remove();
  // when the nav id is pressed, the doorbell will ring
  $('#doorbell-ring').on('click', function(){
    ringDoorbell();
  });
  // ring doorbell when the key "d" is pressed
  $(document).on("keypress", function(press){
    if (press.key === "d") {
      ringDoorbell();
    }
  });
  function ringDoorbell() {
    doorbell.play();
  }
});
