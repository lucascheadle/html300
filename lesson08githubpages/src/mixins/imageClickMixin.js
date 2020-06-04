// here's the mixin for the image outline toggle //

export default {
    data() {
        return {
            isActive: true
            }
        },
    methods: {
        toggleClass: function(){
        this.isActive = !this.isActive;
        }
    }
}

