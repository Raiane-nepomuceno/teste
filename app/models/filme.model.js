module.exports = mongoose => {
    const Filme = mongoose.model(
      "filme",
      mongoose.Schema(
        {
          nome: String,
          descricao: String,
          genero: String,
          anoLancamento: Number
        },
        { timestamps: true }
      )
    );
    return Filme;
  };