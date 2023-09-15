import React from "react";
import "./DarkMode.css";

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        // document.querySelector("body") = on selectionne l'élément html body
        // .setAttribute('data-theme', 'dark') = on lui attribut data-theme = dark
        localStorage.setItem("selectedTheme", "dark")
        // localStorage = on enregistre dans le navigateur un paramètre
        // .setItem("selectedTheme", "dark") = on lui stock une paire clé-valeur
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")
    //  on stock la valeur du theme actuel dans une const et on la recupere grace a l'objet js localstorage
    // et sa méthode .getItem() avec comme parametre de nom de la clé precedement defini. ici en locurence c'est selectedTheme

    if(selectedTheme === "dark") {
        setDarkMode()
    }

    const toggleTheme = e => {
    if (e.target.checked) setDarkMode()
    // création de la fontion qui sera appeler au moment d'appuyer sur l'input et qui va s'occuper d'attribuer
    // la bonne fonction selon la position du bouton. 
    
    // si le bouton est checker, alors on appel la fonction darkmode
    else setLightMode()
    // sinon on "laisse"/applique le mode par defaut soit lightmode
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
            </label>
        </div>
    );
};

export default DarkMode;
