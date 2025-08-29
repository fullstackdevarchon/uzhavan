import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  const products = [
    {
      title: "Men's Clothing",
      img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Women's Clothing",
      img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Jewelery",
      img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Electronics",
      img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Add margin to push content below navbar */}
      <main className="mt-20 container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <hr className="border-gray-300 w-24 mx-auto mb-6" />
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            facere doloremque veritatis odit similique sequi. Odit amet fuga nam
            quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
            totam vero quas provident ipsam, veritatis nostrum velit quos
            recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
            earum unde eligendi autem praesentium, doloremque distinctio nesciunt
            porro tempore quis eaque labore voluptatibus ea necessitatibus
            exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
            tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
            quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
            delectus expedita a alias nam recusandae illo debitis repellat libero,
            quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
            dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
          </p>
        </section>

        {/* Products Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h5 className="text-xl font-semibold text-center text-gray-800">
                    {product.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
