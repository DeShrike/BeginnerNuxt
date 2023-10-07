function myPlugin() {
  console.log("myPlugin called");

  function Hello(msg: string) {
    return `Hello ${msg}`;
  }

  return {
    provide: { Hello },
  };
}

export default defineNuxtPlugin(myPlugin);
