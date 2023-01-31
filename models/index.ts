export interface TokenData extends TokenUpload {
  chainData: ChainData[];
}

export interface TokenUpload {
  coingeckoId: string;
  description: string;
  decimals: number;
  hexColor: string;
  link: string;
  logoURI: string;
  name: string;
  tags: string[];
  ticker: string;
}

export interface ChainData {
  address: string;
  networkTicker: string;
}

export type NetworkDbTemp = {
  id: number;
  about: string;
  chainId: number;
  decimals: number;
  fullName: string;
  iconPath: string;
  isSupported: boolean;
  networkFamily: string;
  whitePaperPath: string;
  blockExplorerURL: string;
  zeroXSwapUrl?: string;
  provider: string;
  blockchainId: string;
  ticker: string;
};

export type ContractData = {
  address: string;
  networkTicker: string;
};

export interface EVMData {
  chainId: number;
  zeroXSwapUrl?: string;
}

export interface NetworkSecretParameters {
  provider: string;
}
export class NetworkSecretData {
  readonly provider: string;
  constructor(secretParams: NetworkSecretParameters) {
    this.provider = secretParams.provider;
  }
}
