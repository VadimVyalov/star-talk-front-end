import { OptionType } from "../types";
import { addMonths, addDays, differenceInDays } from 'date-fns';


export const maxHourPerDay = 8;
export const totalMonth = 12;
export const optionsList: OptionType[] = [
    { value: "0", label: "0" },
    { value: "100", label: "A1" },
    { value: "250", label: "A2" },
    { value: "450", label: "B1" },
    { value: "700", label: "B2" },
    { value: "900", label: "C1" }
]

export const startDay = addDays(new Date(), Math.ceil((+(optionsList[1].value || 100) / maxHourPerDay)) + 1);