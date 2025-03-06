# Orlando Health Turborepo, Hello World

This is a monorepo for Orlando Health ExtJS websites using [Turborepo](https://turbo.build/repo).

## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `website1`: a [Next.js](https://nextjs.org/) app with ExtJS integration (uses `@jhs129/cms-components` version 0.0.3 with blue background)
- `website2`: another [Next.js](https://nextjs.org/) app with ExtJS integration (uses `@jhs129/cms-components` version 0.0.7 with red background)
- `@jhs129/cms-components`: a shared React component library used by both websites

### Component Versioning

The `@jhs129/cms-components` package is published to GitHub Packages with the following versions:

- Version 0.0.1: Initial version
- Version 0.0.2: Previous version
- Version 0.0.3: Version with visible version indicator and blue background, used by website1
- Version 0.0.4: Previous version with visible version indicator and blue background
- Version 0.0.5: Previous version with dynamic version display from package.json
- Version 0.0.6: Previous version with visible version indicator and red background
- Version 0.0.7: Latest version with visible version indicator and red background, used by website2

The Card component displays its version number to make it easy to verify which version is being used. The background color also changes between versions (blue for 0.0.3, red for 0.0.7) to provide a clear visual difference.

To publish a new version:

1. Update the version in `packages/cms-components/package.json`
2. Run `npm run build && npm publish` from the `packages/cms-components` directory

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already set up for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS

### Build

To build all apps and packages, run the following command:

```
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
