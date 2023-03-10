# My Portfolio

![IMAGE_ALT](public/portfolio.png)

This website was made with Typescript, React, and Next.js. There is an IProject Typescript interface that defines all the fields and types required for a project. All the data is stored in arrays of IProjects seperated by category. On the projects page, each array is passed into a DevSection component. The DevSection component takes the array and passes each element into a Project component that displays the title, image, and short description. Then each array is concatenated together using the spread operator and exported. It is imported by the project page which uses the getStaticPaths and getStaticProps features of Next.js to build a unique page for each project in the array using the ProjectPage component.

 Some of the projects also have a video demo. I made the screen recordings using OBS, edited the videos using Blender, and then uploaded the videos to my Youtube channel. Then I used an iframe html element to embed each video into the project page for that video. The video field of the IProject interface is optional. The ProjectPage component checks the prop it gets for a video field. If it doesn't find one, it just displays the image. 

Languages: Typescript, HTML, CSS

Libraries and Frameworks: Next, React