const db = require("../models");
const Filme = db.filme;

exports.adicionar = (req, res) => {
    if (!req.body.nome || !req.body.genero || !req.body.anoLancamento || !req.body.descricao) {
        res.status(400).send({ msg: "Requisição incompleta: dados ausentes" });
        return;
    }

    const filme = new Filme({
        nome: req.body.nome,
        genero: req.body.genero,
        anoLancamento: req.body.anoLancamento,
        descricao: req.body.descricao,

    });

    Filme.create(filme).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};

exports.buscaTodos = (req, res) => {
    var condition = {};

    Filme.find(condition).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao obter lista de filmes" })
    });
};

exports.buscaUm = (req, res) => {
    const id = req.params.id;

    Filme.findById(id).then(data => {
        if (!data) {
            res.status(404).send({ msg: "Filme não encontrado" });
        } else {
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao obter filme com id=" + id })
    });
};

exports.atualizar = (req, res) => {
    if (!req.body) {
        res.status(400).send({ msg: "Dados inválidos" });
        return;
    }

    const id = req.params.id;

    Filme.findByIdAndUpdate(id, req.body).then(data => {
        if (!data) {
            res.status(400).send({ msg: "Não foi possível atualizar o filme" })
        } else {
            res.send({ msg: "Filme atualizado com sucesso" });
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao atualizar o filme" });
    });

};

exports.delete = (req, res) => {
    const id = req.params.id;
    Filme.findByIdAndRemove(id).then(data => {
        if (!data) {
            res.status(400).send({ msg: "Não foi possível remover o filme" })
        } else {
            res.send({ msg: "Filme deletado com sucesso" });
        }
    }).catch(err => {
        res.status(500).send({ msg: "Erro ao deletar o filme" });
    });
};
