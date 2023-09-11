function check() {
  //   console.log(document.querySelector("#txt").value);
  console.log(document.frm.txt.value);
  if (document.frm.txt.value.trim() == "") {
    alert("insert value...");
    document.frm.txt.focus();
    return false;
  }

  if (document.frm.txt.value.trim().length < 10) {
    alert("insert valid value");
    document.frm.txt.focus();
    return false;
  }

  let sure = confirm("Sure ?");
  if (!sure) return false;
  
  return true;
}
