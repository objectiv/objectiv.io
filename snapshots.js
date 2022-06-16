module.exports = {
  "__version": "10.1.0",
  "Home: star us notification": {
    "Should track VisibleEvent when scrolling down": {
      "1": [
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
  "Home: with cookie consent": {
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
  "Home: top navigation": {
    "Should track PressEvents on navigation items": {
      "1": [
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
              "id": "logo",
              "href": "/"
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
              "id": "home"
            },
            {
              "_type": "NavigationContext",
              "id": "navbar-top"
            },
            {
              "_type": "LinkContext",
              "id": "contact-us",
              "href": "mailto:hi@objectiv.io"
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
          "id": "PressEvent#10"
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
          "id": "PressEvent#2"
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
              "id": "http://localhost:3000/"
            }
          ],
          "id": "PressEvent#3"
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
              "id": "http://localhost:3000/"
            }
          ],
          "id": "PressEvent#4"
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
              "id": "faq",
              "href": "http://localhost:3000/docs/home/the-project/faq"
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
          "id": "PressEvent#5"
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
              "id": "docs",
              "href": "http://localhost:3000/docs"
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
          "id": "PressEvent#6"
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
              "id": "github",
              "href": "https://github.com/objectiv/objectiv-analytics"
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
          "id": "PressEvent#7"
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
              "id": "slack",
              "href": "/join-slack"
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
          "id": "PressEvent#8"
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
              "id": "twitter",
              "href": "https://twitter.com/objectiv_io"
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
          "id": "PressEvent#9"
        }
      ]
    }
  },
  "Home: bottom navigation": {
    "Should track PressEvents on navigation items": {
      "1": [
        {
          "_type": "PressEvent",
          "location_stack": [
            {
              "_type": "RootLocationContext",
              "id": "home"
            },
            {
              "_type": "NavigationContext",
              "id": "footer"
            },
            {
              "_type": "LinkContext",
              "id": "privacy-policy",
              "href": "/privacy/"
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
              "id": "home"
            },
            {
              "_type": "NavigationContext",
              "id": "footer"
            },
            {
              "_type": "LinkContext",
              "id": "cookies",
              "href": "/privacy/cookies"
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
          "id": "PressEvent#2"
        }
      ]
    }
  }
}
