var table = document.querySelectorAll("table")[1];
var length = table.querySelectorAll("tr").length;
for (var i = 1; i < length; i++) {
  try {
    var row = table.querySelectorAll("tr")[i];
    if (row.getAttribute("bgcolor") != "#CCDDFF") {
      var text_num = row.querySelectorAll("td")[12].textContent;
      var text_name = row.querySelectorAll("td")[13].textContent.replace(/\s/g, '').replace(/◎/g, '');
      console.log("剩餘人數：" + text_num + " 授課教師：" + text_name);
    }
  } catch (err) {}
}
