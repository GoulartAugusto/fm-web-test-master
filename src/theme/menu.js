import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
const { definePartsStyle } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const Menu = {
  baseStyle: definePartsStyle({
    list: {
      bg: "rgba(0, 0, 0, 0.1)",
      border: "none",
    },
    item: {
      bg: "none",
      _hover: { bg: "rgba(0, 0, 0, 0.1)" },
    },
  }),
};

export default Menu;
