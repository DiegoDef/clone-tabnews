function status(request, response) {
  response.status(200).json({ chave: "TESTE STATUS" });
}

export default status;
