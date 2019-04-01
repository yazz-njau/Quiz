 $(document).ready(fuction(){

   $("#submit").click(fuction(event) {
    var questOne = $ ("input.radio[name=question1]:checked"):val();
    var questTwo = $ ("input.radio[name=question2]:checked"):val();
    var questThree = $ ("input.radio[name=question3]:checked"):val();

    var yourScore =perseInt(questOne)+perseInt(questTwo)+perseInt(questThree);
    $("#yourScore").text("your score is:" + your score + "%");

    $("#quiz").hide();
    $("#yourScore").show();
    event.preventDefault();
  });

});
