import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import mainRoutes from './routes/mainRoutes';

dotenv.config();
const server = express();

server.use(mainRoutes)

server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada!')
})


server.listen(process.env.PORT || 4000, ()=>{ console.log("Conexão com sucesso!")})