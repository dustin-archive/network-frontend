
.EXPORT_ALL_VARIABLES:
.ONESHELL:
.PHONY: all demo start prep css js minify html
.SILENT:

PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

all: PROJECT=test

start: NODE_ENV=development
start: PROJECT=test

all: prep css js minify html
	gzip -k -n -9 public/index.html

start: prep css js html
	serve --css "$(MAKE) css" --js "$(MAKE) js"

prep:
	rm -rf public
	mkdir public
	cp -r src/_root/* public
	cp -r src/shared/_root/* public

css:
	echo
	$(ENV) node ../../scripts/sass-env > env.scss
	node-sass src/app.scss -o public --source-map true --source-map-contents

js:
	$(ENV) rollup src/app.js -o public/app.js -f iife -m -c

minify:
	node ../../scripts/babel | uglifyjs -o public/app.js -c -m --source-map "content='public/app.js.map',url='app.js.map'"
	postcss public/app.css -o public/app.css -u autoprefixer -m
	cleancss -O2 public/app.css -o public/app.css --source-map --source-map-inline-sources

html:
	$(ENV) rollup src/prerender.js -f cjs -e fs -c | node > public/index.html
