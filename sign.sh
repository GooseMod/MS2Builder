#!/bin/sh

for pkg in dist/*.json;
do
  gpg --batch --yes --detach-sign --armor -o $pkg.sig $pkg
done
