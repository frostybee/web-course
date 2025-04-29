// Menu items of the left sidebar.
export default
  [
    {
      label: "Guides",
      link: "/guides",
      icon: "open-book",
      items: [
        {
          label: "Home",
          autogenerate: {
            directory: "guides/",
          }
        }
      ],
    },
    {
      label: "HTML",
      link: "/html",
      icon: "seti:html",
      items: [
        {
          label: "HTML Basics",
          autogenerate: {
            directory: "html/Basics",
          }
        },
        {
          label: "Grouping Elements",
          autogenerate: {
            directory: "html/Grouping",
          }
        },
        {
          label: "Hyperlinks",
          autogenerate: {
            directory: "html/hyperlinks",
          }
        },
        {
          label: "Multimedia",
          autogenerate: {
            directory: "html/multimedia",
          }
        },
        {
          label: "Structuring Content",
          autogenerate: {
            directory: "html/structuring",
          }
        },
        {
          label: "Web Forms",
          autogenerate: {
            directory: "html/forms",
          }
        },
        {
          label: "Cheatsheet",
          items: ['html/cheatsheet']
        }
      ],
    },
    // CSS Topics
    //-------------------------
    {
      label: "CSS",
      link: "/css",
      icon: "seti:css",
      items: [
        {
          label: "CSS Basics",
          autogenerate: {
            directory: "css/Basics",
          }
        },
        {
          label: "Advanced CSS",
          autogenerate: {
            directory: "css/advanced",
          }
        },
        {
          label: "Box Model",
          autogenerate: {
            directory: "css/box-model",
          }
        },
        {
          label: "CSS Layout",
          autogenerate: {
            directory: "css/layout",
          }
        },
        {
          label: "CSS Fonts",
          autogenerate: {
            directory: "css/fonts",
          }
        }
      ],
    },

    // JS Topics
    //-------------------------
    {
      label: "JavaScript",
      link: "/javascript",
      icon: "seti:javascript",
      items: [
        {
          label: "JavaScript Basics",
          collapsed: true,
          autogenerate: {
            directory: "javascript/basics",
          }
        },
        {
          label: "Objects & Arrays",
          collapsed: true,
          autogenerate: {
            directory: "javascript/objects",
          }
        },
        {
          label: "DOM API & Events",
          collapsed: false,
          autogenerate: {
            directory: "javascript/dom",
          }
        },
        {
          label: "Form Validation",
          collapsed: false,
          autogenerate: {
            directory: "javascript/forms",
          }
        },
        {
          label: "Browser and Web APIs",
          collapsed: false,
          autogenerate: {
            directory: "javascript/apis",
          }
        }
      ],
    },
    {
      label: "Resources",
      link: "resources/references",
      icon: "seti:notebook",
      collapsed: false,
      items: [
        {
          label: "Recommended Resources",
          autogenerate: {
            directory: "resources/",
          }
        }
      ],
    },
  ];
