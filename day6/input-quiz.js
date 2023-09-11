function check() {
  console.log(document.quiz.id.value);
  if (document.quiz.id.value.trim() == "") {
    alert("insert value fo id...");
    document.quiz.id.focus();
    return false;
  }

  if (document.quiz.password.value.trim() == "") {
    alert("insert value for password...");
    document.quiz.password.focus();
    return false;
  }

  if (document.quiz.role.value == "") {
    alert("Please choose you're role");
    return false;
  }

  let sure = confirm("Sure ?");
  if (!sure) return false;

  return true;
}
