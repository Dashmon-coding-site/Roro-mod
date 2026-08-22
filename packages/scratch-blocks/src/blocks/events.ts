import * as Blockly from 'blockly';

const EVENTS_COLOUR = '#FFBF00';

export const eventBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'event_whenflagclicked',

        message0: 'when ⚑ clicked',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenkeypressed',

        message0: 'when %1 key pressed',

        args0: [

            {

                type: 'field_dropdown',

                name: 'KEY_OPTION',

                options: [

                    ['space', 'space'],

                    ['up arrow', 'up arrow'],

                    ['down arrow', 'down arrow'],

                    ['left arrow', 'left arrow'],

                    ['right arrow', 'right arrow'],

                    ['any', 'any']

                ]

            }

        ],

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenthisspriteclicked',

        message0: 'when this sprite clicked',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenstageclicked',

        message0: 'when stage clicked',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenbackdropswitchesto',

        message0: 'when backdrop switches to %1',

        args0: [

            {

                type: 'input_value',

                name: 'BACKDROP'

            }

        ],

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whengreaterthan',

        message0: 'when %1 > %2',

        args0: [

            {

                type: 'input_value',

                name: 'VALUE'

            },

            {

                type: 'input_value',

                name: 'THRESHOLD',

                check: 'Number'

            }

        ],

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenbroadcastreceived',

        message0: 'when I receive %1',

        args0: [

            {

                type: 'input_value',

                name: 'BROADCAST_OPTION'

            }

        ],

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_broadcast',

        message0: 'broadcast %1',

        args0: [

            {

                type: 'input_value',

                name: 'BROADCAST_INPUT'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_broadcastandwait',

        message0: 'broadcast %1 and wait',

        args0: [

            {

                type: 'input_value',

                name: 'BROADCAST_INPUT'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'event_whenprojectstarted',

        message0: 'when project starts',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenprojectstopped',

        message0: 'when project stops',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenprojectpaused',

        message0: 'when project paused',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenprojectresumed',

        message0: 'when project resumed',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whencloned',

        message0: 'when I become a clone',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenmessage',

        message0: 'when mod message %1',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            }

        ],

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_sendmessage',

        message0: 'send mod message %1',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenonline',

        message0: 'when connection online',

        nextStatement: null,

        colour: EVENTS_COLOUR

    },

    {

        type: 'event_whenoffline',

        message0: 'when connection offline',

        nextStatement: null,

        colour: EVENTS_COLOUR

    }

];

export function registerEventBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(eventBlocks);

}

export default eventBlocks;
