import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <img
          src="\its-random-high-resolution-logo-transparent.svg"
          alt="logo"
        />
      </div>
      <nav className="navbar">
        <Hamburger color="#28502e" toggled={isOpen} toggle={setOpen} />
        {isOpen && <Navigation />}
      </nav>
    </header>
  );
}

function Navigation() {
  return (
    <ul className="navigation">
      <li>Home</li>
      <li>Game 2 </li>
      <li>Game blablabla</li>
      <li>Game 4</li>
      <li>Game 5</li>
      <li>Game hah</li>
      <li>Game 7</li>
      <li>Game hahahaha</li>
    </ul>
  );
}
