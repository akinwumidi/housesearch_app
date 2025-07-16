/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./index.tsx"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
          fontFamily: {
            "rubik": ["Rubik", "sans-serif"],
            "rubik-bold": ["rubik-Bold", "sans-serif"],
            "rubik-semibold": ["rubik-SemiBold", "sans-serif"],
            "rubik-extrabold": ["rubik-ExtraBold", "sans-serif"],
            "rubik-regular": ["rubik-Regular", "sans-serif"],
            "rubik-mediumbold": ["rubik-MediumBold", "sans-serif"],
        },
        colors:{
          "primary":{
            100:"#0061ff",
            200:"#0061ff1a",
            300:"#0061ff",
          },
          "accent":{
            100:"#fbfbfd", 
          }, 
          "black":{
            DEFAULT:"#000000",
            100:"#8c8e98",
            200:"#666876",
            300:"#191d31",
          },
          "danger":'#f75555',
        }
      },
      plugins: [],
    }
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
