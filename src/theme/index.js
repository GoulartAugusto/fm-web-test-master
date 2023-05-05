import { extendTheme } from "@chakra-ui/react";
import Menu from "./menu";
import Input from "./input";
import Select from "./select";

export default extendTheme({
  styles: {
    global: (props) => ({
      "*": {
        userSelect: "none",
      },
      body: {
        background: 'linear-gradient(180deg, #244234 -98.52%, #0D2017 41.87%, rgba(13, 32, 23, 0.81) 92.41%, #244234 171.03%)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backdropFilter: "blur(10px)", // this is broken pls just add blur filter to background image itself
        backgroundColor: "#360A24",
        // temp for demo site (we might keep it idk it depends on the design)
        overflowX: "hidden",
        color: "white",
        h: "100vh",
        mb: 40,
      },
      option: {
        color: "black",
      },
    }),
  },
  colors: {
    brand: {
      100: "#77DD77",
      200: "#77DD77",
      300: "#77DD77",
      400: "#77DD77",
      500: "#77DD77",
      600: "#77DD77",
      700: "#77DD77",
      800: "#77DD77",
      900: "#77DD77",
    },
  },
  components: {
    // Text: {
    //   baseStyle: {},
    // },
    Button: {
      baseStyle: {
        color: "white",
      },
    },
    Badge: {
      baseStyle: {
        background: "#77DD77",
        borderRadius: "8px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: "16px",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "19px",
        justifyContent: "center",
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Menu,
    Input,
    Select,
  },
});
