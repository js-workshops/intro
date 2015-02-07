$( document ).ready(function() {

  // click function here
  $("#button").click(function(e) {
    // e is the click data
    e.preventDefault(); // this prevents the defaul click event from occuring (page loading/moving)
    // click occured
    console.log("button clicked");
    // add show event here
    $("#image").show(300);
  });
});