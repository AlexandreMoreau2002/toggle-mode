---
id: 3on4zl66
title: darkMode
file_version: 1.1.3
app_version: 1.17.0
---

documentation

<!-- empty line --><br/>

This code snippet defines a function called `toggleTheme` that is called when an input is clicked. It checks if the input is checked, and if so, it calls a function called `setDarkMode()`. Otherwise, it calls a function called `setLightMode()`. The purpose of this code is to toggle between dark mode and light mode based on the state of the input.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/darkMode/DarkMode.jsx
```javascript
28         const toggleTheme = e => {
29         if (e.target.checked) setDarkMode()
30         // création de la fontion qui sera appeler au moment d'appuyer sur l'input et qui va s'occuper d'attribuer
31         // la bonne fonction selon la position du bouton. 
32         
33         // si le bouton est checker, alors on appel la fonction darkmode
34         else setLightMode()
35         // sinon on "laisse"/applique le mode par defaut soit lightmode
36         }
```

<br/>

This code snippet sets the dark mode theme on the body element by adding a 'data-theme' attribute with the value 'dark'. It also stores the selected theme in the browser's localStorage with the key "selectedTheme" and the value "dark".
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/components/darkMode/DarkMode.jsx
```javascript
6          const setDarkMode = () => {
7              document.querySelector("body").setAttribute('data-theme', 'dark')
8              // document.querySelector("body") = on selectionne l'élément html body
9              // .setAttribute('data-theme', 'dark') = on lui attribut data-theme = dark
10             localStorage.setItem("selectedTheme", "dark")
11             // localStorage = on enregistre dans le navigateur un paramètre
12             // .setItem("selectedTheme", "dark") = on lui stock une paire clé-valeur
13         }
14     
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBdG9nZ2xlLW1vZGUlM0ElM0FBbGV4YW5kcmVNb3JlYXUyMDAy/docs/3on4zl66).
