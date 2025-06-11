import { ProductsWithImages } from '@/types';
import ProductDetail from '@/modules/products/components/ProductDetail';
import customMetadataGenerator from '@/lib/metadata';
import { getProductsById } from '@/modules/products/services';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const { id } = data;
  const product = (await getProductsById(id)) as ProductsWithImages;
  if (!product) {
    return customMetadataGenerator({
      title: 'not found',
    });
  }

  return customMetadataGenerator({
    title: product?.name,
    description: product?.description,
    images: product?.images,
  });
}

async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const { id } = data;
  const product = (await getProductsById(id)) as ProductsWithImages;

  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product?.images.length && product.images[0].image,
    description: product.description,
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail {...product} />;
    </section>
  );
}

export default page;
