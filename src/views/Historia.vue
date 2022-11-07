
<template>
    <section class="entry">
        <h1>Historia de GNU/Linux</h1>
        <h2>Un breve resumen de los orígenes del sistema operativo que revolucionó el mundo de la tecnología</h2>

        <div class="main-image">
            <img src="../assets/historia-linux.webp" alt="historia de linux">
        </div>
        <article class="main-text">
            <h3>Los antecedentes</h3>
            <p>
                Como antecesor de nuestros sistemas GNU/Linux, hay que recordar un poco la historia de UNIX.
                UNIX se inició hacia el año 1969 en los laboratorios BTL (Bell Telephone Labs) de AT&T por los ingenieros Ken Thompson y Dennis Ritchie. En principio fue un desarrollo en su tiempo libre y tuvieron que "engañar" a la empresa con la excusa de desarrollar un procesador de texto para que invierta dinero en el proyecto. En los comienzos se trataba de un sistema operativo desarrollado en lenguaje ensamblador, es decir un lenguaje de bajo nivel cercano al código de la máquina. Tres años después, Thompson y Ritchie reescribieron todo el código de UNIX en lenguaje C. Gracias a esto, el código fuente de UNIX se podía implementar y modificar en otras computadoras, por lo que era más portable y potencialmente comercial. Por medio de licencias otorgadas por AT&T, la base del sistema fue modificada y desarrollada por universidades y empresas privadas. Una de las universidades que había obtenido una licencia de UNIX fue la Universidad de California en Berkeley, donde había estudiado Ken Thompson. En 1977 se lanzó el sistema llamado Berkeley Software Distribution.
                La industria UNIX comenzó también a crecer; empezaron a aparecer versiones(implementaciones) de UNIX por parte de compañías, como Xenix; hubo una colaboración entre Microsoft (en los orígenes también trabajó con versiones de UNIX) y SCO para máquinas Intel 8086 (el primer PC de IBM); aparecieron nuevas versiones BSD de Berkeley. Pero surgió un nuevo problema cuando AT&T se dio cuenta de que UNIX era un producto comercial valioso. En la licencia de la V7 se prohibió el estudio en centros académicos, para proteger el secreto comercial. Muchas universidades utilizaban hasta el momento el código fuente de UNIX para docencia de sistemas operativos, y dejaron de usarlo para dar sólo teoría. Para solucionar este problema, emergió el sistema operativo MINIX, desarrollado por Andrew S. Tanenbaum desde cero para no usar ninguna linea de código propiedad de AT&T. Tanenbaum era un profesor de Ámsterdam que necesitaba enseñar a sus estudiantes el funcionamiento del interior de un sistema operativo real. Fue diseñado para correr en los microprocesadores Intel 8086 que para ese entonces inundaban el mercado mundial. Como sistema operativo no era precisamente espléndido, pero tenía la ventaja de que su código fuente estaba disponible. Cualquiera que pudiera conseguir el libro 'Operating System' de Tanenbaum tenía acceso a las 12,000 lineas de código escritas en C y lenguaje ensamblador. Por primera vez, un aspirante a programador o a hacker podía leer el código fuente de un sistema operativo, que para entonces era guardado celosamente por los dueños del software. Estudiantes de todo el mundo pudieron sumergirse en las lineas de código que hacían funcionar el sistema de las computadoras. Y Linus Torvalds era uno de ellos.
            </p>
            <h3>GNU/Linux</h3>
            <p>
                En 1991, Linus Torvalds era un estudiante de 21 años Ciencias de la Computación de la Universidad de Helsinki y un hacker autodidacta. Torvalds ya había estudiado el MINIX y conocía el proyecto de la Free Software Foundation de Richard Stallman, y decidió que crearía un nuevo núcleo del sistema operativo que aprovechara las herramientas del proyecto GNU que ya estaban muy avanzadas, pero todavía carecía de un kernel. Su idea era crear un nuevo sistema operativo para los PC más domésticos y no limitar el sistema a las grandes máquinas en las que se estaba usando UNIX. Quería acercar este tipo de sistema a los PC más pequeños. La primera vez que Linus Torvalds hizo público su nuevo sistema operativo fue el 26 de agosto de 1991, cuando en un foro de usuarios de MINIX puso el siguiente mensaje:
            </p>
            <div class="image-container">
                <img src="../assets/mail-linus-torvald.png" alt="mail de Linus Torvalds">
            </div>
            <p>
                Pronto, Linus tuvo que confrontar con ni más ni menos que el mencionado Tanenbaum, el creador de MINIX, debido a la decisión de Linus de crear el kernel de tipo monolítico.
                Es decir, no se separan las diferentes funcionalidades que tiene el núcleo en diferentes módulos, sino que todo forma parte del mismo programa Esto según Tanenbaum era un error garrafal, incluso sentenció "Linux está obsoleto". No obstante, el trabajo continuó.
                Rápidamente obtuvo una gran cantidad de respuestas de personas que estaban muy interesadas en usarlo, puesto que al utilizar el compilador gcc y el intérprete de órdenes de GNU (bash), que ya estaban desarrollados en el proyecto de Stallman, el sistema operativo de Torvalds era libre. A partir de aquel momento, el sistema operativo Linux aprovechó todas las herramientas del proyecto GNU, lo cual provocó que se conociera como sistema operativo GNU/Linux, puesto que el Linux es propiamente el kernel y no tiene las funciones adicionales, como los editores, compiladores y herramientas que le proporciona el proyecto GNU. Por tanto, el conjunto de las dos partes se conoce como GNU/Linux.
            </p>
        </article>
        <div class="youtube-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SQODoNIu6e0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="referencias">
            <h3>Referencias</h3>
            <ul>
                <li>History of Linux - Extraído de bazaarmodel.net link: <a target="_blank" href="https://bazaarmodel.net/ftp/Project-C/Bazaarmodel/Materiaal/Rechten-Law/History%20of%20Linux.doc">https://bazaarmodel.net/ftp/Project-C/Bazaarmodel/Materiaal/Rechten-Law/History%20of%20Linux.doc</a></li>
                <li><a target="_blank" href="https://fossbytes.com/linus-torvaldss-famous-email-first-linux-announcement/">https://fossbytes.com/linus-torvaldss-famous-email-first-linux-announcement/</a></li>
                <li>El video de YouTube colocado más arriba: <a target="_blank" href="https://www.youtube.com/watch?v=SQODoNIu6e0">https://www.youtube.com/watch?v=SQODoNIu6e0</a></li>
                <li>Clase 1 de la materia Sistemas Operativos 2</li>
            </ul>
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
        margin: 1.2em 0;
        h3 {
            font-size: 30px;
            color: var(--prussian-blue);
            font-weight: 600;
        }
        p {
            font-size: 1.2em;
            margin-bottom: 1em;
        }

        > .image-container {
            width: 96%;
            max-width: 960px;
            margin: 1.5em auto;
            > img {
                object-fit: cover;
                width: 100%;
                height: auto;
            }
        }
    }

    > .youtube-video {
        margin: 1.5em 0;
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