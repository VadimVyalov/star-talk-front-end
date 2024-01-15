import { FormData } from "../types";


const makeAnswer = async (data: any, questios: FormData[]) => {

    const checked = questios.map(item => {
        let checked_answer: { [key: string]: any }[]
        switch (item.type)
        {
            case 'radio': checked_answer = item.variants.filter(v => data[item.id]===v.id); break;
            case 'multiCheck': checked_answer = item.variants.filter(v => data[item.id][v.id]); break;    
        }
            
        const answer_variant = item.variants.map(a => a.value)
        const checked_answer_value = checked_answer.map(i => i.value)
        const answer = item.answer

    return {
        'question': item.title,
        'ansver_varian': answer_variant,
        'answer': answer,
        'checked_answer_id': checked_answer.map(i => i.id),
        'checked_answer_value': checked_answer_value,
        'result': answer.filter(i => !checked_answer_value.includes(i))
                .concat(checked_answer_value.filter(i => !item.answer.includes(i))).length === 0
        }
    })
    const total = checked.filter(i => i.result).length
    // console.log(`Вірних відповідей ${total} з ${dataQuestion.length} === `, checked)
    // console.log(checked.result);
    return `Тест завершено. Вірних відповідей ${total} з ${questios.length} `
};

export default makeAnswer