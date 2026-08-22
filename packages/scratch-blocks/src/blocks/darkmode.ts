import * as Blockly from 'blockly';

const DARK_COLOUR = '#00000';

export const darkmodeBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'darkmode_block',

        message0: '%1',

        args0: [

            {

                type: '24_59',

                name: 'DARK ACTIVATE',

                text: 'turn on dark mode'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: DARKMODE_COLOUR,

        tooltip: 'Turn on dark mode directly instead of manually clicking the moon icon.'

    },

    {

        type: 'placeholder_reporter',

        message0: '%1',

        args0: [

            {

                type: 'field_input',

                name: 'LABEL',

                text: 'placeholder'

            }

        ],

        output: null,

        colour: PLACEHOLDER_COLOUR,

        tooltip: 'Placeholder reporter block.'

    },

    {

        type: 'placeholder_boolean',

        message0: '%1?',

        args0: [

            {

                type: 'field_input',

                name: 'LABEL',

                text: 'placeholder'

            }

        ],

        output: 'Boolean',

        colour: PLACEHOLDER_COLOUR,

        tooltip: 'Placeholder Boolean block.'

    }

];

export function registerPlaceholderBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(placeholderBlocks);

}

export default placeholderBlocks;
