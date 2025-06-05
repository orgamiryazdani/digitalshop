import { ProductsWithImages } from '@/types';
import ProductDetail from '@/modules/products/components/ProductDetail';
import { getProductsById } from '@/modules/products/services';

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const { id } = data;
  const product = (await getProductsById(id)) as ProductsWithImages;
  return <ProductDetail {...product} />;
}

export default page;
