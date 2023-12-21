import { useState } from "react";
import CarouselComponent from "../components/Carousel";
import HeroSection from "../components/Hero";
import { TV_GENRES } from "../utils/http";
import CategoryFilter from "../components/CategoryFilter";

const ShowPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  let genreName;
  if (selectedGenre) {
    genreName = TV_GENRES.find((genre) => genre.id === selectedGenre).name;
  }
  return (
    <>
      <CategoryFilter title="TV Shows" genres={TV_GENRES} setterFn={setSelectedGenre} />
      <HeroSection
        queryKey={["The midnight gospel"]}
        query="search/tv?query=The%20Midnight%20Gospel&include_adult=false&language=en-US&page=1"
        posterImg={
          "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABU7EveKK0X_Qpsk1MZU3BjfhAezzvGkMs3wuUsHsQYhPTew0rQcgPRyevBNHrdEK0I8wBXutF-5n8ySvwruWOuW0SeOZS5uAO0bd.jpg?r=9c5"
        }
      />
      <div className="content">
        {selectedGenre && (
          <CarouselComponent
            query={`discover/tv?with_genres=${selectedGenre}`}
            queryKey={["Movie", { genreName }]}
            title={`${genreName} shows`}
          />
        )}
        <CarouselComponent
          query="discover/tv?with_genres=10765"
          queryKey={["Show", "Sci-Fi & Fantasy"]}
          title="Sci-Fi & Fantasy"
        />

        <CarouselComponent query="discover/tv?with_genres=35" queryKey={["Show", "Comedy"]} title="Comedy" />

        <CarouselComponent query="discover/tv?with_genres=80" queryKey={["Show", "Crime"]} title="Crime" />

        <CarouselComponent query="discover/tv?with_genres=16" queryKey={["Show", "Animation"]} title="Animation" />
      </div>
    </>
  );
};
export default ShowPage;
