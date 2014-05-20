// We are naming Mario a function and can use it over and over
// Mario currently has no parameters
function Mario () {
  // "this" refers to Mario and we randomly chose "hp" to
  // be "hit point" and gave the function Mario a total "hp" of 15
  this.hp = 15;
  // basically reads "Marios.primaryAttack" is also going to be function
  // but we are giving the attack function a parameter of "target"
  // I am guessing that "target" refers to the enemy
  this.primaryAttack = function(target) {
    // Mario starts with a total hp of 15. We defined that above
    // but this function takes 2hp away from the enemy.
    // I believe it reads like this... 
    // "Computer get total hitpoints of the enemy/target.
    // When I run primary attack then subtract 2 hitpoints from
    // the enemy/target's total hitpoints."
    target.hp = target.hp - 2;
  }
  // This is the second attack function we are giving Mario.
  // We use this so we dont have to say Mario again and so that
  // specialAttack has a parent. We give this function a parameter
  // of "target" because we want to tell the function what to mutate.
  this.specialAttack = function(target) {
    // We give the function "specialAttack" a condition because its special and we are interesting
    // the condition states that if the enemy is spikey then our special attack is useless and only renders 0hp
    // else if the target/enemy is NOT spikey then the function argument states the impact of the function
    // then renders the target/enemy - 20 which affects their hitpoints
    // ??  not sure what element "this" is referring to here and cant tell you what target.spikey is (object or function or???)
    if (target.spikey == true) {
      this.hp = 0;
    } else {
      target.hp = target.hp - 20;
    }
  }
}

// Works the same as our Mario charachter
function MightyMouse () {
  this.hp = 20;

  this.primaryAttack = function(target) {
    target.hp = target.hp - 1;
  }

  this.specialAttack = function(target) {
    target.hp = target.hp - 6;
  }
}

// Works the same as our Mario charachter
function Miagi () {
  this.hp = 18;

  this.primaryAttack = function(target) {
    target.hp = target.hp - 3;
  }

  this.specialAttack = function(target) {
    target.hp = target.hp - 5;
  }
}


// Here we are creating the Enemy
// because enemy does stuff we know that it has to be a function
// and not just an object literall?
// Here we declare the function into existence with the name Enemy
// Enemy does NOT have to be capitalized. This is just for us.
// Enemy is just a function not a constructor becasue there is no "new" word
// We give our new enemy function a parameter called level
function Enemy (level) {
  // this is a function so it HAS to have an argument
  // that argument is level * 10
  // This.hp is declaring our enemy's health * the level
  // Our levels are declared later by the variable enemyLevel
  this.hp = level * 10;
  // Since primaryAttack is nested under the function Enemy
  // this.primaryAttack then refers to the parent Enemy
  // primaryAttack is also a function with a target parameter
  // ?????? how can Enemy and our charachters all have target? I DUNNO!!!
this.primaryAttack = function(target) {
  // we then define our paramater target and say that
  // that when this primaryAttack function is used the enemy will have a hp power
  // that strengthens as the level is upped
  // i dont know how the level is upped though ???????
  target.hp = target.hp - (10 + level/4);
}
  // another function here for the enemy special attack
  // this one is different though
  // I know what it does but dont know why?
  // SO it basically takes 10 from the good guy and absorbs 10 for the bac guy
  // How are target.hp and this.hp being distinguished ?????????
  this.specialAttack = function(target) {
    target.hp = target.hp - 10;
    this.hp = this.hp + 10;
  }
}

// We are declaring enemyLevel to be a variable and are defineing
// NOT giving it a value of 1
var enemyLevel = 1;
// the $ sign here is NOT ajax but is jQuery a subset of JS?
// when we see the $ sign then we know to reference the $parameter in our HTML ??? Always?
// choose-mario is a div class in HTML and we are giving the whole div a click function
// from what I read .click is a jQuery event or trigger.
// .click will always have a function immediately attached to it by nature
$('.choose-mario').click(function(){
  // once the choose-mario div is clicked
  // then the bottome two constructors are declared
  // we declare a mario character to be either chosen or created ???? not sure the difference?
  // and at the same time we also declare a new enemy to be put into place
  // enemy has a parameter of enemyLevel defined above
  // Again, I am not sure how that level changes??
  // because we are using constructors to create the below 
  // we have to use an UPPERCASE LETTER. MUST!
  // I believe the characters are automatically born as functions
  // because constructors are never objects only always functions (but functions are objects???)
  // or if they are born as a function. I dont understand Mutation
  player = new Mario();
  enemy = new Enemy(enemyLevel)
  // We created choices as a div in HTML for visual purposes
  // and so that we can see our charachter buttons
  // the $sign tells us we are using jQuery so we need to look to our HTML
  // .remove is jQuery and is under the category DOM removal with a subclass of Manipulation
  // this .remove command permanently hides the choices div?
  // after the .choices div is removed we call battle-menu again from the HTML and CSS (notice $)
  // .addClass refers to the CSS is a "Class Attribute" and falls under Manipulation 
  // the battle menu only shows up now when the div choose-mario is clicked because
  // addClass has more to do with CSS than HTML. And in the CSS we have the display
  // set to display none and then on active (which is the parameter? for .addclass)
  // Sass is used to display the div battle-menu as block
  $('.choices').remove();
  $('.battle-menu').addClass('active');
  // the code for the next two lines is being writtne below.
  // the render function has a parameter where info
  // eventually gets passed and updated. See more below
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
})

