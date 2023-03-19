import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
beforeAll(() => {
    // console.log("before all listen");
    return server.listen();
});
afterEach(() => {
    // console.log("after each reset handler");
    return server.resetHandlers();
});
afterAll(() => {
    // console.log("after all close");
    return server.close();
});
