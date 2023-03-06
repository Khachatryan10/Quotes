let paragraph1 = document.getElementById('prg1')
let button0 = document.getElementById('button0')
let button1 = document.getElementById('button1');


let sentences = ['" Be yourself; everyone else is already taken. " <br/><br/> ―  Oscar Wilde',
'" I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best. "<br/><br/> ― Marilyn Monroe',
'" Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. "<br/><br/> ― Albert Einstein',
'" You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth. " <br/><br/> ― William W. Purkey',
'" You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. " <br/><br/> ― Dr. Seuss',
'" In three words I can sum up everything I\'ve learned about life: it goes on." <br/><br/> ― Robert Frost',
'" Without music, life would be a mistake. " <br/><br/> ― Friedrich Nietzsche, Twilight of the Idols',
'" To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. " <br/><br/> ― Ralph Waldo Emerson',
'" Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. " <br/><br/>  ― H. Jackson Brown Jr., P.S. I Love You',
'" Here\'s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They\'re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can\'t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do. " <br/><br/> ― Rob Siltanen',
'" As parents in private life teach wisdom to their children, so do poets in public life to their cities. " <br/><br/>  —  Philo',
'" But you say, “by obedience to another he loses his liberty.” How then is it that children suffer the orders of their father and mother, and pupils the injunctions of their instructors? " <br/><br/>  —  Philo',
'" Quality is not an act, it is a habit. " <br/><br/>  — Aristotle',
'" Pleasure in the job puts perfection in the work. " <br/><br/>  — Aristotle',
'" He who is contented is rich. "<br/><br/>  — Lao Tzu',
'" Two things awe me most, the starry sky above me and the moral law within me. "<br/><br/>  —  Immanuel Kant',
'" Morality is not the doctrine of how we may make ourselves happy, but how we may make ourselves worthy of happiness. " <br/><br/>  — Immanuel Kant',
'" Intuition and concepts constitute... the elements of all our knowledge, so that neither concepts without an intuition in some way corresponding to them, nor intuition without concepts, can yield knowledge. " <br/><br/>  — Immanuel Kant',
'" One must still have chaos in oneself to be able to give birth to a dancing star. "<br/><br/>  — Friedrich Nietzsche',
'" In every real man a child is hidden that wants to play. "<br/><br/>  — Friedrich Nietzsche',
]


button0.addEventListener("click",()=>{

        navigator.clipboard.writeText(paragraph1.textContent)
        button0.innerHTML = "Copied";
        button0.style.backgroundColor = "rgb(3, 41, 154)";
        button0.style.color = "White";

setTimeout(()=>{
        button0.innerHTML = "Copy";
        button0.style.backgroundColor = "";
        button0.style.color = "";
},2000)

} )


button1.addEventListener("click", ()=>{
button0.style.display = "block";
button0.innerHTML = "Copy";
button0.style.backgroundColor = ""
button0.style.color = ""
paragraph1.style.fontSize = "16px";
paragraph1.style.fontFamily = "papyrus";
paragraph1.style.paddingTop = "2px";
paragraph1.innerHTML = sentences[Math.floor(Math.random() * sentences.length)];

})


