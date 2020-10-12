export function first_letter(value) {
  return value.charAt(0).toUpperCase() + value.substring(1, value.length);
}

import * as data from "./app_data";

export function choice_data(value) {
  switch (value) {
    case "boissons":
      return data.boissons;
    default:
      return null;
  }
}
