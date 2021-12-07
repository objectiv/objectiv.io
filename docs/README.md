# Objectiv Documentation

## Editing documentation pages

The documentation pages are a standalone Docusaurus application, under `/docs/`.

Edit or add the Markdown files under `/docs`. To update the sidebar menu, edit `/docs/sidebars.js`.

For using custom components such as lightboxes, or additional markdown features supported by plugins, 
see [`/src/docs/components-and-plugins.md`](/docs/components-and-plugins).

## Local Development

```console
yarn install
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live 
without having to restart the server.

## Build the Documentation pages

The website (and docs) use dotenv files (.env*) for environment specific configuration. During the build process
this config becomes part of the build artefact. Currently valid environments are: `development`, `staging`, `production` 
and `docker`. To specify which environment to build for, simply set `OBJECTIV_ENVIRONMENT`, for example:

```bash
export OBJECTIV_ENVIRONMENT='docker'
```

The configs for the environments are in their respectiv dotenv files. eg. production settings are in `.env.production`. 
Both the website and docs (being separate Docusaurus instances) have their own set of config files.

Then to build:

```console
yarn build
```
This command generates static content into the `build` directory and can be served using any static contents 
hosting service.

Then to build:

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents 
hosting service.

## Acknowledgements
This documentation site is built using [Docusaurus 2](https://v2.docusaurus.io/).
