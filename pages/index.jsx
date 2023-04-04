import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function getRandomCocktail() {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setRandomCocktail(data.drinks[0]);
    }
    getRandomCocktail();
  }, []);

  useEffect(() => {
    async function getRecentCocktails() {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setCocktails(data.drinks.slice(0, 6));
    }
    getRecentCocktails();
  }, []);

  return (
    <>
    <Header />
      <main>
  <section>
    <h1>Un cocktail au hasard</h1>
    {randomCocktail ? (
      <div>
        <h2>{randomCocktail.strDrink}</h2>
        <img src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
        <p>{randomCocktail.strInstructions}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </section>

  <section>
    <h1>Les derniers cocktails</h1>
    {cocktails.length === 0 && <p>Loading...</p>}
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink} style={{ width: '100%', maxWidth: 300, margin: '0 10px 20px' }}>
          <article>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '100%' }} />
          </article>
        </div>
      ))}
    </div>
  </section>
</main>

<Footer />

    </>
  );
};

export default Home;
