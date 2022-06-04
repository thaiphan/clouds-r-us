This is a sample application that fetches data from the All the Clouds API and then renders it to look pretty.

I chose to use Next.js since it bundles the backend and frontend into a neat little package. It uses TypeScript for those strongly typed benefits and Redux Toolkit to simplify data fetching and caching.

## Getting Started

Create a `.env.local` file at the root of this repo and add a value for the `ALL_THE_CLOUDS_API_KEY`:

```bash
ALL_THE_CLOUDS_API_KEY=something
```

```bash
# Install dependencies
yarn

# Run code base
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

```base
yarn test
```

## Deployment

I just used Vercel

https://vercel.com/docs/concepts/git/vercel-for-github
