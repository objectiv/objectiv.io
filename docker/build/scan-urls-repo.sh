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

if test -f "$URLSFILE"; then
  echo "Scanning directory '$DIRECTORY' from URLs file '$URLSFILE'...";
  while IFS="," read -r rec1
  do
    rec1_no_cr="${rec1/$'\r'/}"
    OUTPUT=$(grep --include=\*.{md,mdx,rst,html,ipynb} --exclude-dir={node_modules,tests} -rnl $DIRECTORY -e $rec1_no_cr)
    if [ -z "$OUTPUT" ]
    then
      tput setaf 2
      echo "No removed URLs found in $DIRECTORY"
    else
      tput setaf 1
      echo $rec1_no_cr "is used in:"
      echo "$OUTPUT"
    fi
  done < <(cut -d "," -f1,3 $PWD/$URLSFILE | tail -n +2)
else
  echo "No file '$URLSFILE' to scan, aborting"
fi
