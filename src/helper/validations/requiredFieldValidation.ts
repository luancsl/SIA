import { IValidation } from "@src/helper/validations/validation";
import { MissingParamError } from "@src/delivery/presenter/error";

export class RequiredFieldValidation implements IValidation {
    constructor(private readonly fieldName: string) { }

    validate(input: any): Error {
        if (!input[this.fieldName]) {
            return new MissingParamError(this.fieldName);
        }
    }
}