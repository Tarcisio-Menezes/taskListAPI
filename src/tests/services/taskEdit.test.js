const { expect } = require('chai');
const taskService = require('../../services/taskService');

/*
  Como ainda não temos a implementação, vamos fixar
  um objeto simulando os métodos que iremos desenvolver,
  porém, eles não terão nenhum comportamento
*/
// const MoviesModel = {
//   create: () => {}
// };

describe('Edita uma tarefa via SERVICES', function () {
  const payloadTask = {
    title: 'Jogar The Witcher III',
    description: 'Jogo muito legal, devo jogar hoje a noite, ao menos por 30 minutos',
    date: '01/11/21',
    status: 'trabalhando',
  };

  describe('quando é editada com sucesso', function () {
    it('retorna um objeto', async function () {
      const response = await taskService.taskEdit(payloadTask);

      expect(response).to.be.a('object');
    });

    it('o objeto possui o "title" da tarefa editada', async function () {
      const response = await taskService.taskEdit(payloadTask);

      expect(response).to.have.a.property('title');
    });

    it('o objeto possui a "descrição" da tarefa editada', async function () {
      const response = await taskService.taskEdit(payloadTask);

      expect(response).to.have.a.property('description');
    });

    it('o objeto possui a "data" da tarefa editada', async function () {
      const response = await taskService.taskEdit(payloadTask);

      expect(response).to.have.a.property('date');
    });

    it('o objeto possui o "status" da tarefa editada', async function () {
      const response = await taskService.taskEdit(payloadTask);

      expect(response).to.have.a.property('status');
    });
  });
});
