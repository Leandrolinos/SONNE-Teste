export default function handler(req, res) {
    if (req.method === 'POST') {
        // Aqui você pode processar os dados enviados pelo formulário
        const { name, email, message } = req.body;
        console.log(name, email, message);

        // Envie uma resposta de sucesso para o cliente
        res.status(200).json({ message: 'Dados recebidos com sucesso!' });
    } else {
        // Envie uma resposta de erro para o cliente
        res.status(405).json({ message: 'Método não permitido.' });
    }
}