
window.alert('Welcome! Please join in the game of DEATH! ARE U READY TO DIE?')

/*let name = window.prompt('Please enter your name first')
document.getElementById("userName").innerHTML = "Welcome to the area, " + name;*/



//object hero list

let peterGriffin = {
	name: 'Peter Griffin',
	hp: 4,
	pic: 'peterGriffin.png',
	score:0
};

let megGriffin = {
	name: 'Meg Griffin',
	hp: 3,
	pic: 'megGriffin.png',
	score:0
};

let sinchan = {
	name: 'Sinchan',
	hp: 1,
	pic: 'sinchan.png',
	score:0
};

let stanSmith = {
	name: 'Stan Smith',
	hp: 5,
	pic: 'stanSmith.png',
	score:0
};

let homer = {
	name: 'Homer',
	hp: 4,
	pic: 'homer.png',
	score:0
};


let heroes = [peterGriffin, megGriffin, sinchan, stanSmith, homer]
let playerHero={}
let comHero={}

let select = document.getElementById("heroes");


for(let i = 0; i < heroes.length; i++) {
	
    let choose = document.createElement("option");
    choose.textContent = heroes[i].name;
    choose.value = heroes[i].pic;
    select.appendChild(choose);
}


function displayImage(elem) {
    let image = document.getElementById("changeImage");
    image.src = "pic/" + elem.value;        
  }
  


function assignHero(pil) // assign hero sebagai object
{
	for(let i = 0; i < heroes.length; i++) 
		{
			if (heroes[i].pic === pil)
			{
				playerHero = heroes[i];
			}		
		}
	
}

function assignComHero(){
	
	 let flag = true
	 
	 while (flag===true)
	 {
	 let random = Math.floor(Math.random() * 10);
	 comHero = heroes[random %heroes.length];
	 if (playerHero !== comHero)
		 {
			 flag = false;
		 }
	 }
}

// display hero com

function displayHC()
{
	document.getElementById("playerHP").innerHTML  = "";
	for (let i = 0; i < playerHero.hp; i++) {
        let image = document.createElement("img");
        image.setAttribute("src", "pic/heart.png");
		image.setAttribute("width", "30px");
        document.getElementById("playerHP").appendChild(image);
    }
	
	document.getElementById("playerPic").src  = "pic/" + playerHero.pic
	document.getElementById("playerName").innerHTML  = "Name : " + playerHero.name
	document.getElementById("playerScore").innerHTML  = "Score : " + playerHero.score
	
	
	document.getElementById("comHP").innerHTML  = "";
	for (let j = 0; j < comHero.hp; j++) {
        let image = document.createElement("img");
        image.setAttribute("src", "pic/heart.png");
		image.setAttribute("width", "30px");
        document.getElementById("comHP").appendChild(image);
    }
	
	document.getElementById("comPic").src  = "pic/" + comHero.pic
	document.getElementById("comName").innerHTML  = "Name : " + comHero.name
	document.getElementById("comScore").innerHTML  = "Score : " + comHero.score
}


// Function Clear Page
function go() {
	document.getElementById("playAudio").src = "audio/openingSound4.mp3";
	document.getElementById("part1").style.display = "none";
	document.getElementById("player").style.display = "block";
	document.getElementById("computer").style.display = "block";
	document.getElementById("vs").style.display = "block";
	
	let player = document.getElementById("player");
	let pilihan = document.getElementById("heroes");
	
	
	
	assignHero(pilihan.value) // assign hero as object	
	assignComHero();// assign com as object
	
	displayHC()
	
}

function fight() {
	
	if (playerHero.hp === 0)
		{
			window.alert("Congratulation! YOU ARE NOOB!!");
			
		}
	else if (comHero.hp === 0)
		{
			window.alert("You WIN!!");
		}
	else {
	document.getElementById("vs").style.display = "none";
	document.getElementById("jankenpon").style.display = "block";
	
	
	
	let timeleft = 3;
	let downloadTimer = setInterval(function(){
		if(timeleft <= 0){
			clearInterval(downloadTimer);
			
			checkWinner();
			} 
		else {
			document.getElementById("countdown").innerHTML = timeleft;
			}
				timeleft--;
			}, 1000);
	}
}

function checkWinner() {
	
	let suit = document.getElementsByName("suit");
	//console.log(suit)
	let suitUser;
	for(let i = 0; i < suit.length; i++){
		if(suit[i].checked){
			suitUser = suit[i].value;
		}
	}
	
	
	let suitCom = '';
	let hasil ='';
	
	let random = Math.floor(Math.random() * 10);
	
	if(random %3 === 0)
		{
			suitCom = 'choki';
		}
	else if (random %3 === 1)
		{
			suitCom = 'pa';
		}
	else
		{
			suitCom = 'gu';
		}
		
	if(suitUser === suitCom)
		{
			hasil = 'Hasilnya SERI!'
		}
	else 
		{
			if(suitUser === 'choki')
				{
					if (suitCom === 'pa')
						{
							hasil = 'User MENANG';
						}
					else
						{
							hasil = 'User KALAH';
						}
				}
			else if(suitUser === 'pa')
				{
					if(suitCom === 'gu')
						{
							hasil = 'User MENANG';
						}
					else
						{
							hasil = 'User KALAH';
						}
				}
			else if (suitUser === 'gu')
				{
					if (suitCom === 'choki')
						{
							hasil = 'User MENANG';
						}
					else
						{
							hasil = 'User KALAH';
						}
				}
		}
	if (hasil === 'User MENANG')
		{
			playerHero.score += 100;
			comHero.hp--;
		}
	else if (hasil === 'User KALAH')
		{
			comHero.score += 100;
			playerHero.hp--;
		}
	window.alert("User : " + suitUser + "\nCom : "+ suitCom + "\nHasil : " + hasil);
		
	displayHC();
	document.getElementById("vs").style.display = "block";
	document.getElementById("jankenpon").style.display = "none";
		
}








