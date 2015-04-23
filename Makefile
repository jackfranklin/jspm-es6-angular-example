build:
	- rm -r dist/
	mkdir dist/
	jspm bundle-sfx app/main -o dist/app.js
	./node_modules/.bin/ng-annotate dist/app.js -o dist/app.annotate.js -a
	./node_modules/.bin/uglifyjs -o dist/app.min.js dist/app.annotate.js
	./node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js -o dist/index.html
