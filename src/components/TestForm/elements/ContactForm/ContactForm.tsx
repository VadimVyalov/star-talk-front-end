'use client'
import cn from "@/helpers"

import { useFormContext } from 'react-hook-form';

const ContactForm = () => {
    const { register, formState: { errors } } = useFormContext<{ [key: string]: string }>();
    const Style = {
        label: 'text-[0] border-b-2 border-black-15 hover:border-accent-100 transition-colors',
        input: 'outline-none bg-transparent text-base leading-[1.5] w-full pt-3 pb-2  shadow-[inset_0_0_0_300px_rgba(254,251,244,1)]',
        error: ' text-error-100 text-xs/[15px]'
    }
    return (
        <div className="flex  flex-col gap-x-5 gap-y-5 d:gap-y-6  "  >

            <div className="flex flex-col gap-y-2 w-full min-w-[200px]  ">
                <label className={cn(Style.label)}>Ім’я*

                    <input {...register("name")} placeholder="Ваше ім’я"
                        className={cn(Style.input)} />
                </label>

                {errors?.name ? <p className={cn(Style.error)}>{errors?.name?.message}</p> : null}
            </div>

            <div className="flex flex-col min-w-[200px] ">
                <label className={cn(Style.label)}>Повідомлення*
                    <input {...register("phone")} placeholder="Введіть своє повідомлення тут..."

                        className={cn(Style.input)} />
                </label>
                {errors.phone ? <p className={cn(Style.error)}>{errors.phone.message}</p> : null}
            </div>

            <div className="flex flex-col min-w-[200px] ">
                <label className={cn(Style.label)}>E-mail*
                    <input {...register("email")} placeholder="example@email.com"
                        className={cn(Style.input)} />
                </label>
                {errors.email ? <p className={cn(Style.error)}>{errors.email.message}</p> : null}
            </div>

        </div>
    )
}

export default ContactForm