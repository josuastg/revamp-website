import axios from "axios";
import router from "../../route/routes";
const state = {
    check_price: [],
    origin: '',
    destination: '',
    weight: null
}


const actions = {
    initCheckPrice({ commit }, payload) {
        console.log(payload);
        axios.get(`/api/v3/tariffv2?origin=${payload.origin}&destination=${payload.destination}&weight=${payload.weight}`,
            {
                headers: {
                    "Authorization": "Basic bGlvbnBhcmNlbDpsaW9ucGFyY2VsQDEyMw==",
                    "Content-Type": "application/json"
                }
            }).then(data => {
                const tariff = {
                    check_price: data.data,
                    origin: payload.origin,
                    destination: payload.destination,
                    weight: payload.weight

                }
                commit('SET_CHECK_PRICE', tariff)
                console.log(JSON.stringify(tariff));
            }).catch((error) => {
                console.log('ini error', error);
            })

    },
    detailCheckPrice({ commit }, payload) {
        console.log(payload);
        axios.get(`/api/v3/tariffv2?origin=${payload.origin}&destination=${payload.destination}&weight=${payload.weight}`,
            {
                headers: {
                    "Authorization": "Basic bGlvbnBhcmNlbDpsaW9ucGFyY2VsQDEyMw==",
                    "Content-Type": "application/json"
                }
            }).then(data => {
                const tariff = {
                    check_price: data.data,
                    origin: payload.origin,
                    destination: payload.destination,
                    weight: payload.weight

                }
                commit('SET_DETAIL_CHECK_PRICE', tariff)
                console.log(JSON.stringify(tariff));
            }).catch((error) => {
                console.log('ini error', error);
            })

    }
}

const mutations = {
    'SET_CHECK_PRICE'(state, payload) {
        state.check_price = payload.check_price
        state.origin = payload.origin
        state.destination = payload.destination
        state.weight = payload.weight
        router.push({ name: 'tariff', params: { checkPrice: payload } })
    },
    'SET_DETAIL_CHECK_PRICE'(state, payload) {
        state.check_price = payload.check_price
        state.origin = payload.origin
        state.destination = payload.destination
        state.weight = payload.weight
        // router.push({ name: 'tariff', params: { checkPrice: payload } })
    }

}

const getters = {
    check_price: state => {
        return state.check_price;
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}