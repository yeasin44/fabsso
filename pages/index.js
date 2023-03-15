import ProductItem from '@/components/ProductItem';
import { data } from '@/utilities/data';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Home page">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.products?.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
