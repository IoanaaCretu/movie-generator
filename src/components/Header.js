import { Squash as Hamburger } from "hamburger-react";

export default function Header({
  isOpen,
  setOpen,
  gamesList,
  setSelectedGame,
}) {
  return (
    <header>
      <div className="logo">
        <img src="\logo.svg" alt="logo" />
      </div>
      <nav className="navbar">
        <Hamburger color="#28502e" toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <Navigation
            setOpen={setOpen}
            gamesList={gamesList}
            setSelectedGame={setSelectedGame}
          />
        )}
      </nav>
    </header>
  );
}

function Navigation({ gamesList, setSelectedGame, setOpen }) {
  return (
    <ul className="navigation">
      <li
        onClick={() => {
          setSelectedGame(null);
          setOpen(false);
        }}
      >
        Home
      </li>
      {gamesList.map((game) => (
        <li
          onClick={() => {
            setSelectedGame(game.component);
            setOpen(false);
          }}
        >
          {game.name}
        </li>
      ))}
    </ul>
  );
}
