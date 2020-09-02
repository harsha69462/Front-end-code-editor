document.onkeydown = function (e) {
        if (
          e.ctrlKey &&
          (
            e.keyCode === 85 ||
            e.keyCode === 117)
        ) {
          return false;
        } else {
          return true;
        }
      };
      $(document).keypress("u", function (e) {
        if (e.ctrlKey) {
          return false;
        } else {
          return true;
        }
      });
      function renderPreview(type) {
        var doc =
          "<!DOCTYPE html>\n<html>\n<head>\
  <meta charset='utf-8' />\
  <style>\n" +
          cssBox.value +
          "\n</style>\
  <link rel='stylesheet' href='assets/css/bootstrap.min.css'>\
<link rel='stylesheet' href='assets/css/bootstrap-grid.min.css'>\
<link rel='stylesheet' href='assets/css/bootstrap-reboot.min.css'>\
<script src='assets/js/jquery.min.js'><\/script>\
  </head>\
  <body>\
  " +
          htmlBox.value +
          "\n<script>\n" +
          jsBox.value +
          "\n<\/script>\
  <\/body>\
  <\/html>";
        type == "f"
          ? (document.body.innerHTML = doc)
          : (previewBox.srcdoc = doc);
      }
      function loadData() {
        if (location.hash.length > 1) {
          var data = location.hash.substr(1).split(":"),
            type;
          (type = data[0]), (data = JSON.parse(window.atob(data[1])));
          htmlBox.value = data.html;
          cssBox.value = data.css;
          jsBox.value = data.js;
          renderPreview(type);
        }
      }
      function copyToClipboard() {
        var copyText = document.getElementById("myInput");
        var changeText = document.getElementById("copybtn");
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand("copy");
        changeText.value = "copied!";
      }
      function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
      }
      function changeBtn() {
        var changeText = document.getElementById("copybtn");
        changeText.value = "copy";
      }
      function showLink(type) {
        var str =
          location.protocol +
          "//" +
          location.host +
          location.pathname +
          "#" +
          (type || "e") +
          ":" +
          window.btoa(
            JSON.stringify({
              html: htmlBox.value,
              css: cssBox.value,
              js: jsBox.value,
            })
          );
        document.getElementById("myInput").value = str;
        console.log(str);
      }
      shareBtn.onclick = showLink;
      runBtn.onclick = renderPreview;
      // document.body.oninput =
      loadData();
    