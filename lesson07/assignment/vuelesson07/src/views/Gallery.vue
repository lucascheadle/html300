<template>
    <div id="app">
        <h2>Gallery</h2>
        <div class="gallery-container">
            <div class="row px-4">
                <div v-for= "picture in pictures" v-bind:key="picture.id" class="col-lg-3 col-md-4 col-xs-6 thumb">
                    <b-img v-bind:src= "picture.url" fluid-grow=""></b-img>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                pictures: [
                    {url:require('../assets/images/01.jpeg')}, {url:require('../assets/images/02.jpeg')}, {url:require('../assets/images/03.jpeg')}, {url:require('../assets/images/04.jpeg')},
                    {url:require('../assets/images/05.jpeg')}, {url:require('../assets/images/06.jpeg')}, {url:require('../assets/images/07.jpeg')}, {url:require('../assets/images/08.jpeg')},
                    {url:require('../assets/images/09.jpeg')}, {url:require('../assets/images/10.jpeg')}
                ]
            }
        }
    }
</script>
