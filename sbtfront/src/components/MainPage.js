import '/Users/choejasil/BCpofolnet/truffle/sbtfront/src/css/MainPage.css';
import * as React from "react";
import useWeb3 from '../hooks/useWeb3';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Web3 from 'web3';
import { Stack, Button } from "@mui/material";
import {Link} from "@mui/material"
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AppsIcon from "@mui/icons-material/Apps";
import ImageIcon from "@mui/icons-material/Image";
import ReactPlayer from "react-player";

const MainPage = () => {
  
  const [isLogin, setIsLogin] = useState(false);
  const [balance, setBalance] = useState(0);
  const [account, web3] = useWeb3();
  
  const navigate = useNavigate();

  useEffect(() => {
    const tmpweb3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    var balance = 0
    const init = async () => {
      
      if(account) balance = await tmpweb3.eth.getBalance(account);

      setBalance(balance /10 ** 18);
    };

    if(account) setIsLogin(true);
    init();
  }, [account]);

  if(!isLogin)
    return(
      <div className="App">
        <div className="text">
          <img className="error_img" src="img/error.png" alt=""></img>
          <br></br>METAMASK 로그인 후 이용하실 수 있습니다.
          <br></br>
              <a className='method' href="#open">METAMASK 로그인 방법</a>
              <div className="white_content" id="open">
                <div>

                  <a className='box' href="#close">X</a>
                   <br></br>
                  <img className="imgg" src="img/1.jpg" alt=""></img>
                  <img className="imgg" src="img/2.jpg" alt=""></img>
                  <img className="imgg" src="img/3.jpg" alt=""></img>
                  <img className="imgg" src="img/4.jpg" alt=""></img>
                  <img className="imgg" src="img/5.jpg" alt=""></img>
                  <img className="imgg" src="img/6.jpg" alt=""></img>
                  <img className="imgg" src="img/7.jpg" alt=""></img>
                  <img className="imgg" src="img/8.jpg" alt=""></img>
                  <img className="imgg" src="img/9.jpg" alt=""></img>
                  <img className="imgg" src="img/10.jpg" alt=""></img>

                  <img className="imgg" src="img/11.jpg" alt=""></img>

            
                </div>
               </div>
         </div>
      </div>
    );

  return(
   //<div className = 'App'>
    //   <div>
    //     <h3>{account}님 환영합니다</h3>
    //     <div>
    //       Balance: {balance} ETH
    //     </div>
    //     <button onClick = {() => navigate('/selfSBT')}>SBT 발행하기</button>
    //     <button onClick = {() => navigate('/companySBT')}>기관 SBT 발행하기</button>
    //     <button onClick= {()=> navigate('/List2')}>sbt list 보기</button>
    //   </div>
    //</div>
    
    // 

    <Stack
    sx={{
      height: "auto",
      width: "auto",
      scrollBehavior: "smooth",
     //overflowY: "scroll",
    }}
  >
    <Stack
        sx={{
          height: "20%",
          backgroundColor: "#ffffff ",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{ height: "100%", width: "100%", maxWidth: 1700 }}
        >
          <Stack sx={{ height: "100%", width: "50%" }}>
            <Stack
              sx={{
                height: "30%",
                mt: 10,
                ml: 15,
                //mr: 3,
                fontSize: 55,
                fontWeight: "bold",
                textAlign:"left"
              }}
            >
              Dapp Portfolio<br></br>
              With SoulBound Token
            </Stack>
            <Stack sx={{ height: "20%", fontSize: 20, ml: 15, mt: 7, textAlign:"left" }}>
              Identification in Web3.0 <br />
              Proof of experience and participation in events
            </Stack>
            <Stack
              direction="row"
              justifyContent="start"
              sx={{ height: "10%", ml: 15, mr: 20, mt: 6 }}
            >
              <Button
               onClick={() => navigate('/selfSBT')}
                sx={{ width: "30%", borderRadius: 3 }}
                component={Link}
                to="/list"
                variant="contained"
              >
                Minting
              </Button>
              <Button
                onClick={() => navigate('/List2')}
                sx={{ width: "30%", ml: 3, borderRadius: 3 }}
                variant="outlined"
              >
                List
              </Button>
            </Stack>

            <Stack alignItems="start" sx={{ height: "8%", mt: 4, ml: 15 }}>
              <Button href="#youtube">
                {/* <PlayCircleFilledWhiteIcon /> */}
                Learn more about ~
              </Button>
            </Stack>
          </Stack>

          <Stack
            sx={{
              width:400,
              mt:6,
              ml:25

            }}
            >
            <img src="data:image/png;base64,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" alt="logo" />
          </Stack>
        </Stack>
    </Stack>

    <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            mt:14,
            marginLeft: 2,
            marginRight: 2,
            height: 1,
            borderTop: 2,
            borderColor: "#4A6BD6",
            fontSize: 20,
            alignItems: "center",
          }}
        >
      </Stack>


      <Stack
        sx={{
          mt: 10,
          height: "12%",
          alignItems: "center",
        }}
      >
        <Stack sx={{ height: "100%", width: "100%", maxWidth: 1700 }}>
          <Stack
            sx={{
              height: "20%",
              width: "100%",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Create your SBTs
          </Stack>
          <Stack direction="row" sx={{ height: "80%", width: "100%", mt: 8 }}>
            <Stack
              sx={{
                height: "100%",
                width: "25%",
                fontSize: 23,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              <AccountBalanceWalletIcon sx={{ fontSize: 80, color: "blue" }} />
              Set up your wallet
              <Stack
                sx={{
                  textAlign: "center",
                  width: "100%",
                  height: "50%",
                  fontSize: 20,
                  fontWeight: "medium",
                  mt: 3,
                }}
              >
                Once you’ve set up your wallet of 
                <br />
                choice. Connect it to MetaMask by 
                <br />
                clicking the MetaMask icon in top 
                <br />
                right menu bar.

              </Stack>
            </Stack>
            <Stack
              sx={{
                height: "100%",
                width: "25%",
                fontSize: 23,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              <AppsIcon sx={{ fontSize: 80, color: "blue" }} />
              Create your Portfolio
              <Stack
                sx={{
                  textAlign: "center",
                  width: "100%",
                  height: "50%",
                  fontSize: 20,
                  fontWeight: "medium",
                  mt: 3,
                }}
              >
                Click “SBT 발행하기” and set up your
                <br />
                work. Add destination, a description, 
                <br />
                name and images.
               
              </Stack>
            </Stack>
            <Stack
              sx={{
                height: "100%",
                width: "25%",
                fontSize: 23,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              <ImageIcon sx={{ fontSize: 80, color: "blue" }} />
              Add your SBTs
              <Stack
                sx={{
                  textAlign: "center",
                  width: "100%",
                  height: "50%",
                  fontSize: 20,
                  fontWeight: "medium",
                  mt: 3,
                }}
              >
                Click “SBT List” and we will gives you 
                <br />
                a view of all your SBTs. Make your 
                <br />
                resume and manage it conviniently.
               
              </Stack>
            </Stack>
            <Stack
              sx={{
                height: "100%",
                width: "25%",
                fontSize: 23,
                fontWeight: "bold",
                alignItems: "center",
              }}
            >
              <LoyaltyIcon sx={{ fontSize: 80, color: "blue" }} />
              Add a comment
              <Stack
                sx={{
                  textAlign: "center",
                  width: "100%",
                  height: "50%",
                  fontSize: 20,
                  fontWeight: "medium",
                  mt: 3,
                }}
              >
                Add your, others comment on the 
                <br />
                SBT. It makes you easily to remind it 
                <br />
                later.
               
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* //3번섹션 */}
      <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            height:"auto",
            mt:14,
            marginLeft: 2,
            marginRight: 2,
            borderTop: 2,
            borderColor: "#4A6BD6",
            fontSize: 20,
            alignItems: "center",
          }}
        >
      </Stack>

      <Stack
        sx={{
          mt: 3,
          height: "auto",
          alignItems: "center",
          backgroundColor: "#e8f0fcd7",
        }}
      >
        <Stack sx={{ mt:5, height: "100%", width: "100%", maxWidth: 1700 }}>
          <Stack
            id="youtube"
            sx={{
              height: 100,
              fontSize: 40,
              fontWeight: "bold",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            Meet Our Project
          </Stack>
          <Stack
            sx={{
              md:10, 
              height: "auto",
              alignItems: "center",
              justifyContent:"top"
            }}
          >
            The Dapp Portfolio with SoulBound Token
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ mt:1,height: "auto" }}
          >
            <ReactPlayer
              controls
              sx={{width:5000, 
              height:870}}
              
              url="https://youtu.be/gfGuPd1CELo?list=TLGG0LpIW2LMI8cxNDA0MjAyMg"
            />
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ mt:3, marginTop: 3, height: "15%" }}
          >
            <Button
              component={Link}
              to="/list"
              sx={{ height: "45%", mb:4 }}
              variant="contained"
            >
              Meet our Project
            </Button>
          </Stack>
        </Stack>
      </Stack>
      


     </Stack>


  );
}


export default MainPage;
