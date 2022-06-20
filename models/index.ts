export interface ChainData{
    chainId: number,
    ticker:string,
    address: string
}

export interface TokenData{
    name: string,
    symbol: string,
    coingeckoId: string,
    decimals: number,
    hexColor: string,
    chainData: ChainData[],
    logoURI: string,
    extensions: {
       link: string,
       description: string
    },
    tags:string[]
}


export interface NetworkDb{
    fullName: string,
    ticker: string,
    iconPath: string,
    isSupported: boolean,
    about: string,
    whitePaperPath: string,
    chainId: number,
    chainIdEVM: number,
    decimals: number,
    hexColor: string,
    dateCreated: Date,
    provider:string,
    networkFamilyName:string,
    coingeckoId:string
    isTestnet: boolean
    blockExplorerURL:string
}

export interface NetworkSecretParameters{
    provider: string
}
export class NetworkSecretData{
    readonly provider: string
    constructor(secretParams:NetworkSecretParameters) {
        this.provider = secretParams.provider
    }
}