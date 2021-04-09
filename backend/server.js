const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`)
})

