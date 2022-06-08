export interface ChainData{
    chainId: number,
    address: string
}

export interface ERC20Data{
    chainId: number,
    address: string,
    name: string,
    symbol: string,
    decimals: number,
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
    hexColor: string,
    dateCreated: Date,
    provider:string,
    networkFamilyName:string,
    coingeckoId:string
    isTestnet: boolean
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