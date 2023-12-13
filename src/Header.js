import { Squash as Hamburger } from "hamburger-react";

export default function Header({ isOpen, setOpen, gamesList }) {
  return (
    <header>
      <div className="logo">
        <img src="\logo.svg" alt="logo" />
      </div>
      <nav className="navbar">
        <Hamburger color="#28502e" toggled={isOpen} toggle={setOpen} />
        {isOpen && <Navigation gamesList={gamesList} />}
      </nav>
    </header>
  );
}

function Navigation({ gamesList }) {
  return (
    <ul className="navigation">
      <li>Home</li>
      {gamesList.map((game) => (
        <li>{game.name}</li>
      ))}
    </ul>
  );
}
