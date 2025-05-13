
# WebStreet SDK

A TypeScript/JavaScript SDK to interact with WebStreet's on-chain Solana programs.

## Features

- 🔗 Derive program addresses (PDAs)
- 📡 Read on-chain staking and token data
- 🧠 Integrate WebStreet AI agent signals into web apps

## Installation

```bash
npm install @webstreet/sdk
```

## Example Usage

```ts
import { Connection, PublicKey } from '@solana/web3.js';
import { getUserStakeAccount } from '@webstreet/sdk';

const connection = new Connection('https://api.mainnet-beta.solana.com');
const programId = new PublicKey('WEB11111111111111111111111111111111111111111');
const userPublicKey = new PublicKey('YourWalletPublicKeyHere');

const stakeAccount = await getUserStakeAccount(connection, userPublicKey, programId);
console.log('User Stake Account:', stakeAccount.toBase58());
```

## License

MIT © WebStreet Labs
