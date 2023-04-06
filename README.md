[url to website](https://uitgaven-tracker.vercel.app/)

## Approach

1. Starting with figuring out what a simple expense tracker needs
2. Designing the database structure
3. Creating the api calls
4. Make an overview with mock data from [mockaroo](https://www.mockaroo.com/)
5. Create a color scheme with [aicolors](https://aicolors.co)
6. Create a form for creating a new expense
7. Create a page for viewing one expense
8. Create a form for updating an expense
9. Create tests with jest (Wanted to do earlier but forgot)

## Choices

MySQL for the database

Prisma for the ORM

Luxon for formatting dates

Vercel for hosting

Jest for testing

## Optional things to do to make it better

- Add authentication to allow more users
- Fully implement categories
- Add filtering of expenses
- Better design (I am not a designer)
- Better error handling

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
