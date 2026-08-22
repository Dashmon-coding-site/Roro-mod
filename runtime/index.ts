import * as looks from './opcodes/looks';

import * as events from './opcodes/events';

import * as control from './opcodes/control';

import * as sensing from './opcodes/sensing';

import * as operators from './opcodes/operators';

import * as variables from './opcodes/variables';

import * as sound from './opcodes/sound';

import * as pen from './opcodes/pen';

import * as text from './opcodes/text';

import * as broadcast from './opcodes/broadcast';

import * as procedures from './opcodes/procedures';

import * as lists from './opcodes/lists';

import * as network from './opcodes/network';

import * as debug from './opcodes/debug';

export type OpcodeHandler = (...args: any[]) => any;

export type OpcodeModule = Record<string, unknown>;

export const opcodeModules: Record<string, OpcodeModule> = {

    motion,

    looks,

    events,

    control,

    sensing,

    operators,

    variables,

    sound,

    pen,

    text,

    broadcast,

    procedures,

    lists,

    network,

    debug

};

export class ScratchRuntime {

    private readonly handlers = new Map<string, OpcodeHandler>();

    registerOpcode(opcode: string, handler: OpcodeHandler): void {

        if (this.handlers.has(opcode)) {

            throw new Error(`Opcode already registered: ${opcode}`);

        }

        this.handlers.set(opcode, handler);

    }

    registerModule(

        module: OpcodeModule,

        prefix?: string

    ): void {

        for (const [name, value] of Object.entries(module)) {

            if (typeof value !== 'function') {

                continue;

            }

            const opcode = prefix

                ? `${prefix}.${name}`

                : name;

            this.registerOpcode(

                opcode,

                value as OpcodeHandler

            );

        }

    }

    registerAll(): void {

        for (const [name, module] of Object.entries(opcodeModules)) {

            this.registerModule(module, name);

        }

    }

    hasOpcode(opcode: string): boolean {

        return this.handlers.has(opcode);

    }

    getOpcode(opcode: string): OpcodeHandler | undefined {

        return this.handlers.get(opcode);

    }

    async execute(

        opcode: string,

        ...args: any[]

    ): Promise<any> {

        const handler = this.handlers.get(opcode);

        if (!handler) {

            throw new Error(`Unknown opcode: ${opcode}`);

        }

        return await handler(...args);

    }

    getRegisteredOpcodes(): string[] {

        return [...this.handlers.keys()];

    }

    clear(): void {

        this.handlers.clear();

    }

}

export function createRuntime(): ScratchRuntime {

    const runtime = new ScratchRuntime();

    runtime.registerAll();

    return runtime;

}

export const runtime = createRuntime();

export default runtime;
