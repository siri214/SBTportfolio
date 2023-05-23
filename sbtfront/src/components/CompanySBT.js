import React, { useState} from "react"
import { Stack, Button } from "@mui/material";
import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../config/selfSBTconfig';
//import { Card, Form, Button } from "react-bootstrap";
import "../css/SelfSBT.css";

const CompanySBT = () => {
  // const PUBLIC_KEY = process.env.nftCA;
  // const PRIVATE_KEY = process.env.PRIVATE_KEY;
  const [account, setAccount] = useState();
  const [mintImageUrl, setMintImageUrl] = useState();
  const [mintName, setMintName] = useState();
  const [mintInformation, setMintInformation] = useState();
  
    //const Web3 = require('web3');
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    
  
  
    const onClickMint = async () => {
        

        const sendAccount = process.env.serverAddress;
        
        console.log(account, mintImageUrl, mintName, mintInformation);
        
        console.log("1")
        
        console.log("2")
        const deployed = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        console.log("3")
        //const nonce = await web3.eth.getTransactionCount(sendAccount);
        //console.log("4")
        const data = await deployed.methods.mintSBT2(mintImageUrl, account, mintName, mintInformation).send({from:account});
        console.log("data", data);

        
        
        const tx = {
            from: sendAccount,
            to: account,
            //nonce : nonce,
            gas: 5000000,
            data: data,
          };

        console.log("tx", tx);

    }
      
      


    return(
      <Stack sx={{mb:5}}>
        <div className="App">
          <div className="content">
          <p className="hello">Company Token Issuance Service</p>
            <div className="content2">
              
              <div className="imgAddress">
                <p>이미지 주소</p><input value= {mintImageUrl} onChange={(e) => {setMintImageUrl(e.target.value)}} type="text" placeholder="이미지 주소를 입력해주세요" />
              </div>
              <div className="accountAddress">
                <p>계정 주소</p><input value= {account} onChange={(e) => {setAccount(e.target.value)}} type="text" placeholder="계정 주소를 입력해주세요" />
              </div>
              <div className="name">
                <p>이름</p><input value= {mintName} onChange={(e) => {setMintName(e.target.value)}} type="text" placeholder="이름을 입력해주세요" />
              </div>
              <div className="description">
                <p>설명</p><textarea value= {mintInformation} onChange={(e) => {setMintInformation(e.target.value)}} type="text" placeholder="Description" />
              </div>
              <div className="sub">
                <button type="button" onClick={onClickMint}>발행하기</button>
              </div>
            </div>
          </div>
        </div>
        </Stack>
      
    

        // <div>
        //     <input value= {mintImageUrl} onChange={(e) => {setMintImageUrl(e.target.value)}} type="text" placeholder="이미지 주소를 입력해주세요" />
        //     <input value= {account} onChange={(e) => {setAccount(e.target.value)}} type="text" placeholder="계정 주소를 입력해주세요" />
        //     <input value= {mintName} onChange={(e) => {setMintName(e.target.value)}} type="text" placeholder="이름을 입력해주세요" />
        //     <input value= {mintInformation} onChange={(e) => {setMintInformation(e.target.value)}} type="text" placeholder="Description" />
        //     <button type="button" onClick={onClickMint}>발행하기</button>
        
        // </div>
    )
}
export default CompanySBT;