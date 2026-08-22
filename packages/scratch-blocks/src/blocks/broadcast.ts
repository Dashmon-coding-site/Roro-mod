import * as Blockly from 'blockly';

const BROADCAST_COLOUR = '#FFBF00';

export const broadcastBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'broadcast_broadcast',

        message0: 'broadcast %1',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: BROADCAST_COLOUR

    },

    {

        type: 'broadcast_broadcastandwait',

        message0: 'broadcast %1 and wait',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: BROADCAST_COLOUR

    },

    {

        type: 'broadcast_whenreceived',

        message0: 'when I receive %1',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            }

        ],

        nextStatement: null,

        colour: BROADCAST_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'broadcast_send',

        message0: 'send message %1',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: BROADCAST_COLOUR

    },

    {

        type: 'broadcast_senddata',

        message0: 'broadcast %1 with data %2',

        args0: [

            {

                type: 'input_value',

                name: 'MESSAGE'

            },

            {

                type: 'input_value',

                name: 'DATA'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: BROADCAST_COLOUR

    },

    {

        type: 'broadcast_lastmessage',

        message0: 'last broadcast message',

        output: 'String',

        colour: BROADCAST_COLOUR

    },

    {

        type: 'broadcast_messagecount',

        message0: 'broadcast count',

        output: 'Number',

        colour: BROADCAST_COLOUR

    }

];

export function registerBroadcastBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(broadcastBlocks);

}

export default broadcastBlocks;
