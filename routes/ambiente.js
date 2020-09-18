module.exports = (app) => {

    app.get('/testeGet', (req, res) => {
        res.send({
            nome: 'alma',
            idade: 26
        });
        /* res.status(201).send({
            nome: 'alma',
            idade: 26
        }); */
    });


    app.post('/testePost/:alma', (req, res) => {
        console.log(req.body);
        console.log(req.params.alma)

        res.send(req.body);
    });

}