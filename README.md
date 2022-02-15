# Objectiv Website

## Editing website pages

The root folder can be found under `/src/pages`. Edit or add Markdown or React (.js) files. 

Since Docusaurus uses MDX as the parsing engine, it can also render React components inside a Markdown 
document. See all [Markdown features](https://docusaurus.io/docs/markdown-features) in the Docusaurus 
documentation.

## Editing documentation pages

The documentation pages are a standalone Docusaurus application, under `/docs/`. To run the docs:

```console
cd docs
yarn install
yarn start
```

Alternatively, to just start the docs from the root directory, run `yarn start:docs`.

To edit the documentation pages, edit or add the Markdown files under `/docs`. 

To update the sidebar menu, edit `/docs/sidebars.js`.

## Editing the blog

Edit or add the Markdown files under `/blog`. Prepend the filename with a date, in the YYYY-MM-DD format.

Add front matter between `---` lines to control properties such as the title of the blog post, and the author.
See all [Header options](https://docusaurus.io/docs/blog#header-options) in the Docusaurus documentation.

## Local Development

```console
yarn install
yarn start
```

NOTE: this cannot be run for configs other than `development`. Either set `OBJECTIV_ENVIRONMENT` to `development` or 
unset it to make this work.

This command starts a local development server and open up a browser window. Most changes are reflected live 
without having to restart the server.

## Build the website

The website (and docs) use dotenv files (.env*) for environment specific configuration. During the build process
this config becomes part of the build artefact. Currently valid environments are: `development`, `staging`, `production` 
and `docker`. To specify which environment to build for, simply set `OBJECTIV_ENVIRONMENT`, for example:

```bash
export OBJECTIV_ENVIRONMENT='docker'
```

The configs for the environments are in their respectiv dotenv files. eg. production settings are in `.env.production`. 
Both the website and docs (being separate Docusaurus instances) have their own set of config files.

### Building in a docker image
To do a full build of docs and website, inside a Node docker image run:
```bash
make build-docker-build-image
```
This command generates a docker image containing static builds for both website and docs, for the environment(s) set 
in OBJECTIV_ENVIRONMENT. By default, this is both staging and production.

NOTE: the build step only builds the artefacts (as part of the resulting docker image). To actually deploy it, see the 
deployment section.


## Building the docker image

It's also possible to build a docker image, that can run the website + docs, using a built-in instance of apache. Building
this is fairly easy, using `make`:
```bash
# this builds a runnable docker image, using the latest dockerized build
make build-docker-website-image
```
This will first build the website and docs (with .env.docker config), and then copy them into a docker image. The image
can then be run:
```bash
docker run -p 127.0.0.1:8080:80 objectiv/website
```
The website should then be available on http://localhost:8080/

## Testing

To verify the links are all OK, set the OBJECTIV_ENVIRONMENT environment variable to 'docker', and run the following:
```asciidoc
yarn add broken-link-checker
make clean check-broken-links
```
This will build and spin up a docker container running a docker build of the website, and check all internal links.

## Deployment

The website is hosted on TransIP. To deploy, observe the following steps:
* Create a build for staging (OBJECTIV_ENVIRONMENT=staging)
* Upload the contents of the build folder to staging (using sftp, credentials are in 1password)
* Verify the build from staging (https://staging.objectiv.io)
* Create a build for production (OBJECTIV_ENVIRONMENT=production)
* Upload the contents of the build folder to production on TransIP

There is a GitHub action, to automate all of this. To run that manually, either use [act](https://github.com/nektos/act), or do the following:
to deploy: (make sure to first provision the appropriate environment variables for SFTP)
```bash
make build-docker-deploy-image
docker run -e SFTP_URL \
    -e SFTP_USERNAME \
    -e SFTP_PASSWORD \
    -e SFTP_PUBKEY  \
    objectiv/website-deploy deploy.sh
```

Alternatively, it's also possible to extract the build artefacts from the docker image, using the deployment image:
```bash
# first build deployment image
make build-docker-deploy-image

# then extract into dir "extract"
docker run -v $PWD/extract:/extract objectiv/website-deploy extract.sh
```

## Acknowledgements
This documentation site is built using [Docusaurus 2](https://v2.docusaurus.io/).