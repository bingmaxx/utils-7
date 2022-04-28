#!/usr/bin/env bash

set -e
set -u
set -x

# argument version 'v0.0.0'
if [[ ($# > 0) && $1 ]]; then
  git tag $1
  git push origin --tag

  npm run build
  npm publish
  echo "[SUCCESS]"
else
  echo "please provide argument [version]"
fi
