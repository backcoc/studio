export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615928258f6c0a60b2eb2b15",
                  title: "Sanity Studio",
                  name: "bulletin-studio",
                  apiId: "a04db29d-fc9d-49c7-b7f5-d54ab602ea44",
                },
                {
                  buildHookId: "615928251613512ebc3c94f4",
                  title: "Blog Website",
                  name: "bulletin-web",
                  apiId: "4f34f2f2-5317-4965-a7f2-1bb1cc304986",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/coconutella/bulletin",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://bulletin-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
