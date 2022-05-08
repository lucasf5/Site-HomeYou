module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: {
          100: "#ffffff",
          200: "#E7E7E7",
          300: "#797979",
          400: "#F9F9F9",
        },
        preto:{
          padrao: '#272727'
        },
        azul: {
          claro: "#C5DFFF",
          escuro: "#061E3C",
          hover: "#1057B0",
          escuro_claro: "#384b63",
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', "sans-serif"],
      }
    },
  },
  plugins: [],
};
