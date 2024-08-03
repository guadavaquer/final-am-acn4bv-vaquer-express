import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configura el middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Puedes añadir rutas específicas si es necesario
app.get("/images/:name", (req, res) => {
  const imagePath = path.join(
    __dirname,
    "public/images",
    req.params.name + ".png",
  );
  res.contentType = "image/png";
  res.sendFile(imagePath);
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
