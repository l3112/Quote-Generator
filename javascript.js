var quotes =[
"Why would the worlds governments be pretending the world is round when it isn\'t? What nonsense could they be hiding and why would they even bother?",
"IDEK what she's talking about and I don't think she does either. How are Mo\'nique and Queen Latifah not plus sized? Where is this debate happening?",
"orson welles was dunking on film twitter 45 years ago. truly a revolutionary. 9/10.",
"asked a customer if he had a MyPanera card and he told me a 'disreputable friend' of his stole all his rewards cards while he was in a year-long coma",
"Is there anything more insufferable than hearing commonwealth countries like Canada and the UK make fun of American injustice like the call is coming from inside the house girl",
"Overlord really isn\'t made for the GA. It\'s for a small niche audience who may or may not bother to catch it in theaters. It could be great but it's clearly not going to be what you\'d call a hit. Robin Hood would still be a big loser even if it was the only movie coming out all month long.",
"Lol by the way theyre dancing Spiderman is celebrating his CCIE, King T\'challa just got that CCNP TSHOOT out the way. Deadpool... barely passed his CCENT.",
"I stopped watching after S2 becuse it was so dumb,but literally anything from The Flash. They literally whip up life changing tech that would change the face of the Earth and society forever in like 5 minutes to beat up some bad guy and then never use it again. And they did it like every episode.",
"My response: If you are this reluctant to pay me a fair market wage, that just tells me you\'ll try to take advantage of me and my time at every turn.",
"Affirm: Everywhere I go I prosper. Everything I do always works out for me. I am attracting unconditional love, abundance, clarity, high-vibrational experiences, and sacred connections. I am thriving in every way. Things are becoming more clear for me. I celebrate my life.",
"Under the Council of High Intelligence and Educational Findings (C.H.I.E.F.) this post will be placed in the category of `Not It` until further notice. Thank you for your patience.",
"A sea lion in a viral video was probably just messing around with its food. Researchers say sea lions don\'t care enough about humans to want to slap one of us with an octopus.",
"so much oscar bait gets released Dec 25th but i can't comprehend people who are seeing it then. i wanna know the life of the man who\'s gonna go see the dick cheney movie on christmas day.",
"I really thought he was going to say `I\'d open all my windows and doors and hope he comes and kills me` because I\'m so used to this millennial depression humor that I was REALLY taken aback by him saying he\'s ready to take him down, lol. ",
"Every tech company I\'ve worked for and most others in my city either have gyms on the premises, offer gym memberships as an employee benefit or have workout classes at least once a week in the office during work hours. Sitting at a computer and coding all day is horrible for your health. Smart companies realize that healthy employees are better employees. This is obviously not a smart company.",
"That\'s one of my top reasons for flying at night. The stars are so beautiful from your window and then, you get to see the sunrise.",
"imagine how evil and demented you have to be for messages about equality and diversity to make you angry",
"The working class and the employing class have nothing in common.",
"For me it\'s the part where Doom has Richards in a chokehold and is lifting him up. That\'s the least effective way possible to fight a man with stretching powers, and it was the climax of the fight. Absolutely amazing.",
"How many times have I wanted to move my tank and not had wikihow, man what a lifesaver this is",
]
//quote collecting is my passion
// there's 21
function newQuote(){
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
