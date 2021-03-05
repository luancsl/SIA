export * from "./station"
export * from "./culture"
import { stationInit, cultureInit } from "."

const init = async () => {
    await stationInit();
    await cultureInit();
    process.exit();
}

init();