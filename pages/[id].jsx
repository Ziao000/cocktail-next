import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Cocktail = () => {
  const router = useRouter();
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    const fetchCocktail = async () => {
      const { id } = router.query;
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setCocktail(data.drinks[0]);
    }

    if (router.query.id) {
      fetchCocktail();
    }
  }, [router.query.id]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default Cocktail;
