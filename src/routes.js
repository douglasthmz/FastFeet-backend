import { Router } from 'express';
import Recipient from './app/models/Recipient';

const routes = new Router();

routes.get('/', async (req, res) => {
  const recipient = await Recipient.create({
    nome: 'Douglas',
    rua: 'Machado e Silva',
    numero: 176,
    complemento: 'Bloco 4 ap 202',
    estado: 'RJ',
    cidade: 'Rio de janeiro',
    cep: '21862770',
  });
  res.json(recipient);
});

export default routes;
