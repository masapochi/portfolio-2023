import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, { message: "名前は入力必須項目です" }),
    email: z
        .string()
        .min(1, { message: "メールアドレスは入力必須項目です" })
        .email({ message: "メールアドレスの形式が正しくありません" }),
    subject: z.string().min(1, { message: "件名は入力必須項目です" }),
    message: z.string().min(1, { message: "メッセージは入力必須項目です" }),
});
