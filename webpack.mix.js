const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.ts("resources/ts/main.tsx", "public/js")
    .sass("resources/scss/app.scss", "public/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
    });

// mix.options({
//     hmrOptions: {
//         host: "http://127.0.0.1",
//         port: 8000,
//     },
// });
