import CarouselComponent from "../components/Carousel";
import HeroSection from "../components/Hero";

const HomePage = () => {
  return (
    <div>
      <HeroSection url="https://api.themoviedb.org/3/search/movie?query=Killers%20of%20the%20Flower%20Moon&include_adult=false&language=en-US&page=1" />
      <CarouselComponent url="https://api.themoviedb.org/3/trending/all/day?language=en-US" title="Popular movies" />
      <CarouselComponent url="https://api.themoviedb.org/3/trending/tv/day?language=en-US'" title="Popular Tv shows" />
      <CarouselComponent
        url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
        title="Top rated movies"
      />
    </div>
  );
};
export default HomePage;
