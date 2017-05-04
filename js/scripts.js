$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();



    alert("After the leapyear")

    var year = parseInt($("input#year").val());

    var leapYear = function(year) {
      alert("Just before if")
      if (year % 4 === 0)
       return true;}
    //  } else {
    //    return false;
    //  };
     var result = leapYear(year);

    $("#result").text(result);

  });
});
