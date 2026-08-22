import * as Blockly from 'blockly';

const PROCEDURES_COLOUR = '#FF6680';

export const procedureBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'procedures_definition',

        message0: 'define %1',

        args0: [

            {

                type: 'input_value',

                name: 'CUSTOM_BLOCK'

            }

        ],

        message1: '%1',

        args1: [

            {

                type: 'input_statement',

                name: 'SUBSTACK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_call',

        message0: 'call %1',

        args0: [

            {

                type: 'input_value',

                name: 'CUSTOM_BLOCK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_return',

        message0: 'return %1',

        args0: [

            {

                type: 'input_value',

                name: 'VALUE'

            }

        ],

        previousStatement: null,

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_return_empty',

        message0: 'return',

        previousStatement: null,

        colour: PROCEDURES_COLOUR

    },

    // Parameter blocks

    {

        type: 'procedures_argument_reporter_string',

        message0: '%1',

        args0: [

            {

                type: 'field_input',

                name: 'VALUE',

                text: 'input'

            }

        ],

        output: 'String',

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_argument_reporter_number',

        message0: '%1',

        args0: [

            {

                type: 'field_input',

                name: 'VALUE',

                text: 'input'

            }

        ],

        output: 'Number',

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_argument_reporter_boolean',

        message0: '%1',

        args0: [

            {

                type: 'field_input',

                name: 'VALUE',

                text: 'input'

            }

        ],

        output: 'Boolean',

        colour: PROCEDURES_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'procedures_call_with_return',

        message0: 'call %1 and return',

        args0: [

            {

                type: 'input_value',

                name: 'CUSTOM_BLOCK'

            }

        ],

        output: null,

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_create',

        message0: 'create custom block %1',

        args0: [

            {

                type: 'input_value',

                name: 'NAME'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_delete',

        message0: 'delete custom block %1',

        args0: [

            {

                type: 'input_value',

                name: 'NAME'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_exists',

        message0: 'custom block %1 exists?',

        args0: [

            {

                type: 'input_value',

                name: 'NAME'

            }

        ],

        output: 'Boolean',

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_run_async',

        message0: 'run %1 asynchronously',

        args0: [

            {

                type: 'input_value',

                name: 'CUSTOM_BLOCK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PROCEDURES_COLOUR

    },

    {

        type: 'procedures_run_with_screen_refresh',

        message0: 'run %1 with screen refresh',

        args0: [

            {

                type: 'input_value',

                name: 'CUSTOM_BLOCK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: PROCEDURES_COLOUR

    }

];

export function registerProcedureBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(procedureBlocks);

}

export default procedureBlocks;
