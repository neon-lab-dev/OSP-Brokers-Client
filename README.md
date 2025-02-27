# OSP Brokers

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/neon-lab-dev/OSP-Brokers-Client
```

### Branch Naming Convention

- **Production branch:** `main`
- Create a new branch for each feature with the following type prefixes (Mind the casing):

Types are as follows:
- `feature` - For new features
- `hotfix` - For urgent fixes
- `bugfix` - For bug fixes
- `release` - For preparing releases
- `docs` - For documentation
- `ui` - For UI

**Examples:**
- `feature/user-authentication`
- `hotfix/ticket-no-description`

### Commit Message Convention

Specify the type of the commit as a prefix followed by the commit message.

Types are as follows:
- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation updates
- `test` - Testing related changes
- `perf` - Performance improvements
- `chore` - Miscellaneous changes
- `refactor` - Code refactoring

**Examples:**
```bash
git commit -m "feat: add user authentication feature"
git commit -m "fix: resolve login bug"
git commit -m "docs: update README file"
```

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
