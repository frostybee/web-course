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
          label: "Cheatsheet",
          items: ['html/cheatsheet']
        }
      ],
    },
    // CSS Topics
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
          label: "CSS Fonts",
          autogenerate: {
            directory: "css/fonts",
          }
        }
      ],
    },
    // JS Topics
    {
      label: "JavaScript",
      link: "/javascript",
      icon: "seti:javascript",
      items: [
        {
          label: "JavaScript Topics",
          autogenerate: {
            directory: "javascript/",
          }
        }
      ],
    },
    {
      label: "Resources",
      link: "resources/references",
      icon: "seti:notebook",
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
