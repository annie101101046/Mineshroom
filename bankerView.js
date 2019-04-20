    window.onload = function crazymushroom() {

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushAdd").appendChild(image);
            }, i * 300);
        }

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushAdd2").appendChild(image);
            }, i * 800);
        }

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushAdd3").appendChild(image);
            }, i * 1000);
        }


        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushAdd4").appendChild(image);
            }, i * 1200);
        }

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushAdd5").appendChild(image);
            }, i * 1400);
        }

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushAdd6").appendChild(image);
            }, i * 1600);
        }

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushAdd7").appendChild(image);
            }, i * 1800);
        }

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushAdd8").appendChild(image);
            }, i * 1800);
        }

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".musAdd").appendChild(image);
            }, i * 200);
        }


        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".musAdd2").appendChild(image);
            }, i * 200);
        }

        for (var i = 0; i < 7; i++) {
            setTimeout(function () {
                var image = document.createElement("img");
                image.setAttribute("src", "image/crazymushroom.gif");
                document.querySelector(".mushhAdd").appendChild(image);
            }, i * 200);
        }

        var timeleft = 0;
        var downloadTimer = setInterval(function () {
            var a = document.getElementById("team1");
            a.innerHTML = timeleft;
            timeleft += 1;
            if (timeleft >= 0) {
                setInterval(downloadTimer);
            }

            if (timeleft > 110)
                clearInterval(downloadTimer);
        }, 100);

        var downloadTimer2 = setInterval(function () {
            var a = document.getElementById("team2");
            a.innerHTML = timeleft;
            timeleft += 1;
            if (timeleft >= 0) {
                setInterval(downloadTimer2);
            }

            if (timeleft > 13)
                clearInterval(downloadTimer2);
        }, 200);

        var downloadTimer3 = setInterval(function () {
            var a = document.getElementById("team3");
            a.innerHTML = timeleft;
            timeleft += 1;
            if (timeleft >= 0) {
                setInterval(downloadTimer3);
            }

            if (timeleft = 14)
                clearInterval(downloadTimer3);
        }, 500);
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
                "0x18fb41afc64e393ed8a3e3e809e00ba2d3b4ab9c");
            console.log(myContract);
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