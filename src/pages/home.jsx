import * as assets from '../assets';

function Home() {
  return (
    <div className="w-full mx-0 p-0">
      {/* Banner Image */}
      <img src={assets.asset4} alt="home" className="w-full h-auto object-cover" />

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        {/* Text */}
        <div className="md:w-1/2 p-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-center text-[#1e88e5] font-['Libre_Baskerville']">Our Story</h2>
          <p className="mt-4 text-gray-700 font-['Libre_Baskerville']">
            Our story is one of passion, where every diamond is handpicked, every metal is ethereally shaped,
            and every design tells a unique story. It's not just jewelry; it's an heirloom that carries the
            legacy of beauty across generations.
          </p>
          <a href="#" className="mt-4 inline-flex items-center text-[#1e88e5] font-['Libre_Baskerville']">
            Read More <span className="ml-2">&rarr;</span>
          </a>
        </div>

        {/* Image */}
        <div className="md:w-2/5 p-12">
          <img src={assets.asset5} alt="Our Story" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center mt-8">
        {/* Text */}
        <div className="md:w-1/2 p-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-center text-[#1e88e5] font-['Libre_Baskerville']">About Us</h2>
          <p className="mt-4 text-gray-700 font-['Libre_Baskerville']">
            Amidst the sparkle and shimmer, our brand stands out with its commitment to capturing the
            essence of sophistication in every creation. Each piece is a testament to timeless beauty,
            meticulously crafted to adorn moments that matter.
          </p>
          <a href="#" className="mt-4 inline-flex items-center text-[#1e88e5] font-['Libre_Baskerville']">
            Read More <span className="ml-2">&rarr;</span>
          </a>
        </div>

        {/* Image */}
        <div className="md:w-2/5 p-6">
          <img src={assets.asset6} alt="About Us" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Home;
