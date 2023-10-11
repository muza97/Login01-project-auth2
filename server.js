const express = require('express')
const app = express()

app.get('/', (req, res) => {  // Observera korrigeringen av parantesplaceringen här
    res.render('index.ejs', { user: 'DittAnvändarnamnHär' })  // Fyll i den faktiska användarinformationen eller variabeln
});

app.listen(3000)