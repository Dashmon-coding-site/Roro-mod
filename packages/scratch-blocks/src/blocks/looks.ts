import * as Blockly from 'blockly';

const LOOKS_COLOUR = '#9966FF';

export const looksBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'looks_sayforsecs',

        message0: 'say %1 for %2 seconds',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            },

            {

                type: 'input_value',

                name: 'SECS',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_say',

        message0: 'say %1',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_thinkforsecs',

        message0: 'think %1 for %2 seconds',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            },

            {

                type: 'input_value',

                name: 'SECS',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_think',

        message0: 'think %1',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_switchcostumeto',

        message0: 'switch costume to %1',

        args0: [

            {

                type: 'input_value',

                name: 'COSTUME'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_nextcostume',

        message0: 'next costume',

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_switchbackdropto',

        message0: 'switch backdrop to %1',

        args0: [

            {

                type: 'input_value',

                name: 'BACKDROP'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_nextbackdrop',

        message0: 'next backdrop',

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_changesizeby',

        message0: 'change size by %1',

        args0: [

            {

                type: 'input_value',

                name: 'CHANGE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_setsizeto',

        message0: 'set size to %1 %',

        args0: [

            {

                type: 'input_value',

                name: 'SIZE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_changeeffectby',

        message0: 'change %1 effect by %2',

        args0: [

            {

                type: 'input_value',

                name: 'EFFECT'

            },

            {

                type: 'input_value',

                name: 'CHANGE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_seteffectto',

        message0: 'set %1 effect to %2',

        args0: [

            {

                type: 'input_value',

                name: 'EFFECT'

            },

            {

                type: 'input_value',

                name: 'VALUE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_cleargraphiceffects',

        message0: 'clear graphic effects',

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_show',

        message0: 'show',

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_hide',

        message0: 'hide',

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_gotofrontback',

        message0: 'go to %1 layer',

        args0: [

            {

                type: 'input_value',

                name: 'FRONT_BACK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_goforwardbackwardlayers',

        message0: 'go %1 %2 layers',

        args0: [

            {

                type: 'input_value',

                name: 'FORWARD_BACKWARD'

            },

            {

                type: 'input_value',

                name: 'NUM',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_costumenumbername',

        message0: 'costume %1',

        args0: [

            {

                type: 'input_value',

                name: 'NUMBER_NAME'

            }

        ],

        output: 'String',

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_backdropnumbername',

        message0: 'backdrop %1',

        args0: [

            {

                type: 'input_value',

                name: 'NUMBER_NAME'

            }

        ],

        output: 'String',

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_size',

        message0: 'size',

        output: 'Number',

        colour: LOOKS_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'looks_setopacity',

        message0: 'set opacity to %1 %',

        args0: [

            {

                type: 'input_value',

                name: 'OPACITY',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_changeopacity',

        message0: 'change opacity by %1',

        args0: [

            {

                type: 'input_value',

                name: 'CHANGE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_setrotation',

        message0: 'set rotation to %1 degrees',

        args0: [

            {

                type: 'input_value',

                name: 'DEGREES',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_changerotation',

        message0: 'change rotation by %1 degrees',

        args0: [

            {

                type: 'input_value',

                name: 'DEGREES',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LOOKS_COLOUR

    },

    {

        type: 'looks_spritevisible',

        message0: 'sprite visible?',

        output: 'Boolean',

        colour: LOOKS_COLOUR

    }

];

export function registerLooksBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(looksBlocks);

}

export default looksBlocks;
