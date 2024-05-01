import React from "react";

function About() {
  return <div className="flex flex-col md:flex-row md:justify-around items-center justify-center bg-purple-600 dark:bg-purple-900 p-4  mt-2 mx-2 rounded-md max-w-2/#">
    <img className=" rounded-full " src="https://media.licdn.com/dms/image/D4D35AQGLgMGdXpJO1A/profile-framedphoto-shrink_400_400/0/1707424436905?e=1714827600&v=beta&t=Ng6WamBHHpxM900ptcqDSzz6vRVrdemAg84bO2iqqkk" alt="brian rojas" />
    
<div className="pt-4 dark:text-white text-purple-200 leading-relaxed size-2/3 ">
 <p>
 ¡Hola! Soy Brian Rojas desarrollador full stack.
 </p>
 <br />
 <p>En esta aplicación, te invito a explorar el emocionante universo de Rick and Morty, donde podrás sumergirte en las aventuras de estos personajes únicos y fascinantes. Utilizando la potencia de React y Redux, junto con el moderno diseño de Tailwind CSS, con un diseño totalmente receptivo que se adapta a cualquier dispositivo.
 </p>
 <br />
 <p>
Además, he integrado un modo oscuro para que puedas sumergirte aún más en el misterio y la intriga del universo de Rick and Morty, con una estética visualmente atractiva y cómoda para tus ojos, incluso en entornos de poca luz.


    </p>
  </div>;
</div>
}

export default About;
