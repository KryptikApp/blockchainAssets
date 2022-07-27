# Kryptik Wallet Blockchain Data

## About
Kryptik wallet blochain data repository contains comprehensive data on a select set of blockchain assets. There is also support for uploading data to your own firestore database. This can be helpful when creating a blockchain application. 


## Getting Started

*Install* dependencies:

```bash
yarn install
# or
npm install
```

*Add* a secrets.ts file with your firebaseConfig. This file should be of the following format:

```bash
export const firebaseConfig = {
    apiKey: {your api key},
    authDomain: {your authDomain},
    projectId: {your projectId},
    storageBucket: {your storage bucket},
    messagingSenderId: {your messagingSenderId},
    appId: {your appId},
    measurementId: {your measurementId}
};

export const NetworkSecretsDict:{[name: string]: NetworkSecretData}  = {
    yourTokenTicker: new NetworkSecretData({provider:"yourProviderURL"})
};

```

Note: You can find more information about obtaining your firebaseConfig [here](https://firebase.google.com/docs/web/learn-more#config-object).

*Upload* all blockchain asset data to your database:

```bash
yarn uploadAll
```

*Upload* token data to your database:

```bash
yarn uploadTokens
```
