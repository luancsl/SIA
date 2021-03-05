import { culturePath, cultureIdPath, cultureSearch, stationPath, stationIdPath, stationByDistancePath, climePath } from "./path";

export default {
    '/culture': culturePath,
    '/culture/{cultureId}': cultureIdPath,
    '/culture/searchCulture': cultureSearch,
    '/station': stationPath,
    '/station/{stationId}': stationIdPath,
    '/station/stationsDistance': stationByDistancePath,
    '/service/climate': climePath,
}