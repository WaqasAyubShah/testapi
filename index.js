const app = require('express')();

const PORT = 8080;

app.listen(
    PORT,
    ()=> console.log(`server running on ${PORT}`)
);

app.get('/apitest', (req, res) => {
    /*res.send("My first API")       //we can replace it with object as well*/
    res.send({
        Testno :1,
        apino : 13
    })
});