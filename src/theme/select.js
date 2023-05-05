import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import DropdownIcon from "../components/icon/dropdown";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const brandPrimary = definePartsStyle({
  field: {
    border: "none",
    outline: "none",
    background: "rgba(0, 0, 0, 0.17)",
    borderRadius: "8px",
  },
});

export const Select = defineMultiStyleConfig({
  variants: {
    brandPrimary,
  },
  defaultProps: {
    icon: DropdownIcon,
    variant: "brandPrimary",
  },
});

export default Select