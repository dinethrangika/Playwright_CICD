# SauceDemo Playwright Framework

A TypeScript UI automation framework for [SauceDemo](https://www.saucedemo.com/) using Playwright Test and the Page Object Model.

## Prerequisites

- Node.js 20 or later
- npm
- Google Chrome

## Setup and run

```bash
npm install
npm test
```

The Playwright configuration uses the installed Google Chrome stable channel.
In CI, it uses Playwright-managed Chromium in headless mode.

Open the generated HTML report with `npm run report`. Use `npm run test:headed` to watch the browser, or `npm run test:ui` to use Playwright's interactive runner.

## Project structure

- `pages/` contains page objects, locators, and reusable page actions/assertions.
- `tests/` contains test scenarios and their assertions.
- `playwright.config.ts` defines test discovery, Chromium, base URL, retries, artifacts, and HTML reporting.
- `tsconfig.json` enables strict TypeScript checking for the framework.
- `package.json` declares dependencies and common test/report scripts.
- `.gitignore` excludes installed packages and generated Playwright artifacts.
- `.github/workflows/playwright.yml` runs the test on pushes, pull requests, and manual workflow dispatches, then uploads the HTML report.
