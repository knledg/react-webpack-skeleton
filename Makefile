WEBPACK = node_modules/webpack/bin/webpack.js
ESLINT = node_modules/.bin/eslint

.PHONY: clean build client lint test

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
