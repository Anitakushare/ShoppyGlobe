import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/slide12.webp';
import slide2 from '../assets/slide2.webp';
import slide3 from '../assets/slide3.webp';
import '../App.css';

// Slide Object with data 
const slides = [
  {
    image: slide1,
    title: "50% Off On Groceries For You",
    subtitle: "Exclusive designer furniture now available.",
    button: "Shop Now",
  },
  {
    image: slide2,
    title: "75% Off On All Fragrances",
    subtitle: "Upgrade your space with our modern pieces.",
    button: "Explore",
  },
  {
    image: slide3,
    title: "25% Off On All New Arrivals Just Landed",
    subtitle: "Discover this season's luxury essentials.",
    button: "View Collection",
  },
];


const HeroSlider = () => {
  //Slider settings
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows:false,
    cssEase: "ease-in-out",
    beforeChange: () => {
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
    }
  };

  return (
    <div className="relative w-full mx-auto bg-gradient-to-r from-[#E23C84] to-purple-600 h-[400px]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center h-[400px] p-4 gap-8 ">
              <div className="flex-1 text-white flex flex-col justify-between items-start p-4">
                <h2 className="text-2xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="mb-4 text-lg md:text-base">{slide.subtitle}</p>
                <button className="bg-[#4d979e] text-white px-6 py-2 rounded-full shadow hover:bg-sky-600 transition">
                  {slide.button}
                </button>
              </div>
              <div className="flex-1 h-[200px] md:h-full flex justify-center items-center">
                <img
                  src={slide.image}
                  alt={`Slide ${index}`}
                  className="max-h-full w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
