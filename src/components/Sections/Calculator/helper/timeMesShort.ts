import {  hoursToMinutes } from 'date-fns';  
const timeMesShort = (time: number) => {
        const hour = Math.trunc(time);
        const minute = hoursToMinutes(time - Math.trunc(time));

        const mes = (hour ? `${hour} год. ` : '') +
            (minute ? `${minute} хв.` : '')
        return mes
}
    export default timeMesShort