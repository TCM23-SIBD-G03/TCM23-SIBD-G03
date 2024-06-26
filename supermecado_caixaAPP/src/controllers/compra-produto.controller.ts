import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Compra,
Through,
Produto,
} from '../models';
import {CompraRepository} from '../repositories';

export class CompraProdutoController {
  constructor(
    @repository(CompraRepository) protected compraRepository: CompraRepository,
  ) { }

  @get('/compras/{id}/produtos', {
    responses: {
      '200': {
        description: 'Array of Compra has many Produto through Through',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Produto)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Produto>,
  ): Promise<Produto[]> {
    return this.compraRepository.produtos(id).find(filter);
  }

  @post('/compras/{id}/produtos', {
    responses: {
      '200': {
        description: 'create a Produto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Produto)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Compra.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {
            title: 'NewProdutoInCompra',
            exclude: ['id'],
          }),
        },
      },
    }) produto: Omit<Produto, 'id'>,
  ): Promise<Produto> {
    return this.compraRepository.produtos(id).create(produto);
  }

  @patch('/compras/{id}/produtos', {
    responses: {
      '200': {
        description: 'Compra.Produto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produto, {partial: true}),
        },
      },
    })
    produto: Partial<Produto>,
    @param.query.object('where', getWhereSchemaFor(Produto)) where?: Where<Produto>,
  ): Promise<Count> {
    return this.compraRepository.produtos(id).patch(produto, where);
  }

  @del('/compras/{id}/produtos', {
    responses: {
      '200': {
        description: 'Compra.Produto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Produto)) where?: Where<Produto>,
  ): Promise<Count> {
    return this.compraRepository.produtos(id).delete(where);
  }
}
