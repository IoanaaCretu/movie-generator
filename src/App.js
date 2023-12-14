import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Games from "./components/Games";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const data = [
    {
      id: 0,
      name: "Random number generator",
      src: "/pic.jpg",
      component: "RandomNumber",
    },
    {
      id: 1,
      name: "Random Quotes",
      src: "/pic.jpg",
      component: "RandomQuotes",
    },
    {
      id: 2,
      name: "Random Color Palette",
      src: "/pic.jpg",
      component: "RandomColorPalette",
    },
    {
      id: 3,
      name: "Pick your movie",
      src: "/pic.jpg",
      component: "RandomMovie",
    },
  ];

  return (
    <>
      <Header
        isOpen={isOpen}
        setOpen={setOpen}
        gamesList={data}
        setSelectedGame={setSelectedGame}
      />

      <Games
        isOpen={isOpen}
        games={data}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />

      <Footer />
    </>
  );
}

export default App;
