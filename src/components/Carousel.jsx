import { useQuery } from "@tanstack/react-query";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchTitles } from "../utils/http";
import TitleCard from "./TitleCard";
import classes from "./Carousel.module.css";

const CarouselComponent = ({ url, title }) => {
  const { data, isError, isLoading } = useQuery({
    queryFn: ({ signal }) => fetchTitles({ signal, url }),
    queryKey: [url],
    refetchInterval: 10000,
  });

  const responsive = {
    xxl: {
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
    },
    xl: {
      breakpoint: { max: 993, min: 1200 },
      items: 4,
    },
    lg: {
      breakpoint: { max: 769, min: 992 },
      items: 3,
    },
    md: {
      breakpoint: { max: 768, min: 577 },
      items: 2,
    },
    sm: {
      breakpoint: { max: 576, min: 464 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 464, min: 0 },
      items: 0.5,
    },
  };
  let content;
  if (isError) {
    content = <div>Error</div>;
  }
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (data) {
    content = (
      <span className={classes.container}>
        <h2 className="-mb-5 ml-5 text-2xl font-bold">{title}</h2>
        <Carousel
          containerClass="carousel-container"
          responsive={responsive}
          centerMode={true}
          slidesToSlide={3}
          infinite={true}
          swipeable
        >
          {data.results.map((movie) => (
            <div key={movie.id}>
              <TitleCard movie={movie} />
            </div>
          ))}
        </Carousel>
      </span>
    );
  }
  return content;
};

export default CarouselComponent;
