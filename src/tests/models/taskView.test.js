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

describe('Visualiza tarefas do BD', function () {
  it('as tarefas podem ser visualizadas pelo usuário', async function () {
  const response = await taskModel.getAll();
  expect(response).to.be.a('array');
  });
});
