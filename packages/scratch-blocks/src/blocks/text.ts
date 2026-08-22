import * as Blockly from 'blockly';

const TEXT_COLOUR = '#4C97FF';

export const textBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'text',

        message0: '%1',

        args0: [

            {

                type: 'field_input',

                name: 'TEXT',

                text: ''

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_join',

        message0: 'join %1 %2',

        args0: [

            {

                type: 'input_value',

                name: 'ADD0'

            },

            {

                type: 'input_value',

                name: 'ADD1'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_length',

        message0: 'length of %1',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            }

        ],

        output: 'Number',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_letter',

        message0: 'letter %1 of %2',

        args0: [

            {

                type: 'input_value',

                name: 'INDEX',

                check: 'Number'

            },

            {

                type: 'input_value',

                name: 'TEXT'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_contains',

        message0: '%1 contains %2?',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            },

            {

                type: 'input_value',

                name: 'SUBSTRING'

            }

        ],

        output: 'Boolean',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_equals',

        message0: '%1 = %2',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT1'

            },

            {

                type: 'input_value',

                name: 'TEXT2'

            }

        ],

        output: 'Boolean',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_trim',

        message0: 'trim %1',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_uppercase',

        message0: 'uppercase %1',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_lowercase',

        message0: 'lowercase %1',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_replace',

        message0: 'replace %1 with %2 in %3',

        args0: [

            {

                type: 'input_value',

                name: 'FIND'

            },

            {

                type: 'input_value',

                name: 'REPLACE'

            },

            {

                type: 'input_value',

                name: 'TEXT'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_substring',

        message0: 'substring of %1 from %2 to %3',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            },

            {

                type: 'input_value',

                name: 'START',

                check: 'Number'

            },

            {

                type: 'input_value',

                name: 'END',

                check: 'Number'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'text_reverse',

        message0: 'reverse %1',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_repeat',

        message0: 'repeat %1 %2 times',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            },

            {

                type: 'input_value',

                name: 'TIMES',

                check: 'Number'

            }

        ],

        output: 'String',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_startswith',

        message0: '%1 starts with %2?',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            },

            {

                type: 'input_value',

                name: 'PREFIX'

            }

        ],

        output: 'Boolean',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_endswith',

        message0: '%1 ends with %2?',

        args0: [

            {

                type: 'input_value',

                name: 'TEXT'

            },

            {

                type: 'input_value',

                name: 'SUFFIX'

            }

        ],

        output: 'Boolean',

        colour: TEXT_COLOUR

    },

    {

        type: 'text_indexof',

        message0: 'position of %1 in %2',

        args0: [

            {

                type: 'input_value',

                name: 'SEARCH'

            },

            {

                type: 'input_value',

                name: 'TEXT'

            }

        ],

        output: 'Number',

        colour: TEXT_COLOUR

    }

];

export function registerTextBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(textBlocks);

}

export default textBlocks;
