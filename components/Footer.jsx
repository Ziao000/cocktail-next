import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: 3 }}>
          <Typography variant="h6" component="div">
            Cocktail App
          </Typography>
          <Typography variant="subtitle1" component="p" color="text.secondary">
            © 2023 Cocktail App. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
      <style jsx>{`
        footer {
          background-color: #0070f3;
          color: #fff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
