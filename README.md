# jupyterlab-logout

Logout Button for JupyterLab

![screenshot](./doc/screenshot.png)

## Prerequisites

* JupyterLab 1.0+

## Installation

```bash
jupyter labextension install jupyterlab-logout jupyterlab-topbar-extension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
# Install dependencies
jlpm

# Build TypeScript source
jlpm build

# Link your development version of the extension with JupyterLab
jupyter labextension link .

# Rebuild TypeScript source after making changes
jlpm build

# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

