import { useEffect, useState } from 'react';
//import { Button, Modal, ModalBody, ModalCloseButton, ModalContetn, ModalFooter, ModaHeader, ModalOverlay} from "@chakra-ui/react";
import Web3 from 'web3';

const useWeb3 = () => {
    const [account, setAccount] = useState(null);
    const [web3, setWeb3] = useState(null);
    // const contractInstance = new ethers.Contract(contractAddress, abi, library);
    // //contract의 주소, abi, library를 보내 컨트랙트 Instance 생성
    // const data = await contractInstance.populateTransaction.mint(1);

    const getChainId = async () => {
        const chainId = await window.ethereum.request({
            method: 'eth_chainId',
        });

        return chainId;
    };

    const getRequestAccounts = async () => {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });

        console.log(accounts);

        return accounts;
    };

    const addNetwork = async (chainId) => {
        const netWork = {
            chainId: chainId,
            chainName: 'ganache',
            rpcUrls: ['http://127.0.0.1:8545'],
            nativeCurrency:{
                name: 'Ethereum',
                symbol:'ETH',
                decimals: 18,
            },
        };

        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [netWork],
        });
    };

    

    useEffect(() => {
        const init = async () => {
            try{
                const targetChainId = '0x539';
                const chainId = await getChainId();
                console.log('chain Id: ', chainId);
                //AbortController.log('Chain Id: ', chainId);
                if(targetChainId !== chainId){
                    addNetwork(targetChainId);
                }
                const [accounts] = await getRequestAccounts();

                const web3 = new Web3(window.ethereum);
                setAccount(accounts);
                setWeb3(web3);
            } catch(e){
                console.error(e.message);
            }
        };
        
        if(window.ethereum){
            // window.ethereum.request();
            init();
        }
    }, []);
    return [account, web3];
};

export default useWeb3;