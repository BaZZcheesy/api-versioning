# api-versioning

## Demo notes:

    @CrossOrigin
    @PostMapping( value = "/hello", headers = "API-VERSION=1")
    public String hello() {
        return "Hello Guggus";
    }

    @CrossOrigin
    @PostMapping( value = "/hello", headers = "API-VERSION=2")
    public String bye() {
        return "Bye Guggus";
    }

    @CrossOrigin
    @GetMapping( value = "/v1/hello")
    public String feierabend() {
        return "Feierabend!";
    }

    @CrossOrigin
    @GetMapping( value = "/v2/hello")
    public String mittag() {
        return "Mittag!";
    }