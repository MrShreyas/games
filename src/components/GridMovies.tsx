import { useEffect, useState } from "react";

interface Movie {
  // Add type definitions for the movie object

  date: "";
  list: [
    {
      categories: [];
      image: "";
      link: "";
      staring: [];
      title: "";
    }
  ];
}

interface MoviesResponse {
  movies: Movie[];
}

function GridMovies() {
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
        setMovies(result);
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
    <>
      <div className="row row-cols row-cols-md-4 g-4">
        {movies.movies.map((movie, index) => (
          <div key={index} className="col">
            {movie.list.map((item, index1) => (
              <div key={index1} className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Starring :
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
                  <p className="card-text">Release Date : {movie.date}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default GridMovies;
