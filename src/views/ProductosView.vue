<template>
<section>
    <NavComponentVue/>
    <div class="title">
        <p>Productos disponibles</p>
        <div class="listProducts">
            <div v-for="producto in productos" :key="producto.name">
                <CardProducts :nameProduct="producto.name" :picture="producto.picture" :price="producto.price" :idProduct="producto.id"/>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import { productos } from '@/productos'
import CardProducts from '@/components/CardProducts.vue';
import NavComponentVue from "@/components/NavComponent.vue";
export default{
    components:{
        NavComponentVue,
        CardProducts
    },
    data(){
        return{
            productos
        }
    }
}
</script>
<style lang="sass" scoped>
section
    background-image: url('@/assets/productosBackground.jpeg')
    width: 100%
    height: 100vh
    background-repeat: no-repeat
    background-size: 100% 100vh
    display: flex
    flex-direction: column

.title
    width: 100%
    height: 600px
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

    p
        font-size: 50px

.listProducts   
    display: flex
    width: 100%
    height: 500px
    flex-direction: row
    justify-content: space-around
    align-items: center


</style>