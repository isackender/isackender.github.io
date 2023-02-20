const CONSONANTS = {
    'CTTCBR' : {
        sound: 'B',
        description: 'B (b) (as in Baby)',
        phonema: 'b'
    },
    'CTLCBB' : {
        sound: 'CH',
        description: 'CH (tʃ) (as in Chat)',
        phonema: 'tʃ'
    },
    'CTTCBLCBR' : {
        sound: 'D',
        description: 'D (d) (as in Dog)',
        phonema: 'd'
    },
    'CTRCBLCBB' : {
        sound: 'F',
        description: 'F (f) (as in Fox)',
        phonema: 'f'
    },
    'CTRCBRCBB' : {
        sound: 'G',
        description: 'G (g) (as in Gun)',
        phonema: 'g'
    },
    'CTTCBRCBB' : {
        sound: 'H',
        description: 'H (h) (as in Hop)',
        phonema: 'h'
    },
    'CTTCBL' : {
        sound: 'J',
        description: 'J (dʒ) (as in Jam)',
        phonema: 'dʒ'
    },
    'CTTCTRCBR' : {
        sound: 'K',
        description: 'K (k) (as in Kart)',
        phonema: 'k'
    },
    'CTTCBB' : {
        sound: 'L',
        description: 'L (l) (as in Live)',
        phonema: 'l'
    },
    'CBLCBR' : {
        sound: 'M',
        description: 'M (m) (as in Man)',
        phonema: 'm'
    },
    'CTLCBLCBR' : {
        sound: 'N',
        description: 'N (n) (as in Net)',
        phonema: 'n'
    },
    'CTLCTTCTRCBLCBBCBR' : {
        sound: 'NG',
        description: 'NG (ŋ) (as in Ring)',
        phonema: 'ŋ'
    },
    'CTRCBB' : {
        sound: 'P',
        description: 'P (p) (as in Poppy)',
        phonema: 'p'
    },
    'CTTCTRCBB' : {
        sound: 'R',
        description: 'R (r) (as in Run)',
        phonema: 'r'
    },
    'CTTCTRCBLCBB' : {
        sound: 'S',
        description: 'S (s) (as in Sit)',
        phonema: 's'
    },
    'CTLCTRCBLCBRCBB' : {
        sound: 'SH',
        description: 'SH (ʃ) (as in Shut)',
        phonema: 'ʃ'
    },
    'CTLCTRCBB' : {
        sound: 'T',
        description: 'T (t) (as in Tunic)',
        phonema: 't'
    },
    'CTLCTTCTRCBB' : {
        sound: 'TH',
        description: 'TH (θ) (as in Thick)',
        phonema: 'θ'
    },
    'CTTCBLCBBCBR' : {
        sound: 'TH',
        description: 'TH (ð) (as in This)',
        phonema: 'ð'
    },
    'CTLCTTCBR' : {
        sound: 'V',
        description: 'V (v) (as in Vine)',
        phonema: 'v'
    },
    'CTLCTR' : {
        sound: 'W',
        description: 'W (w) (as in Wit)',
        phonema: 'w'
    },
    'CTLCTTCBB' : {
        sound: 'Y',
        description: 'Y (j) (as in You)',
        phonema: 'j'
    },
    'CTLCTTCBBCBR' : {
        sound: 'Z',
        description: 'Z (z) (as in Zit)',
        phonema: 'z'
    },
    'CTLCTTCTRCBLCBR' : {
        sound: 'ZH',
        description: 'ZH (ʒ) (as in Azure)',
        phonema: 'ʒ'
    }
};
const VOWELS = {
    'VLVTLVTR' : {
        sound: 'A',
        description: 'A (æ) (as in Glass)',
        phonema: 'æ'
    },
    'VTLVTRVBLVBR' : {
        sound: 'AR',
        description: 'AR (ɑ:) (as in Arm)',
        phonema: 'ɑ:'
    },
    'VTLVL' : {
        sound: 'AH',
        description: 'AH (ɒ) (as in Swan)',
        phonema: 'ɒ'
    },
    'VTL' : {
        sound: 'AY',
        description: 'AY (eɪ) (as in Bay)',
        phonema: 'eɪ'
    },
    'VLVBLVBR' : {
        sound: 'E',
        description: 'E (e) (as in End)',
        phonema: 'e'
    },
    'VTLVLVBLVBR' : {
        sound: 'EE',
        description: 'EE (i:) (as in Bee)',
        phonema: 'i:'
    },
    'VTLVLVBR' : {
        sound: 'EER',
        description: 'EER (ɪəʳ) (as in Beer)',
        phonema: 'ɪəʳ'
    },
    'VTLVTR' : {
        sound: 'EH',
        description: 'EH (ə) (as in The)',
        phonema: 'ə'
    },
    'VLVBR' : {
        sound: 'ERE',
        description: 'ERE (eəʳ) (as in Air)',
        phonema: 'eəʳ'
    },
    'VBLVBR' : {
        sound: 'I',
        description: 'I (ɪ) (as in Bit)',
        phonema: 'ɪ'
    },
    'VTR' : {
        sound: 'IE',
        description: 'IE (aɪ) (as in Guy)',
        phonema: 'aɪ'
    },
    'VTRVLVBLVBR' : {
        sound: 'IR',
        description: 'IR (ɜ:ʳ) (as in Bird)',
        phonema: 'ɜ:ʳ'
    },
    'VTLVTRVLVBLVBR' : {
        sound: 'OH',
        description: 'OH (aʊ) (as in Toe)',
        phonema: 'aʊ'
    },
    'VBL' : {
        sound: 'OI',
        description: 'OI (ɔɪ) (as in Toy)',
        phonema: 'ɔɪ'
    },
    'VTLVTRVLVBL' : {
        sound: 'OO',
        description: 'OO (u:) (as in Too)',
        phonema: 'u:'
    },
    'VLVBL' : {
        sound: 'OU',
        description: 'OU (ʊ) (as in Wolf)',
        phonema: 'ʊ'
    },
    'VBR' : {
        sound: 'OW',
        description: 'OW (aʊ) (as in How)',
        phonema: 'aʊ'
    },
    'VTLVTRVLVBR' : {
        sound: 'ORE',
        description: 'ORE (ʊəʳ) (as in Your)',
        phonema: 'ʊəʳ'
    }
};
const wordHtml = `
<div class="word">
    <div class="glyph">
        <span class="line vowel l-1"></span>
        <span class="line vowel l-2"></span>
        <span class="line vowel l-3"></span>
        <span class="line vowel l-4"></span>
        <span class="line vowel l-5"></span>
        <span class="joint"></span>
        <span class="line conso l-1"></span>
        <span class="line conso l-2"></span>
        <span class="line conso l-3"></span>
        <span class="line conso l-4"></span>
        <span class="line conso l-5"></span>
        <span class="line conso l-6"></span>
        <span class="inver"></span>
        <span class="strike"></span>
        <div class="glyph-translation">
            <p class="sound"></p>
            <p class="description"></p>
            <p class="phonema"></p>
        </div>
    </div>
</div>
`;
const glyphHtml = `
<div class="glyph">
    <span class="line vowel l-1"></span>
    <span class="line vowel l-2"></span>
    <span class="line vowel l-3"></span>
    <span class="line vowel l-4"></span>
    <span class="line vowel l-5"></span>
    <span class="joint"></span>
    <span class="line conso l-1"></span>
    <span class="line conso l-2"></span>
    <span class="line conso l-3"></span>
    <span class="line conso l-4"></span>
    <span class="line conso l-5"></span>
    <span class="line conso l-6"></span>
    <span class="inver"></span>
    <span class="strike"></span>
    <div class="glyph-translation">
        <p class="sound"></p>
        <p class="description"></p>
        <p class="phonema"></p>
    </div>
</div>
`;

