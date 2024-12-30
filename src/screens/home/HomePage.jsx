// HomePage.jsx
import DefaultLayout from '../../layout/DefaultLayout';

const HomePage = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-4">Welcome to ShopMate</h1>
            <p className="text-xl mb-8">Find the best products for your needs at unbeatable prices.</p>
            <button className="bg-yellow-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600">
              Shop Now
            </button>
          </div>
          <div className="w-1/2">
            <img src="/images/hero-image.jpg" alt="E-commerce" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Product Item */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img src="/images/product1.jpg" alt="Product 1" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-xl mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">$199.99</p>
              <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white">Add to Cart</button>
            </div>
            {/* Repeat Product Items for more products */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Free Shipping</h3>
              <p>On all orders over $50.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p>We ensure high-quality products for every customer.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <p>24/7 support for all your shopping needs.</p>
            </div>
          </div>
        </div>
      </section>


    </DefaultLayout>
  );
};

export default HomePage;
