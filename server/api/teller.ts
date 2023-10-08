let teller = 0;

export default defineEventHandler(async () => {
  await new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(teller++);
    }, 500);
  });
  return { teller };
});
