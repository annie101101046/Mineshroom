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

let addMushroom1 = 0;
let addMushroom2 = 0;

if (window.dexon && window.dexon.enable) {
    window.dexon.enable().then(e => {
        console.log(e[0]);
        web3 = new Web3(window.dexon);
        console.log(web3);
        //在這裡以下做事才有用ㄚ web3 連到了
        let myContract = new web3.eth.Contract(abi,
            "0x18fb41afc64e393ed8a3e3e809e00ba2d3b4ab9c");
        console.log(myContract);
        //去拿 gameID，拿到後就跳轉
        myContract.methods.getBankerGame(window.dexon
            .defaultAccount).call().then((data) => {
            console.log(data);
            console.log(data[1]);
            let a = data[1];
            a = parseInt(a, 10);
            if (data[0] === true) {
                let downloadTimer = setInterval(function () {
                    myContract.methods.gameWithTeam(a, 0).call().then(e => {
                        let team1 = document.getElementById("team1");
                        let numberM = parseInt(e[0], 10);
                        team1.innerHTML = numberM;
                        let addM = numberM / 100;
                        for (; addMushroom1 < addM; addMushroom1++) {
                            let image = document.createElement("img");
                            image.setAttribute("src", "image/crazymushroom.gif");
                            document.querySelector("#mushAdd").appendChild(image);
                            document.querySelector("#space").appendChild("#mushAdd");
                        }
                    })
                }, 100);
                let downloadTimer2 = setInterval(function () {
                    myContract.methods.gameWithTeam(a, 1).call().then(e => {
                        let team2 = document.getElementById("team2");
                        let numberM = parseInt(e[0], 10);
                        team2.innerHTML = numberM;
                        let addM = numberM / 100;
                        for (; addMushroom2 < addM; addMushroom2++) {
                            let image = document.createElement("img");
                            image.setAttribute("src", "image/crazymushroom.gif");
                            document.querySelector("#mushAdd2").appendChild(image);
                            document.querySelector("#space2").appendChild("#mushAdd2");
                        }
                    })
                }, 100);
            }
        })
        myContract.methods.isRegister(window.dexon.defaultAccount).call().then(e => {
            console.log(e);
            if (!e) {
                location.href = "login.html";
            }

            //拿菇幣數量
            myContract.methods.getGuCoin(window.dexon
                    .defaultAccount).call()
                .then(e => {
                    console.log(e);
                    let nowGugu = 0;
                    //看菇菇有沒有增加
                    function checkGuGu() {
                        if (e > nowGugu) {
                            let diff = e - nowGugu;
                            nowGugu = e;
                            return diff;
                        }
                        console.log(checkGuGu());
                        let a = checkGuGu();
                        if (a > 0) {

                        }
                    }

                })
        })
    })
}