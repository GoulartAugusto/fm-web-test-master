import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    border: "none",
    outline: "none",
    background: "rgba(0, 0, 0, 0.17)",
    borderRadius: "8px",
  },
  addon: {
    border: "none",
    outline: "none",
    background: "rgba(0, 0, 0, 0.17)",
    borderRadius: "8px",
  },
});

export const Input = defineMultiStyleConfig({
  baseStyle,
});