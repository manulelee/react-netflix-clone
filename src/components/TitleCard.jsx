import classes from "./TitleCard.module.css";
import { GENRES } from "../utils/http";
import { IoIosArrowDropdown, IoIosAddCircleOutline, IoIosHeart } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/favoriteSlice";
import { Link } from "react-router-dom";

const TitleCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  //console.log(favorites);
  const isInFavorites = favorites.some((item) => item.id === movie.id);

  const handleFavorite = () => {
    if (isInFavorites) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  };
  return (
    <span className={classes.titleCard}>
      <img
        src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}
        onError={(e) => {
          e.target.src = "https://montagnolirino.it/wp-content/uploads/2015/12/immagine-non-disponibile.png";
        }}
        alt="movie poster"
      />
      <div className={classes.info}>
        <h3 className="text-sm my-2">{movie.name || movie.title}</h3>
        <p className="m-0 text-2xl flex justify-between items-center">
          <span className="flex me-1">
            <IoPlayCircleOutline
              onClick={() =>
                alert(
                  `This is a dummy clone for a personal project. 🥲 \nGo to www.netflix.com and subscribe now to watch ${
                    movie.name || movie.title
                  }`
                )
              }
            />
            <IoIosHeart className={isInFavorites ? "text-red-500" : ""} onClick={handleFavorite} />
            <IoIosAddCircleOutline />
          </span>
          <span>
            <Link to={`/title/${movie.media_type ? movie.media_type : "movie"}/${movie.id}`}>
              <IoIosArrowDropdown className="text-3xl" />
            </Link>
          </span>
        </p>
        <ul className="flex flex-row list-none ps-0 overflow-auto">
          {movie.genre_ids.map((id) => (
            <li className="p-1 overflow-y-visible" key={id}>
              {GENRES.filter((genre) => genre.id === id)[0].name}
            </li>
          ))}
        </ul>
      </div>
    </span>
  );
};

export default TitleCard;
