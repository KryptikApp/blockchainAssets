# Kryptik Wallet Blockchain Data

## About

The Kryptik blockhain data repository contains comprehensive data on a select set of blockchain assets. There is also support for uploading data to your own firestore database. This can be helpful when creating a blockchain application.

## Getting Started

_Install_ dependencies:

```bash
yarn install
# or
npm install
```

_Add_ a secrets.ts file with your firebaseConfig. This file should be of the following format:

```bash
export const firebaseConfig = {
    apiKey: "your api key",
    authDomain: "your authDomain",
    projectId: "your projectId",
    storageBucket: "your storage bucket",
    messagingSenderId: "your messagingSenderId",
    appId: "your appId",
    measurementId: "your measurementId"
};

export const NetworkSecretsDict:{[name: string]: NetworkSecretData}  = {
    "yourTokenTicker": new NetworkSecretData({provider:"yourProviderURL"})
};

// note: make sure you add the associated auth uid to your firebase rules
export const authEmail = "your email"
export const authPassword = "your password"

```

Note: You can find more information about obtaining your firebaseConfig [here](https://firebase.google.com/docs/web/learn-more#config-object).

_Upload_ all blockchain asset data to your database:

```bash
yarn uploadAll
```

_Upload_ token data to your database:

```bash
yarn uploadTokens
```

_Upload_ network data to your database:

```bash
yarn uploadNetworks
```
