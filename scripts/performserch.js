import { setLoadingState } from "./setLoadingState";
import { setMessage } from "./setMessage";
import { setSearshResult } from "./setserchresult";
const USER_API = "https://api.github.com/search/users?q=";

export const performSearch = (searchItem, isUserSelected) => {
  // if (getMessage()) {
  // لو في نص في الكارت امسحة والي انا عامله اسهل
  // setMessage("");
  // }
  if (!searchItem.trim()) {
    setMessage("this is a falsy value");
    return;
  } else {
    setMessage("");
    const typeQuery = isUserSelected ? "+type:user" : "+type:org";
    setLoadingState(true);
    fetch(`${USER_API}${searchItem}${typeQuery}`)
      .then((result) => result.json())
      .then((response) => setSearshResult(response.items))
      .finally(() => setLoadingState(false));
  }
};
