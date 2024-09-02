import { useState } from "react";
import GridMovies from "./GridMovies";
import ListGroups from "./ListGroup";

function Home() {
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

export default Home;
