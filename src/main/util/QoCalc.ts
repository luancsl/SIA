import dayjs from 'dayjs';

const jDay = (date: string): number => {
    const dateFormat = dayjs(date, 'YYYYMMDD');
    const startYearDate = dayjs(dateFormat.year() + '0101', 'YYYYMMDD');

    return dateFormat.diff(startYearDate, 'day') + 1;
}

const solarDeclination = (julianDay: number): number => {
    return 0.409 * Math.sin(2 * Math.PI / 365 * (julianDay - 1.39));
}

const degreesSolarDeclination = (julianDay: number): number => {
    return 23.45 * Math.sin((julianDay - 80) * 360 / 365);
}

const radianLatitude = (lat: number): number => {
    return (Math.PI / 180) * lat;
}

const sunsetHourAngle = (latitude: number, solarDeclination: number): number => {
    return Math.acos(-Math.tan(latitude) * Math.tan(solarDeclination));
}

const invRelativeDistEarthSun = (julianDay: number): number => {
    return 1 + 0.033 * Math.cos(((2 * Math.PI) / 365) * julianDay);
}

const degRelativeDistanceEarthSun = (julianDay: number): number => {
    return 1 + 0.033 * Math.cos((julianDay * 360) / 365);
}

const solarConstant = 0.0820


const EstQo = (
    solarConstant: number,
    invRelativeDistEarthSun: number,
    radianLatitude: number,
    solarDeclination: number,
    sunsetHourAngle: number,
): number => {
    return ((24 * 60) / Math.PI) * solarConstant * invRelativeDistEarthSun * (sunsetHourAngle * Math.sin(radianLatitude) * Math.sin(solarDeclination) + Math.cos(radianLatitude) * Math.cos(solarDeclination) * Math.sin(sunsetHourAngle));
}

const EstQo2 = (
    degRelativeDistanceEarthSun: number,
    degreesLatitude: number,
    degreesSolarDeclination: number,
    sunsetHourAngle: number,
): number => {
    return 37.6 * degRelativeDistanceEarthSun * ((Math.PI / 180) * sunsetHourAngle * Math.sin(degreesLatitude) * Math.sin(degreesSolarDeclination) + Math.cos(degreesLatitude) * Math.cos(degreesSolarDeclination) * Math.sin(sunsetHourAngle))
}

const jDayP = jDay('20191109');
console.log(jDayP);

const invRelativeDistEarthSunP = invRelativeDistEarthSun(jDayP);
console.log(invRelativeDistEarthSunP);


const radianLatitudeN = radianLatitude(41.5875);
const radianLatitudeCT = Math.pow(Math.tan(radianLatitudeN), 2);

const radianLatitudeP = radianLatitudeN
console.log(radianLatitudeP);

const solarDeclinationP = solarDeclination(jDayP);
console.log(solarDeclinationP);

const sunsetHourAngleP = sunsetHourAngle(radianLatitudeP, solarDeclinationP);
console.log(sunsetHourAngleP);

const Qo = EstQo(
    solarConstant,
    invRelativeDistEarthSunP,
    radianLatitudeP,
    solarDeclinationP,
    sunsetHourAngleP
);

/* const degRelativeDistanceEarthSunP = degRelativeDistanceEarthSun(jDayP);
console.log(degRelativeDistanceEarthSunP);

const degreesSolarDeclinationP = degreesSolarDeclination(jDayP);
console.log(degreesSolarDeclinationP);

const degreesLatitudeP = 41.5875;
console.log(degreesLatitudeP);

const sunsetHourAngleP2 = sunsetHourAngle(degreesLatitudeP, degreesSolarDeclinationP);
console.log(sunsetHourAngleP2);

const Qo2 = EstQo2(
    degRelativeDistanceEarthSunP,
    degreesLatitudeP,
    degreesSolarDeclinationP,
    sunsetHourAngleP2
); */

console.log(Qo);