const addWord = () => {
    if($('.word').length != 0) {
        $('.word').last().after(wordHtml);
    } else {
        $('#container').append(wordHtml);
    }
}
const addGlyph = () => {
    if($('.word').length != 0) {
        console.log($('.word').last().find('.glyph').length);
        if($('.word').last().find('.glyph').length != 0) {
            $('.word').last().find('.glyph').last().after(glyphHtml)
        } else {
            $('.word').last().append(glyphHtml);
        }
    } else {
        $('#container').append(wordHtml);
    }
}

const deleteGlyph = () => {
    if($('.word').length !== 0) {
        if($('.word').last().find('.glyph').length != 0) {
            $('.word').last().find('.glyph').last().remove();
        } else {
            $('.word').last().remove();
            deleteGlyph();
        }
    }
}

const buildSentence = () => {
    let sentence = '';

    $('.word').each((index, element) => {
        console.log(element);
        $(element).find('.phonema').each((ind, ele) => {
            console.log(ele);
            sentence += $(ele).text();
        });
        sentence += ' ';
    });

    console.log(sentence);

    $('.sentence').text(sentence);
}

const bindActions = () => {
    const lines = $(".line");
    const invers = $(".inver");

    $(lines).each((index, element) => {
        bindLineActions(element);
    });

    $(invers).each((index, element) => {
        bindInverActions(element);
    });
}

const bindLineActions = (line) => {
    $(line).off('click');
    $(line).on('click', function(){
        let l = $(this);
        l.toggleClass('active');
        paintJoint(l.closest('.glyph'));
        paintStrike(l.closest('.glyph'));
        translateGlyph(l.closest('.glyph'));
        buildSentence();
    });
}

const bindInverActions = (inver) => {
    $(inver).off('click');
    $(inver).on('click', function(){
        let i = $(this);
        i.toggleClass('active');
        paintStrike(i.closest('.glyph'));
        translateGlyph(i.closest('.glyph'));
        buildSentence();
    });
}

