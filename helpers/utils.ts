import { NetworkDb, NetworkSecretData } from "../models"
import { NetworkSecretsDict } from "../secrets"

export const addNetworkSecretData = function(network:NetworkDb){
    let nwSecretData:NetworkSecretData = NetworkSecretsDict[network.ticker];
    if(nwSecretData){
        network.provider = nwSecretData.provider
    }
}