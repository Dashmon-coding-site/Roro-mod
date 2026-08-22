import * as Blockly from 'blockly';

const DEBUG_COLOUR = '#777777';

export const debugBlocks: Blockly.BlockDefinition[] = [

    {

        type: 'debug_log',

        message0: 'log %1',

        args0: [

            {

                type: 'input_value',

                name: 'VALUE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_warn',

        message0: 'warn %1',

        args0: [

            {

                type: 'input_value',

                name: 'VALUE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_error',

        message0: 'error %1',

        args0: [

            {

                type: 'input_value',

                name: 'VALUE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_assert',

        message0: 'assert %1',

        args0: [

            {

                type: 'input_value',

                name: 'CONDITION',

                check: 'Boolean'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_breakpoint',

        message0: 'breakpoint',

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_trace',

        message0: 'trace %1',

        args0: [

            {

                type: 'input_value',

                name: 'VALUE'

            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_value',

        message0: 'debug value %1',

        args0: [

            {

                type: 'input_value',

                name: 'VALUE'

            }

        ],

        output: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_fps',

        message0: 'debug FPS',

        output: 'Number',

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_memory',

        message0: 'debug memory usage',

        output: 'Number',

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_runtime',

        message0: 'runtime status',

        output: 'String',

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_pause',

        message0: 'pause debugger',

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_resume',

        message0: 'resume debugger',

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    },

    {

        type: 'debug_clear',

        message0: 'clear debug console',

        previousStatement: null,

        nextStatement: null,

        colour: DEBUG_COLOUR

    }

];

export function registerDebugBlocks(): void {

    Blockly.common.defineBlocksWithJsonArray(debugBlocks);

}

export default debugBlocks;
import { registerMotionBlocks } from './motion';

import { registerLooksBlocks } from './looks';

import { registerEventBlocks } from './events';

import { registerControlBlocks } from './control';

import { registerSensingBlocks } from './sensing';

import { registerOperatorBlocks } from './operators';

import { registerVariableBlocks } from './variables';

import { registerSoundBlocks } from './sound';

import { registerPenBlocks } from './pen';

import { registerExtensionBlocks } from './extensions';

import { registerTextBlocks } from './text';

import { registerBroadcastBlocks } from './broadcast';

import { registerProcedureBlocks } from './procedures';

import { registerListBlocks } from './lists';

import { registerNetworkBlocks } from './network';

import { registerDarkmodeBlocks } from './dark';

import { registerDebugBlocks } from './debug';

export function registerAllBlocks(): void {

    registerMotionBlocks();

    registerLooksBlocks();

    registerEventBlocks();

    registerControlBlocks();

    registerSensingBlocks();

    registerOperatorBlocks();

    registerVariableBlocks();

    registerSoundBlocks();

    registerPenBlocks();

    registerExtensionBlocks();

    registerTextBlocks();

    registerBroadcastBlocks();

    registerProcedureBlocks();

    registerListBlocks();

    registerNetworkBlocks();

    registerDarkBlocks();

    registerDebugBlocks();

}

export {

    registerDebugBlocks

};
