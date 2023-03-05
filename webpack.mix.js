const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.ts("resources/ts/main.tsx", "public/js")
    .sass("resources/scss/app.scss", "public/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
    });

mix.webpackConfig({
    devServer: {
        // proxy設定
        proxy: {
            "*": "http://localhost:8000",
        },
    },
});
