import data from "./books.json";

// export default defineEventHandler(() => {
//   return { data };
// });

export default defineEventHandler(async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
});
