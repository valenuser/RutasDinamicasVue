<template>
<section>
    <NavComponent/>
    <div class="containerForm">
        <h1>Contacta con nosotros</h1>
        <div>
            <input type="text" placeholder="Nombre" class="nameUser">
            <input type="text" placeholder="Apellido" class="nameUser">
        </div>
        <div>
            <input type="text" name="" id="" placeholder="Correo electrónico">
        </div>
        <textarea name="" id="" cols="68" rows="18" placeholder="¿En que podemos ayudarte?"></textarea>
        <div class="containerButton">
            <button>
                Contactar
            </button>
        </div>
    </div>
</section>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue';
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
    background-image: url('../assets/fondoContacto.avif')
    background-repeat: no-repeat
    background-size: 100% 100vh

.containerForm
    width: 100%
    height: 650px
    display: flex
    align-items: center
    flex-direction: column

    h1
        margin-bottom: 50px
        font-size: 55px

    div
        width: 510px
        display: flex
        justify-content: space-between
        margin-bottom: 50px

        .nameUser
            padding: 3px
            width: 220px
            height: 35px
            border: none
            border-radius: 10px
            box-shadow: 0px 1.2px 1.2px 0px black

        input            
            padding: 3px
            width: 500px
            height: 35px
            border: none
            border-radius: 10px
            box-shadow: 0px 1.2px 1.2px 0px black
            outline: none

    textarea
        resize: none
        border: none
        border-radius: 10px
        box-shadow: 0px 1.2px 1.2px 0px black
        padding: 5px    
        outline: none
        margin-bottom: 20px
        &::placeholder
            font-size: 20px


    .containerButton
        width: 510px
        display: flex
        justify-content: end

        button
            width: 210px
            height: 35px
            font-size: 20px
            border: none
            background: #6EA161
            color: white
            border-radius: 10px
            box-shadow: 0px 1.2px 1.2px 0px black
.form


</style>