package main

//go:generate go-bindata-assetfs site/...

import (
	web "github.com/micro/go-web"
	"net/http"
	"log"
)

func main() {
	service := web.NewService()

	service.Handle("/", http.StripPrefix("/",http.FileServer(assetFS())))


	// initialise service
	if err := service.Init(); err != nil {
		log.Fatal(err)
	}

	// run service
	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}