# Form Builder

This React-specific feature allows your application to easily make transactions with all the JavaScript app lifecycle functions baked-in to trigger error and success messages, along with other cool features. Transaction Builder demonstrates the power of our [Write DAO Data](https://hackmd.io/@daohaus/V3Docs-WriteDAOData) utilities when paired with the React [Component Library](https://hackmd.io/@daohaus/V3Docs-ComponentLibraryUI) to help users build transactions. Transactions are at the core of our platform, so we designed this library to provide helper utilities for this purpose. This library is an evolution of the patterns utilized in DAOhaus v2.

The core element is a React Context that bundles together generic transaction calls with subgraph polling within the function. This provides lifecycle methods that we can use to control UI based on synchronized events from within the React component.

## Installation

You can install this via `npm` or `yarn` to use in your external app:

```bash
npm install @daohaus/tx-builder-feature
# yarn
yarn add @daohaus/tx-builder-feature
```

The package name for importing is `@daohaus/tx-buiilder-feature`. If you've pulled down the entire monorepo you can reference it via this namespace, such as `import { TXBuilder } from '@daohaus/tx-builder-feature';`.

## Usage

Begin by importing the `TXBuilder` component from the `@daohaus/tx-builder-feature` package at a high-level component, such as `App.tsx`, in your app. This doesn't need to be at the root of your app with other Context Providers.
