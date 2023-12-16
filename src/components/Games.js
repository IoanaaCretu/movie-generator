import { RandomColorPalette } from "./games/RandomColorPalette";
import { RandomMovie } from "./games/RandomMovie";
import { RandomNumber } from "./games/RandomNumber";
import { RandomAdvice } from "./games/RandomAdvice";

export default function Games({
  isOpen,
  games,
  selectedGame,
  setSelectedGame,
}) {
  const renderComponent = () => {
    switch (selectedGame) {
      case "RandomNumber":
        return <RandomNumber />;
      case "RandomMovie":
        return <RandomMovie />;
      case "RandomAdvice":
        return <RandomAdvice />;
      case "RandomColorPalette":
        return <RandomColorPalette />;
      default:
        return null;
    }
  };

  return (
    <main className={`${isOpen ? "blurry" : ""}`}>
      {!selectedGame ? (
        <div className="games">
          {games.map((game) => (
            <div
              className="game"
              key={game.id}
              onClick={() => {
                setSelectedGame(game.component);
              }}
            >
              <img src={game.src} alt={game.name} />
              <p>{game.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>{renderComponent()}</div>
      )}
    </main>
  );
}
