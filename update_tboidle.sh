#!/bin/bash

cd misc/tboidle

git fetch
git pull

cd ../../

git add misc/tboidle
git commit -m "Update tboidle"
git push

