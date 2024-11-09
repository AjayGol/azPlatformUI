# AZ PlatformUI Native

Welcome to **AZ PlatformUI Native**, a React Native project with integrated Storybook for enhanced development and testing. This README will guide you through the setup, usage, and management of the project.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Running Storybook](#running-storybook)
- [Testing](#testing)

## Introduction

**AZ PlatformUI Native** is a React Native component library designed to streamline the development of reusable UI components. This package integrates Storybook for UI component development and testing, allowing us to build, document, and test UI components in isolation. The package is intended to be used within other React Native applications.


## Getting Started

### Installation

1.0 **Clone the Repository:**

   ```bash
   git clone https://github.com/azu-commercial-it/az-platform-ui-native.git
```

1.1 **Install Dependencies:**

```bash 
yarn install
```

## Running Storybook

Storybook provides a development environment for UI components. Use the following commands to run Storybook in various environments:

- **Start Storybook in React Native:**

  - **For iOS:**

    ```bash
    cd ios/
    pod install
    cd ..
    yarn storybook:ios
    ```

  - **For Android:**

    ```bash
    yarn storybook:android
    ```

- **Start Storybook for Web:**

  ```bash
  yarn storybook:web

## Testing

To run tests with Jest, use:

```bash
yarn test 
```

This command runs Jest tests and generates a test report in jest-test-results.json.

# Pull Request Guidelines

To ensure a smooth and efficient review process, please follow these guidelines when creating a pull request (PR).

## Creating a Feature Branch

1.0 **Create a New Feature Branch:**

   When starting work on a new feature or bugfix, create a new branch from `main`. Use the following naming convention for your branch:


For example:

```bash
git checkout -b feature/api-1234
```

Here, **api-1234** represents the ticket or issue number associated with the changes.


