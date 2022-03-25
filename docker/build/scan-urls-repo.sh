#!/bin/bash

for i in "$@"; do
  case $i in
    -d=*|--directory=*)
      DIRECTORY="${i#*=}"
      shift # past argument=value
      ;;
    -u=*|--urls_file=*)
      URLSFILE="${i#*=}"
      shift # past argument=value
      ;;
    -*|--*)
      echo "Unknown option $i"
      exit 1
      ;;
    *)
      ;;
  esac
done
echo "Scanning directory '$DIRECTORY' from URLs file '$URLSFILE'...";

while IFS="," read -r rec1
do
  rec1_no_cr="${rec1/$'\r'/}"
  echo $rec1_no_cr "is used in:"
  grep --include=\*.{md,ipynb} --exclude-dir={node_modules,tests} -rnl $DIRECTORY -e $rec1_no_cr
done < <(cut -d "," -f1,3 $PWD/$URLSFILE | tail -n +2)