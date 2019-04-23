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
        console.log(web3);
        //在這裡以下做事才有用ㄚ web3 連到了
        web3.eth.net.getId().then(e => {
            console.log(e);
            //拿 DXN 數量
            web3.eth.getBalance(window.dexon.defaultAccount).then(e => {
                console.log(e);
                let myContract = new web3.eth.Contract(abi,
                    "0x0b2e249006289438fa938cb5d2cbdb4e18e98e72");
                console.log(myContract);
                //拿菇幣數量
                myContract.methods.getGuCoin(window.dexon.defaultAccount).call().then(e => {
                    console.log(e);
                })
            })
        })
        document.getElementById("register").onclick = function () {
            let myContract = new web3.eth.Contract(abi, "0x0b2e249006289438fa938cb5d2cbdb4e18e98e72");
            console.log(myContract);
            //myContract.methods.getGuCoin(window.dexon.defaultAccount).call().then(e => {console.log(e)})

            myContract.methods.getGuCoin(window.dexon.defaultAccount).call().then(e => {
                console.log(e);
            })

            myContract.methods.isRegister(window.dexon.defaultAccount).call().then(e => {
                console.log(e);
                if (!e) {
                    let response = myContract.methods.registerUser().send({
                        from: window.dexon.defaultAccount,
                        to: "0x0b2e249006289438fa938cb5d2cbdb4e18e98e72"
                    });
                } else {
                    location.href = "loginSuccess.html";
                }
            })
        };
    })
} else {
    window.open('https://chrome.google.com/webstore/detail/dekusan/anlicggbddjeebblaidciapponbpegoj',
        '_blank');
}

document.getElementById("register").onclick = function () {
    location.href = "loginSuccess.html";
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}