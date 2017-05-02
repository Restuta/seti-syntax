#!/bin/bash

#copies theme files from atom package folder
ATOM_PACKAGES_DIR=~/.atom/packages/seti-syntax

SAMPLE_FILES_DIR="./sample-files"
STYLES_DIR="./styles"
INDEX_LESS_FILE="./index.less"

DESTINATION="$ATOM_PACKAGES_DIR/"

cp -rv $SAMPLE_FILES_DIR $DESTINATION
cp -rv $STYLES_DIR $DESTINATION
cp -rv $INDEX_LESS_FILE $DESTINATION

echo "Done"
