import "bootstrap/dist/css/bootstrap.css";

import ListGroups from "./components/ListGroup";
import GridMovies from "./components/GridMovies";

function App() {
  const items = ["Mumbai", "Delhi", "Banglore", "Hyderabad"];
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
  const handleSelectedItem = (item: string) => {
    console.log(item);
    fetch(
      "https://Movies-Verse.proxy-production.allthingsdev.co/api/movies/upcoming-movies",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <ListGroups
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
      <GridMovies />
    </>
  );
}

export default App;
