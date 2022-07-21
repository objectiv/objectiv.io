module.exports = {
  "__version": "10.3.1",
  "Docs home: with cookie consent": {
    "Should track ApplicationLoadedEvent": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "ApplicationLoadedEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              }
            ],
            "global_contexts": [
              {
                "_type": "HttpContext",
                "id": "http_context",
                "referrer": "",
                "user_agent": "mocked-user-agent",
                "remote_address": null
              },
              {
                "_type": "ApplicationContext",
                "id": "objectiv-docs-dev"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/docs/"
              }
            ],
            "id": "ApplicationLoadedEvent#1"
          }
        ]
      }
    }
  }
}
