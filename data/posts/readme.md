### Adding a new blog post

1. Prepare the blog post as an mdx file and put it in `@/data/blog/{blogId}.mdx`

2. Put the cover image and any other image file into `@/public/assets/blog/{blogId}/{imageName}`

3. Create a blog post entry inside `@/data/blogs.ts`

#### An example post item

```js
    {
    id: "test1", // Id of the blog. No spaces or special chars. Must be same as mdx filename in data/blog
    date: new Date("2018-05-21"), //Date object that'll be used for sorting
    readDuration: 10, // Reading duration in minutes
    title: "How to achieve something something",
    cover: 'test1_cover.jpg', //optional. Will default to placeholder
    description: "short text that'll be displayed in blogs page" //optional
    }
```
