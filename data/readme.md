## Adding a new blog post

1. Prepare the blog post as an mdx file and put it in `@/data/blog/{blogId}.mdx`

2. Put the cover image and any other image file into `@/public/assets/posts/{blogId}/{imageName}`

3. Export `{metadata, data}` items from the top of the mdx file as seen below.



```js
    export const metadata = {
        title: "Blog Post 1", // Page title 
        description: "A nice one", // Meta description
    };
    export const data = {
        id: "post1", // Must be same as filename
        title: "Blog Post 1", // Blog title
        date: new Date("2022-12-01"), // Date object. Blog post date
        readDuration: 14, // Read duration in minutes
        link: { href: "http://www.google.com", text: "Read at Dev.to" }, // An optional link for blog post's external version
        cover: "post1_cover.jpg", // Cover image name. Must be put in `@/public/assets/posts/{blogId}/{imageName}`. (Optional)
        description: "Laboris voluptate minim excepteur laborum.", // Short description text for small post item 
    };

    // .. rest of the mdx file starts here
```


## Adding a new project

1. Create a mdx file depicting your project in folder `@/data/projects/{projectId}.mdx`

2. Prepare and put your images about this project in folder `@/public/assets/projects/{projectId}/{imageName}`

3. Export `{metadata, data}` items from the top of the mdx file as seen below.

#### An example project item

```js
    export const metadata = {
        title: "Costotus App", // Page title 
        description: "A nice one", // Meta description
    };
    export const data = {
        id: "costotus", // projectId must be same as mdx filename
		title: "Culpa officia velit fugiat", //Project title
		year: 2020, // numeric year
		subtitle: "An cost calculator for small businesses", //Will be displayed in projects page under each project
		tech: ["React 18", "SPA"], // Technologies used in string[]
		images: ["costotus_01.jpg", "costotus_02.jpg"], // images in string[]. First image will be cover image
		link: "https://www.costotus.com", //If available, website link
        repo: "https://github.com/donis3/dony-react18-simple-starter", // If available git repo link
    };

    // .. rest of the mdx file starts here
```
