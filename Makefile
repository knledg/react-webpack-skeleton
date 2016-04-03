WEBPACK = node_modules/webpack/bin/webpack.js

.PHONY: clean build client

build:
	make clean
	BUILD_STATIC=true $(WEBPACK) \
		--verbose \
		--display-chunks \
		--bail

clean:
	-rm -rf ./dist

client:
	nf run nodemon