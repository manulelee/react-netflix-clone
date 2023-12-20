const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmU0ZDMyNmZmYTdlMzc3YTNlZTBkMjUwNjlkNDE2ZiIsInN1YiI6IjY1N2IzMDdhZWEzOTQ5MDBmZWIwODZhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YGnpFIH3C_JAWQv5BBTaDWpmxclNepHThTUDJQeRwhQ",
  },
};
export async function fetchTitles({ signal, query }) {
  const response = await fetch(`https://api.themoviedb.org/3/${query}`, { ...options, signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching data");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}

export const MOVIE_GENRES = [
  { id: 12, name: "Adventure" },
  { id: 14, name: "Fantasy" },
  { id: 16, name: "Animation" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 36, name: "History" },
  { id: 37, name: "Western" },
  { id: 53, name: "Thriller" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 878, name: "Science Fiction" },
  { id: 9648, name: "Mystery" },
  { id: 10402, name: "Music" },
  { id: 10749, name: "Romance" },
  { id: 10751, name: "Family" },
  { id: 10752, name: "War" },
  { id: 10770, name: "TV Movie" },
];

export const TV_GENRES = [
  { id: 16, name: "Animation" },
  { id: 18, name: "Drama" },
  { id: 35, name: "Comedy" },
  { id: 37, name: "Western" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 9648, name: "Mystery" },
  { id: 10759, name: "Action & Adventure" },
  { id: 10762, name: "Kids" },
  { id: 10763, name: "News" },
  { id: 10764, name: "Reality" },
  { id: 10765, name: "Sci-Fi & Fantasy" },
  { id: 10766, name: "Soap" },
  { id: 10767, name: "Talk" },
  { id: 10768, name: "War & Politics" },
  { id: 10751, name: "Family" },
];

export const GENRES = [...new Set([...MOVIE_GENRES, ...TV_GENRES])];

export const PROFILE_IMAGES = [
  { id: 0, link: "https://wallpapers.com/images/high/netflix-profile-pictures-1200-x-1200-3ycxwy07lfm1l32d.webp" },
  { id: 1, link: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-w3lqr61qe57e9yt8.webp" },
  { id: 2, link: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-2fg93funipvqfs9i.webp" },
  { id: 3, link: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-62wgyitks6f4l79m.webp" },
  { id: 4, link: "https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp" },
  { id: 5, link: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp" },
];
