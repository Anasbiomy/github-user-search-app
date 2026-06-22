import { card } from "./elements";

export const setSearshResult = (data) => {
  let result = "";
  if (data?.length === 0) {
    result = `<p>No results found</p>`;
  } else if (data === null) {
    result = "";
  } else {
    data.map((item) => {
      result += `
          <article class="card">
    <img class="img" loading="lazy" alt="" src="${item.avatar_url}" />
    <h2 class="name">${item.login}</h2>
  </article>`;
    });
  }
  card.innerHTML = result;
};
