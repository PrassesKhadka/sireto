## Tech Stack

- Next.js for SSR such that authentication key to fetch api will not be exposed client side
- dabbled around environment variables and how they are handled in next.js
- typescript for type safety
- zod for run time validation
- tailwind for styling
- storybook for component testing
- e2e using playwright

## Storybook

- [Tailwind classes not working in storybook ](https://dev.to/lico/nextjs-using-tailwind-with-storybook-5aie)

## Playwright for e2e testing - Handy References

Go through it serially

- [Playwright brief](https://ray.run/blog/mastering-playwright-test-automation-your-comprehensive-cheat-sheet#seeking-out-page-elements)

- [Playwright Best Practises](https://playwright.dev/docs/best-practices)

- [Playwright all use cases example github](https://github.com/MarcusFelling/demo.playwright/blob/main/basic/2-actions.spec.ts)

- Testing -> Arrange(page.goTo),Act(locators) and Assert(expect)

- Selecting and finding elements (act)

  - [Locators](https://playwright.dev/docs/locators) and [filtering locators](https://playwright.dev/docs/locators#filtering-locators)
  - [Other Locators](https://playwright.dev/docs/other-locators)

- [Test assertions](https://playwright.dev/docs/test-assertions)

- Testing input elements

  - [Github example](https://github.com/MarcusFelling/demo.playwright/blob/main/basic/2-actions.spec.ts)
  - [Actions docs](https://playwright.dev/docs/input)

- [Navigations](https://playwright.dev/docs/navigations)

- Mocking API

  - [Mocking API](https://playwright.dev/docs/mock)
  - [Mock browser APIs](https://playwright.dev/docs/mock-browser-apis)
  - [Network - avoiding testing third party dependencies and guaranteeing the response needed](https://playwright.dev/docs/network)
