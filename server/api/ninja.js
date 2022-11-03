export default defineEventHandler(async (event) => {
  const { name } = useQuery(event);

  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?');

  return data;
});
