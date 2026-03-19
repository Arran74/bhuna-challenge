const MC_QUESTIONS = [
["The word 'surged' suggests...","Power and speed"],
["The word 'crept' suggests...","Stealth"],
["The word 'blazed' suggests...","Intensity"],
["The word 'shattered' suggests...","Sudden break"],
["The word 'echoed' suggests...","Isolation"],
["The word 'rushed' suggests...","Urgency"],
["The word 'glared' suggests...","Anger"],
["The word 'trembled' suggests...","Fear"],
["The word 'hammered' suggests...","Force"],
["The word 'lingered' suggests...","Delay"]
]

// expand to 100 safely
for(let i=MC_QUESTIONS.length;i<100;i++){
let base = MC_QUESTIONS[i % 10]
MC_QUESTIONS.push([base[0] + " (variant "+i+")", base[1]])
}

// WRITTEN QUESTIONS
function buildSet(type){
let arr=[]
for(let i=1;i<=15;i++){
arr.push({
type:type,
text:`Extract ${i}: The atmosphere is tense and dramatic.`,
q:`${type}: Explain how the writer achieves this.`,
model:`The word 'tense' suggests intensity.`
})
}
return arr
}

const FAST_QUESTIONS = {
P1Q2: buildSet("Language"),
P1Q3: buildSet("Structure"),
P1Q4: buildSet("Evaluation"),
P2Q2: buildSet("Summary"),
P2Q3: buildSet("Language"),
P2Q4: buildSet("Comparison")
}

const EXAM_QUESTIONS = JSON.parse(JSON.stringify(FAST_QUESTIONS))
