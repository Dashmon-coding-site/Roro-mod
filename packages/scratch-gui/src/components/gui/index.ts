import * as Blockly from 'blockly';

import { toolbox } from './toolbox';

import { registerAllBlocks } from '../blocks';

export interface ScratchWorkspaceOptions {

    container: HTMLElement;

}

let workspace: Blockly.WorkspaceSvg | null = null;

export function createScratchWorkspace(

    options: ScratchWorkspaceOptions

): Blockly.WorkspaceSvg {

    if (workspace) {

        workspace.dispose();

        workspace = null;

    }

    // Register every block before creating the workspace.

    registerAllBlocks();

    workspace = Blockly.inject(options.container, {

        toolbox,

        renderer: 'zelos',

        trashcan: true,

        zoom: {

            controls: true,

            wheel: true,

            startScale: 1,

            maxScale: 2,

            minScale: 0.5,

            scaleSpeed: 1.1

        },

        grid: {

            spacing: 24,

            length: 1,

            colour: '#CCCCCC',

            snap: true

        },

        move: {

            scrollbars: true,

            drag: true,

            wheel: true

        }

    });

    return workspace;

}

export function getScratchWorkspace(): Blockly.WorkspaceSvg | null {

    return workspace;

}

export function disposeScratchWorkspace(): void {

    if (!workspace) {

        return;

    }

    workspace.dispose();

    workspace = null;

}

export function resizeScratchWorkspace(): void {

    if (!workspace) {

        return;

    }

    Blockly.svgResize(workspace);

}

export function refreshScratchWorkspace(): void {

    if (!workspace) {

        return;

    }

    Blockly.svgResize(workspace);

    workspace.render();

}

export default createScratchWorkspace;
<div id="scratch-workspace"></div>
  import { createScratchWorkspace } from './gui';

const container = document.getElementById('scratch-workspace');

if (!container) {

    throw new Error('Scratch workspace container was not found.');

}

createScratchWorkspace({

    container

});
