// ═══════════════════════════════════════════════════════
// COMICAL CONTENT
// ═══════════════════════════════════════════════════════

const comments = {
    skeleton: [
        '"Sweet Jesus! I\'ve seen more meat on a butcher\'s pencil!"',
        '"The wind outside is takin\' bets on carryin\' ya off!"',
        '"Boy, you\'re thinner than a snake\'s suspenders!"',
        '"Even the undertaker said you ain\'t worth the wood!"',
        '"A tumbleweed just called ya \'lightweight.\'"',
        '"Your shadow weighs more than you do, partner."',
        '"The vultures flew right past — said you ain\'t worth the stop."',
        '"One good sneeze and you\'ll be in the next county!"'
    ],
    slim: [
        '"Built like a bullwhip — fast, mean, and dangerous!"',
        '"Your horse just let out a sigh of relief!"',
        '"Slicker than a greased pig at the county fair!"',
        '"The Sheriff\'s gonna have a hell of a time catchin\' YOU!"',
        '"Quick as a hiccup and twice as surprising!"',
        '"Lean as a coyote in winter — perfect for outlawin\'!"',
        '"You could slip through a jailhouse bar sideways!"',
        '"Agile as a jackrabbit on a hot griddle!"'
    ],
    average: [
        '"Well, ain\'t you just... perfectly ordinary."',
        '"The scale yawned. That\'s how average you are."',
        '"Not too fat, not too thin — just... there."',
        '"Congratulations on bein\' completely forgettable!"',
        '"You\'re the human equivalent of room temperature water."',
        '"Your wanted poster would be... medium. In every way."',
        '"The Goldilocks of outlaws — boringly \'just right.\'"',
        '"Regular as a two-dollar watch. Nothin\' to report."'
    ],
    chonky: [
        '"The floorboards just filed a formal complaint!"',
        '"You\'ve clearly won every argument with supper!"',
        '"Your belt deserves a medal of bravery, partner."',
        '"When you sit around the campfire, you sit AROUND it!"',
        '"That poor horse of yours is organizin\' a union!"',
        '"Built for comfort, intimidation, AND blockin\' doorways!"',
        '"The \'all you can eat\' sign just burst into tears."',
        '"You don\'t cast a shadow — you cast a TERRITORY."'
    ],
    unit: [
        '"SWEET MOTHER OF MERCY! The scale is prayin\'!"',
        '"You don\'t need a horse — YOU ARE the transportation!"',
        '"Your wanted poster needs its own wagon to carry it!"',
        '"The earth itself trembles at yer footsteps!"',
        '"Legend says you once ate a whole buffalo. FOR A SNACK."',
        '"Scientists wanna study yer gravitational pull!"',
        '"You don\'t rob trains — trains pay YOU protection money!"',
        '"The scale just wrote its last will and testament."',
        '"ABSOLUTE UNIT! They\'re gonna need a bigger jail!"',
        '"Yer mass has been officially classified as a geological event!"'
    ]
};

const conditions = {
    skeleton: [
        "Pulse: More of a suggestion than a fact.",
        "Status: One strong breeze from meetin\' yer maker.",
        "Diagnosis: Mostly spirit, barely body.",
        "Vitals: Present, but clearly uncommitted."
    ],
    slim: [
        "Pulse: Quick as a rattlesnake's tongue!",
        "Status: Fit as a fiddle, sharp as a tack!",
        "Diagnosis: Built for speed, not comfort.",
        "Vitals: Primed and ready for trouble!"
    ],
    average: [
        "Pulse: Textbook boring. Congratulations.",
        "Status: The very definition of 'meh.'",
        "Diagnosis: Unremarkably, disappointingly healthy.",
        "Vitals: Nothin' to write home about. At all."
    ],
    chonky: [
        "Pulse: Workin' double shifts, no overtime pay.",
        "Status: Well-insulated for ALL seasons.",
        "Diagnosis: Yer organs are playin' a tight game of Tetris.",
        "Vitals: Strained but somehow still determined."
    ],
    unit: [
        "Pulse: The stethoscope surrendered.",
        "Status: YOU are the medical emergency.",
        "Diagnosis: Science itself is baffled.",
        "Vitals: Off EVERY chart we got!"
    ]
};

