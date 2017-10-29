
var users = ['Eyal Azran', 'Liron Azran', 'Amir Azran', 'Liraz Azran'];

var followees = ['Dad', 'Mom'];

var filterUsers = [];

// This function runs when the page starts
function Init(){

    // refreshes the page and rearrange users
    refresh();
}

// refreshes the page and rearrange users
function refresh(){

    // find all users in page
    var allUsers = document.getElementsByName("user");

    // Remove all users div
    if (allUsers.length != 0){
        for (var index = allUsers.length-1; index >= 0; index--){
            allUsers[index].remove();
        }
    }

    // redisplay all users
    showAllUsers();

    // redisplay all followees
    showAllFollowees();
}

function showAllUsers(){

    // read the filter text
    var filterText = document.getElementById('filterText');

    // If Filtered
    if (filterText.value != ""){
        filter(filterText.value);

        filterUsers.forEach(function(username){
            showUser(username, "showAllUsers", "Follow");
        });

    }
    else {
        users.forEach(function (username) {
            showUser(username, "showAllUsers", "Follow");
        });
    }
}

function showAllFollowees(){

    followees.forEach(function(username){
        showUser(username, "showAllFollowees", "Unfollow");
    });
}

// display user and sets it in the USERS or FOLLOWEES groups
function showUser(username, container, status){

    var allUsersDiv = document.getElementById(container);

    // Create the user row
    var newUserDiv = document.createElement("div");
    newUserDiv.id = username;
    newUserDiv.setAttribute("name", "user")

    if (status == "Follow") {
        newUserDiv.className = "col-md-1 col-md-offset-1 text-center list-group-item top-buffer";
    }
    else{
        newUserDiv.className = "col-md-9 col-md-offset-1 text-center list-group-item top-buffer";
    }

    allUsersDiv.appendChild(newUserDiv);

    // ImageContainer
    var rowDiv = document.createElement("div");
    rowDiv.className = "row";
    newUserDiv.appendChild(rowDiv);

    // Image
    var newImage = document.createElement("img");
    newImage.src = "../images/useravatar.png";
    rowDiv.appendChild(newImage);

    rowDiv = document.createElement("div");
    rowDiv.className = "row";
    newUserDiv.appendChild(rowDiv);

    // Button
    var newButton = document.createElement("button");
    newButton.addEventListener("click", function(){
        followButtonClick(this)
    });

    newButton.name = username;

    if (status == "Follow") {
        newButton.className = "btn btn-primary top-buffer";
        newButton.innerHTML = "Follow";
    }
    else{
        newButton.className = "btn btn-danger top-buffer";
        newButton.innerHTML = "Unfollow";
    }

    rowDiv.appendChild(newButton);

    // UserNameContainer
    rowDiv = document.createElement("div");
    rowDiv.className = "row";
    newUserDiv.appendChild(rowDiv);

    var userNameDiv = document.createElement("div");
    userNameDiv.className = "top-buffer";
    userNameDiv.innerHTML = username;
    rowDiv.appendChild(userNameDiv);
}



function followButtonClick(obj){

    if (obj.innerHTML == 'Follow') {

        var index = users.indexOf(obj.name);
        if(index >= 0){
            users.splice(index, 1);
            followees.push(obj.name);
        }
    }
    else {

        var index = followees.indexOf(obj.name);
        if(index >= 0){
            followees.splice(index, 1);
            users.push(obj.name);
        }
    }

    refresh();
}

function filter(filterName){

    filterUsers = [];

    users.forEach(function(currUser){

        // Fill the filter array with the relevant users
        if (currUser != null) {

            if (currUser.startsWith(filterName)) {
                filterUsers.push(currUser);
            }
            else {
                var index = filterUsers.indexOf(currUser);
                if(index >= 0){
                    filterUsers.splice(index, 1);

                }
            }
        }
    });
}


Init();

