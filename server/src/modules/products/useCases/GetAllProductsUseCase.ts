import { getProducts } from '../../../services/consultProducts/getProducts';
import { AppError } from '../../../shared/errors/AppError';

class GetAllProductsUseCase {
  async execute() {
    const { apiProducts, status } = await getProducts();

    if (!status.code) {
      throw new AppError('Error on get products');
    }

    const productsReturn = apiProducts.map((product) => {
      return {
        name: product.name,
        image: Array.isArray(product.image)
          ? product.image.map((image) => image.url)
          : [],
        /* verifica se o objeto passado como argumento é um array ou não. Caso seja um array, 
           o método map é aplicado para retornar somente as URLs das imagens. 
           Caso contrário, um array vazio é retornado. */
        price: product.price,
        total_stock: product.total_stock,
      };
    });

    return productsReturn;
  }
}

export { GetAllProductsUseCase };
