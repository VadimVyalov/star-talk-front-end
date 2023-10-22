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
import { addMonths, subMonths, format, getYear, getMonth } from 'date-fns';
import uk from "date-fns/locale/uk"

import style from "./styles.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css"
import dataSelect from "./dateSelect.module.scss"

import {  useState } from "react";


type OptionType = {
    readonly value: string;
    readonly label: string;
    index?: number;
}

type FormValues = {
    StartLevel: OptionType;
    FinishLevel: OptionType;
    ReactDatepicker: Date;
};

const optionsList: OptionType[] = [
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "B1", label: "B1" },
    { value: "B2", label: "B2" },
    { value: "C1", label: "C1" }

]
const totalMonth=6;

const defaultValues: DefaultValues<FormValues> = {

    StartLevel: optionsList[0],
    FinishLevel: optionsList[0],

    ReactDatepicker: new Date(),
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
    dropdownIndicator: (styles, { selectProps: { menuIsOpen },  }, ) => ({
        ...styles,

      //  color:"#FF0000",
        transition: "all 250ms ease",
        transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
        "&:hover":{
            color:'#FF0000',
        },
    })
};

const dateSelectStyle: StylesConfig = {

    container:(styles, { isDisabled, isFocused })=>{
       
       return {
        ...styles,
        fontSize:'14px',
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
            lineHeight:1.25,

        }
    },

    menu: styles => ({ ...styles, border: '1px solid #DFE0E2', marginTop:'10px' }),
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
        register,
        reset,
        control,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues
    });

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

        const montsYear: OptionType[] = Array(totalMonth+1).fill('').map((_, i) => {

            return {
                value: format(addMonths(new Date(), i), "LLLL yyyy", { locale: uk }),
                label: format(addMonths(new Date(), i), "LLLL yyyy", { locale: uk }),
                index: i,
            }
        })
        const onChangeHandler = (option: any) => {
            const index = option?.index || 0;
            const newMonts = (getMonth(new Date()) + index) > 12 ?
                (getMonth(new Date()) + index) - 12 : (getMonth(new Date()) + index)
            const newYear = (getMonth(new Date()) + index) > 11 ? (getYear(new Date()) + 1)
                : (getYear(new Date()))
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

    const onSubmit: SubmitHandler<FormValues> = (data) =>
        alert(JSON.stringify(data));
    
  
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
                                        className="min-w-[140px] t:min-w-[180px]"
                                            isSearchable={false}
                                            
                                            styles={formSelectStyle}
                                            options={optionsList}
                                            {...field}
                                        />
                                    )}
                                    name="StartLevel"
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
                                            options={optionsList}

                                            {...field}
                                        />
                                    )}
                                    name="FinishLevel"
                                    control={control}
                                />
                            </div>

                            <div className="flex flex-col items-start grow mb-12 ">
                                <label className="whitespace-nowrap text-white-50 ">Дата завершення</label>
                                <Controller
                                    control={control}

                                    name="ReactDatepicker"
                                    render={({ field: { value,onChange, ...fieldProps } }) => {

                                        const [isOpen, setIsOpen] = useState(false);
                                        return (

                                            <ReactDatePicker
                                                {...fieldProps}
                                                open={isOpen}
                                                onInputClick={() => setIsOpen(!isOpen)}
                                                onChange={(date) =>{  onChange(date) }}
                                                onClickOutside={()=>setIsOpen(false)}
                                                shouldCloseOnSelect={true}
                                                portalId="root-portal"
                                                placeholderText=""
                                                dateFormat="dd.MM.yyyy"
                                                popperPlacement="bottom-end"
                                                locale={uk}
                                                minDate={subMonths(new Date(), 0)}
                                                maxDate={addMonths(new Date(), 12)}
                                                showPopperArrow={false}
                                                selected={value}
                                                showIcon
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
                        <button className={cn("greenLink"," px-28 py-4 text-lg leading-[1.75] w-full t:w-auto mb-[340px] t:mb-auto")}>Розрахувати</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Calculator;