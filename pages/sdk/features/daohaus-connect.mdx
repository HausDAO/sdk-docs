# DAOhaus Connect

Package name: `daohaus-connect`

**DAOhaus Connect** is our first feature library. Our feature libraries are a step beyond our component library, and either include additional functionality or leverage the DAO Data SDK to create "smart components." DAOhaus Connect provides a drop-in component for handling wallet connection, and includes additional functionality such as notifying users of unsupported networks, and switching networks.

This is used throughout our applications and is designed to be leveraged by the larger DAOhaus community as a portal into the DAOhaus ecosystem.

## Installation

You can bring DAOhaus Connect into your own app by installing with `npm` or `yarn`:

```bash
npm install daohaus-connect
# yarn
yarn add daohaus-connect
```

If you're using this from inside the monorepo, you can import directly from the package such as `import { HausConnectProvider } from 'daohaus-connect'`.

## Usage

DAOhaus Connect provides drop-in functionality and utilities for handling wallet connection and associated functionlity such as working with the connected user's address, managing network configuration, and handling supported/unsupported networks.

This is a React package and it works within React apps.

### HausConnectProvider Context Provider

Start by importing the `HausConnectProvider` component from the `@daohaus/daohaus-connect-feature` package at your app's root component, such as `main.tsx`:

```jsx
// main.tsx

import { HausConnectProvider } from '@daohaus/daohaus-connect-feature'
```

Once imported you can use wrap your app with it as you would any other Context Provider:

```jsx
// main.tsx

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
        <HausConnectProvider>
          <App />
        </HausConnectProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
```

### Core Utilities

DAOhaus Connect exposes several useful tools and UI components that can be leveraged. You can access these by importing `useHausConnect` from DAOhas Connect:

```jsx
import { useHausConnect } from '@daohaus/daohaus-connect-feature'
```

Once this is imported, you can destructure out additional tools:

**Connect Wallet**

```jsx
const { connectWallet } = useHausConnect()
```

This can then be passed into any Button with an `onClick` handler:

```jsx
<Button onClick={connectWallet} sm type="button">
  Connect
</Button>
```

**User State**

There are several helpers that can be used to determine the state of the connected user. You can destructure these from `useHausConnect`:

```jsx
const { isConnected, isProfileLoading } = useHausConnect()
```

These can be used to conditionally render UI based on the state of the connected user, such as in this example:

```jsx
  if (!isConnected) {
    return <ConnectWalletButton isSm={isSm} />;
  }
  if (isProfileLoading) {
    return <LoadingButton isSm={isSm} />;
  }
  return <UserConnectedDropdown isSm={isSm} />;
};
```

**Getting a User's Address**

Once a user is connected, you can access their address by destructuring `useHausConnect`:

```jsx
const { address } = useHausConnect()
```

**Provider and Chain Information**

You're also able to access the provider and chain information by destructuring `useHausConnect`:

```jsx
const { provider, chainId } = useHausConnect()
```

This can then be used with other tools such as TxBuilder:

```jsx
<TXBuilder provider={provider} chainId={chainId} appState={{}}>
  // Your components
</TxBuilder>
```

**Switching Networks**

Once a user is connected, you can access the `switchNetwork` function by destructuring `useHausConnect`:

```jsx
const { switchNetwork } = useHausConnect()
```

## Using the UI Components

In addition to the helper utilities, DAOhaus Connect includes UI components that leverage the functionality included in the helpers.
