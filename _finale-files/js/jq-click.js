$( document ).ready(function() {
  // statement here
  $("#button").hover(function() {
    // hover in statement
    console.log("hovering button");
  }, function() {
    // hover out statement
    console.log("not hovering button");
  });

  // click function here
  $("#button").click(function(e) {
    // e is the click data
    e.preventDefault(); // this prevents the defaul click event from occuring (page loading/moving)
    // click occured
    console.log("button clicked");
  });
});