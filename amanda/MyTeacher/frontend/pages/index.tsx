import { Box } from "@mui/material";
import type { NextPage } from "next";
import { Professor } from "../src/@types/professor";
import Lista from "../src/components/Lista/Lista";

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "http://github.com/amdfd.png",
      descricao: "Descrição do profssor 1",
      valor_hora: 100,
    },
    {
      id: 1,
      nome: "Professor 2",
      foto: "http://github.com/amdfd.png",
      descricao: "Descrição do profssor 2",
      valor_hora: 200,
    },
    {
      id: 1,
      nome: "Professor 3",
      foto: "http://github.com/amdfd.png",
      descricao: "Descrição do profssor 3",
      valor_hora: 300,
    },
    {
      id: 1,
      nome: "Professor 4",
      foto: "http://github.com/amdfd.png",
      descricao: "Descrição do profssor 4",
      valor_hora: 400,
    },
  ];

  return (
    <>
      <Box sx={{ backgroundColor: "secondary.main" }}>
        <Lista professores={professores}></Lista>
      </Box>
    </>
  );
};

export default Home;
