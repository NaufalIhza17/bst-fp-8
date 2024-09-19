/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi"],
        gilroy: ["Gilroy"],
        switzer: ["Switzer"],
        "general-sans": ["GeneralSans"],
      },
      colors: {
        "primary-blue": "#8A95A6",
      },
      backgroundImage: {
        review: "url('/images/bg-review.png')",
        upgrade: "url('/images/bg-upgrade.png')",
      },
    },
  },
  plugins: [],
};
