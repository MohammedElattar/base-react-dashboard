import generateSchema, {stringRules} from "../../../utility/helpers/validationRuleHelper";

const validationSchema = generateSchema({
    name: stringRules()
})

export default validationSchema;