"use client"

import cn from "@/helpers"
import Icon from "../../Icon";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler, DefaultValues } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import ReactSelect from "react-select";
import { addMonths, addDays, differenceInDays } from 'date-fns';
import uk from "date-fns/locale/uk"

import style from "./styles.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css"
import "./levelSelect.css"
import "./dateSelect.css"


import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../../Modal/ModalWrapper";
import { timeMes, timeMesShort } from "./helper";
import { FormValues } from "./types";
import { maxHourPerDay, optionsList, startDay, totalMonth } from "./helper/constant";
import customHeaderDP from "./customHeaderDP";


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
    } = useForm<FormValues>({
        defaultValues
    });

    const [optionsFinish, setOptionsFinish] = useState(optionsList.slice(1));
    const [minDate, setMinDate] = useState(startDay);
    const optionsStart = optionsList.slice(0, -1);
    const [openModal, setOpenModal] = useState(false);
    const [hourPerDay, setHourPerDay] = useState(maxHourPerDay);
    const [isOpen, setIsOpen] = useState(false);
    const onOpenMenu = () => {
        setOpenModal(true);
    };
    const onCloseMenu = () => {
        setOpenModal(false);
    };



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
                                                onKeyDown={(e) => {
                                                    e.preventDefault();
                                                }}
                                                shouldCloseOnSelect={true}
                                                autoComplete="off"
                                                portalId="root-portal"
                                                placeholderText=""
                                                dateFormat="dd.MM.yyyy"
                                                ariaLabelledBy="selectDate"
                                                popperPlacement="bottom-end"
                                                // readOnly
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
                <ModalWrapper isOpen={openModal} onCloseMenu={onCloseMenu}
                    className="bg-overlay justify-center items-center ">

                    <div className="bg-mainBg rounded  p-5 flex flex-col items-center z-20 max-w-[310px] t:max-w-[400px] px-2 t:px-5 py-6 justify-center">
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

                    </div>

                </ModalWrapper>}



        </section>
    )
}

export default Calculator;