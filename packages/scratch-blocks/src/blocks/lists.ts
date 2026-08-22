import * as Blockly from 'blockly';

const LISTS_COLOUR = '#FF661A';

export const listBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'lists_create_with',

        message0: 'make list',

        message1: '%1',

        args1: [

            {

                type: 'input_value',

                name: 'ITEM0'

            }

        ],

        output: 'Array',

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_add',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_delete',

        message0: 'delete item %1 of %2',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_delete_all',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_insert',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_replace',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_item',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_item_number',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_length',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_contains',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_show',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_hide',

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

        colour: LISTS_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'lists_sort',

        message0: 'sort %1 %2',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            },

            {

                type: 'field_dropdown',

                name: 'ORDER',

                options: [

                    ['ascending', 'ASC'],

                    ['descending', 'DESC']

                ]

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_reverse',

        message0: 'reverse %1',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_shuffle',

        message0: 'shuffle %1',

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

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_copy',

        message0: 'copy %1',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            }

        ],

        output: 'Array',

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_join',

        message0: 'join items of %1 with %2',

        args0: [

            {

                type: 'field_variable',

                name: 'LIST',

                variable: 'list',

                variableTypes: ['list']

            },

            {

                type: 'input_value',

                name: 'SEPARATOR'

            }

        ],

        output: 'String',

        colour: LISTS_COLOUR

    },

    {

        type: 'lists_clear',

        message0: 'clear %1',

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

        colour: LISTS_COLOUR

    }

];

export function registerListBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(listBlocks);

}

export default listBlocks;
