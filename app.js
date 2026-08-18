const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo desde DevOps CI/CD");
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
}

module.exports = app;