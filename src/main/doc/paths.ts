import { culturePath, cultureIdPath, stationPath, stationIdPath } from "./path";

export default {
    '/culture': culturePath,
    '/culture/{cultureId}': cultureIdPath,
    '/station': stationPath,
    '/station/{stationId}': stationIdPath,
}