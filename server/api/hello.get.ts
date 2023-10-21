export default defineEventHandler(async (event) => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({ data: "Hello, world!" });
    }, 1200);
  });
});
