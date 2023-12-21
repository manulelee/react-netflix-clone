import { useQuery } from "@tanstack/react-query";
import { fetchTitles } from "../utils/http";
import classes from "./Hero.module.css";
import { HiMiniPlay } from "react-icons/hi2";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ query, queryKey, posterImg }) => {
  const navigate = useNavigate();
  const { data, isError, error, isLoading } = useQuery({
    queryFn: ({ signal }) =>
      fetchTitles({
        signal,
        query,
      }),
    queryKey: [queryKey],
    refetchInterval: 10000,
  });

  let content;

  if (isError) {
    content = (
      <div className="text-center my-24 mx-auto">
        <p> {error.info.status_message || "Error: could not fetch data"}</p>
        <p>Status: {error.code || "unknown"}</p>
      </div>
    );
  }
  if (isLoading) {
    content = (
      <div className=" text-center my-24 mx-auto">
        <ClipLoader color="red" />
      </div>
    );
  }
  if (data) {
    let movie = data.results[0];
    //console.log(data);
    content = (
      <div className={classes.hero}>
        <img src={posterImg} alt={movie.original_title + " poster"} />
        <div>
          <button
            className={classes.watchBtn}
            onClick={() =>
              alert(
                `This is a dummy clone for a personal project. 🥲 \nGo to www.netflix.com and subscribe now to watch ${
                  movie.original_title || movie.name
                }`
              )
            }
          >
            <HiMiniPlay />
            Play
          </button>
          <button
            onClick={() => {
              console.log(movie.media_type);
              navigate(`/title/${movie.media_type ? movie.media_type : "movie"}/${movie.id}`);
            }}
          >
            <IoIosInformationCircleOutline /> More Info
          </button>
        </div>
      </div>
    );
  }
  return content;
};
export default HeroSection;
