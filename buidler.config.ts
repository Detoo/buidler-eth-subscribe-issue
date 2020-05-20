import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-truffle5");

const config: BuidlerConfig = {
  solc: {
    version: "0.6.4",
    optimizer: { enabled: true },
  }
}

export default config
