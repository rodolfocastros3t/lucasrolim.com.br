import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Define o caminho para os ficheiros estáticos (o seu front-end)
// Geralmente a Vercel coloca o build na pasta 'dist' ou 'public'
const staticPath = path.resolve(__dirname, "..", "dist"); 

app.use(express.static(staticPath));

// Rota para qualquer caminho entregar o index.html (essencial para SPAs)
app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Exportação necessária para a Vercel
export default app;
