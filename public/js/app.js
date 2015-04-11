$(function() {

  function create_nav_link (link_text) {
      var new_nav_item = $("<li>");
      new_nav_item.addClass("new_nav_item");
      var new_nav_link  = $("<a>", {
        href : "#",
        html : link_text
      });

      new_nav_item.append( new_nav_link );

      return new_nav_item;
  }

  var main_nav_element = $("ul.main_nav");

  $("#nav_interstellar_travel").click(function(event) {

      var new_nav_item = create_nav_link("Foo");
      main_nav_element.append(new_nav_item); 
  });

  $("#nav_services").click(function() {

      main_nav_element.append(create_nav_link("Bar"));
  });

  $("#nav_about").click(function(event) {

      event.preventDefault();

      main_nav_element.append(create_nav_link("Baz")); 
  });

  function remove_nav_link (link_text) {
    $('li').remove(":contains(" + link_text + ")");
  }

  $("#nav_home").click(function() {

    ["Bar","Foo","Baz","Shit"].map(remove_nav_link);
  });

  $("h1 > a:contains('Intergalactic Travel Agency')").click(function() {
    
    $(this).html('<span>StarFox</span> Slave Trade Company');
    
  });

  $(".hero_button").click(function() {
    var randoNum = Math.floor(Math.random() * 6) * 10;
    var x = 300 + randoNum;
    var y = 300 + randoNum;
    var stupidURL = "url('http://placekitten.com/g/" + x + "/" + y + "')";

    $('.lead').css({'background-image' : stupidURL, 'background-size' : 'auto 300px'});

    $(this).removeClass('focus');

  });

  $('.large_deal').click(function() {
    var randoNum = Math.floor(Math.random() * 256);
    var randoNum2 = Math.floor(Math.random() * 256);
    var randoNum3 = Math.floor(Math.random() * 256);
    var randoColor = "rgb(" + randoNum + ", " + randoNum2 + ", " + randoNum3 + ")";

    $(this).css({'background-color' : randoColor});
  });

/*
  $("#nav_home").click(function() {
    var all_new_nav_items = $(".new_nav_item");
    main_nav_element.remove(all_new_nav_items);
  });
 */

});