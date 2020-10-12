// Game States
//"WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less



// console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

let fight = function(enemyInfo) {

    while(enemyInfo.health > 0 && playerInfo.health > 0) {
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm user wnats to skip.
            let confirmSkip = window.confirm("Are you sure you'd like to skip");
            //If yes, skip fight.
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip the fight. Goodbye!");
            //Subtract money from playerInfo.money for skipping.
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log(playerInfo.name + "'s money", playerInfo.money);
                break;
            }
        }
        //Subtract the value of playerInfo.attack from the value of enemyInfo.health and use that result to update the value in the enemyInfo.health variable.
        let playerDamage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemyInfo.health = Math.max(0, enemyInfo.health - playerDamage);
        //Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.name + " attacked " + enemyInfo.name + ". " + enemyInfo.name + " now has " + enemyInfo.health + " health remaining.");

        //Check enemy's health.
        if (enemyInfo.health <= 0) {
            window.alert(enemyInfo.name + " has died!");
            //Award money for defeating enemy and exit loop
            playerInfo.money = playerInfo.money + 20;
            break;
        } else {
            window.alert(enemyInfo.name + " has " + enemyInfo.health + " health left.");
        }
        //Subtract the value of enemyInfo.attack from the value of playerInfo.health and use that result to update the value in the playerInfo.health variable.
        let enemyDamage = randomNumber(enemyInfo.attack - 3, enemyInfo.attack);
        playerInfo.health = Math.max(0, playerInfo.health - enemyDamage);
        //Log a resulting message to the console so we know that it worked.
        console.log(enemyInfo.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        //Check player health.
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!")
            break;
        } else {
            window.alert(playerInfo.name + " has " + playerInfo.health + " health reamaining.");
        }
        
    }
        
};

let startGame = function() {
    // Reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    for (i = 0;i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to robot gladiators! Round " + (i + 1));
            let pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
                let storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
    }   else {
            window.alert("You've lost your robot in battle. Game Over!")
            break;
        }
    }
    endGame();
};

let endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("Youve lost your robot in battle.");
    }
    let playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing robot gladiators! Come back soon.!");
    }
}

let shop = function() {
    let shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?");

    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerInfo.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // Increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerInfo.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("you did not pick a valid option, try again.");
            shop();
            break;
    }
};

let randomNumber = function(min, max) {
    let value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
};

let playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
};

let enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

//Start game when page loads
startGame();