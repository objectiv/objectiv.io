# Objectiv Website & Documentation Scripts

Scripts to check website & docs.

## Setup
To set up the environment:

```bash
virtualenv check_sitemaps
source check_sitemaps/bin/activate
pip install -r requirements.txt
```

## Check URLs

Check a website/docs Docker image for URLs that are added/removed compared to production and local repos.

To run:

```bash
python3 scripts/check_urls.py
```

Optional parameters:
- `--environment`: the image's environment, e.g. `--environment=testing`
- `--docker-image`: the docker image to scan, e.g. `--docker-image=objectiv/website-deploy`
- `--tag`: the docker image tag, e.g. `--tag=20220101`
