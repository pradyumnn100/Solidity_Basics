import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'The Vault — FundMe',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'REPLACE_WITH_WALLETCONNECT_PROJECT_ID',
  chains: [sepolia],
  ssr: true,
});
