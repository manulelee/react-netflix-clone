import CarouselComponent from "../components/Carousel";
import HeroSection from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <HeroSection
        queryKey={["Kill Bill vol.1"]}
        query="search/movie?query=Kill%20Bill%20vol%201&include_adult=false&language=en-US&page=1"
        posterImg="https://w0.peakpx.com/wallpaper/385/847/HD-wallpaper-kill-bill-kill-bill-vol-1-uma-thurman.jpg"
      />
      <div className="content">
        <CarouselComponent
          queryKey={["Trending movies"]}
          query="trending/all/day?language=en-US"
          title="Popular movies"
        />
        <CarouselComponent
          queryKey={["Trending shows"]}
          query="trending/tv/day?language=en-US'"
          title="Popular Tv shows"
        />
        <CarouselComponent
          queryKey={["Top rated"]}
          query="movie/top_rated?language=en-US&page=1"
          title="Top rated movies"
        />
      </div>
    </>
  );
};
export default HomePage;
