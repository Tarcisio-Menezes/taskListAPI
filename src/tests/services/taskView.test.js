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

describe('Visualiza tarefas via SERVICES', function () {
  it('as tarefas podem ser visualizadas pelo usuário', async function () {
  const response = await taskService.getAllTask();
  expect(response).to.be.a('array');
  });
});
