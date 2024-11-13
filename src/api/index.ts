export const getTicker = (id: string) =>
  fetch(`/v2/assets/${id}`)
    .then((res) => res.json())
    .then(({ data }) => data);
