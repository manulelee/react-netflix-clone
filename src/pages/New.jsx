import CarouselComponent from "../components/Carousel";
import HeroSection from "../components/Hero";

const NewPage = () => {
  return (
    <>
      <HeroSection
        queryKey={["Killers of the Flower Moon"]}
        query="search/movie?query=Killers%20of%20the%20Flower%20Moon&include_adult=false&language=en-US&page=1"
        posterImg="https://www.ciakclub.it/wp-content/uploads/2023/10/7b068ef0-ad6f-4813-ab54-a766ce3047b9-1536x864.jpg"
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
