
<template>
    <section class="entry">
        <h1>Ubuntu</h1>
        <h2>En esta entrada vamos a hablar de Ubuntu, probablemente la distribución más popular de Linux, y por qué la recomendaría para un desarrollador de sistemas.</h2>

        <div class="main-image">
            <img src="../assets/Ubuntu_22.04.png" alt="Ubuntu">
        </div>
        <article class="main-text">
            <h3>Ubuntu y su último lanzamiento, Jammy Jellyfish</h3>
            <p>
                Ubuntu es una distribución basada en Debian. Es una de las distribuciones Linux más usadas y conocidas en todo el mundo, por su simplicidad, fácil uso y por ser amistoso con el usuario. No hay que ser un genio de las computadoras para dominarlo.
                Esta versión es la 22.04.1 LTS. LTS significa que es una versión con soporte a largo plazo, es decir que tiene cinco años garantizados de mantenimiento y actualizaciones. Durante ese plazo seguirán sacando drivers para el nuevo hardware, podremos agregar cualquier componente de hardware que haya salido en ese período. Sin embargo las actualizaciones de seguridad seguirán saliendo hasta abril de 2032, es decir que son diez años de cobertura. Esto puede ayudar a que tu computadora resista la obsolescencia.
            </p>
            <h3>Requisitos</h3>
            <p>
                Los requisitos recomendados para instalar Ubuntu son: 
            </p>
            <ul class="freedom-list">
                <li>Procesador con 2 GHz, doble núcleo</li>
                <li>4 GB de memoria RAM</li>
                <li>25 GB de espacio en disco</li>
            </ul>
            <p>Esto significa que en una computadora moderna funciona perfectamente.</p>
            <h3>Aplicaciones por defecto</h3>
            <p>
                Ubuntu 22.04.1 viene con el entorno de escritorio Gnome 42, que además de ser muy atractivo visualmente, trae como novedad el modo oscuro y una función (mejorable) para capturar pantalla.<br>
                Trae instalados por defecto el navegador Firefox, Libre Office, el gestor de correo Thunderbird. Además cuenta con un centro de software muy completo desde el cual se pueden instalar aplicaciones con algunos clicks.
            </p>
            <h3>Comunidad</h3>
            <p>
                Al estudiar desarrollo de software resulta fundamental contar con una buena documentación y una comunidad activa para resolver cualquier duda que pueda llegar a surgir. En este sentido, al ser una de las distribuciones más utilizadas, esto se cumple con creces en esta distribución.
            </p>
            <h3>Popularidad entre desarrolladores</h3>
            <p>
                En <a target="_blank" href="https://pages.ubuntu.com/rs/066-EOV-335/images/Desktop_Developers_WP_Canonical_Final.pdf">este blog</a> podemos ver las razones que da la empresa que da soporte a Ubuntu, Canonical, para utilizar este Sistema operativo si sos desarrollador de software:
                <ul class="freedom-list">
                    <li class="freedom-item">Paquetes Snap: <br>
                        <p>Estos nuevos paquetes son ideales para compilar y distribuir aplicaciones y funcionan en sistemas de escritorio, nubes y dispositivos IoT. Son sencillos de crear e instalar, seguros de ejecutar y actualizar automáticamente. Y como en los paquetes Snap se incluyen todas las dependencias necesarias, funcionan en la mayoría de sistemas operativos Linux sin la necesidad de ser modificados.</p>
                    </li>
                    <li class="freedom-item">Experiencia robusta entre plataformas: <br>
                        <p>
                            La mayor ventaja de desarrollar en Ubuntu es que permite trabajar en el mismo sistema operativo subyacente tanto en sus sistemas de escritorio como en sus servidores, en la nube y en dispositivos IoT. Los mismos paquetes de software están disponibles para todas las versiones de Ubuntu, lo que asegura que los desarrolladores se pueden mover mejor entre las diferentes plataformas. Esta robusta experiencia facilita las pruebas locales antes de desarrollar globalmente, proporcionando a los desarrolladores un camino fácil desde el desarrollo hasta la producción. Todo esto lo hacen con el mismo software ejecutándose tanto en sus escritorios como en su entorno de producción.
                        </p>
                    </li>
                    <li class="freedom-item">Machine Learning: <br>
                        <p>
                            Este sistema operativo es el preferido para muchas tecnologías emergentes, de entre las que destacan la inteligencia artificial o AI, el Machine Learning o ML y el Deep Learning o DL. El último es un mercado creciente que está recibiendo una inversión muy importante de compañías como Google, Amazon y Microsoft, quienes están creando herramientas especiales. En cuanto a todo esto, ningún otro sistema operativo se puede acercar a librerías de Ubuntu, sus tutoriales y ejemplos. Por otra parte, ningún otro sistema ofrece el mismo nivel de soporte para las plataformas de código abierto y software más recientes. Esa es la razón por la que Ubuntu es el sistema operativo elegido por muchas de las frameworks más famosas, entre las que encontramos OpenCV, TensorFlow, Theano, Keras y PyTorch.
                        </p>
                    </li>
                </ul>
            </p>
 
        </article>
        <div class="youtube-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TaRS4LQaShU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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