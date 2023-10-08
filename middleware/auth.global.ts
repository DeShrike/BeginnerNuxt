export default defineNuxtRouteMiddleware((to, from) => {
  console.log("In auth.global.ts");
  // console.log("TO", to);
  // console.log("FROM", from);

  const isLoggedIn: boolean = true;

  // if (isLoggedIn == false) {
  //   return navigateTo("/login");
  // }
});