// Should works the same as our choose-mario div
$('.choose-mightymouse').click(function(){
  player = new MightyMouse();
  enemy = new Enemy(enemyLevel)

  $('.choices').remove();
  $('.battle-menu').addClass('active');

  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
})

// Should works the same as our choose-mario div
$('.choose-miagi').click(function(){
  player = new Miagi();
  enemy = new Enemy(enemyLevel)

  $('.choices').remove();
  $('.battle-menu').addClass('active');

  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
})

// We are declaring this function to have a name "renderPlayerInfo"
// We give it a parameter of (player) which I believe is NOT just
// for us see as a "new thanksgiving dinner" parameter. This one is
// I believe is referring to the actual player parameter referred up above
// in the object constructor.  We are going to pass information to player?
// Not sure why player is the parameter here?
function renderPlayerInfo (player) {
 // We are using a condition to render or pass the info we want player to have or show?
 // Why is the player paremeter even necessary if below we have player.hp?
 // This if statment basically reads when the player hitpoints are less than 1
 // then run the function showGameOver also defined below.
 // BUT if the player still has hitpoints left then show the points.
 // The $ says jQuery and we look to the HTML to the div player- info.
 // Oddly there is no CSS here and we are using the HTML thing
 // .HTML is referred to as DOM insertion inside. It falls under Manipulation and is an Attribute.
 // Basically it adds text to your Div through jQuery
 // So it reads... $('.div').onlytext(function???)
 // Do these parentheses indicate thats its going to run a function?
 // I believ that player.hp is an object. It has never been defined independently but
 // rather is just two object placed together???  I'm confused here??
 if (player.hp < 1) {
    showGameOver()
  } else {
    $('.player-info').html("Player has " + player.hp + "hp")
  }
}

// The below is a function to render the enemy hitpoints on screen
// Again not sure if the parameter enemy is needed. 
// This works the same as the player function render info works 
// This condition is a little bit different in that even though we are using the 
// html thingy (which does away with the css and only renders the HTML) we are using
// a span class to still style the words "Enemy has dead". Clever 
function renderEnemyInfo (enemy) {
  if (enemy.hp < 1) {
    $('.enemy-info').html("<span class='red'>Enemy has dead</span>")
  } else {
    $('.enemy-info').html("Enemy has " + enemy.hp + "hp")
  }
}

// this click is used to define what happens when the primary attack is used.
// the $ sign says look at html I am jQuery. We then see the div primary
// primary is the second half of a div class name for button (clever pre-factoring)
// .click is defined as a mous click event. and is given a function with no parameter.
// So the first two lines of code read.... when the primary attack button
// for the human player is clicked...
// then we see the $ sign and back to the HTML to the status div where we only
// log html upon the click becasue we are using .click and it say "you attack"
// the player info enemy info are then rendered again to show the user the current standing
// the function triggerEnemyAttack with the parameter (player) is then triggered.
// This reads... run the function attack on the player after your done with all the above.
// This last function is defined down below.
$('.primary').click(function(){
  player.primaryAttack(enemy);
  $('.status').html('You attack!')
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
  triggerEnemyAttack(player)
})

// This function works exactly as the one above does  
$('.special').click(function(){
  player.specialAttack(enemy);
  renderPlayerInfo(player);
  renderEnemyInfo(enemy);
  triggerEnemyAttack()
})

// Here we name a function and declare it into existence. 
// the function has no parameter and is really here to serve the purpose
// of displaying "game over" on the screen when it is called from up above
// based on the conditions written above. 
// We see the $ again so we know its jQuery and we see.game-over is a div and
// the div can be styled since we used the .addClass and not .html
// .active is passed in as a part of this function (not sure if yo call that a parameter??)
// when active is passed in is changes the display property value from none to block so that 
// the div becomes visible to all. Also a z-index of 10 is set so that the page takes priority 
// over all displayed on the page (displays in front of) 
function showGameOver() {
  $('.game-over').addClass('active')
}
 
// here we name a fucntion that will define the enemy attack
// we use a name that will make sense to humans
// and no parameters are set
function triggerEnemyAttack () {
  // a new function is called setTimeout is declared in order to create a pause
  // after the user clicks their chosen attack method. 
  // an if statement is used with a native js math code that spits out a random number.
  // I am not sure at all how this function works but it basically reads... If the random
  // number * 10 > 6 then it will run the enemy predefined special Attack and will apply
  // the damages to the human player.
  // IF the special attack is run then the computer will show "enemy special attack" because
  // jQuery is using .html to print the text in it's given parameter to the the status div.   
  setTimeout(function(){
    if (Math.floor(Math.random() * 10 ) > 6){
      enemy.specialAttack(player);   
      $('.status').html('Enemy special attack!')
    // if the random answer to the problem above is actually less than 6 than the computer will
    // run the else statement which will use the primary attack instead and use the same 
    // .html trigger thingy to print its content to its related div, status.     
    } else {
      enemy.primaryAttack(player);   
      $('.status').html('Enemy attack!')
    }
 // after the above code is run, the player info will render. This was defined up above and is just
 // being used over and over. 
 // the ,2000 = 2seconds and is native js code. It is placed almost outside verything else in this function
 // but before the last curly brace so that the timing delay applies to the whole enemy attack.
    renderPlayerInfo(player);
    renderEnemyInfo(enemy);
  }, 2000)
}