Vue.component('CoinDetail', {
    props: ['coin'],
    data() {
        return {
            showPrices: false,
            value: 0
        }
    },
    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
            this.$emit('change-color','770000')
        }
    },
    computed: {
        title() {
            return `${this.coin.name}-${this.coin.symbol}`
        },

        convertedValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.coin.price
        }
    },
    template: `
        <div class="card col-sm-4">
            <span class="badge position-absolute top-0 end-0 translate-middle rounded-pill" v-bind:class="coin.changePercent > 0 ? 'bg-success' : 'bg-danger'"><i class="fas" v-bind:class="coin.changePercent > 0 ? 'fa-thumbs-up' : 'fa-thumbs-down'"></i></span>
            <img v-bind:src="coin.img" v-bind:alt="coin.name" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <slot name="link"></slot>
                <p>show prices <a href="#" v-on:click="toggleShowPrices"><i
                    v-bind:class="showPrices ? 'fas fa-eye-slash' : 'fas fa-eye'"></i></a></p>
                <ul class="list-group" v-show=showPrices>
                    <li class="list-group-item"
                        v-bind:class="{ 'text-info': price.value == coin.price, 'text-success': price.value > coin.price, 'text-danger': price.value < coin.price }"
                        v-for="(price,index) in coin.pricesWithDays" v-bind:key="price.day">
                        {{ price.day }} {{ price.value }}
                    </li>
                </ul>
                <slot name="text"></slot>
                <footer>
                    <form action="">
                        <div class="col">
                            <label for="" class="form-label">MXN to {{ coin.symbol }}</label>
                            <input type="number" v-model="value" class="form-control">
                            <p class="text-info text-end p-2">{{ convertedValue }}</p>
                        </div>
                    </form>
                </footer>
            </div>
        </div>
    `

})

new Vue({
    el: '#app',

    data() {
        return {
            btc: {
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                changePercent: -10,
                price: 7850,
                pricesWithDays: [{ day: 'Monday', value: 8400 }, { day: 'Tuesday', value: 5200 }, { day: 'Wednesday', value: 7460 }, { day: 'Thursday', value: 5520 }, { day: 'Friday', value: 7990 }, { day: 'Saturday', value: 6385 }, { day: 'Sunday', value: 7850 }
                ],
            },
            color: 'f4f4f4',
            darkState: false
        }
    },
    methods: {
        toggleDarkMode() {
            this.color = this.color.split('').reverse().join('')
            this.darkState = !this.darkState
        },
        changeColor(color) {
            this.color = color
        }
    }
})