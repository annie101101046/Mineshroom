if (window.dexon && window.dexon.enable) {
    window.dexon.enable().then(e => {
        console.log(e);
        web3 = new Web3(window.dexon);
        console.log(web3);
        // web3 連到了
        web3.eth.net.getId().then(e => {
            console.log(e);
            let myContract = new web3.eth.Contract(abi,
                MushroomAddress);
            console.log(myContract);
            //拿菇幣數量
            myContract.methods.getGuCoin(window.dexon
                    .defaultAccount).call()
                .then(e => {
                    console.log(e);
                    let k = document.getElementById("Gucoin");
                    k.innerHTML = e;
                })
            //看event
            myContract.events.SendMsg({}, (err, event) => {
                let talk = document.getElementsByClassName("chat");
                console.log(talk[0]);
                console.log(event);
                console.log(event.returnValues[0]);
                console.log(event.returnValues[1]);
                talk.innerHTML = event.returnValues[0] + ": " + event.returnValues[1] + '<br>';
                console.log(talk.innerHTML);
            })

            document.getElementById("btn-chat").onclick = function () {
                let messageText = document.getElementById("message");
                console.log(messageText.value);
                myContract.methods.chat(messageText.value).send({
                    from: window.dexon.defaultAccount,
                }).then(e => {
                    let talk = document.getElementsByClassName("chat");
                    talk[0].innerHTML += e.events['SendMsg'].returnValues[0] + ": " + e.events['SendMsg'].returnValues[1] + '<br>';
                    console.log(talk);
                    console.log(talk[0].innerHTML);
                    alert("10 GUGU COIN sent");
                    //拿菇幣數量
                    myContract.methods.getGuCoin(window.dexon
                            .defaultAccount).call()
                        .then(e => {
                            console.log(e);
                            let k = document.getElementById("Gucoin");
                            k.innerHTML = e;
                        })
                    messageText.value = '';
                })
            }
        })
    })
}

document.getElementById("back").onclick = function () {
    location.href = "../FAQ.html";
}