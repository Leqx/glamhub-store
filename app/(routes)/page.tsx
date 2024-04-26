import getBillboard from '@/actions/get-billboard';
import getCategories from '@/actions/get-categories';
import getProducts from '@/actions/get-products';
import Main from '@/components/maps/main';
import ProductList from '@/components/product-list';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(
    '0e12e5cf-29ab-4529-b8d5-c5371dae1f7b'
  );

  const categories = await getCategories();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {/* <Billboard 
          data={billboard}
        /> */}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mb-36">
          <Main categories={categories} products={products} />
          {/* <ProductList title="Featured Products" items={products} /> */}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
