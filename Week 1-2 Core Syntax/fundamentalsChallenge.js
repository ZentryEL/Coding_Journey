/*🏆 The Ultimate Day 1–4 Reviewer Challenge: "The Cyberpunk Arcade" */
// Object array of arcade players
const arcadePlayers = [
    {name: "Alex", tokens: 12, isVIP: false},
    {name: "Sam", tokens: 7, isVIP: true},
    {name: "Timmy", tokens: 7, isVIP: false}
]

/*A function where the parameter is the object array above */
function playPremiumGame (arcadePlayers) {
    
    /*A foreach loop where basically saying 
    for each player in the object array that has enough tokens
    it prints whether they can or not play the game. The caviat?
    VIP players only get discounts */
    arcadePlayers.forEach ((player) => {
        // Set up a base cost for playing the game
        let gameCost = 10;
        
        /*Gives the VIP players a discount */
        if (player.isVIP) {
            gameCost = 5;
        }
        if (player.tokens >= gameCost) {
            player.tokens -= gameCost;
            console.log (player.name + " successfully played the game! Remaining tokens: " + player.tokens);
        }
        else {
            console.log (player.name + " does not have enough tokens to play the game.");
        }
    })
}
playPremiumGame(arcadePlayers);


/*This is so fun although my copilot is better and faster than me I think
leaving them on and pushing me to the right direction is better than
beating myself for not being a master immediately
I thought it would take me ages to even start but hey a little push into the right direction
might be what I need, and eventually I might be able to predict what I might 
type without relying too much with my partner in crime lol*/