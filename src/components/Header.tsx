import "./Header.css";

export const Header = () => {
  return (
    <nav className="nav">
      <span className="site-title">PageTurner</span>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/collection">My Collection</a>
        </li>
        <li>
          <a href="/missingBooks">Missing Books</a>
        </li>
        <li>
          <a href="/whishlist">Whish List</a>
        </li>
        <li>
          <a href="/recomendations">Recomendations</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a href="/help">Help</a>
        </li>
      </ul>
    </nav>
  );
};
