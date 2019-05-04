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

document.getElementById("ask").onclick = function () {
    location.href = "public/message.html";
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("LogoText").onclick = function () {
    location.href = "index.html";
}

document.getElementById("FixedLogo").onclick = function () {
    location.href = "index.html";
}