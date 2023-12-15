import { useQuery } from "@tanstack/react-query";
import { fetchTitles } from "../utils/http";
import classes from "./Hero.module.css";
import { HiMiniPlay } from "react-icons/hi2";
import { IoIosInformationCircleOutline } from "react-icons/io";

const HeroSection = ({ url }) => {
  const { data, isError, isLoading } = useQuery({
    queryFn: ({ signal }) =>
      fetchTitles({
        signal,
        url,
      }),
    queryKey: [url],
    refetchInterval: 10000,
  });
  let content;
  if (isError) {
    content = <div>Error</div>;
  }
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (data) {
    let movie = data.results[0];
    console.log(data);
    content = (
      <div className={classes.hero}>
        <img
          src="https://www.ciakclub.it/wp-content/uploads/2023/10/7b068ef0-ad6f-4813-ab54-a766ce3047b9-1536x864.jpg"
          alt={movie.original_title + " poster"}
        />
        <div>
          <button
            className={classes.watchBtn}
            onClick={() => alert("This is a dummy clone. 🥲 \n Go to netflix.com and subscribe now!")}
          >
            <HiMiniPlay />
            Play
          </button>
          <button>
            <IoIosInformationCircleOutline /> More Info
          </button>
        </div>
      </div>
    );
  }
  return content;
};
export default HeroSection;