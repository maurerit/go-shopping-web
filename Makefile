default: all

all: webclient gogenerate goserver

gogenerate:
	@echo Generating assetfs...
	go generate

goserver:
	@echo Building the Golang Server...
	CGO_ENABLED=0 go build -o webd .

webclient:
	ng build --base-href "/skeleton/"
