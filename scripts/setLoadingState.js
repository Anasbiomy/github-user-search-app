import { loaderElement } from "./elements";
import { setSearshResult } from "./setserchresult";

export let setLoadingState = (state) => {
  loaderElement.classList.toggle("hidden", !state);
  state && setSearshResult(null);
};
