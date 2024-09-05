/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'primary': "#C7DEFF",
        'Secondary': "#2D333B",
        'accent': "#5865F2",
        'Headings': "#F5F6FA",
        't-body': "#B0B3B8",
        'button': "#3A3F47 ",
      },
      backgroundImage : {
        'hero' : ' linear-gradient(to right top, #5865f2, #6586fb, #7ea5ff, #9fc2ff, #c7deff);'
      }
    },
    fontFamily: {
      poppins: "poppins, system-ui",
    },
  },
  plugins: [],
};