const paintJoint = (glyph) => {
    let lineA = $(glyph).find('.conso.l-1');
    let lineB = $(glyph).find('.conso.l-2');
    let lineC = $(glyph).find('.conso.l-3');
    let lineD = $(glyph).find('.conso.l-4');
    let lineE = $(glyph).find('.conso.l-5');
    let lineF = $(glyph).find('.conso.l-6');

    if(lineA.hasClass('active') || lineB.hasClass('active') || lineC.hasClass('active')) {
        if(lineD.hasClass('active') || lineE.hasClass('active') || lineF.hasClass('active')) {
            $(glyph).children('.joint').addClass('active');
        } else {
            $(glyph).children('.joint').removeClass('active');
        }
    } else {
        $(glyph).children('.joint').removeClass('active');
    }
}

const paintStrike = (glyph) => {
    let lines = $(glyph).find('.line').toArray();
    let inv = $(glyph).find('.inver');
    let strike = false;

    if(inv.hasClass('active')) {
        strike = true;
    }

    for ( var i = 0; i < lines.length && !strike; i++ ) {
        if($(lines[i]).hasClass('active')) {
            strike = true;
        }
    }

    if(strike) {
        $(glyph).find('.strike').addClass('active');
    } else {
        $(glyph).find('.strike').removeClass('active');
    }
}

const translateGlyph = (glyph) => {
    let consonant = getConsonant(glyph);
    let vowel = getVowel(glyph);
    let inver = $(glyph).find('.inver');

    let sound = $(glyph).find('.sound');
    let description = $(glyph).find('.description');
    let phonema = $(glyph).find('.phonema');
    let soundStr = '';
    let descriptionStr = '';
    let phonemaStr = '';
    

    if ($(inver).hasClass('active')) {
        if(vowel != '') {
            soundStr = vowel.sound;
            descriptionStr = vowel.description;
            phonemaStr = vowel.phonema;
        }
        if(consonant != '') {
            soundStr += consonant.sound;
            descriptionStr += '<br>' + consonant.description;
            phonemaStr += consonant.phonema;
        }
        sound.html(soundStr);
        description.html(descriptionStr);
        phonema.html(phonemaStr);
    } else {
        if(consonant != '') {
            soundStr = consonant.sound;
            descriptionStr = consonant.description;
            phonemaStr = consonant.phonema;
        }
        if(vowel != '') {
            soundStr += vowel.sound;
            descriptionStr += '<br>' + vowel.description;
            phonemaStr += vowel.phonema;
        }
        sound.html(soundStr);
        description.html(descriptionStr);
        phonema.html(phonemaStr);
    }
}

const getConsonant = (glyph) => {
    // Consontants 
    let consoA = $(glyph).find('.conso.l-1');
    let consoB = $(glyph).find('.conso.l-2');
    let consoC = $(glyph).find('.conso.l-3');
    let consoD = $(glyph).find('.conso.l-4');
    let consoE = $(glyph).find('.conso.l-5');
    let consoF = $(glyph).find('.conso.l-6');

    let key = '';

    // Do not change this order!!
    if ($(consoA).hasClass('active')) {
        key += 'CTL';
    }
    if ($(consoB).hasClass('active')) {
        key += 'CTT';
    }
    if ($(consoC).hasClass('active')) {
        key += 'CTR';
    }
    if ($(consoD).hasClass('active')) {
        key += 'CBL';
    }
    if ($(consoE).hasClass('active')) {
        key += 'CBB';
    }
    if ($(consoF).hasClass('active')) {
        key += 'CBR';
    }

    if (key in CONSONANTS) {
        return CONSONANTS[key];
    }

    return '';
}

const getVowel = (glyph) => {
    // Vowels 
    let vowelA = $(glyph).find('.vowel.l-1');
    let vowelB = $(glyph).find('.vowel.l-2');
    let vowelC = $(glyph).find('.vowel.l-3');
    let vowelD = $(glyph).find('.vowel.l-4');
    let vowelE = $(glyph).find('.vowel.l-5');

    let key = '';

    // Do not change this order!!
    if ($(vowelA).hasClass('active')) {
        key += 'VTL';
    }
    if ($(vowelB).hasClass('active')) {
        key += 'VTR';
    }
    if ($(vowelC).hasClass('active')) {
        key += 'VL';
    }
    if ($(vowelD).hasClass('active')) {
        key += 'VBL';
    }
    if ($(vowelE).hasClass('active')) {
        key += 'VBR';
    }

    if (key in VOWELS) {
        return VOWELS[key];
    }

    return '';
}


$(document).ready(function() {
    const wordButton = $('.add-word');
    const glyphButton = $('.add-glyph');
    const deleteButton = $('.delete');

    wordButton.on("click", () => {
        addWord();
        bindActions();
        buildSentence();
    });

    glyphButton.on("click", () => {
        addGlyph();
        bindActions();
        buildSentence();
    });

    deleteButton.on("click", () => {
        deleteGlyph();
        bindActions();
        buildSentence();
    });

    bindActions();
});