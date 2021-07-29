#!/bin/sh

for pkg in dist/*.json;
do
  echo $1 | gpg --batch --yes --passphrase-fd 0 --detach-sign --armor -o $pkg.sig $pkg
done
