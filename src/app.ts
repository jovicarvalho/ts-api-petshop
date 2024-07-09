import express, { Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (_, res: Response) => {
  res.send("Bem vindo ao curso de TypeScript!");
});

function criaPet(
  id: number,
  nome: string,
  especie: string,
  idade: number,
  adotado: boolean,
) {
  return {
    id,
    nome,
    especie,
    idade,
    adotado,
  };
}

let id = "0";
function geraId() {
  id = id + 1;
  return id;
}

app.post("/pets", (_, res) => {
  const pet1 = criaPet(parseInt(geraId()), "Bolt", "cachorro", 3, false);
  const pet2 = criaPet(parseInt(geraId()), "Mel", "gato", 2, false);

  res.send([pet1, pet2]);
});

export default app;
