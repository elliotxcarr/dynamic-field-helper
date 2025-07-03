import { Signal} from "@angular/core";
import { Field } from "../data/fields";

export const filterByTab = (fields: Signal<Field[]>,tabName:string) => {
    return fields().filter(field => field.section === tabName)
}