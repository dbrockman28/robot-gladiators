// Game States
//"WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
//"LOSE" - Player robot's health is zero or less

let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// console.log(playerName, playerAttack, playerHealth);

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function(enemyName) {

    while(enemyHealth > 0 && playerHealth > 0) {
        let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //Confirm user wnats to skip.
            let confirmSkip = window.confirm("Are you sure you'd like to skip");
            //If yes, skip fight.
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
            //Subtract money from playerMoney for skipping.
                playerMoney = playerMoney - 10;
                console.log(playerName + "'s money", playerMoney);
                break;
            }
        }
        //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable.
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        //Check enemy's health.
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            //Award money for defeating enemy and exit loop
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " has " + enemyHealth + " health left.");
        }
        //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable.
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        //Check player health.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!")
            break;
        } else {
            window.alert(playerName + " has " + playerHealth + " health reamaining.");
        }
        
    }
        
};

let startGame = function() {
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (i = 0;i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to robot gladiators! Round " + (i + 1));
            let pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (i < enemyNames.length - 1 && playerHealth > 0) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
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
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // Increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack = playerAttack + 6;
                playermoney = playerMoney - 7;
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

//Start game when page loads
startGame();