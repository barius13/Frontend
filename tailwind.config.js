module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/utils/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                whitney: ["Whitney"],
            },
            height: {   
                "90vh": "90vh",
                "30vh": "30vh",
                "img": "225px"
            },
            fontSize:{
            site:".75rem",
            author:".875rem",
            title:"1rem",
            desc:"1rem"
             },
            colors: {
                polar: {
                    100: "#2E3440",
                    200: "#3B4252",
                    300: "#434C5E",
                    400: "#4C566A",
                    500: "#4A5568",
                },
                snow: {
                    100: "#D8DEE9",
                    200: "#E5E9F0",
                    300: "#ECEFF4",
                },
                frost: {
                    100: "#8FBCBB",
                    200: "#88C0D0",
                    300: "#81A1C1",
                    400: "#5E81AC",
                },
                aurora: {
                    red: {
                        100: "#c57179",
                        200: "#BF616A",
                        300: "#ac575f",
                        400: "#994e55",
                    },
                    orange: "#D08770",
                    yellow: "#EBCB8B",
                    green: "#A3BE8C",
                    pink: "#B48EAD",
                },
                discord: {
                    base: "#36393e",
                    site:"#dcddde",
                    light_blue:"#019dd8",
                    author:"#fff",
                    blue:"#00b0f4",
                    gray:"#36393e"
                }
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: false,
    },
};
