// pages/menu.js
import Layout from '@/components/common/Layout';
import FoodMenu from '@/components/menu/FoodMenu';

const MenuPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mt-8">Menú</h1>
        <FoodMenu />
      </div>
    </Layout>
  );
};

export default MenuPage;
