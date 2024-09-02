import { useEffect, useState } from "react";

interface Movie {
  date: string;
  list: {
    categories: string[];
    image: string;
    link: string;
    staring: string[];
    title: string;
  }[];
}

interface MoviesResponse {
  movies: Movie[];
}

interface GridMoviesProps {
  selectedCategories: string[];
}

function GridMovies({ selectedCategories = ["Action"] }: GridMoviesProps) {
  const [movies, setMovies] = useState<MoviesResponse>({
    movies: [],
  });
  const [loading, setLoading] = useState(false);

  const myHeaders = new Headers();
  myHeaders.append(
    "x-apihub-key",
    "0LGZPMtp1D-O1Rv8qMMdntyCsGwwP13vAblqI703WAMJGPf7Qr"
  );
  myHeaders.append("x-apihub-host", "Movies-Verse.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "4f700f4a-4bd2-4604-8d5b-7b5e4c976c65");

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow", // This is the correct type for redirect
  };

  const apiEndpoint =
    "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies";

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiEndpoint, requestOptions);
        const result: MoviesResponse = await response.json();
        setMovies(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const filteredMovies = movies.movies.filter((movie) =>
    movie.list.some((item) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.every((category) =>
            item.categories.includes(category)
          )
    )
  );

  if (loading) {
    return <div className="vw-100">Loading...</div>;
  }

  return (
    <>
      <div className="row row-cols-4 row-cols-md-4 g-4 ">
        {filteredMovies.map((movie) =>
          movie.list.map((item, index1) => (
            <div key={index1} className="col">
              <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Starring:
                    {item.staring.map((starring, index2) => (
                      <p key={index2} className="mb-0">
                        {starring}
                      </p>
                    ))}
                  </h6>
                  {item.categories.map((category, index3) => (
                    <span key={index3} className="mx-1 badge text-bg-secondary">
                      {category}
                    </span>
                  ))}
                  <p className="card-text">Release Date: {movie.date}</p>
                  <a className="text-decoration-none " href={item.link}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default GridMovies;
