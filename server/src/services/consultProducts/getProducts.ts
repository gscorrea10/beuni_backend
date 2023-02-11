import { IGetProductsDTO } from '../../modules/products/dtos/IGetProductsDTO';
import { api } from '../api';

interface IStatus {
  code: boolean;
  message?: string;
}

interface IResponse {
  status: IStatus;
  apiProducts: IGetProductsDTO[];
}

async function getProducts(): Promise<IResponse> {
  let apiProducts: IGetProductsDTO[] = [];
  let status: IStatus = { code: true };

  try {
    const { data } = await api.get(
      'https://api.beuni.com.br/atlas/brands/v2/products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50',
    );

    apiProducts = data.products.map((produtos: any) => ({
      name: produtos.name,
      image: produtos.image,
      price: produtos.price,
      total_stock: produtos.total_stock,
    }));
  } catch (err) {
    status = { code: false, message: 'Erro' };
  }

  const returnProducts: IResponse = {
    status,
    apiProducts,
  };

  return returnProducts;
}

export { getProducts };
