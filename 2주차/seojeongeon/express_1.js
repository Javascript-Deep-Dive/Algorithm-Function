const express = require('express')
const express_1 = module.exports = express()
const port = 3000

express_1.get('/', (req, res) => {
    res.send('hello World !!!')
})

express_1.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})