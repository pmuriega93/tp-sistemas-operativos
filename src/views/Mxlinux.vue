
<template>
    <section class="entry">
        <h1>MX Linux</h1>
        <h2>MX Linux es un sistema operativo basado en Debian estable, que en este momento se encuentra en primer lugar en descargas en <a target="_blank" href="https://distrowatch.com/">Distrowatch</a>. Veremos si su popularidad actual está justificada.</h2>

        <div class="main-image">
            <img src="../assets/mxlinux-grande.png" alt="MX linux">
        </div>
        <article class="main-text">
            <h3>MX Linux para una pc de bajos recursos</h3>
            <p>
                MX Linux es un sistema operativo ligero, basado en Debian estable y con los componentes de antiX (otro sistema operativo también basado en Debian para pcs de bajos recursos). Es una de las pocas distribuciones que sigue manteniendo una versión de 32 bits, o sea que si todavía tenés una computadora con un procesador Pentium 4, este sistema operativo te puede llegar a servir. 
            </p>
            <h3>Aplicaciones por defecto</h3>
            <p>
                El escritorio que viene por defecto es Xcfe. Xfce es un entorno de escritorio libre para sistemas tipo Unix como GNU/Linux, BSD, Solaris y derivados. Su objetivo es ser rápido y ligero, sin dejar de ser visualmente atractivo y fácil de usar. Consiste en varios componentes empaquetados ​​por separado que en conjunto proporcionan la funcionalidad completa del entorno de escritorio, pero se pueden seleccionar por separado para que el usuario pueda adaptar el ambiente de trabajo a sus necesidades.<br>
                Además trae instalados Libre Office, Firefox, el reproductor VLC, Thunderbird para manejo de correo electrónico, GIMP, que es como Photoshop pero versión software libre.
                Un programa que me pareció interesante es el PDF Arranger, que además de permitir ver archivos pdf, permite editarlos fácilmente. Trae instalado Conky que permite monitorear algunas variables del sistema incluyendo el estado de la CPU, memoria disponible, espacio en la partición de intercambio, almacenamiento en disco, temperaturas, procesos, interfaces de red, batería, mensajes del sistema, bandejas de correo, algunos reproductores de audio populares (MPD, XMMS2, BMPx, Audacious, etc.), estado del tiempo, noticias, y mucho más.
                Para las aplicaciones que no vienen instaladas, trae el MX package manager, con el cual se pueden buscar e instalar aplicaciones de manera muy sencilla.<br>
                Es una distro particularmente cargada de aplicaciones por defecto, pero eso me parece en este caso una ventaja para una computadora de una familia con estudiantes de nivel primario o secundario, debido a que trae todo lo necesario para que cualquiera pueda hacer un uso promedio de la computadora con este sistema operativo.
            </p>
            <h3>Requisitos</h3>
            <p>
                MX Linux es un sistema operativo de gama media destinado a funcionar sin problemas en muchos ordenadores. Los requisitos del sistema son al menos 8,5 GB de memoria y 1 GB de RAM. Sin embargo, se recomiendan 20 GB de memoria y 2 GB de RAM o más. Como se puede ver es una distribución bastante ligera.
            </p>
 
        </article>
        <div class="youtube-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KvliIjzSYeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
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
            font-size: 1.2em;
            padding: 0 1em;
            > .freedom-item {
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