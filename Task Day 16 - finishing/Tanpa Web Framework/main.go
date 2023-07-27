package main

import (
	"fmt"
	"html/template"
	"net/http"
)

// fungsi handler
func homeHandler(w http.ResponseWriter, r *http.Request) {
	// mengambil data home.html
	tmpl, err := template.ParseFiles("HTML/home.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	// menampilkan data home.html
	err = tmpl.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func main() {
	// css dari folder css
	cssFS := http.FileServer(http.Dir("HTML/css"))
	http.Handle("/css/", http.StripPrefix("/css/", cssFS))

	// javascript dari folder script
	jsFS := http.FileServer(http.Dir("HTML/script"))
	http.Handle("/script/", http.StripPrefix("/script/", jsFS))

	// html lain dari folder additional html
	additionalFS := http.FileServer(http.Dir("HTML/additional html"))
	http.Handle("/additional html/", http.StripPrefix("/additional html/", additionalFS))

	// gambar dari folder BAX
	img1FS := http.FileServer(http.Dir("HTML/BAX"))
	http.Handle("/BAX/", http.StripPrefix("/BAX/", img1FS))

	// gambar dari folder image
	img2FS := http.FileServer(http.Dir("HTML/image"))
	http.Handle("/image/", http.StripPrefix("/image/", img2FS))

	// gambar dari folder icon
	iconFS := http.FileServer(http.Dir("HTML/icon"))
	http.Handle("/icon/", http.StripPrefix("/icon/", iconFS))

	http.HandleFunc("/", homeHandler)

	// running port yang diminta
	fmt.Println("Server berjalan di http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
