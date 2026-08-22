import * as Blockly from 'blockly';

const VARIABLES_COLOUR = '#FF8C1A';

export const variableBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'data_variable',

        message0: '%1',

        args0: [

            {

                type: 'field_variable',

                name: 'VARIABLE',

                variable: 'item'

            }

        ],

        output: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_setvariableto',

        message0: 'set %1 to %2',

        args0: [

            {

                type: 'field_variable',

                name: 'VARIABLE',

                variable: 'item'

            },

            {

                type: 'input_value',

                name: 'VALUE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_changevariableby',

        message0: 'change %1 by %2',

        args0: [

            {

                type: 'field_variable',

                name: 'VARIABLE',

                variable: 'item'

            },

            {

                type: 'input_value',

                name: 'VALUE',

                check: 'Number'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_showvariable',

        message0: 'show variable %1',

        args0: [

            {

                type: 'field_variable',

                name: 'VARIABLE',

                variable: 'item'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_hidevariable',

        message0: 'hide variable %1',

        args0: [

            {

                type: 'field_variable',

                name: 'VARIABLE',

                variable: 'item'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    // Lists

    {

        type: 'data_listcontents',

        message0: '%1',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        output: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_addtolist',

        message0: 'add %1 to %2',

        args0: [

            {

                type: 'input_value',

                name: 'ITEM'

            },

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_deleteoflist',

        message0: 'delete %1 of %2',

        args0: [

            {

                type: 'input_value',

                name: 'INDEX',

                check: 'Number'

            },

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_deletealloflist',

        message0: 'delete all of %1',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_insertatlist',

        message0: 'insert %1 at %2 of %3',

        args0: [

            {

                type: 'input_value',

                name: 'ITEM'

            },

            {

                type: 'input_value',

                name: 'INDEX',

                check: 'Number'

            },

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_replaceitemoflist',

        message0: 'replace item %1 of %2 with %3',

        args0: [

            {

                type: 'input_value',

                name: 'INDEX',

                check: 'Number'

            },

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            },

            {

                type: 'input_value',

                name: 'ITEM'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_itemoflist',

        message0: 'item %1 of %2',

        args0: [

            {

                type: 'input_value',

                name: 'INDEX',

                check: 'Number'

            },

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        output: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_itemnumoflist',

        message0: 'item # of %1 in %2',

        args0: [

            {

                type: 'input_value',

                name: 'ITEM'

            },

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        output: 'Number',

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_lengthoflist',

        message0: 'length of %1',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        output: 'Number',

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_listcontainsitem',

        message0: '%1 contains %2?',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            },

            {

                type: 'input_value',

                name: 'ITEM'

            }

        ],

        output: 'Boolean',

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_showlist',

        message0: 'show list %1',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_hidelist',

        message0: 'hide list %1',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'data_setvariabletype',

        message0: 'set %1 type to %2',

        args0: [

            {

                type: 'field_variable',

                name: 'VARIABLE',

                variable: 'item'

            },

            {

                type: 'field_dropdown',

                name: 'TYPE',

                options: [

                    ['text', 'string'],

                    ['number', 'number'],

                    ['boolean', 'boolean']

                ]

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_variableexists',

        message0: 'variable %1 exists?',

        args0: [

            {

                type: 'field_variable',

                name: 'VARIABLE',

                variable: 'item'

            }

        ],

        output: 'Boolean',

        colour: VARIABLES_COLOUR

    },

    {

        type: 'data_incrementvariable',

        message0: 'increment %1',

        args0: [

            {

                type: 'field_variable',

                name: 'VARIABLE',

                variable: 'item'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: VARIABLES_COLOUR

    }

];

export function registerVariableBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(variableBlocks);

}

export default variableBlocks;
