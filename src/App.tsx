import "bootstrap/dist/css/bootstrap.css";

import ListGroups from "./components/ListGroup";
import GridMovies from "./components/GridMovies";
import { useState } from "react";

function App() {
  const category = [
    "Comedy",
    "Fantasy",
    "Adventure",
    "Thriller",
    "Animation",
    "Family",
    "Horror",
    "Drama",
    "Documentary",
    "Crime",
    "Mystery",
    "Action",
    "Music",
    "Sci-Fi",
    "History",
    "Biography",
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSelectedItems = (items: string[]) => {
    setSelectedCategories(items);
  };

  return (
    <>
      <div className="d-flex">
        <ListGroups
          category={category}
          heading="Categories"
          onSelectedItems={handleSelectedItems}
        />
        <GridMovies selectedCategories={selectedCategories} />
      </div>
    </>
  );
}

export default App;
