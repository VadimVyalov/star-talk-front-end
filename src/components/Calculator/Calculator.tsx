"use client"


import cn from "@/helpers"
import Icon from "../Icon";
import { useForm, Controller } from "react-hook-form";
import type {
    SubmitHandler,
    DefaultValues
} from "react-hook-form";
import ReactDatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import ReactSelect, { StylesConfig } from "react-select";
import { addMonths, subMonths, format, getYear, getMonth, differenceInDays, hoursToMinutes, addDays, subDays } from 'date-fns';
import uk from "date-fns/locale/uk"

import style from "./styles.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css"
import dataSelect from "./dateSelect.module.scss"

import { useEffect, useState } from "react";


type OptionType = {
    readonly value: string;
    readonly label: string;
    index?: number;
}

type FormValues = {
    startLevel: OptionType;
    finishLevel: OptionType;
    selectDate: Date;
};

const optionsList: OptionType[] = [
    { value: "0", label: "0" },
    { value: "100", label: "A1" },
    { value: "250", label: "A2" },
    { value: "450", label: "B1" },
    { value: "700", label: "B2" },
    { value: "900", label: "C1" },
    { value: "1200", label: "C2" }

]
// const optionsFinish: OptionType[] = [

// ]



const totalMonth = 6;
const maxHourPerDay = 8;
const optionsStart = optionsList.slice(0, -1);


const defaultValues: DefaultValues<FormValues> = {

    startLevel: optionsList[0],
    finishLevel: optionsList[1],

    selectDate: addDays(new Date(), 13),
};


const formSelectStyle: StylesConfig = {
    control: (styles, { isFocused }) => {
        return {
            ...styles,
            backgroundColor: 'white',
            boxShadow: 'none',
            borderColor:
                isFocused
                    ? '#DFE0E2'
                    : 'transparent',
            cursor: 'pointer',
            ':hover': {
                borderColor: '#DFE0E2',
            },
            ':active': {
                borderColor: '#DFE0E2',
            },
        }
    },
    option: (styles, { isDisabled, isFocused, isSelected }) => {

        return {
            ...styles,
            backgroundColor: isSelected ? '#46BB59' : isFocused ? '#DFE0E2' : undefined,
            color: isSelected ? '#FFFFFF' : '#1C1D1F',
            cursor: isDisabled ? 'not-allowed' : 'pointer',

        }
    },

    menu: styles => ({ ...styles, border: '1px solid #DFE0E2', }),
    valueContainer: styles => ({ ...styles, padding: '8px 12px', textAlign: "left" }),
    dropdownIndicator: (styles, { selectProps: { menuIsOpen }, },) => ({
        ...styles,

        //  color:"#FF0000",
        transition: "all 250ms ease",
        transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
        "&:hover": {
            color: '#FF0000',
        },
    })
};

const dateSelectStyle: StylesConfig = {

    container: (styles, { isDisabled, isFocused }) => {

        return {
            ...styles,
            fontSize: '14px',
        }
    },


    control: (styles, { isFocused }) => {
        return {
            ...styles,
            backgroundColor: 'white',
            boxShadow: 'none',
            borderColor:
                isFocused
                    ? '#DFE0E2'
                    : 'transparent',
            cursor: 'pointer',
            ':hover': {
                borderColor: '#DFE0E2',
            },
            ':active': {
                borderColor: '#DFE0E2',
            },


        }
    },
    option: (styles, { isDisabled, isFocused, isSelected }) => {

        return {
            ...styles,
            backgroundColor: isSelected ? '#46BB59' : isFocused ? '#DFE0E2' : undefined,
            color: isSelected ? '#FFFFFF' : '#1C1D1F',
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            lineHeight: 1.25,

        }
    },

    menu: styles => ({ ...styles, border: '1px solid #DFE0E2', marginTop: '10px' }),
    valueContainer: styles => ({ ...styles, padding: '8px 12px', textAlign: "left" }),
    dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => ({
        ...styles,
        transition: "all 250ms ease",
        transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)"
    })
};

