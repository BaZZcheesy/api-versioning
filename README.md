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

    const handleSubmitV2 = event => {
    event.preventDefault();
    fetch("http://localhost:8080/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-VERSION": "2"
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.text();
    })
    .then(data => {
      setResponseOut(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setResponseOut("Error fetching data");
    });
  }

  const handleSubmitV3 = event => {
    event.preventDefault();
    fetch("http://localhost:8080/api/v1/hello")
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.text();
    })
    .then(data => {
      setResponseOut(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setResponseOut("Error fetching data");
    });
  }

  const handleSubmitV4 = event => {
    event.preventDefault();
    fetch("http://localhost:8080/api/v2/hello")
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.text();
    })
    .then(data => {
      setResponseOut(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setResponseOut("Error fetching data");
    });
  }

    const handleSubmitV1 = event => {
    event.preventDefault();
    fetch("http://localhost:8080/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-VERSION": "1"
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.text();
    })
    .then(data => {
      setResponseOut(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setResponseOut("Error fetching data");
    });
  }