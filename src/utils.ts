import Web3 from "web3"
import { AbiItem } from "web3-utils"

export async function deployContract(web3: Web3, artifact: any, args: any[], accountAddr: string): Promise<any> {

    const tx = (new web3.eth.Contract(
        (artifact.abi as unknown) as AbiItem[],
    )).deploy({ arguments: args, data: artifact.bytecode })

    return tx.send({
        from: accountAddr,
        gas: 1_000_000
    })
}
