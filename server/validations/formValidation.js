import vine from "@vinejs/vine";

export const formValidationSchema = vine.object({
    studentId: vine.string(),
    board: vine.string().trim(),
    reg: vine.number(),
    hscRoll: vine.number(),
    sscRoll: vine.number(),
    hscGPA: vine.number().min(0).max(5),
    sscGPA: vine.number().min(0).max(5),
});