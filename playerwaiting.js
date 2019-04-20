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
        console.log(e);
        web3 = new Web3(window.dexon);
        //在這裡以下做事才有用ㄚ web3 連到了
        let myContract = new web3.eth.Contract(abi,
            "0x191404bc8185e5b55e145d4b1685bf7e88ff0b64");
        console.log(myContract);
        web3.eth.net.getId().then(e => {
            console.log(e);
            //去拿 gameID，拿到後就跳轉
            myContract.methods.getPlayerGame(window.dexon
                .defaultAccount).call().then((data) => {
                console.log(data);
                console.log(data[1]);
                let a = data[1];
                if (a !== "0") {
                    a = parseInt(a, 10);
                    return myContract.methods.getGameInfo(a).call();
                } else {
                    location.href = "shroomAgain.html";
                }
            }).then((a) => {
                console.log(a);
                //這邊怪怪的...我拿到的 info 不對ㄅ
                if (a) {
                    //a 的狀況應該是我開局了，玩家也加入了我才跳轉
                    // location.href = "bankerView.html";
                } else {
                    // location.href = "shroomAgain.html";
                }
                // location.href = "bankerView.html";
            })
        })
    })
} else {
    window.open('https://chrome.google.com/webstore/detail/dekusan/anlicggbddjeebblaidciapponbpegoj',
        '_blank');
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}