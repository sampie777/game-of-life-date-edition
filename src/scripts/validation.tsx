interface ValidationResults {
    [Key: string]: Array<string>
}

export class Validation {
    results: ValidationResults = {}

    add(fieldName: string, message: string) {
        if (this.results[fieldName] === undefined) {
            this.results[fieldName] = [];
        }

        this.results[fieldName].push(message);
    }

    /**
     * Adds a validation error to the validation results if the condition results in false.
     * @param condition
     * @param fieldName
     * @param message
     */
    validate(condition: boolean, fieldName: string, message: string) {
        if (condition !== null && condition !== undefined && condition) {
            return;
        }
        this.add(fieldName, message);
    }

    isValid(): boolean {
        return Object.values(this.results).length === 0;
    }
}