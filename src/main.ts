import Web3 from "web3"

import GreeterArtifact from "../artifacts/Greeter.json"
import { Greeter } from "./types/web3/Greeter"

import { deployContract } from "./utils"

async function main() {

    const web3 = new Web3("ws://localhost:8545")

    const accountAddrs = await web3.eth.getAccounts()
    const adminAddr = accountAddrs[0]

    const greeter = await deployContract(web3, GreeterArtifact, ["Hello, world!"], adminAddr) as Greeter

    greeter.events.Greet()
        .on("data", (event) => console.log('event:', event))
        .on("error", (error) => console.log('error:', error))

    await greeter.methods.greet().send({ from: adminAddr })
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
