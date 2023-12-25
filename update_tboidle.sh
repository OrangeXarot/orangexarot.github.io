#!/bin/bash

cp -r ../tboidle/ misc/tboidle/ 
rm -rf misc/tboidle/.git

git add misc/tboidle
git commit -m "Update tboidle"
git push

