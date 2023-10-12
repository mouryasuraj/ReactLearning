<!-- How to create react app -->
npx(node package executer)
npm(node package manager)

// npx create-react-app 01Basic         //This is not the optimized way to create react app because it takes time. There is another fast way that is npm create vite@latest

npm install -g npm@latest       //If npm is not working then install the latest version of npm


<!-- 01basic -->
This project is created using npx create-react-app 01basic                    //It takes so much time

<!-- 01vitereact -->
This project is created using npm create vite@latest 01vitereact            //This is fast according to above  npx creact-react-app


<!-- Flow of react  -->

If you see in our index.html file which is located in public folder. index.html don't have script tag then how javascript know that I have to connect to this index.html. This is happenning because in react there is a file package.json in this file you can see dependencies in this there is a react-script. react-script is responsible for adding script in html file. 

<!-- Flow of react with vite react -->
In vite react script is already added to html file and in vite the index.html is not in public folder. It is directly available in project folder

<!-- Name convention in react -->
Whenever we create component in react always start first letter as capital.

    


<!-- Tailwind and props -->
To INstal tailwind css with vite use below cmd
1. npm install -D tailwindcss postcss autoprefixer

Certainly! Let me elaborate on each of the words in the command you provided:

        1. `npm`: npm stands for "Node Package Manager." It is a package manager for JavaScript and Node.js applications. It allows you to easily install and manage libraries, frameworks, and other dependencies for your projects.

        2. `install`: This is a command in npm used to install packages or dependencies for your project. When you run `npm install`, it looks at your project's `package.json` file and installs the specified packages and their dependencies.

        3. `-D` or `--save-dev`: This is an option in the `npm install` command. It is short for `--save-dev`, and it indicates that the packages you are installing are development dependencies. Development dependencies are typically used during the development and testing of your project but are not needed in production.

        4. `tailwindcss`: This is a popular CSS framework that helps you build responsive and customizable user interfaces more easily. It provides a set of utility classes that you can use to style your HTML elements. Tailwind CSS is often used to create modern web designs quickly.

        5. `postcss`: PostCSS is a JavaScript-based tool for transforming and processing CSS. It allows you to use various plugins to modify and optimize your CSS. Many modern web development tools, including Tailwind CSS, use PostCSS for their CSS processing.

        6. `autoprefixer`: Autoprefixer is a PostCSS plugin that automatically adds vendor prefixes to your CSS code. Vendor prefixes are required to ensure that your CSS styles work correctly in various web browsers. Autoprefixer simplifies this process by automatically adding the necessary prefixes for you.

        In summary, the `npm install -D tailwindcss postcss autoprefixer` command is used to install three development dependencies in your Node.js project. These dependencies are related to web development and CSS processing, and they are commonly used in projects that involve modern web design and development.


2. npx tailwindcss init -p

        Certainly! The command you provided is used to initialize a Tailwind CSS configuration file for your project. Let's break it down step by step:

        1. `npx`: npx is a package runner tool that comes with npm. It is used to execute binaries from packages that aren't globally installed on your system. In this command, `npx` is used to run the `tailwindcss` package.

        2. `tailwindcss`: This is the name of the package or executable you want to run using `npx`. It's the Tailwind CSS package.

        3. `init`: This is a subcommand provided by Tailwind CSS. When you run `npx tailwindcss init`, you are telling Tailwind CSS to initialize a configuration file for your project. The configuration file is used to customize and configure various aspects of Tailwind CSS, such as color schemes, breakpoints, and more.

        4. `-p`: The `-p` flag is short for `--full` and is an option you can pass to the `init` subcommand. It instructs Tailwind CSS to generate a full, complete configuration file with all the available options and defaults. This is useful when you want to have full control over Tailwind CSS's configuration and need to make extensive customizations.

        So, when you run `npx tailwindcss init -p`, you're essentially telling Tailwind CSS to create a comprehensive configuration file with all the available options, allowing you to fine-tune and customize Tailwind CSS to suit the needs of your project.

        After running this command, you will likely find a `tailwind.config.js` file in your project's directory, which you can edit to configure Tailwind CSS as per your requirements.

3. Configure your template paths

        /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

4.Write below code in ./src/index.css file

        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        
5. Check whether a tailwind is working or not by adding some classes to components.