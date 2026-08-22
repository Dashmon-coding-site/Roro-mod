import * as Blockly from 'blockly';

const SENSING_COLOUR = '#5CB1D6';

export const sensingBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'sensing_touchingobject',

        message0: 'touching %1?',

        args0: [{type: 'input_value', name: 'TOUCHINGOBJECT'}],

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_touchingcolor',

        message0: 'touching color %1?',

        args0: [{type: 'input_value', name: 'COLOR'}],

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_coloristouchingcolor',

        message0: 'color %1 is touching %2?',

        args0: [

            {type: 'input_value', name: 'COLOR'},

            {type: 'input_value', name: 'COLOR2'}

        ],

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_distanceto',

        message0: 'distance to %1',

        args0: [{type: 'input_value', name: 'DISTANCETOMENU'}],

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_askandwait',

        message0: 'ask %1 and wait',

        args0: [{type: 'input_value', name: 'QUESTION'}],

        previousStatement: null,

        nextStatement: null,

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_answer',

        message0: 'answer',

        output: 'String',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_keypressed',

        message0: 'key %1 pressed?',

        args0: [{type: 'input_value', name: 'KEY_OPTION'}],

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_mousedown',

        message0: 'mouse down?',

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_mousex',

        message0: 'mouse x',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_mousey',

        message0: 'mouse y',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_setdragmode',

        message0: 'set drag mode %1',

        args0: [{type: 'input_value', name: 'DRAG_MODE'}],

        previousStatement: null,

        nextStatement: null,

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_loudness',

        message0: 'loudness',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_timer',

        message0: 'timer',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_resettimer',

        message0: 'reset timer',

        previousStatement: null,

        nextStatement: null,

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_of',

        message0: '%1 of %2',

        args0: [

            {type: 'input_value', name: 'PROPERTY'},

            {type: 'input_value', name: 'OBJECT'}

        ],

        output: 'String',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_current',

        message0: 'current %1',

        args0: [{type: 'input_value', name: 'CURRENTMENU'}],

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_dayssince2000',

        message0: 'days since 2000',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_username',

        message0: 'username',

        output: 'String',

        colour: SENSING_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'sensing_mousebutton',

        message0: 'mouse button %1 pressed?',

        args0: [{type: 'input_value', name: 'BUTTON'}],

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_mousewheel',

        message0: 'mouse wheel %1',

        args0: [{type: 'input_value', name: 'DIRECTION'}],

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_screenwidth',

        message0: 'screen width',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_screenheight',

        message0: 'screen height',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_windowwidth',

        message0: 'window width',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_windowheight',

        message0: 'window height',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_online',

        message0: 'online?',

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_fps',

        message0: 'FPS',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_delta_time',

        message0: 'delta time',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_device',

        message0: 'device type',

        output: 'String',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_touchscreen',

        message0: 'touchscreen?',

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_battery',

        message0: 'battery level',

        output: 'Number',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_fullscreen',

        message0: 'fullscreen?',

        output: 'Boolean',

        colour: SENSING_COLOUR

    },

    {

        type: 'sensing_setfullscreen',

        message0: 'set fullscreen %1',

        args0: [{type: 'input_value', name: 'ENABLED', check: 'Boolean'}],

        previousStatement: null,

        nextStatement: null,

        colour: SENSING_COLOUR

    }

];

export function registerSensingBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(sensingBlocks);

}

export default sensingBlocks;
