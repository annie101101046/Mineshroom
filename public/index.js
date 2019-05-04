$(document).ready(function () {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('a7743519329696527756', {
        cluster: 'ap1',
        forceTLS: true
    });

    var channel = pusher.subscribe('public-chat');
    channel.bind('message-added', onMessageAdded);

    $('#btn-chat').click(function () {
        const message = $("#message").val();
        $("#message").val("");

        //send message
        $.post("http://localhost:5000/message", {
            message
        });
    });

    function onMessageAdded(data) {
        let template = $("#new-message").html();
        template = template.replace("{{body}}", data.message);

        $(".chat").append(template);
    }

    document.getElementById("back").onclick = function () {
        location.href = "/FAQ.html";
    }
});