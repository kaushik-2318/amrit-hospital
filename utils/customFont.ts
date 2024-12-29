import localfont from "next/font/local"

const RobotoCondensed = localfont({
    src: [
        { path: "../fonts/RobotoCondensed.ttf" }
    ],
    variable: "--font-robotocondensed",
})

export { RobotoCondensed }