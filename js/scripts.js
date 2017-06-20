function factorial(num) {
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num === 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}

$(document).ready(function() {
  $("form#factorial-product").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#numInput").val());
    var result = factorial(num);

    $(".product").text(result);

    $("#result").show();
  });
 });
