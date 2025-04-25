import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import "./SorveteCard.css";

export default function SorveteCard(sorvete) {
  return (
    <Card
      sx={{
        width: 320,
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={sorvete.img}
          alt={sorvete.name}
          sx={{ borderRadius: "10px 10px 0 0" }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {sorvete.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sorvete.flavors.join(", ")}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
            ⭐ {sorvete.rating}
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#ff9800",
              "&:hover": { backgroundColor: "#e68900" },
            }}
            onClick={() => dispatch(addToCart(sorvete))}
          >
            Adicionar ao Carrinho
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
