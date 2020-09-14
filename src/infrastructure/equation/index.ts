export * from "./equationHandler";
export * from "./hargreavesSamani";
export * from "./camargo71";
export * from "./penmanMonteith";
export * from "./priestleyTaylor";
export * from "./linacre";

import { PenmanMonteithHandler, HargreavesSamaniHandler, PriestleyTaylorHandler, LinacreHandler, Camargo71Handler } from ".";

export const equationsHandler = {
    'penman-monteith': PenmanMonteithHandler,
    'hargreaves-samani': HargreavesSamaniHandler,
    'priestley-taylor': PriestleyTaylorHandler,
    'linacre': LinacreHandler,
    'camargo-71': Camargo71Handler
}