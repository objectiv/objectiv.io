module.exports = {
  "__version": "10.1.0",
  "Home Page": {
    "Should display the Cookie Banner and not track any events": {
      "1": []
    },
    "Should track events when CookieConsent cookie is present": {
      "1": [
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
              "id": "objectiv-website-dev"
            },
            {
              "_type": "PathContext",
              "id": "http://localhost:3000/"
            }
          ],
          "id": "ApplicationLoadedEvent#1"
        },
        {
          "_type": "VisibleEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "home"
            },
            {
              "_type": "PressableContext",
              "id": "star-us-notification"
            },
            {
              "_type": "OverlayContext",
              "id": "star-us-notification-overlay"
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
              "id": "objectiv-website-dev"
            },
            {
              "_type": "PathContext",
              "id": "http://localhost:3000/"
            }
          ],
          "id": "VisibleEvent#1"
        },
        {
          "_type": "MediaLoadEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "home"
            },
            {
              "_type": "ContentContext",
              "id": "modeling"
            },
            {
              "_type": "MediaPlayerContext",
              "id": "2-minute-video"
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
              "id": "objectiv-website-dev"
            },
            {
              "_type": "PathContext",
              "id": "http://localhost:3000/"
            }
          ],
          "id": "MediaLoadEvent#1"
        }
      ]
    }
  }
}
