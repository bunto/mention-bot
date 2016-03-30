// Run api.js in your node console (Test Script)
// Read https://github.com/facebook/mention-bot/issues/94!

mentionBot.guessOwnersForPullRequest("https://github.com/bunto/mention-bot", 3, "SuriyaaKudoIsc", "master", {}, github)
.then(function(users) {   
    console.log(users);
})
.catch(function(err) {
console.error(err);
});
