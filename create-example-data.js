const { User, Ad } = require('./db')

User
    .sync()
    .then(()=>{
        User.create({
            username: 'testuser',
            email: 'test@test.com',
            phone: '1234567',
            password: 'abcdefg',
        })
    })
    .catch((err) => console.error(err))

Ad
    .sync()
    .then(()=>{
        Ad.create({
            title: 'Jack',
            desc: 'Holiday Jack Tsum has a unique Timed Skill. He will automatically clear chains of Tsums. His base time is maxed at 3 seconds.',
            price: 150,
            pictureUrl: 'https://vignette.wikia.nocookie.net/disneytsumtsum/images/6/67/SantaJack.png/revision/latest?cb=20150118005419',
            userId: 1    
        })
    })
    .catch((err)=>console.error(err))

