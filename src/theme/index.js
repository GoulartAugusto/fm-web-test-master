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
        background:
          'linear-gradient(180deg, #C82661 -98.52%, rgba(20, 4, 10, 0.87) 22.21%, rgba(20, 4, 10, 0.81) 85.39%, #C82661 171.03%, #C82661 171.03%), url("/assets/background.png")',
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
      100: "#F01B67",
      200: "#F01B67",
      300: "#F01B67",
      400: "#F01B67",
      500: "#F01B67",
      600: "#F01B67",
      700: "#F01B67",
      800: "#F01B67",
      900: "#F01B67",
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
        background: "#F01B67",
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
