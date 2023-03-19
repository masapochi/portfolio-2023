const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.ts("resources/ts/main.tsx", "public/js");
mix.sass("resources/sass/app.scss", "public/css").options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")],
});

mix.webpackConfig({
    resolve: {
        alias: {
            "@": __dirname + "/resources/ts",
        },
    },
    devServer: {
        // proxy設定
        proxy: {
            "*": "http://localhost:8000",
        },
    },
});
