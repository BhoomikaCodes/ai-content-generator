export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2799/2799991.png",
    aiPrompt:
      "Give me 3 blog topic idea in bullet wise only based on give niche & outline topic and give me result in rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that generate blog title",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2799/2799991.png",
    aiPrompt:
      "Generate blog content based on topic & outline topic and give me result in rich text editor format",
    slug: "blog-content-generation",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that generate blog title",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2799/2799991.png",
    aiPrompt:
      "Generate 5 blog topic ideas in bullet point based on give niche & outline topic and give me result in rich text editor format",
    slug: "blog-topic-idea",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
