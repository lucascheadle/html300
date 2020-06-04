<template>
    <div id="app">
        <h2>Gallery</h2>
        <div class="gallery-container">
            <div class="row px-4">
                <div v-for= "picture in pictures" v-bind:key="picture.id" class="col-lg-3 col-md-4 col-xs-6 thumb">
                    <b-img v-bind:src= "picture.url" class="garden div" v-bind:style='{"background-color" : (isActive? "orange" : "yellow" )}' @click="toggleClass()"></b-img>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

import imageClickMixin from '../mixins/imageClickMixin'

export default {
    name: 'app',
    props: {
        pictures: {
            type: Array,
            required: true
        }
    },
    mixins: [imageClickMixin]
}
</script>

<style scoped>

.garden {
    width: 100%;
    height: 200px;
    border-radius:5px;
    object-fit:cover;
    padding: 1rem;
}
.red{
    background: red;
}

.blue{
    background: blue;
}

</style>

