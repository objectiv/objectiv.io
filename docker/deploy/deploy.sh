#!/bin/bash


lftp --user "${USERNAME}" --password "${PASSWORD}" "${URL}" -e "${SCRIPT}"