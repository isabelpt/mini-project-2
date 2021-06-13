var button = $(".secret-btn");
var header = $("h1");
var paraOne = $(".p1");
var paraTwo = $(".p2");
var paraThree = $(".p3");
var image = $("img");

button.on("click", showSecret);

function showSecret() {
  if (header.text() === "Puppy Facts") {
    header.addClass("changeColor");
    header.text("My Favorite Books!!!");
    paraOne.text("Untamed by Glennon Doyle");
    paraTwo.text("Malibu Rising by Taylor Jenkins Reid");
    paraThree.text(`And saving the best for last... \n The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid`);
    paraThree.html(paraThree.html().replace(/\n/g,'<br/>'));
    image.attr("src", "https://ashsinfinitelibrary.files.wordpress.com/2018/09/evelyn-hugo.jpg");
    image.attr("alt", "Spread of The Seven Husbands of Evelyn Hugo");
  } else {
    header.removeClass("changeColor");
    header.text("Puppy Facts");
    paraOne.text("They spend 15–20 hours a day sleeping.");
    paraTwo.text("Puppies can be twins!");
    paraThree.text("Puppies become 'adults' when they turn one.");
    image.attr("src", "https://www.cbc.ca/kidscbc2/content/the_feed/fact-2-puppies-sleep-compressor.jpg");
    image.attr("alt", "Sweet puppy sleeping");
  }
}