/*jslint node: true */
"use strict";

// Seed math

exports.random = x => {
    return x * Math.random();
};

exports.randomAngle = () => {
    return Math.PI * 2 * Math.random();
};

exports.randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
};

exports.irandom = i => {
    let max = Math.floor(i);
    return Math.floor(Math.random() * (max + 1)); //Inclusive
};

exports.irandomRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};

exports.gauss = (mean, deviation) => {
    let x1, x2, w;
    do {
        x1 = 2*Math.random() - 1;
        x2 = 2*Math.random() - 1;
        w = x1 * x1 + x2 * x2;
    } while (0 == w || w >= 1);

    w = Math.sqrt(-2 * Math.log(w) / w);
    return mean + deviation * x1 * w;
};

exports.gaussInverse = (min, max, clustering) => {
    let range = max - min;
    let output = exports.gauss(0, range / clustering);

    while (output < 0) {
        output += range;
    }
    
    while (output > range) {
        output -= range;
    }
    
    return output + min;
};

exports.gaussRing = (radius, clustering) => {
    let r = exports.random(Math.PI * 2);
    let d = exports.gauss(radius, radius*clustering);
    return {
        x: d * Math.cos(r),
        y: d * Math.sin(r),
    };
};

exports.chance = prob => {
    return exports.random(1) < prob;
};

exports.dice = sides => {
    return exports.random(sides) < 1;
};

exports.choose = arr => {
    return arr[exports.irandom(arr.length - 1)];
};

exports.chooseN = (arr, n) => {
    let o = [];
    for (let i=0; i<n; i++) {
        o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
    }
    return o;
};

exports.chooseChance = (...arg) => {
    let totalProb = 0;
    arg.forEach(function(value) { totalProb += value; });
    let answer = exports.random(totalProb);
    for (let i=0; i<arg.length; i++) {
        if (answer<arg[i]) return i;
        answer -= arg[i];
    }
};


exports.chooseBotName = () => {
    return exports.choose([
        'BOB XII',
      'i wish im a human ',
      'wat',
      'hello there',
      'IM GONNA KICK YOUR AS - SRPINGTRAP',
      'FREDDY DUMBEAR',
      'a bot',
      'token: youdumbass',
      'im the best',
      'AREna CLEANER',
      '[FF] BLITZKREIY',
      'I´v been better',
      'IM BT',
      'U salty if u kill me XD',
      'im the best',
      'ARENA CLAOSER',
      'I AM DUM ',
      'that one annoying BOT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'

      
      
    ]);
};

exports.chooseBossName = (code, n) => {
    switch (code) {
    case 'a':
    return exports.chooseN([
        'Archimedes',
        'Akilina',
        'Anastasios',
        'Athena',
        'Alkaios',
        'Amyntas',
        'Aniketos',
        'Artemis',
        'Anaxagoras',
        'Apollon',
    ], n);
         case 'freja':
    return exports.chooseN([
        'Freja',
        'Freja',
        'Freja',
        'Freja',
        'Freja',
        'Freja',
        'Freja',
        'Freja',
        'Freja',
        'Freja',
    ], n);
         case 'theia':
    return exports.chooseN([
        'Theia',
        'Theia',
        'Theia',
        'Theia',
        'Theia',
        'Theia',
        'Theia',
        'Theia',
        'Theia',
        'Theia',
    ], n);
         case 'zapgus':
    return exports.chooseN([
        'Zapgus',
        'Zapgus',
        'Zapgus',
        'Zapgus',
        'Zapgus',
        'Zapgus',
        'Zapgus',
        'Zapgus',
        'Zapgus',
        'Zapgus',
    ], n);
         case 'melkia':
    return exports.chooseN([
        'Melkia',
        'Melkia',
        'Melkia',
        'Melkia',
        'Melkia',
        'Melkia',
        'Melkia',
        'Melkia',
        'Melkia',
        'Melkia',
    ], n);
         case 'telarus':
    return exports.chooseN([
        'Telarus',
        'Telarus',
        'Telarus',
        'Telarus',
        'Telarus',
        'Telarus',
        'Telarus',
        'Telarus',
        'Telarus',
        'Telarus',
    ], n);
         case 'lekrica':
    return exports.chooseN([
        'Lekrica',
        'Lekrica',
        'Lekrica',
        'Lekrica',
        'Lekrica',
        'Lekrica',
        'Lekrica',
        'Lekrica',
        'Lekrica',
        'Lekrica',
    ], n);
         case 'palkija':
    return exports.chooseN([
        'Palkija',
        'Palkija',
        'Palkija',
        'Palkija',
        'Palkija',
        'Palkija',
        'Palkija',
        'Palkija',
        'Palkija',
        'Palkija',
    ], n);
         case 'zaphkiel':
    return exports.chooseN([
        'Zaphkiel',
        'Zaphkiel',
        'Zaphkiel',
        'Zaphkiel',
        'Zaphkiel',
        'Zaphkiel',
        'Zaphkiel',
        'Zaphkiel',
        'Zaphkiel',
        'Zaphkiel',
    ], n);
         case 'enter':
    return exports.chooseN([
        'Enternal',
        'Enternal',
        'Enternal',
        'Enternal',
        'Enternal',
        'Enternal',
        'Enternal',
        'Enternal',
        'Enternal',
        'Enternal',
    ], n);
         case 'rkrake':
    return exports.chooseN([
        'Rkrake',
        'Rkrake',
        'Rkrake',
        'Rkrake',
        'Rkrake',
        'Rkrake',
        'Rkrake',
        'Rkrake',
        'Rkrake',
        'Rkrake',
    ], n);
    case 'castle':
    return exports.chooseN([
        'Berezhany',
        'Lutsk',
        'Dobromyl',
        'Akkerman',
        'Palanok',
        'Zolochiv',
        'Palanok',
        'Mangup',
        'Olseko',
        'Brody',
        'Isiaslav',
        'Kaffa',
        'Bilhorod',
    ], n);
    default: return 'God';
    }
};
