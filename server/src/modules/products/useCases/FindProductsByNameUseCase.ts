import { getProducts } from '../../../services/consultProducts/getProducts';
import { AppError } from '../../../shared/errors/AppError';

class FindProductsByNameUseCase {
  async execute(name: string) {
    const { apiProducts } = await getProducts();

    if (!name || !name.trim()) {
      throw new AppError('Name is required');
    }

    const productsReturn = apiProducts.map((product) => {
      return {
        name: product.name,
        image: Array.isArray(product.image)
          ? product.image.map((image) => image.url)
          : [],
        price: product.price,
        total_stock: product.total_stock,
      };
    });

    const filteredProducts = productsReturn.filter((product) => {
      return product.name.includes(name);
    });

    return filteredProducts;
  }
}

export { FindProductsByNameUseCase };
