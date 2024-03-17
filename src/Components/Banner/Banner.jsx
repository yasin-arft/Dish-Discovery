const Banner = () => {
  return (
    <section>
      <div className="hero font-lexend rounded-3xl overflow-hidden bg-cover" 
      style={{ backgroundImage: 'url(https://i.ibb.co/HpbRy6H/banner.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl py-12 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-8 md:text-lg">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex gap-4 sm:gap-8 justify-center">
              <button className="btn bg-green border-green rounded-full">Explore Now</button>
              <button className="btn bg-transparent text-white hover:text-dark rounded-full">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;