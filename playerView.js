document.getElementById("LogoText").onclick = function () {
    location.href = "index.html";
}

document.getElementById("FixedLogo").onclick = function () {
    location.href = "index.html";
}


// abi = [{
//         "constant": false,
//         "inputs": [],
//         "name": "buyGuCoin",
//         "outputs": [],
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [{
//                 "name": "_addr",
//                 "type": "address"
//             },
//             {
//                 "name": "game_index",
//                 "type": "uint256"
//             },
//             {
//                 "name": "item_ind",
//                 "type": "uint8"
//             }
//         ],
//         "name": "buyItem",
//         "outputs": [],
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [{
//             "name": "game_id",
//             "type": "uint256"
//         }],
//         "name": "joinGame",
//         "outputs": [{
//             "name": "",
//             "type": "bool"
//         }],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [],
//         "name": "newGame",
//         "outputs": [{
//             "name": "",
//             "type": "uint256"
//         }],
//         "payable": true,
//         "stateMutability": "payable",
//         "type": "function"
//     },
//     {
//         "constant": false,
//         "inputs": [],
//         "name": "registerUser",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     },
//     {
//         "constant": true,
//         "inputs": [{
//                 "name": "game_index",
//                 "type": "uint256"
//             },
//             {
//                 "name": "team_index",
//                 "type": "uint8"
//             }
//         ],
//         "name": "gameWithTeam",
//         "outputs": [{
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "address[]"
//             },
//             {
//                 "name": "",
//                 "type": "uint8[]"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "getAllUsers",
//         "outputs": [{
//             "name": "",
//             "type": "address[]"
//         }],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [{
//             "name": "_addr",
//             "type": "address"
//         }],
//         "name": "getBankerGame",
//         "outputs": [{
//                 "name": "",
//                 "type": "bool"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "getGameId",
//         "outputs": [{
//             "name": "",
//             "type": "uint256[]"
//         }],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [{
//             "name": "game_index",
//             "type": "uint256"
//         }],
//         "name": "getGameInfo",
//         "outputs": [{
//                 "name": "",
//                 "type": "string"
//             },
//             {
//                 "name": "",
//                 "type": "address[]"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "uint8"
//             },
//             {
//                 "name": "",
//                 "type": "address"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [{
//             "name": "_user",
//             "type": "address"
//         }],
//         "name": "getGuCoin",
//         "outputs": [{
//             "name": "",
//             "type": "uint256"
//         }],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "getNowGame",
//         "outputs": [{
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [{
//             "name": "_addr",
//             "type": "address"
//         }],
//         "name": "getPlayerGame",
//         "outputs": [{
//                 "name": "",
//                 "type": "bool"
//             },
//             {
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [{
//             "name": "_addr",
//             "type": "address"
//         }],
//         "name": "isRegister",
//         "outputs": [{
//             "name": "",
//             "type": "bool"
//         }],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "mushroom_eth_rate",
//         "outputs": [{
//             "name": "",
//             "type": "uint256"
//         }],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "owner",
//         "outputs": [{
//             "name": "",
//             "type": "address"
//         }],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     }
// ]

let addMushroom1 = 0;
let addMushroom2 = 0;
let gameid = undefined;
let bankerDXN;

if (window.dexon && window.dexon.enable) {
    window.dexon.enable().then(e => {
        console.log(e[0]);
        web3 = new Web3(window.dexon);
        console.log(web3);
        //在這裡以下做事才有用ㄚ web3 連到了
        let myContract = new web3.eth.Contract(abi,
            MushroomAddress);

        //userID
        myContract.methods.isRegister(window.dexon.defaultAccount).call().then(e => {
            console.log(e);
            if (!e) {
                location.href = "login.html";
            }
        })
        let ply = document.getElementById("playeID");
        ply.innerHTML = e;

        //拿菇幣數量
        myContract.methods.getGuCoin(window.dexon.defaultAccount).call()
            .then(e => {
                console.log(e);
                let k = document.getElementById("gu");
                k.innerHTML = e;
            })

        document.getElementById("aunt").onclick = function () {
            if (gameid === undefined) {
                return;
            }
            myContract.methods.buyItem(window.dexon.defaultAccount, gameid, 0).send({
                from: window.dexon.defaultAccount,
                value: 0.001 * 1e18,
            }).then(e => {
                alert("3x speed!");
                console.log("success!");
            })
        }

        document.getElementById("grandmaa").onclick = function () {
            if (gameid === undefined) {
                return;
            }
            myContract.methods.buyItem(window.dexon.defaultAccount, gameid, 1).send({
                from: window.dexon.defaultAccount,
                value: 0.001 * 1e18,
            }).then(e => {
                alert("2x speed!");
                console.log("success!");
            })
        }

        document.getElementById("Muscoin").onclick = function BuyGu() {
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
                        let k = document.getElementById("gu");
                        k.innerHTML = e;
                    })

            })
        }

        document.getElementById("magiccc").onclick = function () {
            if (gameid === undefined) {
                return;
            }
            myContract.methods.buyItem(window.dexon.defaultAccount, gameid, 2).send({
                from: window.dexon.defaultAccount,
                value: bankerDXN * 2,
            }).then(e => {
                alert("Double Amount!");
                console.log("success!");
            })
        }

        console.log(myContract);
        //去拿 gameID，拿到後就跳轉
        myContract.methods.getPlayerGame(window.dexon
            .defaultAccount).call().then((data) => {
            console.log(data);
            console.log(data[1]);
            let a = data[1];
            a = parseInt(a, 10);
            if (data[0] === true) {
                myContract.methods.getGameInfo(a).call().then(async e => {
                    console.log(e);
                    bankerDXN = e[5];
                    let g0 = await myContract.methods.gameWithTeam(a, 0).call();
                    let g1 = await myContract.methods.gameWithTeam(a, 1).call();
                    console.log(g0[1]);
                    g0[1] = g0[1].map(x => x.toLowerCase());
                    g1[1] = g1[1].map(x => x.toLowerCase());
                    if (g0[1].includes(window.dexon.defaultAccount)) {
                        let teamText = document.getElementById("yourTeam1");
                        teamText.innerHTML = "Your Score";
                    } else if (g1[1].includes(window.dexon.defaultAccount)) {
                        let teamText = document.getElementById("yourTeam2");
                        teamText.innerHTML = "Your Score";
                    } else {
                        alert("No team here!");
                    }
                })

                // let game0 = await myContract.methods.gameWithTeam(a, 0).call();
                // let game1 = await myContract.methods.gameWithTeam(a, 1).call();
                let gameTime = setInterval(function () {
                    myContract.methods.getGameInfo(a).call().then(async e => {
                        //return value 是 e
                        //用了 await 就不用 then 了，把 promise 值直接拿出來
                        let blocknumber = await web3.eth.getBlockNumber();
                        //console.log(blocknumber);
                        //把 banker 投了多少錢畫出來
                        let bnakerdep = document.getElementById("bankerDXN");
                        bnakerdep.innerHTML = e[5] / 1e18;;

                        //把玩家投了多少畫出來
                        let playerdep = document.getElementById("playerDXN");
                        playerdep.innerHTML = e[6] / 1e18;


                        let startAt = e[4];
                        let playtime = blocknumber - parseInt(startAt, 10);
                        //把 playtime 畫出來，然後 250 block 就結束了
                        // console.log(playtime);
                        let p = document.getElementById("blockT");
                        p.innerHTML = playtime;
                        if (playtime >= 250) {
                            //如果我大於他隊 轉到 winnerclaim
                            let gam0 = await myContract.methods.gameWithTeam(a, 0).call();
                            let gam1 = await myContract.methods.gameWithTeam(a, 1).call();
                            console.log(gam0[0]);
                            console.log(gam1[0]);
                            gam0[1] = gam0[1].map(x => x.toLowerCase());
                            gam1[1] = gam1[1].map(x => x.toLowerCase());

                            if (gam0[1].includes(window.dexon
                                    .defaultAccount)) {
                                if (gam0[0] > gam1[0]) {
                                    location.href = "winnerClaim.html";
                                } else {
                                    location.href = "loserClaim.html";
                                }
                            } else if (gam1[1].includes(window.dexon
                                    .defaultAccount)) {
                                if (gam1[0] > gam0[0]) {
                                    location.href = "winnerClaim.html";
                                } else {
                                    location.href = "loserClaim.html";
                                }
                            } else {
                                alert = "there's no team here!";
                                //平手的狀況還要寫，share 獎金... @cliff
                            }
                        }
                    })
                }, 100);

                gameid = a;
                let downloadTimer = setInterval(function () {
                    myContract.methods.gameWithTeam(a, 0).call().then(e => {
                        let team1 = document.getElementById("team1");
                        let numberM = parseInt(e[0], 10);
                        team1.innerHTML = numberM;
                        let addM = numberM / 100;
                        for (; addMushroom1 < addM; addMushroom1++) {
                            let image = document.createElement("img");
                            let mushroomDIV = document.createElement("div");
                            image.setAttribute("src", "image/crazymushroom.gif");
                            mushroomDIV.setAttribute("class", "mushAddd");
                            mushroomDIV.appendChild(image);
                            document.querySelector("#space").appendChild(mushroomDIV);
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
                            let mushroomDIV = document.createElement("div");
                            image.setAttribute("src", "image/crazymushroom.gif");
                            mushroomDIV.setAttribute("class", "mushAddd");
                            mushroomDIV.appendChild(image);
                            document.querySelector("#space2").appendChild(mushroomDIV);
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
        })

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
}