# Playwright Test Project

This project contains automated tests using Playwright for testing Singlish language functionality.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

```bash
npm install
```

## Running Tests

### Run all tests (headless mode)
```bash
npx playwright test
```

### Run tests in headed mode (browser visible)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run specific test file
```bash
npx playwright test tests/singlish.spec.js
```

## View Test Reports

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/
│   └── singlish.spec.js       # Test specifications
├── playwright-report/          # HTML test reports
├── test-results/              # Test execution results
├── playwright.config.js       # Playwright configuration
└── package.json               # Project dependencies
```

## Configuration

The Playwright configuration is located in `playwright.config.js`. You can modify browser settings, timeout values, and other test parameters there.

## Browsers

The project is configured to run tests on:
- Chromium
- Firefox
- WebKit

