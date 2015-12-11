document.getElementById("quoteGen").onclick = getQuote; 

function getQuote(event) {
    event.preventDefault();
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
      .done(update);
  }

function update(response) {
  var new_HTML = response.quoteText + " " + response.quoteAuthor; 
  document.getElementById("quote").innerHTML = new_HTML;
}

