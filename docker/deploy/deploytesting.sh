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

rm -rf _testing

mkdir -fp _testing

echo  Uploading website build
mirror --verbose --parallel --continue --delete-first --delete --reverse build-testing/ _testing/
echo ...testing: done

mkdir _testing/docs

echo Uploading docs build
mirror --verbose --parallel --continue --delete-first --delete --reverse docs/build-testing/ _testing/docs/
echo  testing-docs: done

rm -rf old_testing
mkdir -fp old_testing

echo Moving new testing build to live
glob -a mmv /subdomains/testing/* -O old_testing/
glob -a mmv _testing/* -O /subdomains/testing/

exit
"
lftp --user "${SFTP_USERNAME}" --password "${SFTP_PASSWORD}" "${SFTP_URL}" -e "$SCRIPT"
