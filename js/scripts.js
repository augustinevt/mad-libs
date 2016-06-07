$(document).ready(function()  {
  $("form").submit(function(event) {
    event.preventDefault();
    var blanks = ['person1','person2','animal','exclamation','verb','noun'];
    //
     for(var i=0; i < blanks.length; i++){
      var userInput = $('#blanks #' + blanks[i]).val();
      // alert('#blanks #' + blanks[i]);
      $('#story' + ' .' + blanks[i]).text(userInput);
      }
    // var inputperson1 = $("input#person1").val();
    // var inputperson2 = $("input#person2").val();
    // var inputanimal = $("input#animal").val();
    // var inputexclamation = $("input#exclamation").val();
    // var inputverb = $("input#verb").val();
    // var inputnoun = $("input#noun").val();
    //
    // $(".person1").text(inputperson1);
    // $(".person2").text(inputperson2);
    // $(".animal").text(inputanimal);
    // $(".exclamation").text(inputexclamation);
    // $(".verb").text(inputverb);
    // $(".noun").text(inputnoun);

    $("#story").show();


  });
});
