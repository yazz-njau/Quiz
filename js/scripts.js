 $(document).ready(function() {
   $("#submit").click(function(event) {

    var questOne = $  ("input.radio[name=question1]:checked").val();
    var questTwo = $  ("input.radio[name=question2]:checked").val();
    var questThree = $ ("input.radio[name=question3]:checked").val();

    var yourScore = parseInt(questOne) + parseInt(questTwo) + parseInt(questThree);
    $("#yourScore").text("your score is:" + yourScore + "%");

    event.preventDefault();
    $("#quiz").hide();

    $("#yourScore").show();

  });

});
