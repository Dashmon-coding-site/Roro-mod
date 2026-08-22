import * as Blockly from 'blockly';

const OPERATORS_COLOUR = '#59C059';

export const operatorBlocks: Blockly.BlockDefinition[] = [

    // Arithmetic

    {

        type: 'operator_add',

        message0: '%1 + %2',

        args0: [

            {type: 'input_value', name: 'NUM1', check: 'Number'},

            {type: 'input_value', name: 'NUM2', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_subtract',

        message0: '%1 - %2',

        args0: [

            {type: 'input_value', name: 'NUM1', check: 'Number'},

            {type: 'input_value', name: 'NUM2', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_multiply',

        message0: '%1 × %2',

        args0: [

            {type: 'input_value', name: 'NUM1', check: 'Number'},

            {type: 'input_value', name: 'NUM2', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_divide',

        message0: '%1 / %2',

        args0: [

            {type: 'input_value', name: 'NUM1', check: 'Number'},

            {type: 'input_value', name: 'NUM2', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_random',

        message0: 'pick random %1 to %2',

        args0: [

            {type: 'input_value', name: 'FROM', check: 'Number'},

            {type: 'input_value', name: 'TO', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    // Comparisons

    {

        type: 'operator_gt',

        message0: '%1 > %2',

        args0: [

            {type: 'input_value', name: 'OPERAND1'},

            {type: 'input_value', name: 'OPERAND2'}

        ],

        output: 'Boolean',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_lt',

        message0: '%1 < %2',

        args0: [

            {type: 'input_value', name: 'OPERAND1'},

            {type: 'input_value', name: 'OPERAND2'}

        ],

        output: 'Boolean',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_equals',

        message0: '%1 = %2',

        args0: [

            {type: 'input_value', name: 'OPERAND1'},

            {type: 'input_value', name: 'OPERAND2'}

        ],

        output: 'Boolean',

        colour: OPERATORS_COLOUR

    },

    // Logic

    {

        type: 'operator_and',

        message0: '%1 and %2',

        args0: [

            {type: 'input_value', name: 'OPERAND1', check: 'Boolean'},

            {type: 'input_value', name: 'OPERAND2', check: 'Boolean'}

        ],

        output: 'Boolean',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_or',

        message0: '%1 or %2',

        args0: [

            {type: 'input_value', name: 'OPERAND1', check: 'Boolean'},

            {type: 'input_value', name: 'OPERAND2', check: 'Boolean'}

        ],

        output: 'Boolean',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_not',

        message0: 'not %1',

        args0: [

            {type: 'input_value', name: 'OPERAND', check: 'Boolean'}

        ],

        output: 'Boolean',

        colour: OPERATORS_COLOUR

    },

    // Strings

    {

        type: 'operator_join',

        message0: 'join %1 %2',

        args0: [

            {type: 'input_value', name: 'STRING1'},

            {type: 'input_value', name: 'STRING2'}

        ],

        output: 'String',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_letter_of',

        message0: 'letter %1 of %2',

        args0: [

            {type: 'input_value', name: 'LETTER', check: 'Number'},

            {type: 'input_value', name: 'STRING'}

        ],

        output: 'String',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_length',

        message0: 'length of %1',

        args0: [

            {type: 'input_value', name: 'STRING'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_contains',

        message0: '%1 contains %2?',

        args0: [

            {type: 'input_value', name: 'STRING1'},

            {type: 'input_value', name: 'STRING2'}

        ],

        output: 'Boolean',

        colour: OPERATORS_COLOUR

    },

    // Math

    {

        type: 'operator_mod',

        message0: '%1 mod %2',

        args0: [

            {type: 'input_value', name: 'NUM1', check: 'Number'},

            {type: 'input_value', name: 'NUM2', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_round',

        message0: 'round %1',

        args0: [

            {type: 'input_value', name: 'NUM', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_mathop',

        message0: '%1 of %2',

        args0: [

            {type: 'input_value', name: 'OPERATOR'},

            {type: 'input_value', name: 'NUM', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    // Scratch Mod extras

    {

        type: 'operator_abs',

        message0: 'absolute value of %1',

        args0: [{type: 'input_value', name: 'VALUE', check: 'Number'}],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_sqrt',

        message0: '√ %1',

        args0: [{type: 'input_value', name: 'VALUE', check: 'Number'}],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_power',

        message0: '%1 ^ %2',

        args0: [

            {type: 'input_value', name: 'BASE', check: 'Number'},

            {type: 'input_value', name: 'EXPONENT', check: 'Number'}

        ],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_pi',

        message0: 'π',

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_e',

        message0: 'e',

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_floor',

        message0: 'floor %1',

        args0: [{type: 'input_value', name: 'VALUE', check: 'Number'}],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_ceil',

        message0: 'ceil %1',

        args0: [{type: 'input_value', name: 'VALUE', check: 'Number'}],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_sin',

        message0: 'sin %1',

        args0: [{type: 'input_value', name: 'VALUE', check: 'Number'}],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_cos',

        message0: 'cos %1',

        args0: [{type: 'input_value', name: 'VALUE', check: 'Number'}],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_tan',

        message0: 'tan %1',

        args0: [{type: 'input_value', name: 'VALUE', check: 'Number'}],

        output: 'Number',

        colour: OPERATORS_COLOUR

    },

    // Extra logic

    {

        type: 'operator_xor',

        message0: '%1 xor %2',

        args0: [

            {type: 'input_value', name: 'OPERAND1', check: 'Boolean'},

            {type: 'input_value', name: 'OPERAND2', check: 'Boolean'}

        ],

        output: 'Boolean',

        colour: OPERATORS_COLOUR

    },

    {

        type: 'operator_ifelsevalue',

        message0: 'if %1 then %2 else %3',

        args0: [

            {type: 'input_value', name: 'CONDITION', check: 'Boolean'},

            {type: 'input_value', name: 'VALUE1'},

            {type: 'input_value', name: 'VALUE2'}

        ],

        output: 'String',

        colour: OPERATORS_COLOUR

    }

];

export function registerOperatorBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(operatorBlocks);

}

export default operatorBlocks;
