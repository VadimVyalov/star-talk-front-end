"use client"

import cn from "@/helpers"
import Icon from "../Icon";
import { useForm, Controller } from "react-hook-form";
import type {
    SubmitHandler,
    DefaultValues
} from "react-hook-form";
import ReactDatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import ReactSelect from "react-select";
import { addMonths, addDays, format, getYear, getMonth, differenceInDays, hoursToMinutes, } from 'date-fns';
import uk from "date-fns/locale/uk"

import style from "./styles.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css"
import "./levelSelect.css"
import "./dateSelect.css"


import { useEffect, useState } from "react";
import { ModalWrapper } from "../ModalForm/ModalWrapper";


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
    { value: "900", label: "C1" }
]

const totalMonth = 12;
const maxHourPerDay = 8;
const optionsStart = optionsList.slice(0, -1);
const startDay = addDays(new Date(), Math.ceil((+(optionsList[1].value || 100) / maxHourPerDay)) + 1);

const defaultValues: DefaultValues<FormValues> = {

    startLevel: optionsList[0],
    finishLevel: optionsList[1],
    selectDate: startDay,
};


const Calculator = () => {
    const {
        handleSubmit,
        watch,
        setValue,
        control,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues
    });

    const [optionsFinish, setOptionsFinish] = useState(optionsList.slice(1));
    const [minDate, setMinDate] = useState(startDay);
    const [openModal, setOpenModal] = useState(false);
    const [hourPerDay, setHourPerDay] = useState(maxHourPerDay);
    const [isOpen, setIsOpen] = useState(false);
    const onOpenMenu = () => {
        setOpenModal(true);
    };
    const onCloseMenu = () => {
        setOpenModal(false);
    };

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

                        className="dateDrop"
                        classNamePrefix="dateDrop"
                        aria-label="Not searchable"
                        isSearchable={false}
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
                                    " text-black-30 hover:text-black-100")}
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
                                    " text-black-30 hover:text-black-100")}
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
    }, [watch, setValue])


    const oneOrMore = (num: number) => {
        const cl = num > 20 ? +(num.toString().slice(-1)) : num;
        const cz = cl === 1 ? 'у' : cl > 1 && cl < 4 ? 'и' : ''
        return cz
    }

    const timeMes = (time: number) => {
        const hour = Math.trunc(time);
        const minute = hoursToMinutes(time - Math.trunc(time));

        const mes = (hour ? `${hour} годин${oneOrMore(hour)} ` : '') +
            (minute ? `${minute} хвилин${oneOrMore(minute)}` : '')
        return mes
    }
    const timeMesShort = (time: number) => {
        const hour = Math.trunc(time);
        const minute = hoursToMinutes(time - Math.trunc(time));

        const mes = (hour ? `${hour} год. ` : '') +
            (minute ? `${minute} хв.` : '')
        return mes
    }

    const onSubmit: SubmitHandler<FormValues> = (data) => {

        const { startLevel, finishLevel, selectDate } = data
        const days = differenceInDays(selectDate, Date.now())
        const hourPerDay = (+finishLevel.value - +startLevel.value) / days

        // console.log(`витрачати ${timeMes(hourPerDay)} на день`)
        // console.log(`Дивитись відео ${timeMes(hourPerDay * 7 * 0.3)} на тиждень`)
        // console.log(`Відвідувати спікінги ${timeMes(hourPerDay * 7 * 0.4)} на тиждень`)
        // console.log(`Займатись з репетитором ${timeMes(hourPerDay * 7 * 0.1)} на тиждень`)
        // console.log(`Самостійно писати ${timeMes(hourPerDay * 7 * 0.1)} на тиждень`)
        // console.log(`Самостійно читати ${timeMes(hourPerDay * 7 * 0.1)} на тиждень`)

        setHourPerDay(hourPerDay);
        setOpenModal(true)
    }

    return (
        <section id='calculator' className="mb-[72px] t:mb-[100px] d:mb-[120px]">
            <div className={cn(style.bg, "bg-center bg-no-repeat bg-cover bg-grey-1", "container")} >

                <div className="flex flex-col items-center pt-10 t:py-10 d:py-14 ">
                    <h2 className="font-roboto text-center text-white-100 text-[40px] font-semibold leading-[1.5] 
                                    mb-10 t:mb-4 d:mb-10 max-w-[280px] t:max-w-[460px] d:max-w-[750px]">Калькулятор тривалості навчання</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col text-center items-center
                    max-w-[320px] t:max-w-[400px] d:max-w-[840px] ">
                        <div className="w-full flex flex-row  justify-between gap-x-4 t:gap-x-8 d:gap-x-14 gap-y-6 flex-wrap">
                            <div className="flex flex-col items-start">
                                <label className="whitespace-nowrap text-white-100 ">Поточний рівень</label>
                                <Controller
                                    render={({ field }) => (
                                        <ReactSelect
                                            {...field}
                                            id="levelS"
                                            className="levelDrop"
                                            classNamePrefix="levelDrop"
                                            aria-label="Not searchable"
                                            isSearchable={false}
                                            options={optionsStart}
                                        />
                                    )}
                                    name="startLevel"
                                    control={control}
                                />
                            </div>

                            <div className="flex flex-col items-start">
                                <label className="whitespace-nowrap text-white-100 " >Бажаний рівень</label>
                                <Controller
                                    render={({ field }) => (
                                        <ReactSelect
                                            {...field}
                                            id="levelF"
                                            className="levelDrop"
                                            classNamePrefix="levelDrop"
                                            isSearchable={false}
                                            aria-label="Not searchable"
                                            options={optionsFinish}
                                        />
                                    )}
                                    name="finishLevel"
                                    control={control}
                                />
                            </div>

                            <div className="flex flex-col items-start grow mb-12 ">
                                <label id="selectDate" className="whitespace-nowrap text-white-100 ">Дата завершення</label>
                                <Controller
                                    control={control}

                                    name="selectDate"
                                    render={({ field: { value, onChange, ...fieldProps } }) => {


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
                                                ariaLabelledBy="selectDate"
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
                                                        className={cn(" text-black-30 hover:text-black-100 transition pointer-events-none ",
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
                        <button className={cn("greenLink", " t:px-28 py-4 text-lg leading-[1.75] w-full t:w-auto mb-[340px] t:mb-auto")}>Розрахувати</button>
                    </form>
                </div>
            </div>
            {openModal &&
                <ModalWrapper isOpen={openModal} onCloseMenu={onCloseMenu} className="max-w-[310px] t:max-w-[400px] px-2 t:px-5 py-6 justify-center items-center">
                    <p className="indent-3 px-4 t:px-0"> Щоб досягти бажаного рівня до обраної дати Вам потрібно витрачати приблизно</p>
                    <p className="text-lg t:text-xl font-semibold py-2"> {timeMes(hourPerDay)} на день</p>

                    <p className="p-4 text-xl t:text-2xl font-semibold">Щотижня витрачати:</p>
                    <ul className="text-left pl-6 t:pl-8 mb-6 w-full">

                        <li className={cn("prices-list-item", "text-base ml-1 before:ml-1 mb-1", "flex whitespace-nowrap items-center")}>
                            Перегляд відео
                            <span className=" w-full h-3 m-1 shrink border-b-[1px] border-solid border-black-30"></span>
                            {timeMesShort(hourPerDay * 7 * 0.3)}
                        </li>
                        <li className={cn("prices-list-item", "text-base ml-1 before:ml-1 mb-1 ", "flex whitespace-nowrap items-center")}>
                            Розмовний клуб
                            <span className=" w-full h-3 m-1 shrink border-b-[1px] border-solid border-black-30"></span>
                            {timeMesShort(hourPerDay * 7 * 0.4)}
                        </li>
                        <li className={cn("prices-list-item", "text-base ml-1 before:ml-1 mb-1", "flex whitespace-nowrap items-center")}>
                            З репетитором
                            <span className=" w-full h-3 m-1 shrink border-b-[1px] border-solid border-black-30"></span>
                            {timeMesShort(hourPerDay * 7 * 0.1)}
                        </li>
                        <li className={cn("prices-list-item", "text-base ml-1 before:ml-1 mb-1", "flex whitespace-nowrap items-center")}>
                            Самостійно писати
                            <span className=" w-full h-3 m-1 shrink border-b-[1px] border-solid border-black-30"></span>
                            {timeMesShort(hourPerDay * 7 * 0.1)}
                        </li>
                        <li className={cn("prices-list-item", "text-base ml-1 before:ml-1 mb-1", "flex whitespace-nowrap items-center")}>
                            Самостійно читати
                            <span className=" w-full h-3 m-1 shrink border-b-[1px] border-solid border-black-30"></span>
                            {timeMesShort(hourPerDay * 7 * 0.1)}
                        </li>
                    </ul>

                    <button onClick={onCloseMenu} className={cn("greenLink", " px-16 py-2 text-lg leading-[1.75] w-full t:w-auto ")}>Зрозуміло</button>
                </ModalWrapper>}

        </section>
    )
}

export default Calculator;