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

First ensure you set the right OBJECTIV_ENVIRONMENT in the environment variables: either `development`, 
`staging` or `production`.

* `development`: `url` is set to the production environment (https://objectiv.io), the tracker applicationId 
  is set to `objectiv-docs-dev`, and the tracker endpoint is set to `https://localhost:5000`.
* `staging`: `url` is set to the staging environment (https://staging.objectiv.io), the tracker applicationId 
  is set to `objectiv-docs-staging`, and the tracker endpoint is set to `https://collector.objectiv.io`.
* `prod`: `url` is set to the production environment (https://objectiv.io), the tracker applicationId is set 
  to `objectiv-docs`, and the tracker endpoint is set to `https://collector.objectiv.io`.

Then to build:

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents 
hosting service.

## Acknowledgements
This documentation site is built using [Docusaurus 2](https://v2.docusaurus.io/).
