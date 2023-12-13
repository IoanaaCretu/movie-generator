export default function Games({ isOpen, games }) {
  return (
    <main className={`${isOpen ? "blurry" : ""}`}>
      <div className="games">
        {games.map((game) => (
          <div className="game">
            <img src={game.src} alt={game.name} />
            <p>{game.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
