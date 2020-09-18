const bodyParser = require('body-parser');
const express = require('express');

/** Modo texto */
//app.use(bodyParser.urlencoded());

class ConfigServer {

    constructor() {
        this.app = express();
        this.middleware();
        this.rotas();
    }

    /**
     * @description interceptadores de requisição
     */
    middleware() {
        this.app.use(bodyParser.json());
        this.app.use('/home', express.static(__dirname + '/Public'))
        this.app.use((req, res, next) => {
            res.set('X-Powered-By', 'JBOSS 4.2');
            next();
        })

        this.app.use((req, res, next) => {
            if(!req.body.alma) {
               return res.status(403).send('Não é permitido acessar o serviço.');                                
            } return next();
        });
    }

    /**
     * @description rotas/serviços
     */
    rotas() {
        require('./routes/ambiente')(this.app);
    }

}

/**
 * Procurar sobre helmet
 */

module.exports = new ConfigServer().app;