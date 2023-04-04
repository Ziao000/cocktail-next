import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Header from '@/components/Header';

const Result = () => {
  const router = useRouter();
  const { searchValue } = router.query;
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`);
      const data = await res.json();
      setCocktails(data.drinks);
    };

    fetchCocktails();
  }, [searchValue]);

  const filteredCocktails = cocktails
    ? cocktails.filter((cocktail) => {
        const cocktailName = cocktail.strDrink.toLowerCase();
        return cocktailName.includes(searchValue.toLowerCase());
      })
    : [];

  const renderCocktails = () => {
    return filteredCocktails.map((cocktail) => (
      <Grid item xs={12} sm={6} md={4} key={cocktail.idDrink}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => router.push(`/ ${cocktail.idDrink}`)}>
            <CardMedia
              component="img"
              height="140"
              image={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cocktail.strDrink}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };

  return (
    <div className="cocktail-list">
        <Header></Header>
      <h1>Résultats pour "{searchValue}" :</h1>
      {filteredCocktails.length > 0 ? (
        <Grid container spacing={2}>
          {renderCocktails()}
        </Grid>
      ) : (
        <p>Aucun cocktail trouvé.</p>
      )}
      <button onClick={() => router.back()}>Retour</button>
      <style jsx>{`
        .cocktail-list {
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Result;
