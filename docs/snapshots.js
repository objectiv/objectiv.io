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
  }
}
