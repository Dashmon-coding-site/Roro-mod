export type BlockInput = unknown;

export interface BlockNode {

    type: string;

    inputs?: Record<string, BlockInput>;

    fields?: Record<string, unknown>;

}

export interface GeneratedInstruction {

    opcode: string;

    args: unknown[];

}

export type BlockGenerator = (

    block: BlockNode

) => GeneratedInstruction;

export class GeneratorRegistry {

    private readonly generators = new Map<string, BlockGenerator>();

    register(type: string, generator: BlockGenerator): void {

        if (this.generators.has(type)) {

            throw new Error(`Generator already registered: ${type}`);

        }

        this.generators.set(type, generator);

    }

    registerMany(

        generators: Record<string, BlockGenerator>

    ): void {

        for (const [type, generator] of Object.entries(generators)) {

            this.register(type, generator);

        }

    }

    has(type: string): boolean {

        return this.generators.has(type);

    }

    get(type: string): BlockGenerator | undefined {

        return this.generators.get(type);

    }

    generate(block: BlockNode): GeneratedInstruction {

        const generator = this.generators.get(block.type);

        if (!generator) {

            throw new Error(

                `No generator registered for block: ${block.type}`

            );

        }

        return generator(block);

    }

    getRegisteredTypes(): string[] {

        return [...this.generators.keys()];

    }

    clear(): void {

        this.generators.clear();

    }

}

export const generators = new GeneratorRegistry();

export function registerGenerator(

    type: string,

    generator: BlockGenerator

): void {

    generators.register(type, generator);

}

export function generateBlock(

    block: BlockNode

): GeneratedInstruction {

    return generators.generate(block);

}

export function createInstruction(

    opcode: string,

    ...args: unknown[]

): GeneratedInstruction {

    return {

        opcode,

        args

    };

}

export default generators;
