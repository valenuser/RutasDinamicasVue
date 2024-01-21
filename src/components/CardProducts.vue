<template>
 
        <div class="containerProduct">
            <img :src="picture" alt="">
            <p>{{ nameProduct}}</p>
            <p>Price: {{ price }}€</p>
            <button @click="selectProduct(nameProduct)">Comprar</button>
        </div>
</template>
<script>
export default{
    props:{
        picture:String,
        nameProduct: String,
        price:String,
        idProduct:Number
    },
    methods:{
        selectProduct(){
            this.$router.push({name:'selectedProduct',params:{id:this.idProduct}})
        }
    }
}
</script>
<style lang="sass" scoped>
.containerProduct
    width: 290px
    height: 450px
    overflow: hidden
    border-radius: 10px
    background: white
    display: flex
    flex-direction: column
    align-items: center
    img
        width: 240px
        height: 220px
        border-radius: 10px
        margin-top: 20px

    p
        font-size: 32px
        margin-top: 10px

    button
        margin-top: 30px
        width: 150px
        height: 35px
        font-size: 25px
        border: none
        border-radius: 5px
        background: black
        color: white
</style>