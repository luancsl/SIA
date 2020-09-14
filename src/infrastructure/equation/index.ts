export * from "./equationHandler";
export * from "./hargreavesSamani";
export * from "./camargo71";
export * from "./penmanMonteith";
export * from "./priestleyTaylor";
export * from "./linacre";

import { PenmanMonteithHandler, HargreavesSamaniHandler, PriestleyTaylorHandler, LinacreHandler, Camargo71Handler } from ".";

export const equationsHandler = {
    'Penman-Monteith': PenmanMonteithHandler,
    'Hargreaves-Samani': HargreavesSamaniHandler,
    'Priestley-Taylor': PriestleyTaylorHandler,
    'Linacre': LinacreHandler,
    'Camargo-71': Camargo71Handler
}