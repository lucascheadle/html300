<template>
    <div>
        <h2>
            Services
        </h2>
        <div v-for="service in services" v-bind:key="service" class="accordian" @click="service.open = !service.open">
            <div class="card z-depth-0 bordered">
                <div class="card-header" id="heading">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse"
                        aria-expanded="true" aria-controls="collapse">
                        <span><h3>{{ service.title }}</h3></span>
                        <br />
                    </button>
                </div>
                <div id="collapse" class="collapse show" aria-labelledby="heading" data-parent="#accordionExample">
                    <div class="card-body">
                        <span v-if="service.open"><h2>{{ service.description }}</h2></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            allClosed: true,
            services: [
                {
                    title: 'Landscape Design',
                    description: 'Draw draw draw draw sketch sketch sketch. Draw draw draw draw sketch sketch sketch.',
                    open: false
                },
                {
                    title: 'Consultation',
                    description: 'Talk talk talk talk. More Talk talk talk talk talk talk.',
                    open: false
                },
                {
                    title: 'Gardening',
                    description: 'Dig dig dig dig, water water water water. Manure. Dig dig dig dig dig, smoke break.',
                    open: false
                }
            ],
        }
    }
}
</script>