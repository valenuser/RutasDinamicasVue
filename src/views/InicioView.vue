<template>
    <section>
        <NavComponent/>
        <div class="slogan">
            <div>
                <h1>LO MEJOR EN PRODUCTOS PARA EL HOGAR</h1>
                <router-link to="/productos">Productos</router-link>
            </div>
        </div>
    </section>
</template>
<script>
import NavComponent from '../components/NavComponent.vue'
export default{
    components:{
        NavComponent
    }
}
</script>
<style lang="sass" scoped>
section
    width: 100%
    height: 100vh
    background-image: url('../assets/inicioBackground.jpeg')
    background-repeat: no-repeat
    background-size: cover

.slogan
    width: 100%
    display: flex
    justify-content: center
    div
        width: 570px
        height: 250px
        text-align: center
        display: flex
        flex-direction: column
        align-items: center
        justify-content: space-around
        h1
            font-size: 50px
            font-weight: bold
        a
            width: 120px
            border-radius: 10px
            text-decoration: none
            color: white
            background: #6EA161
            padding: 5px

</style>