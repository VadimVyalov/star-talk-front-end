import {  hoursToMinutes } from 'date-fns';
import oneOrMore from "./oneOrMore";

    const timeMes = (time: number) => {
        const hour = Math.trunc(time);
        const minute = hoursToMinutes(time - Math.trunc(time));

        const mes = (hour ? `${hour} годин${oneOrMore(hour)} ` : '') +
            (minute ? `${minute} хвилин${oneOrMore(minute)}` : '')
        return mes
}
    
export default timeMes