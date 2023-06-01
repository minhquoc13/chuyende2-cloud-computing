const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/street-fighters'
mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
    console.log('Database connected:', url)
})

db.on('error', err => {
    console.error('connection error:', err)
})

const Character = require('./models/Character')
    // const ryu = new Character({
    //     name: 'Ryu',
    //     ultimate: 'Shinku Hadoken'
    // })
    // ryu.save().then((error, document) => {
    //     if (error) console.error(error)
    //     console.log(document)
    // })

// This does the same thing as above
function saveCharacter(character) {
    const c = new Character(character)
    return c.save()
}

// saveCharacter({
//         name: 'Ryu',
//         ultimate: 'Shinku Hadoken'
//     })
//     .then(doc => { console.log(doc) })
//     .catch(error => { console.error(error) })

async function runCode() {
    const ryu = new Character({
        name: 'Ryu',
        ultimate: 'Shinku Hadoken'
    })

    const doc = await ryu.save()
    console.log(doc)
        // await Character.deleteMany({})
}

runCode()
    .catch(error => { console.error(error) })