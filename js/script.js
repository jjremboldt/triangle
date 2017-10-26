// Business (or back-end) logic:


// User interface (or front-end) logic:

$(document).ready(function() {
    $("form#triangle").submit(function(event) {
    var a = parseInt($("#input1").val());
    var b = parseInt($("#input2").val());
    var c = parseInt($("#input3").val());

    if (a === b && a === c) {
      $("#equi").show();
    } else if (a - b - c < 0) {
      $("#isos").show();
    } else if (a + b + c > 180) {
      $("#nat").show();
    } else {
      $("#scal").show();
    }

    event.preventDefault();
  });
});
