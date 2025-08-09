import vine from "@vinejs/vine";
import { CustomErrorReporter } from "./customErrorReporter.js";

vine.errorReporter = () => new CustomErrorReporter;

export const institutionSchema = vine.object({
    name: vine.string().trim().minLength(3).maxLength(150),
    requirementsHscGPA: vine.number(),
    requirementsSscGPA: vine.number()
});