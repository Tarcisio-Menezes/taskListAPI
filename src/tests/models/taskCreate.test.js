const { expect } = require('chai');
const taskModel = require('../../models/taskModel');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
// const MoviesModel = {
//   create: () => {}
// };

describe('Insere uma nova tarefa no BD', function () {
  const payloadTask = {
    title: 'Jogar The Witcher III',
    description: 'Jogo muito legal, devo jogar hoje a noite, ao menos por 1 hora',
    date: '01/11/21',
    status: 'trabalhando',
  };

  describe('quando é inserida com sucesso', function () {
    it('retorna um objeto', async function () {
      const response = await taskModel.taskRegister(payloadTask);

      expect(response).to.be.a('object');
    });

    it('o objeto possui o "title" da nova tarefa inserida', async function () {
      const response = await taskModel.taskRegister(payloadTask);

      expect(response.task).to.have.a.property('title');
    });

    it('o objeto possui a "descrição" da nova tarefa inserida', async function () {
      const response = await taskModel.taskRegister(payloadTask);

      expect(response.task).to.have.a.property('description');
    });

    it('o objeto possui a "data" da nova tarefa inserida', async function () {
      const response = await taskModel.taskRegister(payloadTask);

      expect(response.task).to.have.a.property('date');
    });

    it('o objeto possui o "status" da nova tarefa inserida', async function () {
      const response = await taskModel.taskRegister(payloadTask);

      expect(response.task).to.have.a.property('status');
    });
  });
});
