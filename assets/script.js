/*var topics = "Javascript";*/
var topics = ["HTML","Javascript","css","git"];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];

console.log("here are the topics we learned through prework");

function selecttopic(){
if (randomTopic == 'HTML')
{
    console.log("lets study html");
}
else if(randomTopic == 'css'){
    console.log("lets code css");
}
else if(randomTopic == 'git'){
    console.log("lets study git");
}
else if(randomTopic == 'Javascript'){
    console.log("lets code javascript")
}
else{
    console.log("please try again");
}
}

function listtopics(){

for(var x = 0;x < topics.length ; x++){
    console.log(topics[x]);
}
}

listtopics();
console.log("which topic should we learn first?");
selecttopic();

