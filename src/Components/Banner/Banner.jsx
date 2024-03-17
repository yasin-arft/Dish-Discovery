const Banner = () => {
  return (
    <section>
      <div className="hero font-lexend rounded-3xl overflow-hidden bg-cover" 
      style={{ backgroundImage: 'url(https://i.ibb.co/HpbRy6H/banner.png)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl py-12 sm:py-20 md:py-24 lg:py-28 xl:py-32">
            <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Welcome to Dish Discovery: Your Culinary Adventure Begins Here!</h1>
            <p className="mb-8 md:text-lg">Explore a world of culinary delights at Flavorful Delights. From appetizers to desserts, our diverse recipes inspire every palate.  Join us as we discover, savor, and share the joy of cooking. Start your culinary exploration with Dish Discovery today! </p>
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