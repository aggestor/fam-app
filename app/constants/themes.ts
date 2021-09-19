import { _Theme } from "./interfaces"

/**
 * Containing theme classes, colors bgs, borders
 */
const Theme: _Theme = {
  light: {
    border: {
      primary: "border-purple-700",
      secondary: "secondary-border",
      common: "border-gray-400 ",
    },
    text: {
      primary: "text-purple-700",
      secondary: "secondary-text",
      common: "text-gray-700",
    },
    background: {
      primary: "bg-white",
      secondary: "bg-gray-100",
    },
  },
  dark: {
    border: {
      primary: "border-purple-700",
      secondary: "secondary-border",
      common: "border-gray-600",
    },
    text: {
      primary: "text-purple-700",
      secondary: "secondary-text",
      common: "text-gray-50",
    },
    background: {
      primary: "dark",
      secondary: "dark-s",
    },
  },
};

export default Theme