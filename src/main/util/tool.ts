export const getGlobalRadiation = (mes: number, lat: number): any => {
    const table = [
        { 0: 14.5, 2: 14.8, 4: 15.0, 6: 15.3, 8: 15.6, 10: 15.9, 12: 16.1, 14: 16.3, 16: 16.5, 18: 16.7, 20: 16.7, 22: 16.9, 24: 16.9, 26: 17.0, 28: 17.1, 30: 17.2 },
        { 0: 15.0, 2: 15.2, 4: 15.3, 6: 15.4, 8: 15.6, 10: 15.7, 12: 15.8, 14: 15.8, 16: 15.9, 18: 15.9, 20: 16.0, 22: 16.0, 24: 15.9, 26: 15.9, 28: 15.8, 30: 15.7 },
        { 0: 15.2, 2: 15.2, 4: 15.1, 6: 15.1, 8: 15.0, 10: 15.0, 12: 14.9, 14: 14.9, 16: 14.8, 18: 14.7, 20: 14.5, 22: 14.3, 24: 14.1, 26: 13.9, 28: 13.7, 30: 13.5 },
        { 0: 14.7, 2: 14.5, 4: 14.3, 6: 14.1, 8: 14.0, 10: 13.8, 12: 13.5, 14: 13.2, 16: 13.0, 18: 12.7, 20: 12.4, 22: 12.0, 24: 11.7, 26: 11.4, 28: 11.1, 30: 10.8 },
        { 0: 13.9, 2: 13.6, 4: 13.3, 6: 13.0, 8: 12.7, 10: 12.4, 12: 12.0, 14: 11.6, 16: 11.3, 18: 10.9, 20: 10.6, 22: 10.2, 24: 9.8, 26: 9.4, 28: 9.0, 30: 8.5 },
        { 0: 13.4, 2: 13.0, 4: 12.7, 6: 12.6, 8: 12.0, 10: 11.6, 12: 11.2, 14: 10.8, 16: 10.4, 18: 10.0, 20: 9.6, 22: 9.1, 24: 8.6, 26: 8.1, 28: 7.8, 30: 7.4 },
        { 0: 13.5, 2: 13.2, 4: 12.8, 6: 12.5, 8: 12.2, 10: 11.9, 12: 11.5, 14: 11.1, 16: 10.8, 18: 10.4, 20: 10.0, 22: 9.6, 24: 9.1, 26: 8.7, 28: 8.3, 30: 7.8 },
        { 0: 14.2, 2: 14.0, 4: 13.7, 6: 13.5, 8: 13.2, 10: 13.0, 12: 12.7, 14: 12.4, 16: 12.1, 18: 11.8, 20: 11.5, 22: 11.1, 24: 10.7, 26: 10.4, 28: 10.0, 30: 9.6 },
        { 0: 14.9, 2: 14.8, 4: 14.7, 6: 14.6, 8: 14.5, 10: 14.4, 12: 14.2, 14: 14.0, 16: 13.8, 18: 13.7, 20: 13.5, 22: 13.1, 24: 13.1, 26: 12.8, 28: 12.6, 30: 12.2 },
        { 0: 14.9, 2: 15.0, 4: 15.1, 6: 15.2, 8: 15.3, 10: 15.3, 12: 15.3, 14: 15.3, 16: 15.3, 18: 15.3, 20: 15.3, 22: 15.2, 24: 15.1, 26: 15.0, 28: 14.9, 30: 14.7 },
        { 0: 14.6, 2: 14.8, 4: 15.0, 6: 15.2, 8: 15.4, 10: 15.7, 12: 15.8, 14: 15.9, 16: 16.1, 18: 16.2, 20: 16.2, 22: 16.4, 24: 16.5, 26: 16.5, 28: 16.6, 30: 16.7 },
        { 0: 14.3, 2: 14.6, 4: 14.9, 6: 15.1, 8: 15.4, 10: 15.7, 12: 16.0, 14: 16.2, 16: 16.4, 18: 16.7, 20: 16.8, 22: 17.0, 24: 17.1, 26: 17.3, 28: 17.5, 30: 17.6 },
    ];
    let result: number = 0;
    const mesFilter = mes;
    const latFilter = Math.abs(Math.ceil(lat));
    const latEven = latFilter % 2 != 0 ? latFilter + 1 : latFilter;

    if ((mesFilter >= 0) && (mesFilter < 12)) {
        const latRange = Object.keys(table[mesFilter]);
        if ((latEven >= 0) && (latEven <= parseFloat(latRange[latRange.length - 1]))) {
            result = table[mesFilter][latEven];
        } else {
            result = table[mesFilter][parseFloat(latRange[latRange.length - 1])];
        }
    } else {
        result = -90;
    }

    return parseFloat((result * 2.45).toFixed(2));
}

export const convertDMStoDD = (cood: string): number => {

    const position = (letter: string, cood: number): number => {
        const value = letter.toLowerCase();
        switch (value) {
            case 's':
                return cood * -1
            case 'w':
                return cood * -1
            default:
                return cood;
        }
    }

    const DMStoDD = (obj: any): number => {
        const result = obj.grau + ((obj.minute + (obj.second / 60)) / 60);
        return parseFloat(position(obj.letter, result).toFixed(6));
    }

    const coodDMS = {
        grau: parseInt(cood.substr(0, 2)),
        minute: parseInt(cood.substr(2, 2)),
        second: parseFloat(cood.substr(4, cood.length)),
        letter: cood.substr(-1, 1),
    }

    return DMStoDD(coodDMS)

}

console.log(getGlobalRadiation(6, -8.897508))