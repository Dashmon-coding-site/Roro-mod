import * as Blockly from 'blockly';

const PEN_COLOUR = '#0FBD8C';

export const penBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'pen_clear',

        message0: 'erase all',

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_stamp',

        message0: 'stamp',

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_penDown',

        message0: 'pen down',

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_penUp',

        message0: 'pen up',

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_setPenColorToColor',

        message0: 'set pen color to %1',

        args0: [

            {

                type: 'input_value',

                name: 'COLOR'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_changePenColorParamBy',

        message0: 'change pen %1 by %2',

        args0: [

            {

                type: 'field_dropdown',

                name: 'COLOR_PARAM',

                options: [

                    ['color', 'color'],

                    ['saturation', 'saturation'],

                    ['brightness', 'brightness'],

                    ['transparency', 'transparency']

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

        colour: PEN_COLOUR

    },

    {

        type: 'pen_setPenColorParamTo',

        message0: 'set pen %1 to %2',

        args0: [

            {

                type: 'field_dropdown',

                name: 'COLOR_PARAM',

                options: [

                    ['color', 'color'],

                    ['saturation', 'saturation'],

                    ['brightness', 'brightness'],

                    ['transparency', 'transparency']

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

        colour: PEN_COLOUR

    },

    {

        type: 'pen_changePenSizeBy',

        message0: 'change pen size by %1',

        args0: [

            {

                type: 'input_value',

                name: 'SIZE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_setPenSizeTo',

        message0: 'set pen size to %1',

        args0: [

            {

                type: 'input_value',

                name: 'SIZE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'pen_setPenOpacityTo',

        message0: 'set pen opacity to %1 %',

        args0: [

            {

                type: 'input_value',

                name: 'OPACITY',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_changePenOpacityBy',

        message0: 'change pen opacity by %1',

        args0: [

            {

                type: 'input_value',

                name: 'OPACITY',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_setPenColorHex',

        message0: 'set pen color to hex %1',

        args0: [

            {

                type: 'input_value',

                name: 'HEX'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_setPenGradient',

        message0: 'set pen gradient from %1 to %2',

        args0: [

            {

                type: 'input_value',

                name: 'COLOR1'

            },

            {

                type: 'input_value',

                name: 'COLOR2'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_setPenBlendMode',

        message0: 'set pen blend mode to %1',

        args0: [

            {

                type: 'field_dropdown',

                name: 'MODE',

                options: [

                    ['normal', 'normal'],

                    ['multiply', 'multiply'],

                    ['screen', 'screen'],

                    ['overlay', 'overlay'],

                    ['add', 'add']

                ]

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    },

    {

        type: 'pen_rotateStamp',

        message0: 'rotate stamp by %1 degrees',

        args0: [

            {

                type: 'input_value',

                name: 'DEGREES',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PEN_COLOUR

    }

];

export function registerPenBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(penBlocks);

}

export default penBlocks;
