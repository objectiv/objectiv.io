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
  },
  "Docs home: top navigation": {
    "Should track PressEvents on navigation items": {
      "1": {
        "errors": [],
        "events": [
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
                "href": "/docs/"
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
                "id": "tracking",
                "href": "/docs/tracking/"
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
                "id": "modeling",
                "href": "/docs/modeling/"
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
                "id": "taxonomy",
                "href": "/docs/taxonomy/"
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
                "id": "objectiv-docs-dev"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/docs/"
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
                "id": "slack",
                "href": "http://localhost:3000/join-slack"
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
                "id": "objectiv-docs-dev"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/docs/"
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
                "id": "objectivio",
                "href": "http://localhost:3000"
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
            "id": "PressEvent#8"
          }
        ]
      }
    }
  },
  "Docs home: bottom navigation": {
    "Should track PressEvents on navigation items": {
      "1": {
        "errors": [],
        "events": [
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
                "href": "http://localhost:3000/privacy/"
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
                "href": "http://localhost:3000/privacy/cookies/"
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
            "id": "PressEvent#2"
          }
        ]
      }
    }
  },
  "Docs home: TOC": {
    "Should track PressEvents on TOC items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              },
              {
                "_type": "NavigationContext",
                "id": "toc"
              },
              {
                "_type": "LinkContext",
                "id": "getting-started",
                "href": "#getting-started"
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
            "id": "PressEvent#1"
          }
        ]
      }
    }
  },
  "Docs home: Footer Edit This Page": {
    "Should track PressEvents on Edit This Page items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "edit-docs-page",
                "href": "https://github.com/objectiv/objectiv.io/edit/main/docs/docs/introduction.md"
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
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "get-help",
                "href": "http://localhost:3000/join-slack"
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
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "submit-idea-or-bug-report",
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
                "id": "objectiv-docs-dev"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/docs/"
              }
            ],
            "id": "PressEvent#3"
          }
        ]
      }
    }
  },
  "Docs home: sidebar navigation": {
    "Should track PressEvents on sidebar navigation items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              },
              {
                "_type": "NavigationContext",
                "id": "docs-sidebar"
              },
              {
                "_type": "LinkContext",
                "id": "introduction",
                "href": "/docs/"
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
            "id": "PressEvent#1"
          }
        ]
      }
    }
  },
  "Docs home: paginator": {
    "Should track PressEvents on the paginator in the docs page": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              },
              {
                "_type": "NavigationContext",
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "quickstart-guide",
                "href": "/docs/home/quickstart-guide"
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
                "id": "http://localhost:3000/docs/home/quickstart-guide"
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
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "no-title",
                "href": "/docs/"
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
                "id": "http://localhost:3000/docs/home/quickstart-guide"
              }
            ],
            "id": "PressEvent#2"
          }
        ]
      }
    }
  },
  "Docs home: Overview paginator": {
    "Should track PressEvents on the paginator in the docs page": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "home"
              },
              {
                "_type": "NavigationContext",
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "quickstart-guide",
                "href": "/docs/home/quickstart-guide"
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
                "id": "http://localhost:3000/docs/home/quickstart-guide"
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
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "no-title",
                "href": "/docs/"
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
                "id": "http://localhost:3000/docs/home/quickstart-guide"
              }
            ],
            "id": "PressEvent#2"
          }
        ]
      }
    }
  },
  "Docs Tracking: Footer Edit This Page": {
    "Should track PressEvents on Edit This Page items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "tracking"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "edit-docs-page",
                "href": "https://github.com/objectiv/objectiv.io/edit/main/docs/docs/tracking/introduction.md"
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
                "id": "http://localhost:3000/docs/tracking"
              }
            ],
            "id": "PressEvent#1"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "tracking"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "get-help",
                "href": "http://localhost:3000/join-slack"
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
                "id": "http://localhost:3000/docs/tracking"
              }
            ],
            "id": "PressEvent#2"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "tracking"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "submit-idea-or-bug-report",
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
                "id": "objectiv-docs-dev"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/docs/tracking"
              }
            ],
            "id": "PressEvent#3"
          }
        ]
      }
    }
  },
  "Docs Tracking: Overview paginator": {
    "Should track PressEvents on the paginator in the docs page": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "tracking"
              },
              {
                "_type": "NavigationContext",
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "introduction",
                "href": "/docs/tracking/react"
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
                "id": "http://localhost:3000/docs/tracking/react"
              }
            ],
            "id": "PressEvent#1"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "tracking"
              },
              {
                "_type": "NavigationContext",
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "introduction",
                "href": "/docs/tracking/"
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
                "id": "http://localhost:3000/docs/tracking/react"
              }
            ],
            "id": "PressEvent#2"
          }
        ]
      }
    }
  },
  "Docs Tracking: sidebar navigation": {
    "Should track PressEvents on sidebar navigation items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "tracking"
              },
              {
                "_type": "NavigationContext",
                "id": "docs-sidebar"
              },
              {
                "_type": "LinkContext",
                "id": "introduction",
                "href": "/docs/tracking/"
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
                "id": "http://localhost:3000/docs/tracking"
              }
            ],
            "id": "PressEvent#1"
          }
        ]
      }
    }
  },
  "Docs Tracking: TOC": {
    "Should track PressEvents on TOC items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "tracking"
              },
              {
                "_type": "NavigationContext",
                "id": "toc"
              },
              {
                "_type": "LinkContext",
                "id": "how-to-guides",
                "href": "#how-to-guides"
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
                "id": "http://localhost:3000/docs/tracking"
              }
            ],
            "id": "PressEvent#1"
          }
        ]
      }
    }
  },
  "Docs Modeling: Footer Edit This Page": {
    "Should track PressEvents on Edit This Page items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "modeling"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "edit-docs-page",
                "href": "/docs/home/the-project/update-the-docs"
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
                "id": "http://localhost:3000/docs/modeling"
              }
            ],
            "id": "PressEvent#1"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "modeling"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "get-help",
                "href": "http://localhost:3000/join-slack"
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
                "id": "http://localhost:3000/docs/modeling"
              }
            ],
            "id": "PressEvent#2"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "modeling"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "submit-idea-or-bug-report",
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
                "id": "objectiv-docs-dev"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/docs/modeling"
              }
            ],
            "id": "PressEvent#3"
          }
        ]
      }
    }
  },
  "Docs Modeling: Overview paginator": {
    "Should track PressEvents on the paginator in the page": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "modeling"
              },
              {
                "_type": "NavigationContext",
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "get-started-in-your-notebook",
                "href": "/docs/modeling/get-started-in-your-notebook/"
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
                "id": "http://localhost:3000/docs/modeling/get-started-in-your-notebook/"
              }
            ],
            "id": "PressEvent#1"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "modeling"
              },
              {
                "_type": "NavigationContext",
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "introduction",
                "href": "/docs/modeling/"
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
                "id": "http://localhost:3000/docs/modeling/get-started-in-your-notebook/"
              }
            ],
            "id": "PressEvent#2"
          }
        ]
      }
    }
  },
  "Docs Modeling: sidebar navigation": {
    "Should track PressEvents on sidebar navigation items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "modeling"
              },
              {
                "_type": "NavigationContext",
                "id": "docs-sidebar"
              },
              {
                "_type": "LinkContext",
                "id": "introduction",
                "href": "/docs/modeling/"
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
                "id": "http://localhost:3000/docs/modeling"
              }
            ],
            "id": "PressEvent#1"
          }
        ]
      }
    }
  },
  "Docs Modeling: TOC": {
    "Should track PressEvents on TOC items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "modeling"
              },
              {
                "_type": "NavigationContext",
                "id": "toc"
              },
              {
                "_type": "LinkContext",
                "id": "the-open-analytics-taxonomy",
                "href": "#the-open-analytics-taxonomy"
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
                "id": "http://localhost:3000/docs/modeling"
              }
            ],
            "id": "PressEvent#1"
          }
        ]
      }
    }
  },
  "Docs Taxonomy: Footer Edit This Page": {
    "Should track PressEvents on Edit This Page items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "taxonomy"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "edit-docs-page",
                "href": "https://github.com/objectiv/objectiv.io/edit/main/docs/docs/taxonomy/introduction.md"
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
                "id": "http://localhost:3000/docs/taxonomy"
              }
            ],
            "id": "PressEvent#1"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "taxonomy"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "get-help",
                "href": "http://localhost:3000/join-slack"
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
                "id": "http://localhost:3000/docs/taxonomy"
              }
            ],
            "id": "PressEvent#2"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "taxonomy"
              },
              {
                "_type": "ContentContext",
                "id": "edit-this-page"
              },
              {
                "_type": "LinkContext",
                "id": "submit-idea-or-bug-report",
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
                "id": "objectiv-docs-dev"
              },
              {
                "_type": "PathContext",
                "id": "http://localhost:3000/docs/taxonomy"
              }
            ],
            "id": "PressEvent#3"
          }
        ]
      }
    }
  },
  "Docs Taxonomy: Overview paginator": {
    "Should track PressEvents on the paginator in the page": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "taxonomy"
              },
              {
                "_type": "NavigationContext",
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "overview",
                "href": "/docs/taxonomy/reference"
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
                "id": "http://localhost:3000/docs/taxonomy/reference"
              }
            ],
            "id": "PressEvent#1"
          },
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "taxonomy"
              },
              {
                "_type": "NavigationContext",
                "id": "doc-paginator-navigation"
              },
              {
                "_type": "LinkContext",
                "id": "introduction",
                "href": "/docs/taxonomy/"
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
                "id": "http://localhost:3000/docs/taxonomy/reference"
              }
            ],
            "id": "PressEvent#2"
          }
        ]
      }
    }
  },
  "Docs Taxonomy: sidebar navigation": {
    "Should track PressEvents on sidebar navigation items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "taxonomy"
              },
              {
                "_type": "NavigationContext",
                "id": "docs-sidebar"
              },
              {
                "_type": "LinkContext",
                "id": "introduction",
                "href": "/docs/taxonomy/"
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
                "id": "http://localhost:3000/docs/taxonomy"
              }
            ],
            "id": "PressEvent#1"
          }
        ]
      }
    }
  },
  "Docs Taxonomy: TOC": {
    "Should track PressEvents on TOC items": {
      "1": {
        "errors": [],
        "events": [
          {
            "_type": "PressEvent",
            "location_stack": [
              {
                "_type": "RootLocationContext",
                "id": "taxonomy"
              },
              {
                "_type": "NavigationContext",
                "id": "toc"
              },
              {
                "_type": "LinkContext",
                "id": "taxonomy-reference",
                "href": "#taxonomy-reference"
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
                "id": "http://localhost:3000/docs/taxonomy"
              }
            ],
            "id": "PressEvent#1"
          }
        ]
      }
    }
  }
}
