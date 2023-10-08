# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## More

See https://www.youtube.com/watch?v=fTPCKnZZ2dk

https://youtu.be/fTPCKnZZ2dk?feature=shared&t=1934

https://icones.js.org

VueUse

https://youtu.be/fTPCKnZZ2dk?feature=shared&t=3647

https://content.nuxt.com/get-started/installation

```bash
nvm use v16.20.1

npx nuxi init BeginnerNuxt
cd BeginnerNuxt
npm install sass
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Create folder _assets_ and create a file _main.scss_

In nuxt.config.js add:

```
css: ["~/assets/main.scss"],
postcss: {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}
```

In tailwind.config.js add:

```
content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    ".app.vue",
]
```

In assets/main.scss add:

```
@tailwind base
@tailwind components
@tailwind utilities
```

# Modules

```bash
npm install @nuxt/content
```

In nuxt.config.js add:

```
  modules: [
    '@nuxt/content'
  ],
  content: {
    base: "/content",
    watch: false,
    // ... options
  }
```

Add content in the _/content_ folder, using markdown:

Add this on a page:

```
<ContentDoc />
```

# State

Create folder _/stores_

```bash
npm install pinia
npm install @pinia/nuxt
```

Add "@pinia/nuxt" to modules array in _nuxt.config.js_

# Server

https://youtu.be/fTPCKnZZ2dk?t=5008
