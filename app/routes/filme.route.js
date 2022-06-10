module.exports = app => {
    const filme = require("../controllers/filme.controller");
  
    var router = require("express").Router();
  
    //Insere novo filme
    router.post("/", filme.adicionar);
  
    //Retorna todos filme
    router.get("/", filme.buscaTodos);
  
    //Retorna o filme dado seu ID
    router.get("/:id", filme.buscaUm);
  
    //Atualiza o filme dado seu ID
    router.put("/:id", filme.atualizar);
  
    //Remove um filme dado seu id
    router.delete("/:id", filme.delete);
  
    app.use('/api/SC3003337/filme', router);
  };