export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  console.log(`isLoggedIn: `, isLoggedIn);
  if (isLoggedIn) {
    return navigateTo(to.fullPath);
  }

  return navigateTo("/");
});
