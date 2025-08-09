import vine from "@vinejs/vine";

export const registerSchema = vine.object({
    firstName: vine.string().trim().minLength(3).maxLength(150),
    lastName: vine.string().trim().minLength(3).maxLength(150),
    email: vine.string().trim().email(),
    phone: vine.string().trim().regex(/^\+?[1-9]\d{1,14}$/).optional(), // E.164 format
    password: vine.string().trim().minLength(6).maxLength(100).confirmed(),
    password_confirmation: vine.string(),
    address: vine.string(),
    role: vine.enum(["STUDENT", "ADMIN", "UNIVERSITY_ADMIN"]),
    
    // ✅ Added `dob` validation
    dob: vine.string().trim().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/)
});

export const loginSchema = vine.object({
    
    email: vine.string().trim().email(),
    password: vine.string(),
    // password_confirmation: vine.string(),
    role: vine.enum(["STUDENT", "ADMIN", "UNIVERSITY_ADMIN"]),
    
});

export const adminLoginSchema = vine.object({
    email: vine.string().email(),
    password: vine.string(),
    role: vine.enum(["ADMIN"]), // This is causing the issue
});
