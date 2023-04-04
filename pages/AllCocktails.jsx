import { useState, useEffect } from 'react';
import Link from 'next/link';

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`);
      const data = await response.json();
      setCocktails(data.drinks);
    };

    fetchData();
  }, []);

  return (
    <div className="cocktails-container">
      <h1>Tous les cocktails</h1>
      <div className="cocktails-grid">
        {cocktails.map(cocktail => (
          <div key={cocktail.idDrink} className="cocktail-item">
            <Link href="/Cocktail/" as={`/  ${cocktail.idDrink}`}>

            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />

          </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .cocktails-container {
          max-width: 800px;
          margin: 0 auto;
        }
        .cocktails-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 20px;
        }
        .cocktail-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          width: 100%;
          max-width: 250px;
          height: auto;
          object-fit: cover;
          border-radius: 8px;
        }
        p {
          margin-top: 10px;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Cocktails;
