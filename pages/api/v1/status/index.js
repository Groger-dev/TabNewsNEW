function status(request, response) {
  response.status(200).json({ chave: "Meu nome é Groot" });
}

export default status;
