import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindProductsByNameUseCase } from './FindProductsByNameUseCase';

class FindProductsByNameController {
  async handle(request: Request, response: Response) {
    const name = request.body.name;

    const findProductsByNameUseCase = container.resolve(
      FindProductsByNameUseCase,
    );
    const result = await findProductsByNameUseCase.execute(name);

    return response.status(200).json(result);
  }
}

export { FindProductsByNameController };
