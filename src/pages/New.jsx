import CarouselComponent from "../components/Carousel";
import HeroSection from "../components/Hero";

const NewPage = () => {
  return (
    <>
      <HeroSection
        queryKey={["Once Upon A Time In Hollywood"]}
        query="search/movie?query=Once%20Upon%20A%20Time%20In%20Hollywood&include_adult=false&language=en-US&page=1"
        posterImg="https://pbs.twimg.com/media/EJ_yuPvU8AAnBdN.jpg"
      />

      <div className="content">
        <CarouselComponent
          queryKey={["Upcoming movies"]}
          query="movie/upcoming?language=en-US&page=1'"
          title="Upcoming movies"
        />
        <CarouselComponent
          queryKey={["Top rated"]}
          query="movie/top_rated?language=en-US&page=1"
          title="Top rated movies"
        />
        <CarouselComponent
          queryKey={["Trending shows"]}
          query="trending/tv/day?language=en-US'"
          title="Popular Tv shows"
        />
      </div>
    </>
  );
};
export default NewPage;
