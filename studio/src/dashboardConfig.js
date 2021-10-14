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
                    "6167c170e7a01f708f18dd6d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-cnza69i5",
                  apiId: "63d5c871-435e-4e2d-9128-c8648e03f588",
                },
                {
                  buildHookId: "6167c170fef5b47a733ea31b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5ytddq2u",
                  apiId: "d4d4f6e2-f8de-4484-b4db-18cda20defdc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/alfredobp/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5ytddq2u.netlify.app",
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
