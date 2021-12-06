new Vue({
    el: '#app',

    data () {
        return {
            name: 'Bitcoin',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: -10,
            priceBtc: 7850,
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

    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
        } 
    }
})