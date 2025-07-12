/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./index.tsx"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
      },
      plugins: [],
    }
    
    
//     // tailwind.config.js
//     /** @type {import('tailwindcss').Config} */
//     //   NOTE: Update this to include the paths to all files that contain Nativewind classes.
// module.exports = {
//   content: [
//     "./app/**/*.{js,jsx,ts,tsx}",
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./index.tsx", "./app/**/*.{js,jsx,ts,tsx}",
//     "./App.tsx", "./components/**/*.{js,jsx,ts,tsx}",
//     "./app/App.{js,jsx,ts,tsx}",
//     "./App.{js,jsx,ts,tsx}"
//   ],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
