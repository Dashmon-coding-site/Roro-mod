import * as Blockly from 'blockly';

const CONTROL_COLOUR = '#FFAB19';

export const controlBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'control_wait',

        message0: 'wait %1 seconds',

        args0: [

            {

                type: 'input_value',

                name: 'DURATION',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_repeat',

        message0: 'repeat %1',

        args0: [

            {

                type: 'input_value',

                name: 'TIMES',

                check: 'Number'

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

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_forever',

        message0: 'forever',

        message1: '%1',

        args1: [

            {

                type: 'input_statement',

                name: 'SUBSTACK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_if',

        message0: 'if %1 then',

        args0: [

            {

                type: 'input_value',

                name: 'CONDITION',

                check: 'Boolean'

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

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_if_else',

        message0: 'if %1 then',

        args0: [

            {

                type: 'input_value',

                name: 'CONDITION',

                check: 'Boolean'

            }

        ],

        message1: '%1',

        args1: [

            {

                type: 'input_statement',

                name: 'SUBSTACK'

            }

        ],

        message2: 'else',

        message3: '%1',

        args3: [

            {

                type: 'input_statement',

                name: 'SUBSTACK2'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_wait_until',

        message0: 'wait until %1',

        args0: [

            {

                type: 'input_value',

                name: 'CONDITION',

                check: 'Boolean'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_repeat_until',

        message0: 'repeat until %1',

        args0: [

            {

                type: 'input_value',

                name: 'CONDITION',

                check: 'Boolean'

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

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_stop',

        message0: 'stop %1',

        args0: [

            {

                type: 'field_dropdown',

                name: 'STOP_OPTION',

                options: [

                    ['all', 'all'],

                    ['this script', 'this script'],

                    ['other scripts in sprite', 'other scripts in sprite']

                ]

            }

        ],

        previousStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_create_clone_of',

        message0: 'create clone of %1',

        args0: [

            {

                type: 'input_value',

                name: 'CLONE_OPTION'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_delete_this_clone',

        message0: 'delete this clone',

        previousStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_start_as_clone',

        message0: 'when I start as a clone',

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_all_at_once',

        message0: 'all at once',

        message1: '%1',

        args1: [

            {

                type: 'input_statement',

                name: 'SUBSTACK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'control_break',

        message0: 'break loop',

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_continue',

        message0: 'continue loop',

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_repeat_forever',

        message0: 'repeat forever',

        message1: '%1',

        args1: [

            {

                type: 'input_statement',

                name: 'SUBSTACK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_try',

        message0: 'try',

        message1: '%1',

        args1: [

            {

                type: 'input_statement',

                name: 'SUBSTACK'

            }

        ],

        message2: 'catch',

        message3: '%1',

        args3: [

            {

                type: 'input_statement',

                name: 'HANDLER'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_run_once',

        message0: 'run once',

        message1: '%1',

        args1: [

            {

                type: 'input_statement',

                name: 'SUBSTACK'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_run_every',

        message0: 'run every %1 seconds',

        args0: [

            {

                type: 'input_value',

                name: 'SECONDS',

                check: 'Number'

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

        colour: CONTROL_COLOUR

    },

    {

        type: 'control_restart_project',

        message0: 'restart project',

        previousStatement: null,

        nextStatement: null,

        colour: CONTROL_COLOUR

    }

];

export function registerControlBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(controlBlocks);

}

export default controlBlocks;
