 * as Blockly from 'blockly';

export const EXTENSIONS_COLOUR = '#5B5B5B';

export interface ScratchModExtension {

    id: string;

    name: string;

    colour: string;

    description: string;

    blocks: Blockly.BlockDefinition[];

}

export const extensionBlocks: Blockly.BlockDefinition[] = [

    // Extension manager

    {

        type: 'extension_enable',

        message0: 'enable extension %1',

        args0: [

            {

                type: 'input_value',

                name: 'EXTENSION'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_disable',

        message0: 'disable extension %1',

        args0: [

            {

                type: 'input_value',

                name: 'EXTENSION'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_enabled',

        message0: 'extension %1 enabled?',

        args0: [

            {

                type: 'input_value',

                name: 'EXTENSION'

            }

        ],

        output: 'Boolean',

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_loaded',

        message0: 'extension %1 loaded?',

        args0: [

            {

                type: 'input_value',

                name: 'EXTENSION'

            }

        ],

        output: 'Boolean',

        colour: EXTENSIONS_COLOUR

    },

    // Dynamic extension blocks

    {

        type: 'extension_call',

        message0: 'call extension %1',

        args0: [

            {

                type: 'input_value',

                name: 'CALL'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_value',

        message0: 'extension value %1',

        args0: [

            {

                type: 'input_value',

                name: 'VALUE'

            }

        ],

        output: null,

        colour: EXTENSIONS_COLOUR

    },

    // Mod extension utilities

    {

        type: 'extension_get',

        message0: 'get extension %1',

        args0: [

            {

                type: 'input_value',

                name: 'ID'

            }

        ],

        output: 'String',

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_list',

        message0: 'installed extensions',

        output: 'String',

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_count',

        message0: 'extension count',

        output: 'Number',

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_reload',

        message0: 'reload extension %1',

        args0: [

            {

                type: 'input_value',

                name: 'EXTENSION'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_unload',

        message0: 'unload extension %1',

        args0: [

            {

                type: 'input_value',

                name: 'EXTENSION'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EXTENSIONS_COLOUR

    },

    // Developer blocks

    {

        type: 'extension_register',

        message0: 'register extension %1',

        args0: [

            {

                type: 'input_value',

                name: 'ID'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EXTENSIONS_COLOUR

    },

    {

        type: 'extension_unregister',

        message0: 'unregister extension %1',

        args0: [

            {

                type: 'input_value',

                name: 'ID'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: EXTENSIONS_COLOUR

    }

];

export const registeredExtensions: ScratchModExtension[] = [];

export function registerExtension(

    extension: ScratchModExtension

): void {

    const existing = registeredExtensions.find(

        item => item.id === extension.id

    );

    if (existing) {

        throw new Error(

            `Extension "${extension.id}" is already registered.`

        );

    }

    registeredExtensions.push(extension);

    if (extension.blocks.length > 0) {

        Blockly.common.defineBlocksWithJsonArray(extension.blocks);

    }

}

export function unregisterExtension(id: string): boolean {

    const index = registeredExtensions.findIndex(

        extension => extension.id === id

    );

    if (index === -1) {

        return false;

    }

    registeredExtensions.splice(index, 1);

    return true;

}

export function getExtension(

    id: string

): ScratchModExtension | undefined {

    return registeredExtensions.find(

        extension => extension.id === id

    );

}

export function isExtensionRegistered(id: string): boolean {

    return registeredExtensions.some(

        extension => extension.id === id

    );

}

export function getExtensions(): ScratchModExtension[] {

    return [...registeredExtensions];

}

export function registerExtensionBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(extensionBlocks);

}

export default extensionBlocks;
