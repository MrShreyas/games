import { useEffect, useState } from "react";

interface Movie {
  // Add type definitions for the movie object
}

interface MoviesResponse {
  movies: Movie[];
}

function GridMovies() {
  const [movies, setMovies] = useState<MoviesResponse>({ movies: [] });
  const [loading, setLoading] = useState(false);

  const myHeaders = new Headers();
  myHeaders.append(
    "x-apihub-key",
    "0LGZPMtp1D-O1Rv8qMMdntyCsGwwP13vAblqI703WAMJGPf7Qr"
  );
  myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "4f700f4a-4bd2-4604-8d5b-7b5e4c976c65");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const apiEndpoint =
    "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies";
  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiEndpoint, requestOptions);
        const result: MoviesResponse = await response.json();
        console.log(result);
        setMovies(result);
        console.log("Movies", movies);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movies.movies.map((movie, index) => (
        <div key={index}>{movie.title}</div>
      ))}
    </div>
  );
}

export default GridMovies;