const diets = {
    skeleton: [
        "EAT. Anything. The table. The chair. ANYTHING.",
        "Ever tried food? Revolutionary concept. Look into it.",
        "Yer 'breatharian' diet ain't workin', partner.",
        "Prescription: Steak. Beans. Whiskey. Repeat forever."
    ],
    slim: [
        "An extra biscuit or twelve wouldn't hurt ya!",
        "Yer salad is lonely — introduce it to some bacon.",
        "Consider: PIE. It exists. Embrace it.",
        "Add some gravy to yer life. Doctor's orders."
    ],
    average: [
        "Keep doin'... whatever it is yer doin'.",
        "Adequate nutrition. The beige of meal plans.",
        "No changes needed. How tragically dull.",
        "You've achieved nutritional mediocrity. Bravo."
    ],
    chonky: [
        "Salads exist. I know — I was shocked too.",
        "Maybe walk PAST the saloon once in a while?",
        "Yer 'see food' diet needs serious revision.",
        "Portion control. Look it up. Then ignore it, probably."
    ],
    unit: [
        "The buffet done filed a restrainin' order on ya.",
        "Yer diet plan is just a guided restaurant tour.",
        "Prescription: Divine intervention. Lots of it.",
        "Even the beans are beggin' for mercy."
    ]
};

const horses = {
    skeleton: [
        '"*Happy neighing* Finally! A VACATION for my spine!"',
        '"Wait... where\'s the rest of ya, partner?"',
        '"I can carry you AND all yer worldly possessions!"',
        '"*Confused but extremely relieved horse noises*"'
    ],
    slim: [
        '"Now THIS is what I signed up for! Extra oats for both!"',
        '"We can outrun ANYTHING, partner! ANYTHING!"',
        '"*Approving snort* A sensible human! Finally!"',
        '"You and me? We\'re gonna be LEGENDS."'
    ],
    average: [
        '"Eh. I\'ve had worse. I\'ve had better. You\'re... fine."',
        '"*Indifferent horse shrug*"',
        '"No complaints. But no compliments neither."',
        '"You\'re... adequate. I guess that\'ll do."'
    ],
    chonky: [
        '"We need to have a SERIOUS conversation, partner."',
        '"*Visible horse sweating intensifies*"',
        '"My chiropractor sends his regards. And his bill."',
        '"Have you considered... walkin\'? Just a thought."'
    ],
    unit: [
        '"I QUIT. Effective immediately." *walks away*',
        '"I\'m becomin\' a cow. Better hours. Goodbye forever."',
        '"*Horse has left the territory*"',
        '"You don\'t need a horse. YOU are the transportation."'
    ]
};

// ═══════════════════════════════════════════════════════
// FUNCTIONS
// ═══════════════════════════════════════════════════════

