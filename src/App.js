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
      src: "/images/binary-1254484_640.png",
      component: "RandomNumber",
    },
    {
      id: 1,
      name: "Random Advice",
      src: "/images/dialog-148815_640.png",
      component: "RandomAdvice",
    },
    {
      id: 2,
      name: "Random Color Palette",
      src: "/images/color-154058_640.png",
      component: "RandomColorPalette",
    },
    {
      id: 3,
      name: "Pick your movie",
      src: "/images/theater-158168_640.png",
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
