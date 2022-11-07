<script lang="ts" setup>
import router from '@/router';

function routeTo(selectedRoute: string) {
  router.push(selectedRoute);
}
</script>
<template>
  <body class="main">
    <div class="container">
      <section class="center-entry">
        <div class="main-entry">
          <div @click="routeTo('/linux')">
            <h2>¿Por qué usar Linux?</h2>
            <p class="main-entry__description">
              ¿Qué es Linux? ¿Para qué sirve? ¿Cómo trabajar con Linux y cuáles son sus ventajas?
            </p>
          </div>
        </div>
        <div class="black-cover"></div>
      </section>
      <aside class="right-entries">
        <h3>Entradas</h3>
        <div class="entry">
          <img class="entry-image" src="../assets/entrada3.jpg" alt="software libre">
          <div @click="routeTo('/software-libre')">
            <h3>¿Por qué usar software libre?</h3>
            <p>¿Qué es el software libre y por qué me puede interesar usarlo?</p>
          </div>
        </div>
        <div class="entry">
          <img class="entry-image" src="../assets/entrada2.jpeg" alt="linux">
          <div @click="routeTo('/historia')">
            <h3>Breve Historia de GNU/Linux</h3>
            <p>La historia del sistema operativo que se desarrolla bajo los principios del software libre y de código abierto.</p>
          </div>
        </div>
        <div @click="routeTo('/conclusion')" class="entry">
          <img class="entry-image" src="../assets/conclusion.jpg" alt="conclusion">
          <div>
            <h3>¿Por qué debería darle una oportunidad a Linux?</h3>
            <p>Una conclusión en base a todo lo hablado en esta web/trabajo práctico.</p>
          </div>
        </div>
      </aside>
    </div>
    <section class="other-entries">
      <h2>Otras entradas</h2>
      <div class="entries">
        <div @click="routeTo('/ubuntu')" class="bottom-entry">
          <img src="../assets/ubuntu.jpeg" alt="ubuntu">
          <div>
            <h3>Ubuntu - por qué elegirla si sos desarrollador de software</h3>
            <p>En esta sección, comento por qué elijo esta distribución para la pc de un desarrollador de software</p>
          </div>
        </div>
        <div @click="routeTo('/mxlinux')" class="bottom-entry">
          <img src="../assets/mxlinux.jpg" alt="mx linux">
          <div>
            <h3>MX Linux - una distro ligera para una pc gama baja</h3>
            <p>¿Es posible revivir una computadora vieja gracias a Linux? La respuesta los sorprenderá...</p>
          </div>
        </div>
        <div @click="routeTo('/supercomputadoras')" class="bottom-entry">
          <img src="../assets/supercomputadora.jpg" alt="supercomputadora">
          <div>
            <h3>¿Por qué las super computadoras utilizan GNU/Linux?</h3>
            <p>Las 500 supercomputadoras más potentes del todo el mundo hacen uso de este sistema operativo. ¿Por qué Linux sí y Windows o macOS no?</p>
          </div>
        </div>
      </div>
    </section>
    
  </body>
</template>

