// holds all tweets in JSON format
var tweets = [
    {username: 'Bobo', text: 'hello followers!'},
    {username: 'Elvis', text: 'this exercise is really easy!'},
    {username: 'Mimi', text: 'I want to go to sleep'}
];

// add new tweet to tweets JSON
function addTweet(){

    var text = document.getElementById("tweet-text-box");
    var newTweet = {username: 'Eyal Azran', text: text.value};

    tweets.push(newTweet);

    showTweet(newTweet);
}

function showAllTweets(){

    tweets.forEach(function(currUser){
        showTweet(currUser);
    });
}

function showTweet(currUser){

    var allTweetsDiv = document.getElementById("allTweets");

    // Create the tweet row
    var newTweetDiv = document.createElement("div");
    newTweetDiv.className = "row top-buffer";

    // Append the row container
    allTweetsDiv.appendChild(newTweetDiv);

    // Create the image container
    var imageDiv = document.createElement("div");
    imageDiv.className = "col-md-2";

    newTweetDiv.appendChild(imageDiv);

    // Create the image element
    var newImage = document.createElement("img");
    newImage.src = "../images/useravatar.png";

    imageDiv.appendChild(newImage);

    // Create the username div
    var userNameDiv = document.createElement("div");
    userNameDiv.className = "text-bold";
    userNameDiv.innerHTML = currUser.username + " says:";

    newTweetDiv.appendChild(userNameDiv);

    //
    var textDiv = document.createElement("div");
    textDiv.innerHTML = currUser.text;

    newTweetDiv.appendChild(textDiv);

}

showAllTweets();