WEBPACK = node_modules/webpack/bin/webpack.js
ESLINT = node_modules/.bin/eslint

.PHONY: clean build client lint

build:
	make clean
	BUILD_STATIC=true $(WEBPACK) \
		--verbose \
		--display-chunks \
		--bail

clean:
	-rm -rf ./dist

client:
	nf run node dev-server.js

lint:
	$(ESLINT) --ext .js --ext .jsx .
