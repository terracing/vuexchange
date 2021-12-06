new Vue({
    el: '#app',

    data () {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: -10,
            value: 0,
            priceBtc: 7850,
            color: 'f4f4f4',
            darkState: false,
            prices: [8400,5200,7460,5520,7990],
            pricesWithDays: [
                {day: 'Monday', value: 8400},
                {day: 'Tuesday', value: 5200},
                {day: 'Wednesday', value: 7460},
                {day: 'Thursday', value: 5520},
                {day: 'Friday', value: 7990},
                {day: 'Saturday', value: 6385},
                {day: 'Sunday', value: 7850}
            ],

            showPrices: false,
        }
    },

    computed: {
        title () {
            return `${this.name}- ${this.symbol}`
        },

        convertedValue () {
            if(!this.value) {
                return 0
            }

            return this.value / 7850
        }
    },

    watch: {
        showPrices (newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },

    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
        },
        toggleDarkMode () {
            this.color = this.color.split('').reverse().join('')
            this.darkState = !this.darkState
        }
    }
})