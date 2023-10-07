let email_add = document.querySelector(".email-add");
let btn_sumbit = document.querySelector(".btn-submit");
let error = document.querySelector(".error");


function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}


function handleValidation() {
  const email = email_add.value; 

  if (validateEmail(email)) {
    console.log("right")
    email_add.style.border = "2px solid  hsl(0, 0%, 85%)";
    error.style.display = "none"
} else {
    console.log("wrong")
    email_add.style.border = "2px solid hsl(354, 100%, 66%)";
    error.style.display = "block"
  }
}

btn_sumbit.addEventListener("click", handleValidation);


