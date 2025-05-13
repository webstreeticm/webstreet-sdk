
import { Connection, PublicKey, Keypair, TransactionInstruction } from '@solana/web3.js';

export async function getUserStakeAccount(connection: Connection, userPublicKey: PublicKey, programId: PublicKey): Promise<PublicKey> {
  const [stakeAccount] = await PublicKey.findProgramAddress(
    [Buffer.from("user"), userPublicKey.toBuffer()],
    programId
  );
  return stakeAccount;
}
