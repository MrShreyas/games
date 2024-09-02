import "bootstrap/dist/css/bootstrap.css";

import ListGroups from "./components/ListGroup";
import GridMovies from "./components/GridMovies";

function App() {
  const category = [
    "Comedy",
    "Fantacy",
    "Adventure",
    "Thriller",
    "Animation",
    "Family",
    "Horror",
    "Drama",
    "Documentory",
    "Crime",
    "Mystery",
    "Action",
    "Music",
    "Sci-Fi",
    "History",
    "Biography",
  ];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div className="d-flex">
        <ListGroups
          category={category}
          heading="Categories"
          onSelectedItem={handleSelectedItem}
        />
        <GridMovies />
      </div>
    </>
  );
}

export default App;
