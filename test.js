var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';

/*
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.
 HINT: the 'split' method on String will be useful.
*/

// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)

// TODO: part #2: use a while or do-while loop to replace the words in sentence 2
// with 'chirp' (10 points)

sentence1 = sentence1.split(' ');

for(i = 0; i < 3; i++){
	if(i === 2){
	sentence1[i] = 'chirp.';
	}
	else {
	sentence1[i] = 'chirp';
	}
}

sentence1 = sentence1.join(' ');

console.log(sentence1);