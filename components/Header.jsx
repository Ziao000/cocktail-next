import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    router.push(`/result?searchValue=${searchValue}`);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/AllCocktails">
              Tous les cocktails
            </Link>
          </li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Rechercher un cocktail" value={searchValue} onChange={handleInputChange} />
        <button onClick={handleSearch}>Rechercher</button>
      </div>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background-color: #0070f3;
        }
        nav ul {
          display: flex;
          gap: 20px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        nav ul li a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 18px;
          transition: all 0.2s ease-in-out;
        }
        nav ul li a:hover {
          text-decoration: underline;
        }
        .search {
          display: flex;
          gap: 10px;
        }
        .search input {
          padding: 10px;
          border-radius: 4px;
          border: none;
          flex: 1;
        }
        .search button {
          background-color: #fff;
          color: #0070f3;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }
        .search button:hover {
          background-color: #0070f3;
          color: #fff;
        }
      `}</style>
    </header>
  );
};

export default Header;
