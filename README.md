<!-- How to create react app -->
npx(node package executer)
npm(node package manager)

// npx create-react-app 01Basic         //This is not the optimized way to create react app because it takes time there is another fast way that is npm create vite@latest

npm install -g npm@latest       //If npm is not working then install the latest version of npm


<!-- 01basic -->
This project is created using npx create-react-app 01basic                    //It takes so much time

<!-- 01vitereact -->
This project is created using npm create vite@latest 01vitereact            //This is fast according above  npxcreact-react-app


<!-- Flow of react  -->

If you see in our index.html file which is located in public folder. index.html don't have script tag then how javascript know that I have to connect to this index.html. This is happenning because in react there is a file package.json in this file you can see dependencies in this there is a react-script. react-script is responsible for adding script in html file. 

<!-- Flow of react with vite react -->
In vite react script is already added to html file and in vite the index.html is not in public folder. It is directly available in project folder

<!-- Name convention in react -->
Whenever we create component in react always start first letter as capital.