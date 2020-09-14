import { Camargo71Handler, HargreavesSamaniHandler, PenmanMonteithHandler, PriestleyTaylorHandler, LinacreHandler } from "@src/infrastructure/equation";


const penmanMonteith = new PenmanMonteithHandler();
const hargreavesSamani = new HargreavesSamaniHandler();

penmanMonteith.setNext(hargreavesSamani);


export const getEtoBestEquation = penmanMonteith;
