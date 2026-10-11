# Project guidance

- Use TypeScript and Playwright Test for browser automation.
- Keep page selectors and reusable interactions in `pages/` page objects; keep scenarios and test-specific assertions in `tests/`.
- Prefer accessible locators (`getByRole`, `getByLabel`, and `getByPlaceholder`) and web-first Playwright assertions.
- Run `npm test` after test changes. The HTML report is generated in `playwright-report/`.
