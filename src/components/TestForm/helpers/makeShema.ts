
import * as yup from "yup";
import { FormData } from "../types";

const makeSchema = (data: FormData | null) => {

    type Obj = { [key: string]: any }
    const defaultSchema: Obj = {}
    const validateKey = data?.id || 'noKey'

    defaultSchema[validateKey] = yup.string().required()
    let varianSchema = yup.object().shape({ ...defaultSchema })

    if (!data?.type) return varianSchema

    switch (data.type) {
      case 'multiCheck': {
        const variants = data.variants.reduce((acc: Obj, i) => { return { ...acc, [i.id]: yup.bool() } }, {})
        varianSchema = yup.object()
          .shape({
            [validateKey]: yup.object().shape({ ...variants })
              .test((validateKey) => Object.values(validateKey).some(i => i))
          })
      }
        break;
      case 'radio': varianSchema = yup.object({ ...defaultSchema })
        break;

    }
    return varianSchema
}
  
 export default makeSchema