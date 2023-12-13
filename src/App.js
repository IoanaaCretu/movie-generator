import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Games from "./Games";

function App() {
  const [isOpen, setOpen] = useState(false);
  const data = [
    {
      id: 1,
      name: "Random number generator",
      src: "/pic.jpg",
    },
    {
      id: 2,
      name: "Random Quotes",
      src: "/pic.jpg",
    },
    {
      id: 3,
      name: "Random Color Palette",
      src: "/pic.jpg",
    },
    {
      id: 4,
      name: "Pick your movie",
      src: "/pic.jpg",
    },
  ];
  return (
    <>
      <Header isOpen={isOpen} setOpen={setOpen} gamesList={data} />
      <Games isOpen={isOpen} games={data} />
      <Footer />
    </>
  );
}

export default App;
