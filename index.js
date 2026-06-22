import {
  buttonElement,
  card,
  searchInput,
  userInputElement,
} from "./scripts/elements";
import { performSearch } from "./scripts/performserch";

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, userInputElement.checked);
});
