import vine from "@vinejs/vine";

export const applicationValidationSchema = vine.object({
    studentId: vine.string().uuid(),
    institutionId: vine.string().uuid(),
});