import * as Blockly from 'blockly';

const MOTION_COLOUR = '#4C97FF';

export const motionBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'motion_movesteps',

        message0: 'move %1 steps',

        args0: [

            {

                type: 'input_value',

                name: 'STEPS',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_turnright',

        message0: 'turn ↻ %1 degrees',

        args0: [

            {

                type: 'input_value',

                name: 'DEGREES',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_turnleft',

        message0: 'turn ↺ %1 degrees',

        args0: [

            {

                type: 'input_value',

                name: 'DEGREES',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_pointindirection',

        message0: 'point in direction %1',

        args0: [

            {

                type: 'input_value',

                name: 'DIRECTION',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_pointtowards',

        message0: 'point towards %1',

        args0: [

            {

                type: 'input_value',

                name: 'TOWARDS'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_gotoxy',

        message0: 'go to x: %1 y: %2',

        args0: [

            {

                type: 'input_value',

                name: 'X',

                check: 'Number'

            },

            {

                type: 'input_value',

                name: 'Y',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_changexby',

        message0: 'change x by %1',

        args0: [

            {

                type: 'input_value',

                name: 'DX',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_setx',

        message0: 'set x to %1',

        args0: [

            {

                type: 'input_value',

                name: 'X',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_changeyby',

        message0: 'change y by %1',

        args0: [

            {

                type: 'input_value',

                name: 'DY',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_sety',

        message0: 'set y to %1',

        args0: [

            {

                type: 'input_value',

                name: 'Y',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_ifonedgebounce',

        message0: 'if on edge, bounce',

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_xposition',

        message0: 'x position',

        output: 'Number',

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_yposition',

        message0: 'y position',

        output: 'Number',

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_direction',

        message0: 'direction',

        output: 'Number',

        colour: MOTION_COLOUR

    },

    // Extra Scratch Mod motion blocks

    {

        type: 'motion_setvelocity',

        message0: 'set velocity x %1 y %2',

        args0: [

            {

                type: 'input_value',

                name: 'X',

                check: 'Number'

            },

            {

                type: 'input_value',

                name: 'Y',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_changevelocity',

        message0: 'change velocity x %1 y %2',

        args0: [

            {

                type: 'input_value',

                name: 'X',

                check: 'Number'

            },

            {

                type: 'input_value',

                name: 'Y',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_velocityx',

        message0: 'velocity x',

        output: 'Number',

        colour: MOTION_COLOUR

    },

    {

        type: 'motion_velocityy',

        message0: 'velocity y',

        output: 'Number',

        colour: MOTION_COLOUR

    }

];

export function registerMotionBlocks(): void {

    for (const block of motionBlocks) {

        Blockly.common.defineBlocksWithJsonArray([block]);

    }

}

export default motionBlocks;
