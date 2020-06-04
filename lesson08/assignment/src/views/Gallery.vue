
<template>
    <div id="app">
        <images-fill v-bind:pictures="pictures"></images-fill>
    </div>
</template>


<script>



export default {
    data() {
        return {
            pictures: [
                        {url:require('../assets/images/01.jpeg')}, {url:require('../assets/images/02.jpeg')}, {url:require('../assets/images/03.jpeg')}, {url:require('../assets/images/04.jpeg')},
                        {url:require('../assets/images/05.jpeg')}, {url:require('../assets/images/06.jpeg')}, {url:require('../assets/images/07.jpeg')}, {url:require('../assets/images/08.jpeg')},
                        {url:require('../assets/images/09.jpeg')}, {url:require('../assets/images/10.jpeg')}
                    ]
        }
    },
}
</script>

