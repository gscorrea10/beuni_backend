import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllProductsUseCase } from './GetAllProductsUseCase';

class GetAllProductsController {
  async handle(request: Request, response: Response) {
    const getAllProductsUseCase = container.resolve(GetAllProductsUseCase);
    const result = await getAllProductsUseCase.execute();

    return response.status(200).json(result);
  }
}

export { GetAllProductsController };
