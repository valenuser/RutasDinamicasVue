<template>
    <div class="container">
        <router-link to="/"><h1>4TUKEA</h1></router-link>
        <div class="routes">
            <router-link to="/"><p>Inicio</p></router-link>
            <router-link to="/productos"><p>Productos</p></router-link>
            <router-link to="/contacto"><p>Contacto</p></router-link>
        </div>
    </div>
</template>
<style lang="sass" scoped>
.container
    padding: 5px 
    width: 99%
    height: 50px
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: row

    a
        text-decoration: none
        color: black

    h1
        font-size: 30px

.routes
    width: 400px
    display: flex
    justify-content: space-around
    align-items: center
    a 
        font-size: 25px
        text-decoration-line: none
        font-weight: bold
        color: black
        &.router-link-exact-active 
            color: gray
</style>