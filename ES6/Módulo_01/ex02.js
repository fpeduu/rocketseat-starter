// 2.1
const map = users.map(user => user.idade)

//2.2
const filter = users.filter(user => {
    return user.idade >= 18 && user.empresa === 'Rocketseat'
})

//2.3
const find = users.find(user => user.empresa === 'Google')


//2.4
const mapBeforeFilter = users.map(user => {
    user.idade = user.idade * 2
    return {
        ...user
    }
})

const mapAfterFilter = users.filter(user => user.idade <= 50)
