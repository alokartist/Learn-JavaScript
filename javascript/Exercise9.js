/*
Create a JavaScript program capable of generating a password which contains atleast one lowercase,
one uppercase and one special character. Create a password class to acheive the same.
Example:
  class Password:
    this.password
    generateStrongPassword()
    generateWeakPassword()
    generateSuperStrongPassword()
    generateFunnyPassword()
*/

class Password {
    constructor() {
      console.log("Welcome to Password Generator")
      this.pass = ""
    }
    generatePassword(len) {
      let chars = "abcdefghijklmnopqrstuvwxyz"
      let numbers = "1234567890"
      let special = "!@#$%^&*()"
      if (len < 3) {
        console.log("Your password should be atleast 3 characters long")
      }
      else {
        let i = 0
        while (i < len) {
          this.pass += chars[Math.floor(Math.random() * chars.length)]
          this.pass += numbers[Math.floor(Math.random() * numbers.length)]
          this.pass += special[Math.floor(Math.random() * special.length)]
          i += 3
        }
        this.pass = this.pass.substr(0, len)
        return this.pass
      }
    }
  }
  let p = new Password()
  console.log(p.generatePassword(1))