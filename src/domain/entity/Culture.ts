
type Image = {
    url: string;
    source?: string;
}

type Region = {
    name: {
        enUS: string;
        ptBR: string;
    },
    iniStageDays: number;
    devStageDays: number;
    midStageDays: number;
    endStageDays: number;
    totalDays: number;
    cultureMonths: number[],
}


export type Culture = {
    id?: number | undefined;
    name: {
        enUS: string;
        ptBR: string;
        scientific?: string
    };
    type?: {
        enUS?: string;
        ptBR?: string;
    };
    class: {
        enUS?: string;
        ptBR: string;
    };
    description?: {
        enUS?: string;
        ptBR?: string;
    };
    iniStagekc: number;
    devStagekc?: number;
    midStagekc: number;
    endStagekc: number;
    maxCropHeight?: number;
    icon: string;
    images?: Image[];
    regions?: Region[];
    tags?: string[];
    source: string;
}