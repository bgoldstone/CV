const main = () =>
  $(document).ready(function () {
    $("button").click(function () {
      $("h1").css("color", "red");
    });
  });

document.onload(main());
