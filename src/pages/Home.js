import React from 'react';
import * as Unicons from '@iconscout/react-unicons';


const Home = () => {
    return (
        <>
            {/* <a class="home__social-icon blue" href="https://www.linkedin.com/in/otaldol2/" target="_blank">
                                <i class="uit uil-linkedin-alt"></i>
                            </a> */}
            
            <Unicons.UilLinkedinAlt color="#3ed4f2"/>
            <Unicons.UilGithubAlt color="#fdc21f"/>
            <Unicons.UilMediumM color="hsl(327, 95%, 56%)"/>

            <div class="home__social">
                <a class="home__social-icon blue" href="https://www.linkedin.com/in/otaldol2/" target="_blank">
                    <i class="uit uil-linkedin-alt"></i>
                </a>

                <a class="home__social-icon yell" href="https://github.com/OTalDoL2" target="_blank">
                    <i class="uit uil-github-alt"></i>
                </a>

                <a class="home__social-icon rose" href="https://otaldol2.medium.com/" target="_blank">
                    <i class="uil uil-medium-m"></i>
                </a>
            </div>

            <h2> Opa, eu sou o Lucas.</h2>
            <h1>/Dev Backend e Analista de Dados</h1>

            <p> Aprendiz da Arte de Programar e amante de Café. </p>

            <p> ETE Cícero Dias ✔️ </p>

            <p> Análise e Desenvolvimento de Sistemas - FICR (5/5) </p>

            <p> Quer saber mais? </p>
        </>
    );
}

export default Home