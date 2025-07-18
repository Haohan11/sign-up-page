import { getElementById, querySelector } from "./ultility.js";

HandlePasswordIteration: {
  const passwordInput = getElementById("password");
  if (!passwordInput) break HandlePasswordIteration;

  Show: {
    const showPasswordCheckbox = querySelector(
      '#show-password input[type="checkbox"]'
    );

    const setInputType = () => {
      passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
    };
    setInputType();
    showPasswordCheckbox?.addEventListener("change", setInputType);
  }

  Validation: {
    const lengthValidMessage = getElementById("password-valid-length");
    const numberValidMessage = getElementById("password-valid-number");

    if (!lengthValidMessage || !numberValidMessage) break Validation;

    const handleValidation = () => {
      const value = passwordInput.value;
      const minLength = value.length >= 8;
      const hasNumber = /\d/.test(value);

      lengthValidMessage.classList.toggle("active", minLength);
      numberValidMessage.classList.toggle("active", hasNumber);
    };

    handleValidation();
    passwordInput.addEventListener("input", handleValidation);
  }
}

HandleFormValidation: {
  const form = getElementById("sign-up-form");
  if (!form) break HandleFormValidation;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("submitted");

    const invalidInputs = [...form.querySelectorAll("input:required:invalid")];
    invalidInputs[0]?.focus();
  });
}