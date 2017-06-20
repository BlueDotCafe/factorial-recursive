var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

$(document).ready(function() {
  $("form#factorial-product").submit(function(event) {
    event.preventDefault();
    var n = parseInt($("input#numInput").val());
    var result = factorial(n);

    $(".product").text(result);

    $("#result").show();
  });
 });
