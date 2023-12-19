import CarouselComponent from "../components/Carousel";
import HeroSection from "../components/Hero";

const MoviesPage = () => {
  return (
    <>
      <HeroSection
        queryKey={["Oppenheimer"]}
        query="search/movie?query=Oppenheimer&include_adult=false&language=en-US&page=1"
        posterImg="https://aristonsanremo.com/wp-content/uploads/2023/08/opp-bann.jpg"
      />
      <div className="content">
        <CarouselComponent query="discover/movie?with_genres=18" queryKey={["Movie", "Drama"]} title="Drama" />

        <CarouselComponent query="discover/movie?with_genres=14" queryKey={["Movie", "Fantasy"]} title="Fantasy" />

        <CarouselComponent query="discover/movie?with_genres=12" queryKey={["Movie", "Adventure"]} title="Adventure" />

        <CarouselComponent query="discover/movie?with_genres=35" queryKey={["Movie", "Commedy"]} title="Commedy" />
      </div>
    </>
  );
};
export default MoviesPage;