<style scoped lang="scss">
  .main {
    background-color: var(--gray-web);
    
    .main-entry {

      > div {
        cursor: pointer;
        position: absolute;
        top: 80%;
        padding: 0 1em;
        > h2 {
          z-index: 2;
          color: var(--snow);
          font-size: 32px;
          font-weight: 600;
          transition: all .3s ease;
        }

        > .main-entry__description {
            color: var(--snow);
            font-size: 20px;
            z-index: 2;
            transition: all .3s ease;
          }

      }
      > div:hover {
        > h2,
        > .main-entry__description {
          color: var(--prussian-blue);
        }
      }
      
    }

    h3 {
      color: var(--rich-black-fogra-39);
      font-size: 18px;
    }

    .black-cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.5);
      z-index: 1;
    }

    .container {
      width: 100%;
      min-height: calc(100vh - 180px);
      display: grid;
      column-gap: 10px;
      grid-template-areas: 
        "main right"
        "main right"
        "main right"
      ;
      grid-template-columns: 1fr 35em;
      grid-template-rows: 1fr;

      .entry {
        height: 33.33333%;
        display: flex;
        gap: 10px;
        justify-content: space-between;

        > div {
          cursor: pointer;
          flex: 1;
          line-height: 1.5;

          h3 {
            font-size: 20px;
            color: var(--prussian-blue);
            transition: all .3s ease;
          }
          p {
            margin-top: 10px;
            color: var(--rich-black-fogra-39);
            transition: all .3s ease;
          }
        }

        > div:hover {
          h3, p {
            color: var(--prussian-blue);
          }
        }

        > .entry-image {
          // flex: 1;
          width: 40%;
          // width: 250px;
          height: 180px;
          object-fit: cover;
          object-position: center center;
        }
      }
      > .center-entry {
        grid-area: main;
        > .main-entry {
          background-image: url(../assets/entrada1.jpeg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          height: 100%;
        }
      }

      > .right-entries {
        height: 100%;
        grid-area: right;
        display: flex;
        gap: 10px;
        flex-direction: column;

        > h3 {
          font-size: 2.5em;
          font-weight: 600;
          color: var(--prussian-blue);
        }
      }

    }
    > .other-entries {
      margin-top: 3em;
      width: 100%;

      > h2 {
        margin-left: 1em;
        font-size: 32px;
        color: var(--prussian-blue);
        font-weight: 600;
      }
      > .entries {
        padding: 2em;
        width: 100%;
        display: grid;
        gap: 1em;
        grid-auto-flow: dense;
        grid-auto-rows: 22em;
        grid-template-columns: repeat(3, minmax(5em, 1fr));

        > .bottom-entry {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            object-fit: cover;
            width: 80%;
            height: 220px;
          }

          > div {
          cursor: pointer;
            > h3 {
              margin-top: 1em;
              padding: .2em;
              color: var(--prussian-blue);
              font-weight: 600;
              height: 3.5em; 
            }
            > p {
              padding: .2em;
            }
          }

          > div:hover {
          h3, p {
            color: var(--prussian-blue);
          }
        }
        }
      }


    }
  }

  @media screen and (max-width: 1024px) {
    .main {
    
    .main-entry {

      > div {
        position: absolute;
        top: 60%;
        padding: 0 1em;
        > h2 {
          z-index: 2;
          color: var(--snow);
          font-size: 32px;
          font-weight: 600;
          transition: all .3s ease;
        }

        > .main-entry__description {
            color: var(--snow);
            font-size: 20px;
            z-index: 2;
            transition: all .3s ease;
          }

      }
      
    }


    .black-cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.5);
      z-index: 1;
    }

    .container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      .entry {
        height: auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        > .entry-image {
          width: 85%;
          height: 300px;
          object-fit: cover;
          object-position: center center;
        }

        > div {
          padding: 1em;
          text-align: center;
          h3 {
            font-size: 2em;
          }
          p {
            font-size: 1.5em;
          }
        }
      }
      > .center-entry {
        > .main-entry {
          background-image: url(../assets/entrada1.jpeg);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          height: 500px;
        }
      }

      > .right-entries {

        > h3 {
          text-align: center;
        }
      }

    }
    > .other-entries {
      margin-top: 3em;
      width: 100%;

      > h2 {
        text-align: center;
      }
      > .entries {
        padding: 2em;
        width: 100%;
        display: flex;
        gap: 1em;
        flex-direction: column;
        flex-wrap: wrap;
        text-align: center;

        > .bottom-entry {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            object-fit: cover;
            width: 80%;
            height: 220px;
          }
          div {
            h3 {
              height: auto;

            }
          }

        }
      }


    }
  }
    }
</style>
