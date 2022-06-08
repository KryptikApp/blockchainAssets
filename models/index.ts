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