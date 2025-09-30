function validate() {
  let email = document.getElementById("email").value;
  let array = email.split("");
  result = document.getElementById("result");
  if (email.length <= 256) {
    // I avoided using operaters to specify exactly the validity of the email(result)
    if (array.includes("@")) {
      let sum = 0;
      for (i = 0; i < array.length; i++) {
        if (array[i].includes("@")) {
          sum++;
        }
      }
      if (sum > 1) {
        result.innerHTML = "The email should have one '@' character";
        return false;
      } else {
        if (array[0] != "@") {
          if (array[array.length - 1] != "@") {
            x = array.indexOf("@");
            if (array[array.indexOf("@") + 1].includes(".")) {
              result.innerHTML = "'.' should not be immediately after '@'";
              return false;
            } else {
              split_array = email.slice(x + 1, array.length);
              console.log(split_array);
              if (split_array.includes(".")) {
                result.innerHTML = "Valid email";
              } else {
                result.innerHTML = "The email should have a domain";
                return false;
              }
            }
          } else {
            result.innerHTML = "'@' should not be the last character.";
          }
        } else {
          result.innerHTML = "'@' should not be the first character";
        }
      }
    } else {
      result.innerHTML = "Email should contain '@'";
    }
  } else {
    result.innerHTML = "Email should be no longer than 256 charracters.";
  }
}

btn = document.getElementById("validate");
btn.addEventListener("click", () => {
  validate();
});
