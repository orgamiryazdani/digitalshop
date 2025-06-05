// import { prisma, PrismaType } from '@/lib/prisma';
import ProductListView from '@/modules/products/views/ProductListView';

async function Products() {
  // const data: PrismaType.Product[] = await prisma.product.findMany();

  return (
    <div>
      <ProductListView />
    </div>
  );
}

export default Products;
