import {
    // Chain,
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    arbitrum,
    base,
    polygonMumbai,
    sepolia,
    scrollTestnet,
    polygonZkEvmTestnet
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const ALCHEMY_KEY = import.meta.env.VITE_ALCHEMY_KEY;
const WALLET_CONNECT_KEY = import.meta.env.VITE_WALLETCONNECT_KEY;
const WALLET_CONNECT_APP_NAME = import.meta.env.VITE_WALLET_CONNECT_APP_NAME;

const { chains, publicClient } = configureChains(
    [
      mainnet, polygon,
      arbitrum, base,
      sepolia, polygonMumbai,
      scrollTestnet,
      polygonZkEvmTestnet
    ],
    [
        alchemyProvider({ apiKey: ALCHEMY_KEY }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: WALLET_CONNECT_APP_NAME,
    projectId: WALLET_CONNECT_KEY,
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
});

const RainbowSetup = ({ children }: any) => {
    return (
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      );
};

export default RainbowSetup;