# jupyterlab-logout

## Archived

This repository is now archived. `jupyterlab-logout` has been moved to https://github.com/jupyterlab-contrib/jupyterlab-topbar.

Check the installation instructions in https://github.com/jupyterlab-contrib/jupyterlab-topbar to learn how to install the extension.

---

[![Extension status](https://img.shields.io/badge/status-ready-success "ready to be used")](https://jupyterlab-contrib.github.io/)
![Github Actions Status](https://github.com/jupyterlab-contrib/jupyterlab-logout/workflows/Build/badge.svg)

Logout Button for JupyterLab

![screenshot](./doc/screenshot.png)

## Requirements

* JupyterLab >= 3.0

## Install

```bash
pip install jupyterlab-logout
```

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab-logout directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm run build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Uninstall

```bash
pip uninstall jupyterlab-logout
```
