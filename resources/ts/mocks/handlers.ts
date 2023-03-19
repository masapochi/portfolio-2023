import { rest, RequestHandler } from "msw";
export const handlers: RequestHandler[] = [
    rest.post("/contact", async (req, res, ctx) => {
        const { name, email, subject, message } = await req.json();
        if (!name || !email || !subject || !message) {
            return res(ctx.status(400));
        }
        return res(
            ctx.status(200),
            ctx.json({
                success: true,
            })
        );
    }),
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([{ name: "test" }]));
    }),
];
