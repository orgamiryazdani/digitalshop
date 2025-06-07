import ProductForm from '../components/ProductFormWithAction';
import { getProductsById } from '../services';

async function ProductDetailView(props: { id: string }) {
  const { id } = props;
  const product = await getProductsById(id);
  return (
    <div>
      <ProductForm product={product} />
    </div>
  );
}

export default ProductDetailView;
