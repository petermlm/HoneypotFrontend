dev:
	npm start
.PHONY: dev

build:
	npm run build
.PHONY: build

serve: build
	serve -s build -l 9000
.PHONY: serve
