<template>
    <header>
        <div class="header-title">
            <img src="../assets/image-header.png" alt="imagen linux">
            <h1>Primeros Pasos con Linux <br> <span> - por Patricio Muriega</span></h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: var(--gray-web);
    width: 100%;
    padding: 15px;
    .header-title {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
        }
        h1 {
            color: var(--rich-black-fogra-39);
            font-size: 32px;

            span {
                font-weight: 300;
                font-size: 24px;
                color: var(--prussian-blue);
            }
        }
    }

}
</style>