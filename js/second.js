new Vue({
    el: '#second',
    data: {
        first: 0
        // second: '',
    },
    methods: {
        increment(val) {
            this.first = val
            // this.second = parseInt(val) * 2
        }
    },
    computed: {
        second() {
            return this.first * 3
        }
    }

});
