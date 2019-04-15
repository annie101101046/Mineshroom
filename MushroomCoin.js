    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
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
                "0x191404bc8185e5b55e145d4b1685bf7e88ff0b64");
            console.log(myContract);
            myContract.methods.isRegister(window.dexon.defaultAccount).call().then(e => {
                console.log(e);
                if (!e) {
                    location.href = "login.html";
                }
            })

            web3.eth.net.getId().then(e => {
                console.log(e);
                //拿 DXN 數量
                web3.eth.getBalance(window.dexon.defaultAccount).then(e => {
                    console.log(e);
                    let myContract = new web3.eth.Contract(abi,
                        "0x191404bc8185e5b55e145d4b1685bf7e88ff0b64");
                    console.log(myContract);
                    //拿菇幣數量
                    myContract.methods.getGuCoin(window.dexon.defaultAccount).call()
                        .then(e => {
                            console.log(e);
                            let k = document.getElementById("G_amount");
                            k.innerHTML = e;
                        })

                    //點按鈕買菇菇幣
                    document.getElementById("buygu").onclick = function BuyGu() {
                        myContract.methods.mushroom_eth_rate().call()
                            .then(e => {
                                console.log(e);
                            })
                        const amount = prompt('Accept DXN');
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
                            location.reload();
                        })
                    };

                })
            })
        })
    }