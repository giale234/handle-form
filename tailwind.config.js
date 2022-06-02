module.exports = {
  content: ["./src/**/*.{css,js}"],
  theme: {
    extend: {
      width: {
        400: "400px",
        800: "800px",
        600: "600px",
        "96%": "96%",
      },
      padding: {
        1.7: "6.5px",
      },
      display: ["last"],
      colors: {
        placeholder: "#a2a2a2",
      },
    },
    minHeight: {
      1000: "1000px",
    },
    borderRadius: {
      10: "10px",
    },
  },
  plugins: [],
};
