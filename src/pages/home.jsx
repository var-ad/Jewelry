import * as assets from '../assets';

function Home() {
  return (
  <div className="relative w-full mx-0 p-0">
  {/* Banner Image */}
  <img src={assets.asset4} alt="home" className="w-full h-auto object-cover" />

  {/* Our Story Section */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-[-50px]">
    {/* Text */}
    <div className="md:w-1/2 p-4 text-center md:text-left relative z-10">
      <h2 className="text-5xl font-bold text-center text-[#1e88e5] font-['Libre_Baskerville']">Our Story</h2>
      <div className="w-48 h-[3px] bg-[#ffd700] mx-auto mt-2"></div>
      <p className="mt-2 text-gray-700 font-['Libre_Baskerville'] text-center">
        Our story is one of passion, where every diamond is handpicked, every metal is ethereally shaped,
        and every design tells a unique story. It's not just jewelry; it's an heirloom that carries the
        legacy of beauty across generations.
      </p>
      <div className="flex justify-center">
      <a id="a" href="#" className="mt-2 inline-flex items-center text-black font-['Libre_Baskerville']">
        Read More <span className="ml-2">&rarr;</span>
      </a>
      </div>

    </div>

    {/* Image */}
    <div className="md:w-[30%] relative mt-16">
      <img src={assets.asset5} alt="Our Story" className="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>

  {/* About Us Section */}
  <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-4 -mt-8">
    {/* Text */}
    <div className="md:w-1/2 p-4 text-center md:text-left relative z-10">
      <h2 className="text-5xl font-bold text-center text-[#1e88e5] font-['Libre_Baskerville']">About Us</h2>
      <div className="w-48 h-[3px] bg-[#ffd700] mx-auto mt-2"></div>
      <p className="mt-2 text-gray-700 font-['Libre_Baskerville'] text-center">
        Amidst the sparkle and shimmer, our brand stands out with its commitment to capturing the
        essence of sophistication in every creation. Each piece is a testament to timeless beauty,
        meticulously crafted to adorn moments that matter.
      </p>
      <div className="flex justify-center">
      <a id="a" href="#" className="mt-2 inline-flex items-center text-black font-['Libre_Baskerville']">
        Read More <span className="ml-2">&rarr;</span>
      </a>
      </div>
    </div>

    {/* Image */}
    <div className="md:w-[30%] relative -mt-16">
      <img src={assets.asset6} alt="About Us" className="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>

  <div className="grid grid-cols-5 gap-4 bg-gray-100 py-4 pt-4 mt-6 mb-6">
  <div className="flex flex-col items-center">
    <img src={assets.a1} alt="a1" className="h-12 mb-2" />
    <p className="text-center text-sm text-gray-900">2500+ Unique Designs</p>
  </div>
  <div className="flex flex-col items-center">
    <img src={assets.a2} alt="a2" className="h-12 mb-2" />
    <p className="text-center text-sm text-gray-900">Assured Warranty</p>
  </div>
  <div className="flex flex-col items-center">
    <img src={assets.a3} alt="a3" className="h-12 mb-2" />
    <p className="text-center text-sm text-gray-900">Celebrity Favorite</p>
  </div>
  <div className="flex flex-col items-center">
    <img src={assets.a4} alt="a4" className="h-12 mb-2" />
    <p className="text-center text-sm text-gray-900">Video Calling Assistance</p>
  </div>
  <div className="flex flex-col items-center">
    <img src={assets.a5} alt="a5" className="h-12 mb-2" />
    <p className="text-center text-sm text-gray-900">Shipping Worldwide</p>
  </div>
  </div>

  <div className="grid grid-cols-4 gap-6">
  {[assets.b1, assets.b2, assets.b3, assets.b4].map((item, index) => (
    <div key={index} className="p-4 flex flex-col items-center">
      <img src={item} alt={`Item ${index + 1}`} className="h-48 object-cover rounded-md" />
      <p className="mt-2 text-gray-400 text-center">Sample Product Title</p>
      <div className="flex items-center justify-center mt-1">
        <span className="text-gray-900 font-semibold">$599</span>
        <span className="line-through text-gray-400 ml-2">$699</span>
        <span className="text-red-500 ml-2">($100 Off)</span>
      </div>
    </div>
  ))}
  </div>

  <div className="flex items-center justify-center my-6">
  <div className="flex-grow border-t border-gray-300 mt-4"></div>
  <button id="button2" className="mx-4 bg-blue-900 text-gray-700 px-4 py-1 rounded-lg shadow-md">
    View More
  </button>
  <div className="flex-grow border-t border-gray-300 mt-4"></div>
  </div>

  <img src={assets.c1} alt="home" className="w-full h-auto object-cover" />

  <h2 className="text-blue-500 text-center text-xl font-semibold mt-4">Shop By Gender</h2>
  <div className="flex justify-center items-center mt-2">
    <div className="h-[2px] bg-yellow-400 w-24"></div>
    <div className="mx-2 text-yellow-400">~</div>
    <div className="h-[2px] bg-yellow-400 w-24"></div>
  </div>

  <div className="grid grid-cols-3 gap-6">
  {[assets.d1, assets.d2, assets.d3].map((item, index) => (
    <div key={index} className="p-3 flex flex-col items-center">
      <img 
        src={item} 
        alt={`Category ${index + 1}`} 
        className="h-72 object-cover rounded-md"
      />
      <p className="mt-2 text-center text-red-500 font-semibold">
        {index === 0 ? 'MEN' : index === 1 ? 'KIDS' : 'WOMEN'}
      </p>
      <div className="flex items-center gap-1 mt-1 cursor-pointer">
        <span className="text-gray-500">Explore</span>
        <span className="text-gray-500">→</span>
      </div>
    </div>
  ))}
  </div>

  <div className="flex items-center justify-center my-6">
  <div className="flex-grow border-t border-gray-300 mt-4"></div>
  <button id="button2" className="mx-4 bg-blue-900 text-gray-700 px-4 py-1 rounded-lg shadow-md">
    View More
  </button>
  <div className="flex-grow border-t border-gray-300 mt-4"></div>
  </div>


  <div className="text-center">
  <h2 className="text-blue-500 text-xl font-semibold">Customers Love</h2>
  <div className="flex justify-center items-center mt-2">
    <div className="h-[2px] bg-yellow-400 w-24"></div>
    <div className="mx-2 text-yellow-400">~</div>
    <div className="h-[2px] bg-yellow-400 w-24"></div>
  </div>
  
  <div className="grid grid-cols-4 gap-6 mt-6">
    {[assets.e1, assets.e2, assets.e3, assets.e4].map((item, index) => (
      <div 
        key={index} 
        className="flex flex-col items-center p-4 border-2 border-cyan-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <img 
          src={item} 
          alt={`Customer ${index + 1}`} 
          className="h-24 w-24 rounded-full object-cover"
        />
        <p className="mt-3 font-semibold text-gray-800">
          {index === 0 ? 'Joseph - Australia' : 
           index === 1 ? 'Laura - France' : 
           index === 2 ? 'Sarrah - NY' : 
           'Maria - Russia'}
        </p>
        <p className="mt-2 text-gray-500 text-center text-sm">
          {index === 0 
            ? 'I love the designs which are original, beautiful, simple, universal and elegant.' 
            : index === 1 
              ? 'Absolutely love the ring that Lillian made for me.' 
              : index === 2 
                ? "I love Lillian's jewelry. It's so different to anything I can get in New York." 
                : 'MAGIC! This is the first word that came to my mind when I opened my delivery.'}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center my-10">
  </div>

  <h2 className="text-blue-500 text-xl font-semibold">Featured In</h2>
  
  {/* Decorative line */}
  <div className="flex justify-center items-center mt-2">
    <div className="h-[2px] bg-yellow-400 w-24"></div>
    <div className="mx-2 text-yellow-400">~</div>
    <div className="h-[2px] bg-yellow-400 w-24"></div>
  </div>

  {/* Logo grid */}
  <div className="grid grid-cols-4 gap-8 mt-6">
    {[assets.f1, assets.f2, assets.f3, assets.f4, assets.f5, assets.f6, assets.f7].map((item, index) => (
      <div 
        key={index} 
        className="flex justify-center items-center"
      >
        <img 
          src={item} 
          alt={`Logo ${index + 1}`} 
          className="h-16 object-contain"
        />
      </div>
    ))}
  </div>
  </div>


  </div>
  );
}

export default Home;
