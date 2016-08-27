WEBPACK = node_modules/webpack/bin/webpack.js
ESLINT = node_modules/.bin/eslint

.PHONY: clean build client lint test ghPages

build:
	make clean
	NODE_ENV=production $(WEBPACK) \
		--config webpack.config.prod.js \
		--verbose \
		--display-chunks \
		--bail

clean:
	-rm -rf ./dist

client:
	nf run node dev-server.js

lint:
	$(ESLINT) --ext .js --ext .jsx .

test:
	NODE_PATH=. NODE_ENV=test npm run test

## Used to create the gh-pages branch, can be deleted for forked projects
ghPages:
	rm -rf ../react-webpack-skeleton-ghpages/*
	make clean
	NODE_ENV=production APP_NAME="React Webpack Skeleton" BASE_URL="http://knledg.github.io/react-webpack-skeleton/" $(WEBPACK) \
		--config webpack.config.prod.js \
		--verbose \
		--display-chunks \
		--bail
	cp -R dist/* ../react-webpack-skeleton-ghpages
