export interface ToolboxBlock {

    kind: 'block';

    type: string;

}

export interface ToolboxCategory {

    kind: 'category';

    id: string;

    name: string;

    colour: string;

    contents: ToolboxBlock[];

}

export interface ToolboxDefinition {

    kind: 'categoryToolbox';

    contents: ToolboxCategory[];

}

const category = (

    id: string,

    name: string,

    colour: string,

    blocks: string[]

): ToolboxCategory => ({

    kind: 'category',

    id,

    name,

    colour,

    contents: blocks.map(type => ({

        kind: 'block',

        type

    }))

});

export const toolbox: ToolboxDefinition = {

    kind: 'categoryToolbox',

    contents: [

        category('motion', 'Motion', '#4C97FF', [

            'motion_movesteps',

            'motion_turnright',

            'motion_turnleft',

            'motion_goto',

            'motion_glideto',

            'motion_pointindirection',

            'motion_pointtowards',

            'motion_changexby',

            'motion_setx',

            'motion_changeyby',

            'motion_sety',

            'motion_xposition',

            'motion_yposition',

            'motion_direction'

        ]),

        category('looks', 'Looks', '#9966FF', [

            'looks_say',

            'looks_sayforsecs',

            'looks_think',

            'looks_thinkforsecs',

            'looks_switchcostumeto',

            'looks_nextcostume',

            'looks_switchbackdropto',

            'looks_nextbackdrop',

            'looks_changeeffectby',

            'looks_seteffectto',

            'looks_cleargraphiceffects',

            'looks_changesizeby',

            'looks_setsizeto',

            'looks_show',

            'looks_hide'

        ]),

        category('events', 'Events', '#FFBF00', [

            'event_whenflagclicked',

            'event_whenkeypressed',

            'event_whenthisspriteclicked',

            'event_whenstageclicked',

            'event_whenbackdropswitchesto',

            'event_whengreaterthan',

            'event_whenbroadcastreceived'

        ]),

        category('control', 'Control', '#FFAB19', [

            'control_wait',

            'control_repeat',

            'control_forever',

            'control_if',

            'control_if_else',

            'control_wait_until',

            'control_repeat_until',

            'control_stop',

            'control_create_clone_of',

            'control_start_as_clone',

            'control_delete_this_clone'

        ]),

        category('sensing', 'Sensing', '#5CB1D6', [

            'sensing_touchingobject',

            'sensing_touchingcolor',

            'sensing_coloristouchingcolor',

            'sensing_distanceto',

            'sensing_askandwait',

            'sensing_answer',

            'sensing_keypressed',

            'sensing_mousedown',

            'sensing_mousex',

            'sensing_mousey',

            'sensing_loudness',

            'sensing_timer',

            'sensing_resettimer',

            'sensing_username'

        ]),

        category('operators', 'Operators', '#59C059', [

            'operator_add',

            'operator_subtract',

            'operator_multiply',

            'operator_divide',

            'operator_random',

            'operator_gt',

            'operator_lt',

            'operator_equals',

            'operator_and',

            'operator_or',

            'operator_not',

            'operator_join',

            'operator_letter_of',

            'operator_length',

            'operator_contains'

        ]),

        category('variables', 'Variables', '#FF8C1A', [

            'variables_set',

            'variables_change',

            'variables_show',

            'variables_hide',

            'variables_variable'

        ]),

        category('sound', 'Sound', '#CF63CF', [

            'sound_play',

            'sound_playuntildone',

            'sound_stopallsounds',

            'sound_changeeffectby',

            'sound_seteffectto',

            'sound_cleareffects',

            'sound_changevolumeby',

            'sound_setvolumeto',

            'sound_volume',

            'sound_fadeout',

            'sound_fadein',

            'sound_setpan',

            'sound_pan',

            'sound_pitch',

            'sound_setpitch',

            'sound_playnote',

            'sound_settempo',

            'sound_changetempoby',

            'sound_tempo'

        ]),

        category('pen', 'Pen', '#0FBD8C', [

            'pen_clear',

            'pen_stamp',

            'pen_penDown',

            'pen_penUp',

            'pen_setPenColorToColor',

            'pen_changePenColorParamBy',

            'pen_setPenColorParamTo',

            'pen_changePenSizeBy',

            'pen_setPenSizeTo',

            'pen_setPenOpacityTo',

            'pen_changePenOpacityBy',

            'pen_setPenColorHex',

            'pen_setPenGradient',

            'pen_setPenBlendMode',

            'pen_rotateStamp'

        ]),

        category('text', 'Text', '#4C97FF', [

            'text',

            'text_join',

            'text_length',

            'text_letter',

            'text_contains',

            'text_equals',

            'text_trim',

            'text_uppercase',

            'text_lowercase',

            'text_replace',

            'text_substring',

            'text_reverse',

            'text_repeat',

            'text_startswith',

            'text_endswith',

            'text_indexof'

        ]),

        category('broadcast', 'Broadcast', '#FFBF00', [

            'broadcast_broadcast',

            'broadcast_broadcastandwait',

            'broadcast_whenreceived',

            'broadcast_send',

            'broadcast_senddata',

            'broadcast_lastmessage',

            'broadcast_messagecount'

        ]),

        category('procedures', 'My Blocks', '#FF6680', [

            'procedures_definition',

            'procedures_call',

            'procedures_return',

            'procedures_return_empty',

            'procedures_argument_reporter_string',

            'procedures_argument_reporter_number',

            'procedures_argument_reporter_boolean',

            'procedures_call_with_return',

            'procedures_create',

            'procedures_delete',

            'procedures_exists',

            'procedures_run_async',

            'procedures_run_with_screen_refresh'

        ]),

        category('lists', 'Lists', '#FF661A', [

            'lists_create_with',

            'lists_add',

            'lists_delete',

            'lists_delete_all',

            'lists_insert',

            'lists_replace',

            'lists_item',

            'lists_item_number',

            'lists_length',

            'lists_contains',

            'lists_show',

            'lists_hide',

            'lists_sort',

            'lists_reverse',

            'lists_shuffle',

            'lists_copy',

            'lists_join',

            'lists_clear'

        ]),

        category('network', 'Network', '#4C97FF', [

            'network_online',

            'network_request',

            'network_request_method',

            'network_response',

            'network_status',

            'network_response_header',

            'network_request_json',

            'network_request_with_data',

            'network_get',

            'network_post',

            'network_abort',

            'network_loading',

            'network_error',

            'network_clear'

        ]),

        category('extensions', 'Extensions', '#5B5B5B', [

            'extension_enable',

            'extension_disable',

            'extension_enabled',

            'extension_loaded',

            'extension_call',

            'extension_value',

            'extension_get',

            'extension_list',

            'extension_count',

            'extension_reload',

            'extension_unload',

            'extension_register',

            'extension_unregister'

        ]),

        category('debug', 'Debug', '#777777', [

            'debug_log',

            'debug_warn',

            'debug_error',

            'debug_assert',

            'debug_breakpoint',

            'debug_trace',

            'debug_value',

            'debug_fps',

            'debug_memory',

            'debug_runtime',

            'debug_pause',

            'debug_resume',

            'debug_clear'

        ])

    ]

};

export function getToolbox(): ToolboxDefinition {

    return toolbox;

}

export default toolbox;
