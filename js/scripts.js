$(document).ready(function(){
  $("form").submit(function(event){
    var name = $("input#name").val().toUpperCase();
    var date = $("input#date").val();
    var start = $("input#start").val();
    var end = $("input#end").val();

    $(".name").text(name);
    $(".date").text(date);
    $(".start").text(start);
    $(".end").text(end);
    $(".name").css("font-weight", "bold");
    $(".date").css("font-weight", "bold");
    $(".date").css("font-size", "20px");

    $("#confirm").show();
    event.preventDefault();
  });
  $("form").submit(function(){
    $("form").hide();
  });
});
