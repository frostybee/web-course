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
        }
      ],
    },
    {
      label: "CSS",
      link: "/css",
      icon: "seti:css",
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: "CSS Topics",
          autogenerate: {
            directory: "css/",
          }
        }
      ],
    },
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
