export type OptionType = {
    readonly value: string;
    readonly label: string;
    index?: number;
}

export type FormValues = {
    startLevel: OptionType;
    finishLevel: OptionType;
    selectDate: Date;
};