class User {
    constructor() {
        this.email,
        this.password,
        this.admin = false
    }

    isAdmin() {
        return this.admin === true
    }
}

class Admin extends User {
    constructor () {
        super()
        this.admin = true
    }
}

const user1 = new User("email@idk.com", "senha123")
const adm1 = new Admin("email@idk.com", "senha123")

console.log(user1.isAdmin())
console.log(adm1.isAdmin())