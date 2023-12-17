### Adding a new project

1. Create a mdx file depicting your project in folder `@/data/projects/{projectId}.mdx`

2. Prepare and put your images about this project in folder `@/public/assets/projects/{projectId}/{imageName}`

3. Create a project entry inside `@/data/projects.ts`

#### An example project item

```js
    {
        id: "costotus", // projectId must be same as mdx filename
		title: "Culpa officia velit fugiat", //Project title
		year: 2020, // numeric year
		subtitle: "An cost calculator for small businesses", //Will be displayed in projects page under each project
		tech: ["React 18", "SPA"], // Technologies used in string[]
		images: ["costotus_01.jpg", "costotus_02.jpg"], // images in string[]. First image will be cover image
		link: "https://www.costotus.com", //If available, website link
        repo: "https://github.com/donis3/dony-react18-simple-starter", // If available git repo link
    }
```
