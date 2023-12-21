import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { GENRES, fetchTitles } from "../utils/http";
import { ClipLoader } from "react-spinners";

const TitlePage = () => {
  const { id, type } = useParams();
  const key = id.toString();
  let query = `${type}/${id}`;
  const { isLoading, isError, error, data } = useQuery({
    queryFn: ({ signal }) => fetchTitles({ signal, query }),
    queryKey: ["title", key],
    //refetchInterval: 10000,
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
    let movie = data;
    let genres = movie.genres.map((genre) => GENRES.find((g) => g.id === genre.id).name);
    content = (
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto grid grid-cols-1 md:grid-cols-2">
        <img className="w-1/2 mx-auto mb-2" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" />
        <div className="w-1/2 md:w-full mx-auto">
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <p>{movie.overview}</p>

          <small className="mt-4">
            <span className="text-green-400">{movie.popularity}</span> streams
          </small>
          <br />
          <small className="mt-4">
            <span className="font-bold">Genres: </span>
            {genres.map((genre) => (
              <span className="me-1">{genre} </span>
            ))}
          </small>
        </div>
      </div>
    );
  }
  return <div className="content flex flex-col mt-14">{content}</div>;
};
export default TitlePage;
