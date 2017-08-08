 function toggleBetween(word,def) {

    $(word).click(function()
    {
      $(word).toggle();
      $(def).toggle();
    });
    $(def).click(function()
    {
      $(def).toggle();
      $(word).toggle();
    });
}

$(document).ready(function() {

toggleBetween("#JavaScript","#def1");
toggleBetween("#Variables","#def2");
toggleBetween("#Functions","#def3");
toggleBetween("#Methods","#def4");
toggleBetween("#Arguments","#def5");
toggleBetween("#Parameters","#def6");
toggleBetween("#Return","#def7");
toggleBetween("#Chaining-methods","#def8");
toggleBetween("#Strings","#def9");
toggleBetween("#Booleans","#def10");
toggleBetween("#Undefined","#def11");
toggleBetween("#NaN","#def12");
toggleBetween("#Escape","#def13");
toggleBetween("#Alert","#def14");
toggleBetween("#Comments","#def15");
toggleBetween("#jQuery","#def16");
toggleBetween("#Attributes","#def17");



});

  /*
  $("#clickable2").click(function() {
    $("#Operators").toggle();
    $("#def2").toggle();
  });

  $("#clickable3").click(function() {

  $("#clickable4").click(function() {

    $("#Variables").toggle();
    $("#Functions").toggle();
    $("#Methods").toggle();
    $("#Arguments").toggle();
    $("#Parameters").toggle();
    $("#Return").toggle();
    $("#Chaining-methods").toggle();
    $("#Strings").toggle();
    $("#Booleans").toggle();
    $("#Undefined").toggle();
    $("#NaN").toggle();
    $("#Escape").toggle();
    $("#Alert").toggle();
    $("#Comments").toggle();
    $("#jQuery").toggle();
    $("#Attributes").toggle();



    $("#def3").toggle();
    $("#def4").toggle();
    $("#def5").toggle();
    $("#def6").toggle();
    $("#def7").toggle();
    $("#def8").toggle();
    $("#def9").toggle();
    $("#def10").toggle();
    $("#def11").toggle();
    $("#def12").toggle();
    $("#def13").toggle();
    $("#def14").toggle();
    $("#def15").toggle();
    $("#def16").toggle();
    $("#def17").toggle();
    $("#def18").toggle();
    $("#def19").toggle();

  });
  */
