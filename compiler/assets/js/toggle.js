$(document).ready(function () {
  $("#toggleSwitch").click(function (e) {
    e.preventDefault();
    var status = $("#toggle").val();
    if (status == "dark") {
      $("#toggle").val("light");
      $("body").removeClass("dark");
      $("body").addClass("light");
      $(".toggleText").removeClass("light-text");
      $(".toggleText").addClass("dark-text");
      $("#myCheck").prop("checked", true);
    } else {
      $("#toggle").val("dark");
      $("body").removeClass("light");
      $("body").addClass("dark");
      $(".toggleText").removeClass("dark-text");
      $(".toggleText").addClass("light-text");
      $("#myCheck").prop("checked", false);
    }
    console.log(status);
  });

  $("#shareBtn").click(function () {
    $("#myModal").modal({
      backdrop: "static",
    });
  });
  
});
