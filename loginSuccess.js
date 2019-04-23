document.getElementById("LogoText").onclick = function () {
    location.href = "index.html";
}

document.getElementById("FixedLogo").onclick = function () {
    location.href = "index.html";
}

abi = [{
        "constant": false,
        "inputs": [],
        "name": "buyGuCoin",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_addr",
                "type": "address"
            },
            {
                "name": "game_index",
                "type": "uint256"
            },
            {
                "name": "item_ind",
                "type": "uint8"
            }
        ],
        "name": "buyItem",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "game_id",
            "type": "uint256"
        }],
        "name": "joinGame",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "newGame",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "registerUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "game_index",
                "type": "uint256"
            },
            {
                "name": "team_index",
                "type": "uint8"
            }
        ],
        "name": "gameWithTeam",
        "outputs": [{
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "address[]"
            },
            {
                "name": "",
                "type": "uint8[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllUsers",
        "outputs": [{
            "name": "",
            "type": "address[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "_addr",
            "type": "address"
        }],
        "name": "getBankerGame",
        "outputs": [{
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getGameId",
        "outputs": [{
            "name": "",
            "type": "uint256[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "game_index",
            "type": "uint256"
        }],
        "name": "getGameInfo",
        "outputs": [{
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "address[]"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint8"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "_user",
            "type": "address"
        }],
        "name": "getGuCoin",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "_addr",
            "type": "address"
        }],
        "name": "getPlayerGame",
        "outputs": [{
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "_addr",
            "type": "address"
        }],
        "name": "isRegister",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "mushroom_eth_rate",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

if (window.dexon && window.dexon.enable) {
    window.dexon.enable().then(e => {
        console.log(e[0]);
        web3 = new Web3(window.dexon);
        console.log(web3);
        //在這裡以下做事才有用ㄚ web3 連到了
        let myContract = new web3.eth.Contract(abi,
            "0x0b2e249006289438fa938cb5d2cbdb4e18e98e72");
        console.log(myContract);
        myContract.methods.isRegister(window.dexon.defaultAccount).call().then(e => {
            console.log(e);
            if (!e) {
                location.href = "login.html";
            }
        })
        let p = document.getElementById("ply");
        ply.innerHTML = 'Player:' + e;

        web3.eth.net.getId().then(e => {
            console.log(e);
            //拿 DXN 數量
            web3.eth.getBalance(window.dexon.defaultAccount).then(e => {
                console.log(e);
                var balance = web3.utils.fromWei(web3.utils.toBN(e));
                console.log(balance);
                let v = document.getElementById("DXNcoin");
                v.innerHTML = balance;
                let myContract = new web3.eth.Contract(abi,
                    "0x0b2e249006289438fa938cb5d2cbdb4e18e98e72");
                console.log(myContract);
                //拿菇幣數量
                myContract.methods.getGuCoin(window.dexon.defaultAccount).call()
                    .then(e => {
                        console.log(e);
                        let k = document.getElementById("Gucoin");
                        k.innerHTML = e;
                    })

                //點按鈕買菇菇幣
                document.getElementById("buyGu").onclick = function BuyGu() {
                    myContract.methods.mushroom_eth_rate().call()
                        .then(e => {
                            console.log(e);
                        })
                    const amount = prompt('buy');
                    myContract.methods.buyGuCoin().send({
                        from: window.dexon.defaultAccount,
                        value: web3.utils.toWei(amount),
                    }).then(data => {
                        console.log('event', data);
                        //拿菇幣數量
                        myContract.methods.getGuCoin(window.dexon
                                .defaultAccount).call()
                            .then(e => {
                                console.log(e);
                                let k = document.getElementById("Gucoin");
                                k.innerHTML = e;
                            })

                        //拿 DXN 數量
                        web3.eth.getBalance(window.dexon.defaultAccount).then(
                            e => {
                                console.log(e);
                                var balance = web3.utils.fromWei(web3.utils
                                    .toBN(e));
                                console.log(balance);
                                let v = document.getElementById("DXNcoin");
                                v.innerHTML = balance;

                            })
                        location.reload();
                    })
                };

                //判斷進註冊頁還是開局等待頁

                //在開局的等待頁判斷遊戲是否開始

                //banker 送錢、開局
                document.getElementById("bankerStart").onclick = function () {

                    let a = prompt('value');

                    myContract.methods.newGame().send({
                        from: window.dexon.defaultAccount,
                        value: web3.utils.toWei(a)
                    }).then(() => {

                        //去拿 gameID
                        myContract.methods.getBankerGame(window.dexon
                            .defaultAccount).call().then((data) => {
                            console.log(data);
                            console.log(data[1]);
                            let a = data[1];
                            if (a) {
                                location.href = "bankerwaiting.html";
                            } else {
                                location.href = "loginSuccess.html";
                            }
                        })
                    })
                };

                //玩家
                document.getElementById("playerStart").onclick = function () {
                    //去拿 gameID
                    myContract.methods.getGameId().call().then(async (data) => {
                        console.log(data);
                        for (let i = 0; i < data.length; i++) {
                            let a = data[i];
                            if (a !== "0") {
                                a = parseInt(a, 10);
                                let idstatus = await myContract.methods.getGameInfo(a).call();
                                console.log(idstatus)
                                if (idstatus[0] === "pending") {
                                    return myContract.methods.joinGame(a).send({
                                        from: window.dexon.defaultAccount
                                    })
                                }
                            }
                        }
                        //location.href = "loginSuccess.html";
                    }).then((a) => {
                        console.log(a);
                        if (a) {
                            location.href = "playerwaiting.html";
                        } else {
                            location.href = "shroomAgain.html";
                        }
                    })
                };
            })
        })
    })
}



function loadingpage() {
    var a = document.getElementById("loadimg");
    a.style.display = "block";
}

// document.getElementById("bankerStart").onclick = function () {
// setTimeout(function () {
//                                 location.href =
//                                     "bankerView.html";
//                             }, 5000);
// setTimeout(function () {
//     loadingpage();
// }, 500);


// };


// document.getElementById("playerStart").onclick = function () {
//     setTimeout(function () {
//         loadingpage();
//     }, 500);

//     setTimeout(function () {
//         location.href = "playerView.html";
//     }, 5000);
// };

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}