const Calculator = () => {
    const {
        handleSubmit,
        // register,
        // reset,
        watch,
        setValue,
        getValues,
        control,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues
    });

    const [optionsFinish, setOptionsFinish] = useState(optionsList.slice(1));
    const [minDate, setMinDate] = useState(addDays(new Date(), 13));


    const customHeaderDP = ({
        date,
        decreaseMonth,
        increaseMonth,
        changeYear,
        changeMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled
    }: ReactDatePickerCustomHeaderProps) => {

        const startDate: OptionType = {
            value: format(date, "LLLL yyyy", { locale: uk }),
            label: format(date, "LLLL yyyy", { locale: uk }),
            index: 0,
        }

        const montsYear: OptionType[] = Array(totalMonth + 1).fill('').map((_, i) => {

            return {
                value: format(addMonths(minDate, i), "LLLL yyyy", { locale: uk }),
                label: format(addMonths(minDate, i), "LLLL yyyy", { locale: uk }),
                index: i,
            }
        })
        const onChangeHandler = (option: any) => {
            const index = option?.index || 0;
            const newMonts = (getMonth(minDate) + index) > 12 ?
                (getMonth(minDate) + index) - 12 : (getMonth(minDate) + index)
            const newYear = (getMonth(minDate) + index) > 11 ? (getYear(minDate) + 1)
                : (getYear(minDate))
            changeMonth(newMonts)
            changeYear(newYear)
        }
        return (
            <div className="px-3 font-medium">
                <div className="text-left text-sm leading-[1.5] mb-8 ">
                    Оберіть дату
                </div >
                <div className="text-left capitalize text-2xl leading-[1.5] mb-4">
                    {format(date, "eeeeee, LLLL d", { locale: uk })}
                </div >
                <div className="flex h-8">
                    <ReactSelect
                        //className="w-2/3 "
                        className="dateDrop"
                        classNamePrefix="dateDrop"
                        isSearchable={false}

                        //  styles={dateSelectStyle}
                        options={montsYear}
                        value={startDate}
                        onChange={onChangeHandler}
                    />
                    <button className="h-full w-8 ml-auto mr-0"
                        title="Попередній місяць"
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}>

                        <Icon name="/assets/icons/small.svg" id="arrow"
                            className={cn("w-5 h-5 rotate-180",
                                prevMonthButtonDisabled ?
                                    "text-transparent cursor-default " :
                                    " text-black-30 hover:text-black-50")}
                        />
                    </button>
                    <button className="h-full w-8 mx-0"
                        title="Наступний місяць"
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}>

                        <Icon name="/assets/icons/small.svg" id="arrow"
                            className={cn("w-5 h-5",
                                nextMonthButtonDisabled ?
                                    "text-transparent cursor-default" :
                                    " text-black-30 hover:text-black-50")}
                        />
                    </button>
                </div>
            </div>
        );
    }

    useEffect(() => {

        const subscription = watch(({ startLevel, finishLevel }, { name }) => {

            const newList = optionsList.filter(item => +item.value > +(startLevel?.value || 0))
            const day = Math.ceil((+(finishLevel?.value || 0) - +(startLevel?.value || 0)) / maxHourPerDay);
            const newDate = addDays(new Date(), day + 1)


            if (name === 'startLevel') {

                setOptionsFinish(newList)
                setValue("finishLevel", newList[0])
                //  setValue("selectDate", newDate)
            }

            if (name === 'finishLevel') {
                setMinDate(newDate)
                setValue("selectDate", newDate)
            }

        }
        );


        return () => subscription.unsubscribe();
    }, [watch])


    const oneOrMore = (num: number) => {
        const cl = num > 20 ? +(num.toString().slice(-1)) : num;
        const cz = cl === 1 ? 'у' : cl > 1 && cl < 4 ? 'и' : ''
        return cz
        // години
        // а - 1
        // и - 2 3 4
        // - 5 6 7 8 9 10

        // хвелини
        // 
        // а - 1 
        // и - 2 3 4  
        // - 5 6 7 8 9 
    }

    const timeMes = (time: number) => {
        const hour = Math.trunc(time);
        const minute = hoursToMinutes(time - Math.trunc(time));

        const mes = (hour ? `${hour} годин${oneOrMore(hour)} ` : '') +
            (minute ? `${minute} хвелин${oneOrMore(minute)}` : '')
        return mes
    }
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // alert(JSON.stringify(data));

        //console.log(data)
        const { startLevel, finishLevel, selectDate } = data
        const days = differenceInDays(selectDate, Date.now())
        const hourPerDay = (+finishLevel.value - +startLevel.value) / days

        console.log(`витрачати ${timeMes(hourPerDay)} на день`)
        console.log(`Дивитись відео ${timeMes(hourPerDay * 7 * 0.3)} на тиждень`)
        console.log(`Відвідувати спікінги ${timeMes(hourPerDay * 7 * 0.4)} на тиждень`)
        console.log(`Займатись з репетитором ${timeMes(hourPerDay * 7 * 0.1)} на тиждень`)
        console.log(`Самостійно писати ${timeMes(hourPerDay * 7 * 0.1)} на тиждень`)
        console.log(`Самостійно читати ${timeMes(hourPerDay * 7 * 0.1)} на тиждень`)

        // return hourPerDay;

    }

    const calcResult = (date: Date, startLevel: string, finishLevel: string) => {
        const days = differenceInDays(Date.now(), date)
        const hourPerDay = (+finishLevel - +startLevel) / days
        return hourPerDay;
    }

    return (
        <section id='calculator' className={cn(style.bg, "bg-center bg-no-repeat ", "mb-[72px] t:mb-[100px] d:mb-[120px]")}>
            <div className="container  ">

                <div className="flex flex-col items-center pt-10 t:py-10 d:py-14 ">
                    <h2 className="font-roboto text-center text-white-50 text-[40px] font-semibold leading-[1.5] 
                                    mb-10 t:mb-4 d:mb-10 max-w-[280px] t:max-w-[460px] d:max-w-[750px]">Калькулятор тривалості навчання</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col text-center items-center
                    max-w-[320px] t:max-w-[400px] d:max-w-[840px] ">
                        <div className="w-full flex flex-row  justify-between gap-x-4 t:gap-x-8 d:gap-x-14 gap-y-6 flex-wrap">
                            <div className="flex flex-col items-start">
                                <label className="whitespace-nowrap text-white-50 ">Поточний рівень</label>
                                <Controller
                                    render={({ field }) => (
                                        <ReactSelect
                                            {...field}
                                            className="min-w-[140px] t:min-w-[180px]"
                                            isSearchable={false}
                                            // onChange={handleChangeStart}
                                            styles={formSelectStyle}

                                            options={optionsStart}

                                        />
                                    )}
                                    name="startLevel"
                                    control={control}
                                />
                            </div>

                            <div className="flex flex-col items-start">
                                <label className="whitespace-nowrap text-white-50 " >Бажаний рівень</label>
                                <Controller
                                    render={({ field }) => (
                                        <ReactSelect
                                            className="min-w-[140px] t:min-w-[180px]"
                                            isSearchable={false}
                                            styles={formSelectStyle}
                                            options={optionsFinish}


                                            {...field}
                                        />
                                    )}
                                    name="finishLevel"
                                    control={control}
                                />
                            </div>

                            <div className="flex flex-col items-start grow mb-12 ">
                                <label className="whitespace-nowrap text-white-50 ">Дата завершення</label>
                                <Controller
                                    control={control}

                                    name="selectDate"
                                    render={({ field: { value, onChange, ...fieldProps } }) => {

                                        const [isOpen, setIsOpen] = useState(false);
                                        return (

                                            <ReactDatePicker
                                                {...fieldProps}
                                                open={isOpen}
                                                onInputClick={() => setIsOpen(!isOpen)}
                                                onChange={(date) => { onChange(date); setIsOpen(false) }}
                                                onClickOutside={() => setIsOpen(false)}
                                                shouldCloseOnSelect={true}
                                                portalId="root-portal"
                                                placeholderText=""
                                                dateFormat="dd.MM.yyyy"

                                                popperPlacement="bottom-end"
                                                locale={uk}
                                                minDate={minDate}
                                                maxDate={addMonths(minDate, totalMonth)}
                                                // startDate
                                                showPopperArrow={false}
                                                selected={value}
                                                showIcon={true}
                                                icon={
                                                    <Icon name="/assets/icons/small.svg" id="arrow"
                                                        className={cn(" text-black-30 hover:text-black-50 transition pointer-events-none ",
                                                            isOpen ? "rotate-[270deg]  " : "rotate-[90deg]  "
                                                        )}
                                                    />}
                                                renderCustomHeader={customHeaderDP}
                                            />
                                        );
                                    }}
                                />
                            </div>
                        </div>
                        <button className={cn("greenLink", " px-28 py-4 text-lg leading-[1.75] w-full t:w-auto mb-[340px] t:mb-auto")}>Розрахувати</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Calculator;