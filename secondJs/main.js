Vue.component('main-component', {
    data: function() {
        return {
            books: [
                {name: '1984', auther: 'Джордж Оруэлл', genre: 'Роман'},
                {name: 'Собака Баскервилей', auther: 'Артур Конан Дойл', genre: 'Детектив'},
                {name: 'Гарри Поттер', auther: 'Джоан Роулинг', genre: 'Роман'}
            ]
        }
    },
    template: '<ul><li v-for="el in books">auther - {{ el.auther }} - <b>{{ el.name }}</b> has genre {{ el.genre }}</li></ul>'
});

new Vue({
    el: '#app1',
    data: {
        title: 'переменная title - Hello User!',
        title_2: '',
        title_3: 'переменная title_3 - Тут в самом теге span стоит условие если наша переменная title_2 совпадает со словом Hello, тогда другие переменные title и title_3 будут отображаться. ',
        title_32: 'Если между v-if и v-else стояли еще теги(<br> <hr>  и т.д.) то v-else  не срабатывал',
        title_4: 'Введите сначала любое слов а затем Hello',
        isVisible: true,
        cars: [
            {name: 'BMW', speed: '215', color: 'red'},
            {name: 'Volwo', speed: '190', color: 'green'},
            {name: 'KIA', speed: '180', color: 'grey'}
        ]
    },
    methods: {
        startText(val) {
            this.title_2 = val
        }
    },
    filters: {
        upperCase(value) {
            return value.toUpperCase();
        }
    }
});
