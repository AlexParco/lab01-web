const express = require('express')

const app = express()

const PORT = 3030

// static files
app.use(express.static('src'));

app.get('/', (req, res) => { })

app.use((req, res) => {
  res.status(404).send('No se encontro tu pagina......!!')
})

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})