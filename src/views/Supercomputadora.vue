
<template>
    <section class="entry">
        <h1>¿Por qué las supercomputadoras usan Linux?</h1>
        <h2>Linux evolucionó hasta convertirse en el sistema operativo ideal para supercomputadoras, y es por eso que cada una de las computadoras más rápidas del mundo funciona con Linux.</h2>

        <div class="main-image">
            <img src="../assets/columbia-nasa.jpg" alt="supercomputadora">
        </div>
        <article class="main-text">
            <h3>¿Qué es una supercomputadora?</h3>
            <p>
                Un superordenador o supercomputadora es aquel tipo de ordenador que presenta capacidades de cálculo muy por encima de la media. De hecho, la velocidad de estas máquinas se mide en petaflops o mil billones de operaciones por segundo. En otras palabras: estas computadoras están diseñadas para procesar en un segundo, miles de millones de datos. De ahí que, mediante la estadística, sirvan para predecir un tsunami o buscar planetas, entre otras acciones.
            </p>

            <h3>¿Por qué utilizan Linux?</h3>
            <p>
               Existen varias razones que justifican el dominio absoluto de Linux en este campo:<br>
            </p>
            <h4>Modularidad</h4>
            <p>
                Una típica instalación de Linux está hecha de pequelos bloques o módulos y cada uno hace una tarea distinta, estos bloques juntos hacen que el Sistema operativo funcione. Esto hace que sea muy fácil hacer modificaciones a determinadas tareas sin afectar las demás. No hay ningún otro sistema operativo tiene esta libertad de extensión. Los módulos pueden ser modificados para ser usados en las supercomputadoras para obtener metas, como rendimiento, eficiencia energética, etc.
            </p>
            <h4>Naturaleza genérica del kernel</h4>
            <p>
                El Kenel es genérico. Un código fuente puede ser escrito para correr en supercomputadoras y en pequeños inventos. No hay que hacer grandes cambios al kernel para tener un gran sistema o uno pequeño.
            </p>
            <h4>Escalabilidad</h4>
            <p>
                Escalabilidad se defino como la habilidad de un servidor en adaptarse a cargas altas. Es una medida de eficacia. Linux tiene una tremenda escalabilidad y pueden acostumbrarse a grandes cargas de forma sencilla. No en vano encontramos Linux tanto en estas supercomputadoras o en grandes centros de datos como en nuestros smartphones (Android) o incluso en nuestros televisores o microondas.
            </p>
            <h4>Naturaleza código abierto</h4>
            <p>
                Linux es por completo código abierto y su software también, esto permite personalizar completamente la máquina al milímetro. En caso de problemas de rendimiento, o agujeros de seguridad, se puede alterar el código directamente en cualquier momento para actualizarlo. 
            </p>
            <h4>Coste</h4>
            <p>
                Otro de los factores clave es evidentemente el del coste de las tradicionales licencias, que era altísimo en el caso de sistemas operativos comerciales y que es cero en el caso de las distintas distribuciones y variantes Linux usadas en estos supercomputadores. Hay desde luego un coste a la hora de adaptar esas distribuciones a una supercomputadora en concreto, pero eso forma parte de esas tareas de maximización del rendimiento.  
            </p>
            <h4>Reinicios</h4>
            <p>
                Tener encendido un superordenador esperando a que se reinicie podría llevar horas. Si tenemos en cuenta que un superordenador puede llegar a consumir 15.000 kWh, es una pérdida de dinero porque no se está utilizando ese ordenador para calcular nada. Con Linux, las actualizaciones se aplican de tal manera que no hace falta reiniciar el sistema gracias a su diseño modular. Si un ordenador está actualizándose o necesita ser reiniciado, el resto pueden seguir funcionando sin problemas gracias a la escalabilidad.
            </p>
            <br>
            <div class="image-container">
                <img src="../assets/ranking.png" alt="ranking supercomputadoras">
            </div>
            <p>Esta imagen fue extraída de la página <a href="https://www.top500.org/statistics/details/osfam/1/">Top500</a>, que es una lista bianual de las supercomputadoras más potentes del mundo. En este gráfico se observa en qué porcentaje esas máquinas utilizan un sistema operativo Linux. Ese número desde noviembre de 2017 es del 100%, y venía subiendo de manera constante desde la primera vez que se comenzó a utilizar en este ámbito que fue según esta lista en junio de 1998. El liderazgo de Linux en este ámbito no tiene competencia y no parece que la vaya a tener en un largo tiempo.</p>

            <h3>Un ejemplo: la supercomputadora Columbia de la NASA</h3>
            <p>
                Silicon Graphics se encargó de construir la supercomputadora Columbia para la NASA, la cual fue instalada en el sector de Supercomputación Avanzada durante el año 2004. El sistema que costó 160 millones de dólares es utilizado para simular misiones espaciales, diseñar hardware y patrones de clima para ser estudiados, pero no sólo la NASA aprovecha su impresionante capacidad de procesamiento, Columbia es empleada también por instituciones educativas y otras agencias del gobierno estadounindense. ¿Qué versión de GNU/Linux utiliza? Se llama "SGI ProPack Linux", un sistema operativo especialmente diseñado para las supercomputadoras de SGI.Actualmente, SGI ProPack 4 para GNU/Linux usa un kernel 2.6 incluyendo capacidades adicionales y mejoras en el desempeño, es ideal para procesadores Itanium de Intel, y puede correr con SUSE LINUX Enterprise Server 9 de Novell. SGI ProPack 5 también soporta Red Hat Enterprise Linux 5 para los sistemas SGI Altix y SGI Altix XE.
            </p>
 
        </article>

        <div class="referencias">
            <h3>Referencias</h3>
            <ul>
                <li><a target="_blank" href="https://www.adslzone.net/2016/11/15/casi-todos-los-superordenadores-del-mundo-usan-linux/">https://www.adslzone.net/2016/11/15/casi-todos-los-superordenadores-del-mundo-usan-linux/</a></li>
                <li><a target="_blank" href="https://www.xataka.com/especiales/linux-es-lider-absoluto-en-supercomputacion-por-que-windows-o-macos-no">https://www.xataka.com/especiales/linux-es-lider-absoluto-en-supercomputacion-por-que-windows-o-macos-no</a></li>
                <li><a target="_blank" href="http://www.nexolinux.com/porque-las-supercomputadoras-usan-linux/">hhttp://www.nexolinux.com/porque-las-supercomputadoras-usan-linux/</a></li>
                <li><a target="_blank" href="https://sistemas.com/12052.php">https://sistemas.com/12052.php</a></li>
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
                width: 100%;
                display: block;
                object-fit: cover;
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