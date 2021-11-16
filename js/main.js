new Vue({
    el: '#app',
    data: {
        title: 'Hi Andrey',
        isTrue: 1,
    },
    methods: {
        ChengText() {
            this.isTrue = this.isTrue + 1
        }
    }
});
