var topic = "Javascript";
var topics = ["HTML","Javascript","css","git"];

console.log(topic);

if (topic == 'HTML')
{
    console.log("lets study html");
}
else if(topic == 'css'){
    console.log("lest code css");
}
else if(topic == 'git'){
    console.log("lets study git");
}
else if(topic == 'Javascript'){
    console.log("lets code javascript")
}
else{
    console.log("please try again");
}

for(var x = 0;x < topics.length ; x++){
    console.log(topics[x]);
}