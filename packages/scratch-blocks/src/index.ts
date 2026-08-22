import * as Blockly from 'blockly';

export type ScratchModCategory =

    | 'motion'

    | 'looks'

    | 'sound'

    | 'events'

    | 'control'

    | 'sensing'

    | 'operators'

    | 'variables'

    | 'myBlocks'

    | 'extensions';

export type ScratchModBlockType =

    | 'command'

    | 'reporter'

    | 'boolean'

    | 'hat'

    | 'cap'

    | 'conditional';

export interface ScratchModBlock {

    opcode: string;

    text: string;

    category: ScratchModCategory;

    type: ScratchModBlockType;

    args?: string[];

    branchCount?: number;

    color?: string;

}

/*

 * Scratch Mod block catalog.

 *

 * The VM should use these opcodes as the machine-readable identifiers.

 * Blockly is responsible for the visual workspace; the VM is responsible

 * for executing the resulting block structure.

 */

export const BLOCKS: ScratchModBlock[] = [

    // ============================================================

    // MOTION

    // ============================================================

    {opcode: 'motion_movesteps', text: 'move [STEPS] steps', category: 'motion', type: 'command', args: ['STEPS']},

    {opcode: 'motion_turnright', text: 'turn ↻ [DEGREES] degrees', category: 'motion', type: 'command', args: ['DEGREES']},

    {opcode: 'motion_turnleft', text: 'turn ↺ [DEGREES] degrees', category: 'motion', type: 'command', args: ['DEGREES']},

    {opcode: 'motion_pointindirection', text: 'point in direction [DIRECTION]', category: 'motion', type: 'command', args: ['DIRECTION']},

    {opcode: 'motion_pointtowards', text: 'point towards [TOWARDS]', category: 'motion', type: 'command', args: ['TOWARDS']},

    {opcode: 'motion_gotoxy', text: 'go to x: [X] y: [Y]', category: 'motion', type: 'command', args: ['X', 'Y']},

    {opcode: 'motion_goto', text: 'go to [TO]', category: 'motion', type: 'command', args: ['TO']},

    {opcode: 'motion_glideto', text: 'glide [SECS] secs to [TO]', category: 'motion', type: 'command', args: ['SECS', 'TO']},

    {opcode: 'motion_glidesecstoxy', text: 'glide [SECS] secs to x: [X] y: [Y]', category: 'motion', type: 'command', args: ['SECS', 'X', 'Y']},

    {opcode: 'motion_changexby', text: 'change x by [DX]', category: 'motion', type: 'command', args: ['DX']},

    {opcode: 'motion_setx', text: 'set x to [X]', category: 'motion', type: 'command', args: ['X']},

    {opcode: 'motion_changeyby', text: 'change y by [DY]', category: 'motion', type: 'command', args: ['DY']},

    {opcode: 'motion_sety', text: 'set y to [Y]', category: 'motion', type: 'command', args: ['Y']},

    {opcode: 'motion_ifonedgebounce', text: 'if on edge, bounce', category: 'motion', type: 'command'},

    {opcode: 'motion_setrotationstyle', text: 'set rotation style [STYLE]', category: 'motion', type: 'command', args: ['STYLE']},

    {opcode: 'motion_xposition', text: 'x position', category: 'motion', type: 'reporter'},

    {opcode: 'motion_yposition', text: 'y position', category: 'motion', type: 'reporter'},

    {opcode: 'motion_direction', text: 'direction', category: 'motion', type: 'reporter'},

    // ============================================================

    // LOOKS

    // ============================================================

    {opcode: 'looks_sayforsecs', text: 'say [MESSAGE] for [SECS] seconds', category: 'looks', type: 'command', args: ['MESSAGE', 'SECS']},

    {opcode: 'looks_say', text: 'say [MESSAGE]', category: 'looks', type: 'command', args: ['MESSAGE']},

    {opcode: 'looks_thinkforsecs', text: 'think [MESSAGE] for [SECS] seconds', category: 'looks', type: 'command', args: ['MESSAGE', 'SECS']},

    {opcode: 'looks_think', text: 'think [MESSAGE]', category: 'looks', type: 'command', args: ['MESSAGE']},

    {opcode: 'looks_switchcostumeto', text: 'switch costume to [COSTUME]', category: 'looks', type: 'command', args: ['COSTUME']},

    {opcode: 'looks_nextcostume', text: 'next costume', category: 'looks', type: 'command'},

    {opcode: 'looks_switchbackdropto', text: 'switch backdrop to [BACKDROP]', category: 'looks', type: 'command', args: ['BACKDROP']},

    {opcode: 'looks_nextbackdrop', text: 'next backdrop', category: 'looks', type: 'command'},

    {opcode: 'looks_changesizeby', text: 'change size by [CHANGE]', category: 'looks', type: 'command', args: ['CHANGE']},

    {opcode: 'looks_setsizeto', text: 'set size to [SIZE]%', category: 'looks', type: 'command', args: ['SIZE']},

    {opcode: 'looks_changeeffectby', text: 'change [EFFECT] effect by [CHANGE]', category: 'looks', type: 'command', args: ['EFFECT', 'CHANGE']},

    {opcode: 'looks_seteffectto', text: 'set [EFFECT] effect to [VALUE]', category: 'looks', type: 'command', args: ['EFFECT', 'VALUE']},

    {opcode: 'looks_cleargraphiceffects', text: 'clear graphic effects', category: 'looks', type: 'command'},

    {opcode: 'looks_show', text: 'show', category: 'looks', type: 'command'},

    {opcode: 'looks_hide', text: 'hide', category: 'looks', type: 'command'},

    {opcode: 'looks_gotofrontback', text: 'go to [FRONT_BACK] layer', category: 'looks', type: 'command', args: ['FRONT_BACK']},

    {opcode: 'looks_goforwardbackwardlayers', text: 'go [FORWARD_BACKWARD] [NUM] layers', category: 'looks', type: 'command', args: ['FORWARD_BACKWARD', 'NUM']},

    {opcode: 'looks_costumenumbername', text: 'costume [NUMBER_NAME]', category: 'looks', type: 'reporter', args: ['NUMBER_NAME']},

    {opcode: 'looks_backdropnumbername', text: 'backdrop [NUMBER_NAME]', category: 'looks', type: 'reporter', args: ['NUMBER_NAME']},

    {opcode: 'looks_size', text: 'size', category: 'looks', type: 'reporter'},

    // ============================================================

    // SOUND

    // ============================================================

    {opcode: 'sound_play', text: 'start sound [SOUND]', category: 'sound', type: 'command', args: ['SOUND']},

    {opcode: 'sound_playuntildone', text: 'play sound [SOUND] until done', category: 'sound', type: 'command', args: ['SOUND']},

    {opcode: 'sound_stopallsounds', text: 'stop all sounds', category: 'sound', type: 'command'},

    {opcode: 'sound_changeeffectby', text: 'change [EFFECT] effect by [VALUE]', category: 'sound', type: 'command', args: ['EFFECT', 'VALUE']},

    {opcode: 'sound_seteffectto', text: 'set [EFFECT] effect to [VALUE]', category: 'sound', type: 'command', args: ['EFFECT', 'VALUE']},

    {opcode: 'sound_cleareffects', text: 'clear sound effects', category: 'sound', type: 'command'},

    {opcode: 'sound_changevolumeby', text: 'change volume by [VALUE]', category: 'sound', type: 'command', args: ['VALUE']},

    {opcode: 'sound_setvolumeto', text: 'set volume to [VALUE]%', category: 'sound', type: 'command', args: ['VALUE']},

    {opcode: 'sound_volume', text: 'volume', category: 'sound', type: 'reporter'},

    // ============================================================

    // EVENTS

    // ============================================================

    {opcode: 'event_whenflagclicked', text: 'when ⚑ clicked', category: 'events', type: 'hat'},

    {opcode: 'event_whenkeypressed', text: 'when [KEY] key pressed', category: 'events', type: 'hat', args: ['KEY']},

    {opcode: 'event_whenthisspriteclicked', text: 'when this sprite clicked', category: 'events', type: 'hat'},

    {opcode: 'event_whenstageclicked', text: 'when stage clicked', category: 'events', type: 'hat'},

    {opcode: 'event_whenbackdropswitchesto', text: 'when backdrop switches to [BACKDROP]', category: 'events', type: 'hat', args: ['BACKDROP']},

    {opcode: 'event_whengreaterthan', text: 'when [VALUE] > [THRESHOLD]', category: 'events', type: 'hat', args: ['VALUE', 'THRESHOLD']},

    {opcode: 'event_whenbroadcastreceived', text: 'when I receive [BROADCAST_OPTION]', category: 'events', type: 'hat', args: ['BROADCAST_OPTION']},

    {opcode: 'event_broadcast', text: 'broadcast [BROADCAST_INPUT]', category: 'events', type: 'command', args: ['BROADCAST_INPUT']},

    {opcode: 'event_broadcastandwait', text: 'broadcast [BROADCAST_INPUT] and wait', category: 'events', type: 'command', args: ['BROADCAST_INPUT']},

    // ============================================================

    // CONTROL

    // ============================================================

    {opcode: 'control_wait', text: 'wait [DURATION] seconds', category: 'control', type: 'command', args: ['DURATION']},

    {opcode: 'control_repeat', text: 'repeat [TIMES]', category: 'control', type: 'command', args: ['TIMES']},

    {opcode: 'control_forever', text: 'forever', category: 'control', type: 'command'},

    {opcode: 'control_if', text: 'if [CONDITION] then', category: 'control', type: 'conditional', args: ['CONDITION'], branchCount: 1},

    {opcode: 'control_if_else', text: 'if [CONDITION] then else', category: 'control', type: 'conditional', args: ['CONDITION'], branchCount: 2},

    {opcode: 'control_wait_until', text: 'wait until [CONDITION]', category: 'control', type: 'command', args: ['CONDITION']},

    {opcode: 'control_repeat_until', text: 'repeat until [CONDITION]', category: 'control', type: 'command', args: ['CONDITION']},

    {opcode: 'control_stop', text: 'stop [STOP_OPTION]', category: 'control', type: 'cap', args: ['STOP_OPTION']},

    {opcode: 'control_start_as_clone', text: 'when I start as a clone', category: 'control', type: 'hat'},

    {opcode: 'control_create_clone_of', text: 'create clone of [CLONE_OPTION]', category: 'control', type: 'command', args: ['CLONE_OPTION']},

    {opcode: 'control_delete_this_clone', text: 'delete this clone', category: 'control', type: 'cap'},

    {opcode: 'control_all_at_once', text: 'all at once', category: 'control', type: 'command'},

    // ============================================================

    // SENSING

    // ============================================================

    {opcode: 'sensing_touchingobject', text: 'touching [TOUCHINGOBJECT]?', category: 'sensing', type: 'boolean', args: ['TOUCHINGOBJECT']},

    {opcode: 'sensing_touchingcolor', text: 'touching color [COLOR]?', category: 'sensing', type: 'boolean', args: ['COLOR']},

    {opcode: 'sensing_coloristouchingcolor', text: 'color [COLOR] is touching [COLOR2]?', category: 'sensing', type: 'boolean', args: ['COLOR', 'COLOR2']},

    {opcode: 'sensing_distanceto', text: 'distance to [DISTANCETOMENU]', category: 'sensing', type: 'reporter', args: ['DISTANCETOMENU']},

    {opcode: 'sensing_askandwait', text: 'ask [QUESTION] and wait', category: 'sensing', type: 'command', args: ['QUESTION']},

    {opcode: 'sensing_answer', text: 'answer', category: 'sensing', type: 'reporter'},

    {opcode: 'sensing_keypressed', text: 'key [KEY_OPTION] pressed?', category: 'sensing', type: 'boolean', args: ['KEY_OPTION']},

    {opcode: 'sensing_mousedown', text: 'mouse down?', category: 'sensing', type: 'boolean'},

    {opcode: 'sensing_mousex', text: 'mouse x', category: 'sensing', type: 'reporter'},

    {opcode: 'sensing_mousey', text: 'mouse y', category: 'sensing', type: 'reporter'},

    {opcode: 'sensing_setdragmode', text: 'set drag mode [DRAG_MODE]', category: 'sensing', type: 'command', args: ['DRAG_MODE']},

    {opcode: 'sensing_loudness', text: 'loudness', category: 'sensing', type: 'reporter'},

    {opcode: 'sensing_timer', text: 'timer', category: 'sensing', type: 'reporter'},

    {opcode: 'sensing_resettimer', text: 'reset timer', category: 'sensing', type: 'command'},

    {opcode: 'sensing_of', text: '[PROPERTY] of [OBJECT]', category: 'sensing', type: 'reporter', args: ['PROPERTY', 'OBJECT']},

    {opcode: 'sensing_current', text: 'current [CURRENTMENU]', category: 'sensing', type: 'reporter', args: ['CURRENTMENU']},

    {opcode: 'sensing_dayssince2000', text: 'days since 2000', category: 'sensing', type: 'reporter'},

    {opcode: 'sensing_username', text: 'username', category: 'sensing', type: 'reporter'},

    // ============================================================

    // OPERATORS

    // ============================================================

    {opcode: 'operator_add', text: '[NUM1] + [NUM2]', category: 'operators', type: 'reporter', args: ['NUM1', 'NUM2']},

    {opcode: 'operator_subtract', text: '[NUM1] - [NUM2]', category: 'operators', type: 'reporter', args: ['NUM1', 'NUM2']},

    {opcode: 'operator_multiply', text: '[NUM1] × [NUM2]', category: 'operators', type: 'reporter', args: ['NUM1', 'NUM2']},

    {opcode: 'operator_divide', text: '[NUM1] / [NUM2]', category: 'operators', type: 'reporter', args: ['NUM1', 'NUM2']},

    {opcode: 'operator_random', text: 'pick random [FROM] to [TO]', category: 'operators', type: 'reporter', args: ['FROM', 'TO']},

    {opcode: 'operator_gt', text: '[OPERAND1] > [OPERAND2]', category: 'operators', type: 'boolean', args: ['OPERAND1', 'OPERAND2']},

    {opcode: 'operator_lt', text: '[OPERAND1] < [OPERAND2]', category: 'operators', type: 'boolean', args: ['OPERAND1', 'OPERAND2']},

    {opcode: 'operator_equals', text: '[OPERAND1] = [OPERAND2]', category: 'operators', type: 'boolean', args: ['OPERAND1', 'OPERAND2']},

    {opcode: 'operator_and', text: '[OPERAND1] and [OPERAND2]', category: 'operators', type: 'boolean', args: ['OPERAND1', 'OPERAND2']},

    {opcode: 'operator_or', text: '[OPERAND1] or [OPERAND2]', category: 'operators', type: 'boolean', args: ['OPERAND1', 'OPERAND2']},

    {opcode: 'operator_not', text: 'not [OPERAND]', category: 'operators', type: 'boolean', args: ['OPERAND']},

    {opcode: 'operator_join', text: 'join [STRING1] [STRING2]', category: 'operators', type: 'reporter', args: ['STRING1', 'STRING2']},

    {opcode: 'operator_letter_of', text: 'letter [LETTER] of [STRING]', category: 'operators', type: 'reporter', args: ['LETTER', 'STRING']},

    {opcode: 'operator_length', text: 'length of [STRING]', category: 'operators', type: 'reporter', args: ['STRING']},

    {opcode: 'operator_contains', text: '[STRING1] contains [STRING2]?', category: 'operators', type: 'boolean', args: ['STRING1', 'STRING2']},

    {opcode: 'operator_mod', text: '[NUM1] mod [NUM2]', category: 'operators', type: 'reporter', args: ['NUM1', 'NUM2']},

    {opcode: 'operator_round', text: 'round [NUM]', category: 'operators', type: 'reporter', args: ['NUM']},

    {opcode: 'operator_mathop', text: '[OPERATOR] of [NUM]', category: 'operators', type: 'reporter', args: ['OPERATOR', 'NUM']},

    // ============================================================

    // VARIABLES

    // ============================================================

    {opcode: 'data_variable', text: '[VARIABLE]', category: 'variables', type: 'reporter', args: ['VARIABLE']},

    {opcode: 'data_setvariableto', text: 'set [VARIABLE] to [VALUE]', category: 'variables', type: 'command', args: ['VARIABLE', 'VALUE']},

    {opcode: 'data_changevariableby', text: 'change [VARIABLE] by [VALUE]', category: 'variables', type: 'command', args: ['VARIABLE', 'VALUE']},

    {opcode: 'data_showvariable', text: 'show variable [VARIABLE]', category: 'variables', type: 'command', args: ['VARIABLE']},

    {opcode: 'data_hidevariable', text: 'hide variable [VARIABLE]', category: 'variables', type: 'command', args: ['VARIABLE']},

    {opcode: 'data_listcontents', text: '[LIST]', category: 'variables', type: 'reporter', args: ['LIST']},

    {opcode: 'data_addtolist', text: 'add [ITEM] to [LIST]', category: 'variables', type: 'command', args: ['ITEM', 'LIST']},

    {opcode: 'data_deleteoflist', text: 'delete [INDEX] of [LIST]', category: 'variables', type: 'command', args: ['INDEX', 'LIST']},

    {opcode: 'data_deletealloflist', text: 'delete all of [LIST]', category: 'variables', type: 'command', args: ['LIST']},

    {opcode: 'data_insertatlist', text: 'insert [ITEM] at [INDEX] of [LIST]', category: 'variables', type: 'command', args: ['ITEM', 'INDEX', 'LIST']},

    {opcode: 'data_replaceitemoflist', text: 'replace item [INDEX] of [LIST] with [ITEM]', category: 'variables', type: 'command', args: ['INDEX', 'LIST', 'ITEM']},

    {opcode: 'data_itemoflist', text: 'item [INDEX] of [LIST]', category: 'variables', type: 'reporter', args: ['INDEX', 'LIST']},

    {opcode: 'data_itemnumoflist', text: 'item # of [ITEM] in [LIST]', category: 'variables', type: 'reporter', args: ['ITEM', 'LIST']},

    {opcode: 'data_lengthoflist', text: 'length of [LIST]', category: 'variables', type: 'reporter', args: ['LIST']},

    {opcode: 'data_listcontainsitem', text: '[LIST] contains [ITEM]?', category: 'variables', type: 'boolean', args: ['LIST', 'ITEM']},

    {opcode: 'data_showlist', text: 'show list [LIST]', category: 'variables', type: 'command', args: ['LIST']},

    {opcode: 'data_hidelist', text: 'hide list [LIST]', category: 'variables', type: 'command', args: ['LIST']},

    // ============================================================

    // MY BLOCKS

    // ============================================================

    {opcode: 'procedures_definition', text: 'define [PROCEDURE]', category: 'myBlocks', type: 'hat', args: ['PROCEDURE']},

    {opcode: 'procedures_call', text: '[PROCEDURE]', category: 'myBlocks', type: 'command', args: ['PROCEDURE']},

    {opcode: 'procedures_prototype', text: 'define [PROCEDURE]', category: 'myBlocks', type: 'command', args: ['PROCEDURE']},

    {opcode: 'argument_reporter_string_number', text: '[VALUE]', category: 'myBlocks', type: 'reporter', args: ['VALUE']},

    {opcode: 'argument_reporter_boolean', text: '[VALUE]', category: 'myBlocks', type: 'boolean', args: ['VALUE']},

    // ============================================================

    // EXTRA MOD BLOCKS

    // ============================================================

    {opcode: 'mod_console_log', text: 'log [VALUE]', category: 'extensions', type: 'command', args: ['VALUE']},

    {opcode: 'mod_console_clear', text: 'clear console', category: 'extensions', type: 'command'},

    {opcode: 'mod_window_alert', text: 'show alert [MESSAGE]', category: 'extensions', type: 'command', args: ['MESSAGE']},

    {opcode: 'mod_window_title', text: 'set page title to [TITLE]', category: 'extensions', type: 'command', args: ['TITLE']},

    {opcode: 'mod_window_url', text: 'page URL', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_local_storage_set', text: 'save [KEY] as [VALUE]', category: 'extensions', type: 'command', args: ['KEY', 'VALUE']},

    {opcode: 'mod_local_storage_get', text: 'load [KEY]', category: 'extensions', type: 'reporter', args: ['KEY']},

    {opcode: 'mod_local_storage_delete', text: 'delete saved [KEY]', category: 'extensions', type: 'command', args: ['KEY']},

    {opcode: 'mod_json_parse', text: 'parse JSON [VALUE]', category: 'extensions', type: 'reporter', args: ['VALUE']},

    {opcode: 'mod_json_stringify', text: 'JSON stringify [VALUE]', category: 'extensions', type: 'reporter', args: ['VALUE']},

    // Game development

    {opcode: 'mod_game_start', text: 'start game', category: 'extensions', type: 'command'},

    {opcode: 'mod_game_end', text: 'end game', category: 'extensions', type: 'command'},

    {opcode: 'mod_game_score', text: 'game score', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_game_setscore', text: 'set game score to [VALUE]', category: 'extensions', type: 'command', args: ['VALUE']},

    {opcode: 'mod_game_addscore', text: 'change game score by [VALUE]', category: 'extensions', type: 'command', args: ['VALUE']},

    {opcode: 'mod_game_over', text: 'game over?', category: 'extensions', type: 'boolean'},

    // Keyboard

    {opcode: 'mod_keyboard_down', text: 'key [KEY] down?', category: 'extensions', type: 'boolean', args: ['KEY']},

    {opcode: 'mod_keyboard_any', text: 'any key down?', category: 'extensions', type: 'boolean'},

    {opcode: 'mod_keyboard_last', text: 'last key pressed', category: 'extensions', type: 'reporter'},

    // Mouse

    {opcode: 'mod_mouse_left', text: 'left mouse button down?', category: 'extensions', type: 'boolean'},

    {opcode: 'mod_mouse_middle', text: 'middle mouse button down?', category: 'extensions', type: 'boolean'},

    {opcode: 'mod_mouse_right', text: 'right mouse button down?', category: 'extensions', type: 'boolean'},

    // Time

    {opcode: 'mod_time_unix', text: 'Unix time', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_time_milliseconds', text: 'milliseconds', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_time_fps', text: 'FPS', category: 'extensions', type: 'reporter'},

    // Math extras

    {opcode: 'mod_math_pi', text: 'π', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_math_e', text: 'Euler number e', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_math_abs', text: 'absolute value of [VALUE]', category: 'extensions', type: 'reporter', args: ['VALUE']},

    {opcode: 'mod_math_sqrt', text: '√ [VALUE]', category: 'extensions', type: 'reporter', args: ['VALUE']},

    {opcode: 'mod_math_pow', text: '[BASE] ^ [EXPONENT]', category: 'extensions', type: 'reporter', args: ['BASE', 'EXPONENT']},

    // ============================================================

    // 3D / MODERN GAME BLOCKS

    // ============================================================

    {opcode: 'mod_3d_setposition', text: 'set 3D position x: [X] y: [Y] z: [Z]', category: 'extensions', type: 'command', args: ['X', 'Y', 'Z']},

    {opcode: 'mod_3d_movesteps', text: 'move 3D [STEPS] steps', category: 'extensions', type: 'command', args: ['STEPS']},

    {opcode: 'mod_3d_rotate', text: 'rotate 3D x: [X] y: [Y] z: [Z]', category: 'extensions', type: 'command', args: ['X', 'Y', 'Z']},

    {opcode: 'mod_3d_scale', text: 'set 3D scale to [SCALE]', category: 'extensions', type: 'command', args: ['SCALE']},

    {opcode: 'mod_3d_shape', text: 'set 3D shape to [SHAPE]', category: 'extensions', type: 'command', args: ['SHAPE']},

    {opcode: 'mod_3d_color', text: 'set 3D color to [COLOR]', category: 'extensions', type: 'command', args: ['COLOR']},

    {opcode: 'mod_3d_camera', text: 'set camera x: [X] y: [Y] z: [Z]', category: 'extensions', type: 'command', args: ['X', 'Y', 'Z']},

    // ============================================================

    // GAMEPAD

    // ============================================================

    {opcode: 'mod_gamepad_connected', text: 'gamepad connected?', category: 'extensions', type: 'boolean'},

    {opcode: 'mod_gamepad_button', text: 'gamepad button [BUTTON] pressed?', category: 'extensions', type: 'boolean', args: ['BUTTON']},

    {opcode: 'mod_gamepad_axis', text: 'gamepad axis [AXIS]', category: 'extensions', type: 'reporter', args: ['AXIS']},

    {opcode: 'mod_gamepad_leftx', text: 'left stick X', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_gamepad_lefty', text: 'left stick Y', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_gamepad_rightx', text: 'right stick X', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_gamepad_righty', text: 'right stick Y', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_gamepad_lefttrigger', text: 'left trigger', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_gamepad_righttrigger', text: 'right trigger', category: 'extensions', type: 'reporter'},

    {opcode: 'mod_gamepad_rumble', text: 'rumble gamepad for [SECONDS] seconds', category: 'extensions', type: 'command', args: ['SECONDS']},

    // ============================================================

    // DEBUG / DEVELOPMENT

    // ============================================================

    {opcode: 'mod_debug_break', text: 'break', category: 'extensions', type: 'command'},

    {opcode: 'mod_debug_log', text: 'debug [VALUE]', category: 'extensions', type: 'command', args: ['VALUE']},

    {opcode: 'mod_debug_assert', text: 'assert [CONDITION]', category: 'extensions', type: 'command', args: ['CONDITION']},

    {opcode: 'mod_debug_value', text: 'debug value [VALUE]', category: 'extensions', type: 'reporter', args: ['VALUE']},

    // ============================================================

    // MOD EVENTS

    // ============================================================

    {opcode: 'mod_whenmessage', text: 'when mod message [MESSAGE]', category: 'extensions', type: 'hat', args: ['MESSAGE']},

    {opcode: 'mod_sendmessage', text: 'send mod message [MESSAGE]', category: 'extensions', type: 'command', args: ['MESSAGE']},

    {opcode: 'mod_whenonline', text: 'when connection online', category: 'extensions', type: 'hat'},

    {opcode: 'mod_whenoffline', text: 'when connection offline', category: 'extensions', type: 'hat'},

    // ============================================================

    // ASYNC

    // ============================================================

    {opcode: 'mod_async_wait', text: 'wait for promise [VALUE]', category: 'extensions', type: 'command', args: ['VALUE']},

    {opcode: 'mod_async_fetch', text: 'fetch [URL]', category: 'extensions', type: 'reporter', args: ['URL']},

    // ============================================================

    // CUSTOM MOD

    // ============================================================

    {opcode: 'mod_comment', text: 'comment [TEXT]', category: 'extensions', type: 'command', args: ['TEXT']},

    {opcode: 'mod_run_once', text: 'run once', category: 'extensions', type: 'command'},

    {opcode: 'mod_run_every', text: 'run every [SECONDS] seconds', category: 'extensions', type: 'command', args: ['SECONDS']},

    {opcode: 'mod_stop_this_script', text: 'stop this script', category: 'extensions', type: 'cap'},

    {opcode: 'mod_restart_project', text: 'restart project', category: 'extensions', type: 'command'},

    {opcode: 'mod_reload_project', text: 'reload project', category: 'extensions', type: 'command'}

];

export const BLOCK_CATEGORIES: Record<ScratchModCategory, string[]> = {

    motion: [],

    looks: [],

    sound: [],

    events: [],

    control: [],

    sensing: [],

    operators: [],

    variables: [],

    myBlocks: [],

    extensions: []

};

for (const block of BLOCKS) {

    BLOCK_CATEGORIES[block.category].push(block.opcode);

}

/**

 * Return a block definition by opcode.

 */

export function getBlock(opcode: string): ScratchModBlock | undefined {

    return BLOCKS.find(block => block.opcode === opcode);

}

/**

 * Return every block belonging to a category.

 */

export function getBlocksByCategory(category: ScratchModCategory): ScratchModBlock[] {

    return BLOCKS.filter(block => block.category === category);

}

/**

 * Return all available opcodes.

 */

export function getOpcodes(): string[] {

    return BLOCKS.map(block => block.opcode);

}

/**

 * Register a simple Scratch Mod block with Blockly.

 *

 * This is deliberately kept separate from the VM. Scratch's architecture

 * lets the block editor define the visual block while the VM executes the

 * resulting opcode/inputs representation.

 */

export function registerBlock(block: ScratchModBlock): void {

    if (Blockly.Blocks[block.opcode]) {

        return;

    }

    Blockly.Blocks[block.opcode] = {

        init() {

            this.jsonInit({

                type: block.opcode,

                message0: block.text,

                args0: (block.args || []).map(name => ({

                    type: 'input_value',

                    name

                })),

                previousStatement: block.type === 'command' || block.type === 'cap',

                nextStatement: block.type === 'command',

                output:

                    block.type === 'reporter'

                        ? 'String'

                        : block.type === 'boolean'

                            ? 'Boolean'

                            : undefined,

                colour: block.color || categoryColor(block.category)

            });

        }

    };

}

/**

 * Register the complete block catalog.

 */

export function registerAllBlocks(): void {

    for (const block of BLOCKS) {

        registerBlock(block);

    }

}

/**

 * Return the default color for a Scratch Mod category.

 */

export function categoryColor(category: ScratchModCategory): string {

    switch (category) {

        case 'motion':

            return '#4C97FF';

        case 'looks':

            return '#9966FF';

        case 'sound':

            return '#CF63CF';

        case 'events':

            return '#FFBF00';

        case 'control':

            return '#FFAB19';

        case 'sensing':

            return '#5CB1D6';

        case 'operators':

            return '#59C059';

        case 'variables':

            return '#FF8C1A';

        case 'myBlocks':

            return '#FF6680';

        case 'extensions':

            return '#0FBD8C';

        default:

            return '#888888';

    }

}

export default {

    BLOCKS,

    BLOCK_CATEGORIES,

    getBlock,

    getBlocksByCategory,

    getOpcodes,

    registerBlock,

    registerAllBlocks,

    categoryColor

};
