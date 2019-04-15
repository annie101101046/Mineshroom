    if (window.dexon && window.dexon.enable) {
        window.dexon.enable().then(e => {
            console.log(e);
            web3 = new Web3(window.dexon);
            //在這裡以下做事才有用ㄚ web3 連到了
            web3.eth.net.getId().then(e => {
                console.log(e);
                setTimeout(function () {
                    location.href =
                        "bankerView.html";
                }, 3000);
            })
        })
    } else {
        window.open('https://chrome.google.com/webstore/detail/dekusan/anlicggbddjeebblaidciapponbpegoj',
            '_blank');
    }

    document.getElementById("log").onclick = function () {
        location.href = "login.html";
    };

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }