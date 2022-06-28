require('dotenv').config()
import { Injectable } from '@nestjs/common';
import axios from 'axios';
const Web3 = require('web3');
import erc721ABI from '../utils/erc721';

@Injectable()
export class NftmintService {
  async getMintedList() {
    let resultMoralis = null;
    try {
      resultMoralis = await axios.get(
        `${process.env.MORALIS_API_URL}/nft/${process.env.NFTADDRESS}/owners?chain=rinkeby&format=decimal`,
        {
          headers: {
            'x-api-key': `${process.env.MORALIS_API_KEY}`
          }
        }
      )
    } catch (e) {
      console.log(e);
    }
    return resultMoralis;
  }

  async getNftById(id: string) {
    let resultMoralis = null;
    try {
      resultMoralis = await axios.get(
        `${process.env.MORALIS_API_URL}/nft/${process.env.NFTADDRESS}/${id}?chain=rinkeby&format=decimal`,
        {
          headers: {
            'x-api-key': `${process.env.MORALIS_API_KEY}`
          }
        }
      )
    } catch (e) {
      console.log(e);
    }
    return resultMoralis;
  }

  async mintNft(walletAddress: string) {
    const web3 = Web3(`${process.env.RPC_URL}`);
    const gasPrice = await web3.eth.getGasPrice();
    const nftContract = new web3.eth.Contract(erc721ABI, process.env.NFTADDRESS)
    const txcall = nftContract.methods.mint(walletAddress);
    const nonce = await web3.eth.getTransactionCount(walletAddress);
    const options = {
      from: process.env.GLOBAL_ADDRESS,
      value: 0,
      nonce: nonce,
      data: txcall.encodeABI(),
      to: process.env.NFTADDRESS,
      gasPrice: gasPrice,
      gas: 210000,
      chainId: 1
    }
    const signedTx = await web3.eth.accounts.signTransaction(options, process.env.GLOBAL_PRIVATEKEY)
    if (signedTx.rawTransaction) {
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
      return receipt;
    }
    return false;
  }
}
