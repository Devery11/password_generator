class PasswordGenerator {
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=<>?/:;{}[]';
  generatePassword(length) {
    let password = '';

    for (let i = 0; i <= length; i++) {
      password += this.chars[Math.round(Math.random() * this.chars.length)];
    }

    return password;
  }
}
const password = new PasswordGenerator();

const legthForm = document.getElementById("button");

legthForm.addEventListener("click", e => {
  e.preventDefault();

  const input = document.getElementById("input-length");
  alert(password.generatePassword(input.value));
});



