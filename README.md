# NextJS + Tailwind + Typescript Starter Template:

A starter template for NextJS + Tailwind + Typescript projects.

## Features:

- Loose TypeScript.
- Tailwind CSS.
- A minimal NextJS template.
- Built in sitemap functionality with server side rendering.

Pull requests are welcome.

## Instructions:

1. Update the `.env` file:

- `PRODUCTION_URL`, i.e. https://understandingdata.com
- `NEXT_PUBLIC_GTM_CONTAINER_ID`, i.e. GTM-SOMECONTAINER-ID with a valid google tag manager container id.
- `_app.tsx` - You will need to update the open graph information in [this file](pages/_app.tsx) - according to https://github.com/garmeeh/next-seo

2. Run `npm install`

3. Run `npm run dev` for hot reloading your NextJS application.
