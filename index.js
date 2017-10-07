// Run Our Jquery

$(function() {
// Streamers // Array / Data
var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// getJSON // freecodecamp status
  $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=avibwofvkvdqe7bwk9gjbrcjd8g992').done(function(data) {
// To see if user is ONLINE or offline
    if(data.stream === null){
      $('#fcc').html(' is offline');
    } else {
        $('#fcc').html(' is ONLINE!');
    }
  });

for(var i = 0; i < streams.length; i++) {
// AJAX CALL
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/channels/"+ streams[i],
    headers: {
      'client-ID': 'avibwofvkvdqe7bwk9gjbrcjd8g992'
    },
    success: function(dataI) {
      // console.log(dataI);

      $.getJSON('https://api.twitch.tv/kraken/streams/'+ dataI.name +'?client_id=avibwofvkvdqe7bwk9gjbrcjd8g992').done(function(data2) {


        var name = data2._links.self.slice(37);

    // To see if user is ONLINE or offline
        if(data2.stream === null){
          $('#user').append('<a target = "blank" href= "https://www.twitch.tv/'+ name +'">'+ name +'</a><br>');
          $('#status').append('Offline<br>');
          $('#game').append('N/A<br>');
        } else {
          $('#user').append('<a target = "blank" href= "https://www.twitch.tv/'+ name +'">'+ name +'</a><br>');
          $('#status').append('ONLINE!<br>');
          $('#game').append(data2.stream.game + '<br>');
        }
      });

    },
    error: function(err){
      $('#user').append('Invalid User<br>');
      $('#status').append('Not Found<br>');
      $('#game').append('N/A<br>');
    }
  });

  }
});

  // idNumber =avibwofvkvdqe7bwk9gjbrcjd8g992
