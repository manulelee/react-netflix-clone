import { useState } from "react";
import CarouselComponent from "../components/Carousel";
import CategoryFilter from "../components/CategoryFilter";
import HeroSection from "../components/Hero";
import { MOVIE_GENRES } from "../utils/http";

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  let genreName;
  if (selectedGenre) {
    genreName = MOVIE_GENRES.find((genre) => genre.id === selectedGenre).name;
  }

  return (
    <>
      <CategoryFilter title="Movies" genres={MOVIE_GENRES} setterFn={setSelectedGenre} />
      <HeroSection
        queryKey={["Killers of the Flower Moon"]}
        query="search/movie?query=Killers%20of%20the%20Flower%20Moon&include_adult=false&language=en-US&page=1"
        posterImg="https://www.ciakclub.it/wp-content/uploads/2023/10/7b068ef0-ad6f-4813-ab54-a766ce3047b9-1536x864.jpg"
      />
      <div className="content">
        {selectedGenre && (
          <CarouselComponent
            query={`discover/movie?with_genres=${selectedGenre}`}
            queryKey={["Movie", { genreName }]}
            title={`${genreName} movies`}
          />
        )}
        <CarouselComponent query="discover/movie?with_genres=18" queryKey={["Movie", "Drama"]} title="Drama" />

        <CarouselComponent query="discover/movie?with_genres=14" queryKey={["Movie", "Fantasy"]} title="Fantasy" />

        <CarouselComponent query="discover/movie?with_genres=12" queryKey={["Movie", "Adventure"]} title="Adventure" />

        <CarouselComponent query="discover/movie?with_genres=35" queryKey={["Movie", "Commedy"]} title="Commedy" />
      </div>
    </>
  );
};
export default MoviesPage;
