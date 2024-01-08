
import * as yup from "yup";
import { FormData } from "../types";

const makeSchemaA = (data: FormData | null) => {

    type Obj = { [key: string]: any }
    const defaultSchema: Obj = {}
    const validateKey = data?.id || 'noKey'

    defaultSchema[validateKey] = yup.string().required()
    let varianSchema = { ...defaultSchema }

    if (!data?.type) return varianSchema

    switch (data.type) {
      case 'multiCheck': {
        const variants = data.variants.reduce(
          (acc: Obj, i) => { return { ...acc, [i.id]: yup.bool() } },
          {})
        varianSchema = {
            [validateKey]: yup.object().shape({ ...variants })
              .test((validateKey) => Object.values(validateKey).some(i => i))
          }
      }
        break;
      case 'radio': varianSchema = { ...defaultSchema }
        break;

    }
    return varianSchema
}
  
 export default makeSchemaA