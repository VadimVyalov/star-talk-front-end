
import React from 'react';
import { addMonths, format, getYear, getMonth } from 'date-fns';
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import ReactSelect from "react-select";
import { OptionType } from '../types';
import uk from "date-fns/locale/uk"
import cn from "@/helpers"
import Icon from '@/components/Icon';
import { startDay, totalMonth } from '../helper/constant';




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
            value: format(addMonths(startDay, i), "LLLL yyyy", { locale: uk }),
            label: format(addMonths(startDay, i), "LLLL yyyy", { locale: uk }),
            index: i,
        }
    })

    const onChangeHandler = (option: any) => {
        const index = option?.index || 0;
        const newMonts = (getMonth(startDay) + index) > 12 ?
            (getMonth(startDay) + index) - 12 : (getMonth(startDay) + index)
        const newYear = (getMonth(startDay) + index) > 11 ? (getYear(startDay) + 1)
            : (getYear(startDay))
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
                    id="dateDropHeader"
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

export default customHeaderDP