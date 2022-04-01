# Objectiv Website & Documentation

## Editing website pages

To run the website:

```console
yarn install
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live 
without having to restart the server.

The root folder can be found under `/src/pages`. Edit or add Markdown or React (.js) files. Since Docusaurus 
uses MDX as the parsing engine, it can also render React components inside a Markdown document. See all 
[Markdown features](https://docusaurus.io/docs/markdown-features) in the Docusaurus documentation.

## Editing documentation pages

The documentation pages are a standalone Docusaurus application, under `/docs/`. To run the docs:

```console
cd docs
yarn install
yarn start
```

To edit the documentation pages, edit or add the Markdown files under `/docs`. 

To update the sidebar menu, edit `/docs/sidebars.js`.

## Editing the blog

Edit or add the Markdown files under `/blog`. Prepend the filename with a date, in the YYYY-MM-DD format.

Add front matter between `---` lines to control properties such as the title of the blog post, and the author.
See all [Header options](https://docusaurus.io/docs/blog#header-options) in the Docusaurus documentation.


## Testing

### Testing locally
There are currently no automated tests for the website. However, you can verify the links are all OK, by 
running the following:
```bash
yarn add broken-link-checker
make check-broken-links
```
This will build and spin up a docker container running a docker build of the website, and check all internal 
links.

### Testing a branch on testing
To test a branch on testing, first of course check it out (`git checkout <YOUR_BRANCH>`), make sure to first 
provision the appropriate environment variables for SFTP, and then run:
```bash
# pull any changes, and build the deployable docker images for both website and docs for testing only.
git pull && make build-docker-test-image build-docker-deploy-image

./docker/build/diff-sitemaps.sh --environment=testing

# then, upload to testing via FTP
docker run -e SFTP_URL \
    -e SFTP_USERNAME \
    -e SFTP_PASSWORD \
    -e SFTP_PUBKEY  \
    objectiv/website-deploy:$(date +%Y%m%d) deploytesting.sh
```


### Testing a branch on staging
To test a branch on staging, first of course check it out (`git checkout <YOUR_BRANCH>`), make sure to first 
provision the appropriate environment variables for SFTP, and then run:
```bash
# pull any changes, and build the deployable docker images for both website and docs for staging & production.
git pull && make build-docker-build-image build-docker-deploy-image

# second, compare the sitemap on production to the sitemap in the image, to double-check any URL changes; if 
# you don't have `blessings` & `lxml` installed yet, do `sudo apt-get install python3-blessings python3-lxml`
./docker/build/diff-sitemaps.sh

# if URL checks are okay, upload to staging via FTP
docker run -e SFTP_URL \
    -e SFTP_USERNAME \
    -e SFTP_PASSWORD \
    -e SFTP_PUBKEY  \
    objectiv/website-deploy:$(date +%Y%m%d) deploy.sh

# finally, run the broken-links-checker on staging:
make check-broken-links-staging
```

---
**NOTE**

The above deploy command uses the current date as the tag for the website-deploy image. If you've set another 
TAG when building the image, use that instead (e.g. `objectiv/website-deploy:TAG deploy.sh`).

The deployment script automatically does the following:
- upload the staging build to /tmp/staging_
- upload the production build to /tmp/production_
- remove the old/archived staging build in /tmp/staging_old
- move the old staging deployment to /tmp/staging_old
- move the newly uploaded staging build into /subdomains/staging

---


### Test a runnable docker image

It's also possible to make a build of the site & docs that can run it with a built-in instance of apache:
```bash
make build-docker-build-image build-docker-website-image
```
The image can then be run as such, making it available on http://localhost:8080/:
```bash
docker run -p 127.0.0.1:8080:80 objectiv/website
```

## Deployment to production

The website is hosted on TransIP. There is a GitHub action to automate deployment. To run that manually, either use 
[act](https://github.com/nektos/act), or do the following to deploy (make sure to first provision the 
appropriate environment variables for SFTP):
```bash
# first, checkout main and pull it
git checkout main && git pull 

# second, build the docker images with static builds for staging and production, and for deployment
make build-docker-build-image build-docker-deploy-image

# third, deploy to TransIP
docker run -e SFTP_URL \
    -e SFTP_USERNAME \
    -e SFTP_PASSWORD \
    -e SFTP_PUBKEY  \
    objectiv/website-deploy:$(date +%Y%m%d) deploy.sh
```

==> Then, to set the production build live, simply move it from `/tmp/production_` to `/www`.

---

**NOTE**

The above deploy command uses the current date as the tag for the website-deploy image. If you've set another 
TAG when building the image, use that instead (e.g. `objectiv/website-deploy:TAG deploy.sh`).

---

## Manual deployment
Alternatively, if you want/need to to deploy manually, it's also possible to extract the build artefacts from 
the docker image, and upload those:
```bash
# first, build the images
make build-docker-build-image build-docker-deploy-image

# then extract into dir "extract"
docker run -v $PWD/extract:/extract objectiv/website-deploy:$(date +%Y%m%d) extract.sh
```

Then, upload manually to staging via FTP, and optionally run the broken-links-checker on it:
```bash
make check-broken-links-staging
```

---
**NOTE ABOUT DOCKER BUILDS**

The website and docs use dotenv files (.env*) for environment specific configuration. During the build process
this config becomes part of the build artefact. Currently valid environments are: `development`, `staging`, `production` 
and `docker`. To specify which environment to build for, simply set `OBJECTIV_ENVIRONMENT`, for example:

```bash
export OBJECTIV_ENVIRONMENT='docker'
```

The configs for the environments are in their respectiv dotenv files, e.g. production settings are in `.env.production`. 
Both the website and docs (being separate Docusaurus instances) have their own set of config files.

---

## Acknowledgements
This documentation site is built using [Docusaurus 2](https://v2.docusaurus.io/).
