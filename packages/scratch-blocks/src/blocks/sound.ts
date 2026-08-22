import * as Blockly from 'blockly';

const SOUND_COLOUR = '#CF63CF';

export const soundBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'sound_play',

        message0: 'start sound %1',

        args0: [

            {

                type: 'input_value',

                name: 'SOUND_MENU'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_playuntildone',

        message0: 'play sound %1 until done',

        args0: [

            {

                type: 'input_value',

                name: 'SOUND_MENU'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_stopallsounds',

        message0: 'stop all sounds',

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_changeeffectby',

        message0: 'change %1 effect by %2',

        args0: [

            {

                type: 'field_dropdown',

                name: 'EFFECT',

                options: [

                    ['pitch', 'PITCH'],

                    ['pan left/right', 'PAN']

                ]

            },

            {

                type: 'input_value',

                name: 'VALUE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_seteffectto',

        message0: 'set %1 effect to %2',

        args0: [

            {

                type: 'field_dropdown',

                name: 'EFFECT',

                options: [

                    ['pitch', 'PITCH'],

                    ['pan left/right', 'PAN']

                ]

            },

            {

                type: 'input_value',

                name: 'VALUE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_cleareffects',

        message0: 'clear sound effects',

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_changevolumeby',

        message0: 'change volume by %1',

        args0: [

            {

                type: 'input_value',

                name: 'VOLUME',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_setvolumeto',

        message0: 'set volume to %1 %',

        args0: [

            {

                type: 'input_value',

                name: 'VOLUME',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_volume',

        message0: 'volume',

        output: 'Number',

        colour: SOUND_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'sound_fadeout',

        message0: 'fade out sound %1 over %2 seconds',

        args0: [

            {

                type: 'input_value',

                name: 'SOUND'

            },

            {

                type: 'input_value',

                name: 'SECONDS',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_fadein',

        message0: 'fade in sound %1 over %2 seconds',

        args0: [

            {

                type: 'input_value',

                name: 'SOUND'

            },

            {

                type: 'input_value',

                name: 'SECONDS',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_setpan',

        message0: 'set stereo pan to %1',

        args0: [

            {

                type: 'input_value',

                name: 'PAN',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_pan',

        message0: 'stereo pan',

        output: 'Number',

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_pitch',

        message0: 'pitch',

        output: 'Number',

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_setpitch',

        message0: 'set pitch to %1',

        args0: [

            {

                type: 'input_value',

                name: 'PITCH',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_playnote',

        message0: 'play note %1 for %2 beats',

        args0: [

            {

                type: 'input_value',

                name: 'NOTE',

                check: 'Number'

            },

            {

                type: 'input_value',

                name: 'BEATS',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_settempo',

        message0: 'set tempo to %1 bpm',

        args0: [

            {

                type: 'input_value',

                name: 'TEMPO',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_changetempoby',

        message0: 'change tempo by %1',

        args0: [

            {

                type: 'input_value',

                name: 'TEMPO',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: SOUND_COLOUR

    },

    {

        type: 'sound_tempo',

        message0: 'tempo',

        output: 'Number',

        colour: SOUND_COLOUR

    }

];

export function registerSoundBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(soundBlocks);

}

export default soundBlocks;
