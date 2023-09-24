import React from "react";
import { makeStyles, Container, Typography, Button } from "@mui/material";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/product/ProductList";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    color: theme.palette.common.white,
    textAlign: "center",
  },
  heroText: {
    marginBottom: theme.spacing(2),
  },
  exploreButton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1, 4),
  },
}));

export default function Home() {
  const classes = useStyles();

  const handleSearch = (searchTerm) => {
    // Agrega la lógica de búsqueda aquí
    console.log(`Realizando búsqueda: ${searchTerm}`);
  };
  return (
    <div>
      <div className={classes.heroContainer}>
        <Container>
          <Typography variant="h4" className={classes.heroText}>
            Bienvenido a Foodie
          </Typography>
          <Typography variant="subtitle1" className={classes.heroText}>
            ¡Explora y compra deliciosos productos alimenticios en nuestra
            tienda en línea!
          </Typography>
          <SearchBar onSearch={handleSearch} />
          <Button
            variant="contained"
            color="secondary"
            className={classes.exploreButton}
          >
            Explorar Productos
          </Button>
        </Container>
      </div>
      <Container>
        {/* Aquí puedes agregar más contenido relacionado con la página de inicio */}
        <ProductList />
      </Container>
    </div>
  );
}
