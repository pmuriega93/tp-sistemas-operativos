
<template>
    <section class="entry">
        <h1>Conclusión</h1>
        <h2>A modo de cierre: ¿por qué debería darle una oportunidad a Linux?</h2>

        <div class="main-image">
            <img src="../assets/conclusion.jpg" alt="conclusion">
        </div>
        <article class="main-text">
            <h3>Un poco de análisis personal</h3>
            <p>
               En el presente apartado voy a volcar mi corta experiencia trabajando con este sistema operativo.<br>
               Para ser completamente honesto no había visto la necesidad de utilizarlo. Toda mi vida usé Windows, desde pequeño en el ciber y en el colegio, nunca necesité nada más. Hace algunos años quise comenzar a utilizar Linux para restaurar una computadora vieja (una de las netbooks del gobierno), asi que comencé a investigar que distribución podía ponerle para revivirla. La elegida en ese caso fue Linux Mint, por su interfaz que no me resultaba muy diferente a Windows y por los pocos recursos que pensé que consumía, además que tenía posibilidad de usarlo en una arquitectura de 32 bits. No tuve problemas para instalarlo, pero a la hora de comenzar a utilizar la máquina me encontré con que no andaba lo rápido que yo esperaba. En ese momento no tenía el conocimiento necesario para elegir una distribución que se adaptara mejor a mis necesidades. A esto se sumó el hecho de que me resultó increiblemente difícil usar la terminal para las tareas básicas como descomprimir un archivo o instalar un programa. Si bien siempre me di alguna maña para googlear cosas y hacerlas andar, no pude pasar la curva de aprendizaje para usarlo. Al final, terminé por ponerle un viejo windows 7, que le andaba bastante lento, y de ahí no volví a pensar siquiera en usar Linux.<br><br>
               Tuvieron que pasar varios años para que yo comience a estudiar programación y me inscriba a la carrera de desarrollo de software. Entonces comencé a aprender JavaScript de manera autodidacta y con mi editor de código me bastaba, el cual no tiene ningún inconveniente en Windows. No fue hasta que comencé esta materia que me reencontré con Linux, y pude superar esa curva de aprendizaje que en el pasado me alejó de este sistema operativo. Además me descargué el libro de <a target="_blank" href="https://pdfcoffee.com/linux-para-principiantes-4-pdf-free.html">Jason Cannon, Linux para principiantes</a>, que me ayudó bastante a perderle el miedo. Y me alegro, porque mejora la productividad considerablemente. Programas como Android Studio o Docker (lo utilizo para aprender programación con JavaScript del lado del servidor), funcionan de manera nativa y andan mucho mejor en un entorno con Linux. Cabe destacar que es el sistema operativo recomendado para tareas de programación, a menos que quieras programar en C#, .Net o lenguajes que son específicamente para Windows. Por lo que un estudiante de desarrollo de software debe afrontar en algún momento el hecho de que deberá migrar a un sistema operativo Linux eventualmente.
               Actualmente mi computadora personal la configuré con dual-boot con Ubuntu y Windows 10, este último para utilizar con videojuegos (tema aparte, seguramente será cuestión de tiempo para que se puedan jugar videojuegos que son exclusivos de manera nativa en Linux. Tal vez ya exista una forma pero no la conozco aún.).<br>
               Quiero hacer una mención aparte para Batocera, que conocí también en el transcurso de la materia. Lo instalé en un pendrive y me sorprendió gratamente lo rápido que pude comenzar a jugar, simplemente tuve que descargar roms de internet y pasarlos al pendrive desde el sistema de archivos de Batocera. El joystick lo reconoció automáticamente y ya pude comenzar a jugar videojuegos de hasta playstation 2 (también reconoce juegos de PS3 pero mi computadora está un poco vieja).<br>
            </p>
            <h3>En resumen...</h3>
            <p>
                Es un gran momento para pasarse a Linux. Ya no es tan complicado para los usuarios novatos acercarse a él, y no es tan difícil instalar los controladores para los periféricos como lo fue en el pasado. Las distros más populares tienen un entorno muy amigable, una enorme comunidad y extensas documentaciones para resolver cualquier inconveniente que puedas llegar a tener. Hagas lo que hagas y tengas el conocimiento que tengas seguramente hay una distribución que se adapta a tus necesidades. 
            </p>
 
        </article>
    </section>
</template>

<style lang="scss" scoped>
.entry {
    margin: 0 auto;
    padding: 1em;

    h1 {
        margin-top: 1em;
        font-size: 32px;
        color: var(--prussian-blue);
        text-align: center;
        font-weight: 700;
    }

    h2 {
        text-align: center;
        margin-bottom: 1em;
        color: var(--rich-black-fogra-39);
    }

    > .main-image {
        width: 96%;
        max-width: 960px;
        margin: 0 auto;
        > img {
            object-fit: cover;
            width: 100%;
            height: auto;
        }
    }
    > .main-text {
        line-height: 1.5;
        h3 {
            font-size: 30px;
            color: var(--prussian-blue);
            font-weight: 600;
        }
        h4 {
            font-size: 24px;
            color: var(--rich-black-fogra-39);
            font-weight: 600;
        }
        p {
            font-size: 1.2em;
            margin-bottom: 1em;
        }

        > .freedom-list {
            padding: 1em;
            > .freedom-item {
                font-size: 22px;
                color: var(--prussian-blue);
                font-weight: 600;

                p {
                    margin-top: 8px;
                    font-size: 1em;
                    color: var(--rich-black-fogra-39);
                }
            }
        }

        > .image-container {
            width: 96%;
            margin: 0 auto;
            margin: 1.5em auto;
            > img {
                display: block;
                object-fit: contain;
                margin: 0 auto;
            }
        }
    }

    > .youtube-video {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > .referencias {
        margin-top: 1em;

        > h3 {
            font-size: 30px;
            color: var(--prussian-blue);
            font-weight: 600;
        }
    }
}

</style>