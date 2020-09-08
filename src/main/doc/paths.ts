import { culturePath, cultureIdPath, stationPath, stationIdPath, stationByDistancePath, climePath } from "./path";

export default {
    '/culture': culturePath,
    '/culture/{cultureId}': cultureIdPath,
    '/station': stationPath,
    '/station/{stationId}': stationIdPath,
    '/station/stationsDistance': stationByDistancePath,
    '/service/climate': climePath,
}