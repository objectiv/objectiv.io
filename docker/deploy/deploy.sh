#!/bin/bash


echo "Connecting with ${SFTP_USERNAME} to ${SFTP_URL}"

if [ -n "${SFTP_PUBKEY}" ];
then
  echo "Writing pubkey to known_hosts"
  mkdir -p ~/.ssh
  echo "${SFTP_PUBKEY}" >> ~/.ssh/known_hosts
fi
#
SCRIPT="
lcd /services

mkdir -fp /tmp
cd /tmp

rm -rf _staging
rm -rf _production

mkdir -fp _staging
mkdir -fp _production

echo  Uploading website build
mirror --verbose --parallel --continue --delete-first --delete --reverse build-staging/ _staging/
echo ...staging: done
mirror --verbose --parallel --continue --delete-first --delete --reverse build-production/ _production/
echo ...production: done

mkdir _staging/docs
mkdir _production/docs

echo Uploading docs build
mirror --verbose --parallel --continue --delete-first --delete --reverse docs/build-staging/ _staging/docs/
echo  staging-docs: done
mirror --verbose --parallel --continue --delete-first --delete --reverse docs/build-production/ _production/docs/
echo production-docs: done

rm -rf old_staging
mkdir -fp old_staging

echo Moving new staging build to live
glob -a mmv /subdomains/staging/* -O old_staging/
glob -a mmv _staging/* -O /subdomains/staging/

exit
"
lftp --user "${SFTP_USERNAME}" --password "${SFTP_PASSWORD}" "${SFTP_URL}" -e "$SCRIPT"
