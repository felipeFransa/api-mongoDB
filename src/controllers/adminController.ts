import { Request, Response } from "express";

export const HomePage = (req: Request, res: Response) => {
  res.send('Home Page')
}
export const LoginAdmin = (req: Request, res: Response) => {
  res.send('Faca seu login!')
}
export const RegisterAdmin = (req: Request, res: Response) => {
  res.send('Faca seu Cadastro!')
}