function getCategory(weight) {
    if (weight < 100) return { key: 'skeleton', name: 'BONES McGEE', icon: '💀', bounty: 5 };
    if (weight < 140) return { key: 'slim', name: 'SLIM PICKENS', icon: '🏃', bounty: 75 };
    if (weight < 180) return { key: 'average', name: 'REGULAR JOE', icon: '⚖️', bounty: 150 };
    if (weight < 230) return { key: 'chonky', name: 'BIG FELLA', icon: '🐻', bounty: 400 };
    return { key: 'unit', name: 'ABSOLUTE UNIT', icon: '🦬', bounty: 1000 };
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getStats(weight, cat) {
    let c, b, d, w;
    switch(cat.key) {
        case 'skeleton': c = weight * 28; b = Math.ceil(weight/4); d = 'LOW'; w = Math.floor(weight/18); break;
        case 'slim': c = weight * 24; b = Math.ceil(weight/6); d = 'MED'; w = Math.floor(weight/14); break;
        case 'average': c = weight * 20; b = Math.ceil(weight/8); d = 'MED'; w = Math.floor(weight/11); break;
        case 'chonky': c = weight * 16; b = Math.ceil(weight/10); d = 'HIGH'; w = Math.floor(weight/8); break;
        default: c = weight * 12; b = Math.ceil(weight/12); d = 'MAX!'; w = Math.floor(weight/5);
    }
    return { cal: Math.floor(c), beans: b, danger: d, whiskey: w };
}

function animateNum(el, start, end, duration) {
    let startT = null;
    function step(t) {
        if (!startT) startT = t;
        const p = Math.min((t - startT) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.floor(ease * (end - start) + start)).padStart(3, '0');
        if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// ═══════════════════════════════════════════════════════
// SHOW SCALE
// ═══════════════════════════════════════════════════════

function showScale(data) {
    const container = document.getElementById('weightScale');
    const slipHeader = document.getElementById('slipHeader');
    const stamp = document.getElementById('officialStamp');
    const dateDisplay = document.getElementById('dateDisplay');
    
    container.classList.add('active');
    
    // Show/hide slip elements
    if (data.isSlip) {
        slipHeader.classList.add('visible');
        stamp.classList.add('visible');
    } else {
        slipHeader.classList.remove('visible');
        stamp.classList.remove('visible');
    }
    
    // Date display
    if (data.date) {
        dateDisplay.textContent = 'Recorded: ' + data.date;
    } else {
        dateDisplay.textContent = 'Est. 1872';
    }

    // Elements
    const els = {
        name: document.getElementById('patientName'),
        weight: document.getElementById('weightValue'),
        unit: document.getElementById('weightUnit'),
        needle: document.getElementById('needle'),
        verdictBox: document.getElementById('verdictBox'),
        verdictIcon: document.getElementById('verdictIcon'),
        verdictTitle: document.getElementById('verdictTitle'),
        bounty: document.getElementById('bountyValue'),
        message: document.getElementById('scaleMessage'),
        condition: document.getElementById('noteCondition'),
        diet: document.getElementById('noteDiet'),
        horse: document.getElementById('noteHorse'),
        cal: document.getElementById('statCal'),
        beans: document.getElementById('statBeans'),
        danger: document.getElementById('statDanger'),
        whiskey: document.getElementById('statWhiskey')
    };

    // Set data
    els.name.textContent = data.playerName.toUpperCase();
    els.unit.textContent = data.unit.toUpperCase();

    // Get category
    const cat = getCategory(data.weight);
    const stats = getStats(data.weight, cat);

    // Animate weight
    if (data.isSlip) {
        // Instant display for slip
        els.weight.textContent = String(data.weight).padStart(3, '0');
        
        // Instant needle
        const rot = -90 + (Math.min(data.weight, 300) / 300) * 180;
        els.needle.style.transition = 'none';
        els.needle.style.transform = `rotate(${rot}deg)`;
        
        // Instant content
        updateContent();
    } else {
        // Animated for scale
        animateNum(els.weight, 0, data.weight, 2000);
        
        // Animated needle
        const rot = -90 + (Math.min(data.weight, 300) / 300) * 180;
        els.needle.style.transition = 'transform 2.2s cubic-bezier(0.68, -0.3, 0.32, 1.25)';
        setTimeout(() => {
            els.needle.style.transform = `rotate(${rot}deg)`;
        }, 150);
        
        // Delayed content
        setTimeout(updateContent, 2100);
    }

    function updateContent() {
        els.verdictBox.className = 'verdict-box ' + cat.key;
        els.verdictIcon.textContent = cat.icon;
        els.verdictTitle.textContent = cat.name;
        els.bounty.textContent = '$' + cat.bounty.toLocaleString();

        els.message.textContent = getRandom(comments[cat.key]);
        els.condition.textContent = getRandom(conditions[cat.key]);
        els.diet.textContent = getRandom(diets[cat.key]);
        els.horse.textContent = getRandom(horses[cat.key]);

        els.cal.textContent = stats.cal;
        els.beans.textContent = stats.beans;
        els.danger.textContent = stats.danger;
        els.whiskey.textContent = stats.whiskey;
    }
}

// ═══════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════

window.addEventListener('message', function(e) {
    if (e.data.action === 'showWeight') {
        showScale(e.data);
    }
});

document.getElementById('closeBtn').addEventListener('click', closeUI);
document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') closeUI();
});

function closeUI() {
    const container = document.getElementById('weightScale');
    container.classList.remove('active');
    
    // Reset
    document.getElementById('needle').style.transform = 'rotate(-90deg)';
    document.getElementById('weightValue').textContent = '000';
    document.getElementById('verdictBox').className = 'verdict-box';
    document.getElementById('slipHeader').classList.remove('visible');
    document.getElementById('officialStamp').classList.remove('visible');

    fetch(`https://${GetParentResourceName()}/closeUI`, {
        method: 'POST',
        body: JSON.stringify({})
    });
}