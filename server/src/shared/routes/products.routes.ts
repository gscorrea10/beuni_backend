import { Router } from 'express';
import { FindProductsByNameController } from '../../modules/products/useCases/FindProductsByNameController';
import { GetAllProductsController } from '../../modules/products/useCases/GetAllProductsController';

const productsRoutes = Router();
const getAllProductsController = new GetAllProductsController();
const findProductsByNameController = new FindProductsByNameController();

productsRoutes.get('/', getAllProductsController.handle);
productsRoutes.post('/name', findProductsByNameController.handle);

export { productsRoutes };
