import * as Blockly from 'blockly';

const NETWORK_COLOUR = '#4C97FF';

export const networkBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'network_online',

        message0: 'online?',

        output: 'Boolean',

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_request',

        message0: 'request %1',

        args0: [

            {

                type: 'input_value',

                name: 'URL'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_request_method',

        message0: 'request %1 %2',

        args0: [

            {

                type: 'field_dropdown',

                name: 'METHOD',

                options: [

                    ['GET', 'GET'],

                    ['POST', 'POST'],

                    ['PUT', 'PUT'],

                    ['PATCH', 'PATCH'],

                    ['DELETE', 'DELETE']

                ]

            },

            {

                type: 'input_value',

                name: 'URL'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_response',

        message0: 'response',

        output: 'String',

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_status',

        message0: 'response status',

        output: 'Number',

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_response_header',

        message0: 'response header %1',

        args0: [

            {

                type: 'input_value',

                name: 'HEADER'

            }

        ],

        output: 'String',

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_request_json',

        message0: 'request JSON %1',

        args0: [

            {

                type: 'input_value',

                name: 'URL'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_request_with_data',

        message0: 'POST %1 data %2',

        args0: [

            {

                type: 'input_value',

                name: 'URL'

            },

            {

                type: 'input_value',

                name: 'DATA'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: NETWORK_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'network_get',

        message0: 'GET %1',

        args0: [

            {

                type: 'input_value',

                name: 'URL'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_post',

        message0: 'POST %1 data %2',

        args0: [

            {

                type: 'input_value',

                name: 'URL'

            },

            {

                type: 'input_value',

                name: 'DATA'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_abort',

        message0: 'cancel network request',

        previousStatement: null,

        nextStatement: null,

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_loading',

        message0: 'request loading?',

        output: 'Boolean',

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_error',

        message0: 'network error',

        output: 'String',

        colour: NETWORK_COLOUR

    },

    {

        type: 'network_clear',

        message0: 'clear network response',

        previousStatement: null,

        nextStatement: null,

        colour: NETWORK_COLOUR

    }

];

export function registerNetworkBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(networkBlocks);

}

export default networkBlocks;
