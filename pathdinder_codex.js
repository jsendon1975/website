function getTerm(){
	
	var term_data = {
		'Banded mail': {'Type': 'Heavy', 'Cost': '250 gp', 'Armor Class Bonus': '+7', 'Max DEX Bonus': '+1', 'Armor Check Penalty': '-6', 'Arcane Spell Failure': '35%', 'Speed (30 ft.)': '20 ft.', 'Speed (20 ft.)': '15 ft.', 'Weight': '35 lbs.'},
		'Breastplate': {'Type': 'Medium', 'Cost': '200 gp', 'Armor Class Bonus': '+6', 'Max DEX Bonus': '+3', 'Armor Check Penalty': '-4', 'Arcane Spell Failure': '25%', 'Speed (30 ft.)': '20 ft.', 'Speed (20 ft.)': '15 ft.', 'Weight': '30 lbs.'},
		'Chain shirt': {'Type': 'Light', 'Cost': '100 gp', 'Armor Class Bonus': '+4', 'Max DEX Bonus': '+4', 'Armor Check Penalty': '-2', 'Arcane Spell Failure': '20%', 'Speed (30 ft.)': '30 ft.', 'Speed (20 ft.)': '20 ft.', 'Weight': '25 lbs.'},
		'Chainmail': {'Type': 'Medium', 'Cost': '250 gp', 'Armor Class Bonus': '+6', 'Max DEX Bonus': '+2', 'Armor Check Penalty': '-5', 'Arcane Spell Failure': '30%', 'Speed (30 ft.)': '20 ft.', 'Speed (20 ft.)': '15 ft.', 'Weight': '40 lbs.'},
		'Full plate': {'Type': 'Heavy', 'Cost': '1,500 gp', 'Armor Class Bonus': '+9', 'Max DEX Bonus': '+1', 'Armor Check Penalty': '-6', 'Arcane Spell Failure': '35%', 'Speed (30 ft.)': '20 ft.', 'Speed (20 ft.)': '15 ft.', 'Weight': '50 lbs.'},
		'Half-plate': {'Type': 'Heavy', 'Cost': '600 gp', 'Armor Class Bonus': '+8', 'Max DEX Bonus': '0', 'Armor Check Penalty': '-7', 'Arcane Spell Failure': '40%', 'Speed (30 ft.)': '20 ft.', 'Speed (20 ft.)': '15 ft.', 'Weight': '50 lbs.'},
		'Hide armor': {'Type': 'Medium', 'Cost': '15 gp', 'Armor Class Bonus': '+4', 'Max DEX Bonus': '+4', 'Armor Check Penalty': '-3', 'Arcane Spell Failure': '20%', 'Speed (30 ft.)': '20 ft.', 'Speed (20 ft.)': '15 ft.', 'Weight': '25 lbs.'},
		'Leather armor': {'Type': 'Light', 'Cost': '10 gp', 'Armor Class Bonus': '+2', 'Max DEX Bonus': '+6', 'Armor Check Penalty': '0', 'Arcane Spell Failure': '10%', 'Speed (30 ft.)': '30 ft.', 'Speed (20 ft.)': '20 ft.', 'Weight': '15 lbs.'},
		'Longsword': {'Type': 'Martial', 'Handling': '1H', 'Cost': '15 gp', 'Damage (S)': '1d6', 'Damage (M)': '1d8', 'Critical': '19-20/x2', 'Range': 'Melee','Damage Type':'Slashing','Special': 'N/A', 'Weight':'4 lbs.'},
		'Padded armor': {'Type': 'Light', 'Cost': '5 gp', 'Armor Class Bonus': '+1', 'Max DEX Bonus': '+8', 'Armor Check Penalty': '0', 'Arcane Spell Failure': '5%', 'Speed (30 ft.)': '30 ft.', 'Speed (20 ft.)': '20 ft.', 'Weight': '10 lbs.'},
		'Scale mail': {'Type': 'Medium', 'Cost': '50 gp', 'Armor Class Bonus': '+5', 'Max DEX Bonus': '+3', 'Armor Check Penalty': '-4', 'Arcane Spell Failure': '25%', 'Speed (30 ft.)': '20 ft.', 'Speed (20 ft.)': '15 ft.', 'Weight': '30 lbs.'},
		'Splint mail': {'Type': 'Heavy', 'Cost': '200 gp', 'Armor Class Bonus': '+7', 'Max DEX Bonus': '0', 'Armor Check Penalty': '-7', 'Arcane Spell Failure': '40%', 'Speed (30 ft.)': '20 ft.', 'Speed (20 ft.)': '15 ft.', 'Weight': '45 lbs.'},
		'Studded leather armor': {'Type': 'Light', 'Cost': '25 gp', 'Armor Class Bonus': '+3', 'Max DEX Bonus': '+5', 'Armor Check Penalty': '-1', 'Arcane Spell Failure': '15%', 'Speed (30 ft.)': '30 ft.', 'Speed (20 ft.)': '20 ft.', 'Weight': '20 lbs.'}
	};
	
	var term_text = {
		'Longsword': 'This sword is about 3.5 feet in length.',
		'Padded armor': 'Little more than heavy,  quilted cloth,  this armor provides only the most basic protection.', 
		'Leather armor': 'Leather armor is made up of pieces of hard boiled leather carefully sewn together.', 
		'Studded leather armor': 'Similar to leather armor,  this suit is reinforced with small metal studs.', 
		'Chain shirt': 'Covering the torso,  this shirt is made up of thousands of interlocking metal rings.', 
		'Hide armor': 'Hide armor is made up of the tanned and preserved skin of any thick-hided beast.', 
		'Scale mail': 'Scale mail is made up of dozens of interlocking metal plates. The suit includes gauntlets.', 
		'Chainmail': 'Unlike the chain shirt,  chainmail covers the legs and arms of the wearer. The suit includes gauntlets.', 
		'Breastplate': 'Covering only the torso,  the breastplate is made up of a single piece of sculpted metal.', 
		'Splint mail': 'Splint mail is made up of leather strips. The suit includes gauntlets.', 
		'Banded mail': 'Banded mail is made up of overlapping strips of metal,  fastened to a leather backing. The suit includes gauntlets.', 
		'Half-plate': 'Combining elements of full plate and chainmail,  half-plate includes gauntlets and a helm.', 
		'Full plate': 'This metal suit includes gauntlets,  heavy leather boots,  a visored helmet,  and a thick layer of padding that is worn underneath the armor. Each suit of full plate must be individually fitted to its owner by a master armorsmith,  although a captured suit can be resized to fit its new owner at a cost of 200-800 gold pieces.'
	}
	
	var images = {
		'Longsword': 'full_plate',
		'Studded leather armor': 'studded_leather_armor',
		'Breastplate': 'breastplate',
		'Banded mail': 'banded_mail',
		'Full plate': 'full_plate'
	}
	
	var term_queried = document.getElementById('textbox').value;
	var image_queried = images[term_queried];
	var stats_queried = '';
	for (var i in term_data[term_queried]){
		stats_queried += [i] + ': ' + term_data[term_queried][i] + '<br>';
	}
	var text_queried = term_text[term_queried];
	
	document.getElementById('term').innerHTML=term_queried;
	document.getElementById('image').innerHTML='<img id="png" src="images/'+image_queried+'.png">';
	document.getElementById('stats').innerHTML=stats_queried;
	document.getElementById('text').innerHTML=text_queried;
}

