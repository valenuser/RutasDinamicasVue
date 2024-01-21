<template>
<section>
    <NavComponent/>
    <div class="containerProduct">
            <div class="containerPicture">
                <img :src="producto.picture" alt="">

            </div>
            <div class="containerData">
                <div>
                    <h1>{{ producto.name }}</h1>
                    <p>{{ producto.description }}</p>
                </div>
                <div class="priceContainer">
                    <p>{{ producto.price }}€</p>
                    <button>Comprar</button>
                </div>
            </div>
    </div>
</section>
</template>
<script>
import { productos } from '@/productos';
import NavComponent from '@/components/NavComponent.vue';
export default{
    components:{
        NavComponent
    },
    data(){
        return{
            producto: productos.find(prod => prod.id == this.$route.params.id)
        }
    }
}
</script>
<style lang="sass" scoped>
section
    width: 100%
    height: 100vh
    background-image: url('@/assets/productosBackground.jpeg')
    background-repeat: no-repeat
    background-size: 100% 100vh


.containerProduct
    display: flex
    align-items: center
    flex-direction: row
    width: 100%
    height: 80vh
    overflow: hidden
    
    img
        width: 500px
        height: 400px
        border-radius: 10px
        box-shadow: 0px 1.5px 1.5px 0px black

.containerPicture
    width: 50%
    height: 100vh
    display: flex
    align-items: center
    justify-content: center

.containerData
    width: 45%
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column


    h1
        font-size: 55px
        text-align: center
        margin-bottom:40px

    p
        text-align: start
        margin-bottom:91px

.priceContainer
    display: flex
    width: 100%
    justify-content: space-between

    p
        font-size: 30px

    button
        width: 200px
        height: 40px
        font-size: 25px
        border: none
        border-radius: 5px
        background: #6EA161
        color: white
        box-shadow: 0px 1px 1px 0px black

</style>