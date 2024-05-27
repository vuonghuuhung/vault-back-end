import { JsonRpcProvider } from 'ethers';
import { Reader, Reader__factory } from 'vault-contract-sdk';

export class ContractClient {
  static provider: JsonRpcProvider;
  static reader: Reader;

  static getProvider() {
    if (!this.provider) {
      this.provider = new JsonRpcProvider('http://localhost:8545');
    }

    return this.provider;
  }

  static getReader() {
    if (!this.reader) {
      this.reader = Reader__factory.connect(
        '0x26Df0Ea798971A97Ae121514B32999DfDb220e1f', // hardcode for local eviroment
        this.getProvider(),
      );
    }

    return this.reader;
  }
}
