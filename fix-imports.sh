#!/bin/bash

# Fix all #lib/ imports to use local # imports

echo "Fixing import paths..."

# Find all TypeScript files and update imports
find src -name "*.ts" -type f -exec sed -i '' \
  -e 's/#lib\/grafaid/#grafaid/g' \
  -e 's/#lib\/graphql-schema-path/#graphql-schema-path/g' \
  -e 's/#lib\/catalog/#catalog/g' \
  -e 's/#lib\/schema/#schema/g' \
  -e 's/#lib\/lifecycles/#lifecycles/g' \
  -e 's/#lib\/change/#change/g' \
  -e 's/#lib\/revision/#revision/g' \
  -e 's/#lib\/version/#version/g' \
  -e 's/#lib\/graphql-error/#graphql-error/g' \
  -e 's/#lib\/graphql-schema-loader/#graphql-schema-loader/g' \
  -e 's/#lib\/schema-definition/#schema-definition/g' \
  -e 's/#lib\/date-only/#date-only/g' \
  -e 's/#lib\/version-coverage/#version-coverage/g' \
  -e 's/#lib\/kit-temp/#kit-temp/g' \
  {} \;

echo "Import paths fixed!"