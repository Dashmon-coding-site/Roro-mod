# CLAUDE.md

## Project Overview

This project is a modern Scratch-based editor and coding platform.

## Development Guidelines

- Use Node.js 20.

- Use npm for package management.

- Keep changes focused on the requested feature.

- Preserve the existing Scratch architecture.

- Avoid unnecessary dependencies and unrelated refactoring.

- Follow the conventions already established in the repository.

## Monorepo Structure

The project uses an npm workspaces monorepo.

Core packages include:

- `packages/scratch-gui` for the editor interface.

- `packages/scratch-vm` for running Scratch projects.

- `packages/scratch-render` for rendering the stage.

- `packages/scratch-paint` for the paint editor.

- `packages/scratch-storage` for project and asset storage.

- `packages/scratch-svg-renderer` for SVG processing.

## Commands

Run commands from the repository root when working across packages:

```bash

npm run build

npm test

npm run clean
