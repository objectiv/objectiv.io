module.exports = {
  "__version": "10.1.0",
  "Home: star us notification": {
    "Should track ApplicationLoaded, MediaLoadEvent and VisibleEvent": {
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
        }
      ]
    }
  },
  "Home: with Cookie Consent": {
    "Should track ApplicationLoaded and MediaLoadEvent": {
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
  },
  "Home: top_navigation": {
    "Should track PressEvents on navigation items": {
      "about us": [
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
          "_type": "PressEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "home"
            },
            {
              "_type": "NavigationContext",
              "id": "navbar-top"
            },
            {
              "_type": "LinkContext",
              "id": "about-us",
              "href": "/about"
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
          "id": "PressEvent#1"
        }
      ],
      "blog": [
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
          "_type": "PressEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "home"
            },
            {
              "_type": "NavigationContext",
              "id": "navbar-top"
            },
            {
              "_type": "LinkContext",
              "id": "about-us",
              "href": "/about"
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
          "id": "PressEvent#1"
        },
        {
          "_type": "PressEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "about"
            },
            {
              "_type": "NavigationContext",
              "id": "navbar-top"
            },
            {
              "_type": "LinkContext",
              "id": "blog",
              "href": "/blog"
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
              "id": "http://localhost:3000/about"
            }
          ],
          "id": "PressEvent#2"
        }
      ],
      "jobs": [
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
          "_type": "PressEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "home"
            },
            {
              "_type": "NavigationContext",
              "id": "navbar-top"
            },
            {
              "_type": "LinkContext",
              "id": "about-us",
              "href": "/about"
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
          "id": "PressEvent#1"
        },
        {
          "_type": "PressEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "about"
            },
            {
              "_type": "NavigationContext",
              "id": "navbar-top"
            },
            {
              "_type": "LinkContext",
              "id": "blog",
              "href": "/blog"
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
              "id": "http://localhost:3000/about"
            }
          ],
          "id": "PressEvent#2"
        },
        {
          "_type": "PressEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "blog"
            },
            {
              "_type": "NavigationContext",
              "id": "navbar-top"
            },
            {
              "_type": "LinkContext",
              "id": "jobs",
              "href": "/jobs"
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
              "id": "http://localhost:3000/blog"
            }
          ],
          "id": "PressEvent#3"
        }
      ]
    }
  }
}
