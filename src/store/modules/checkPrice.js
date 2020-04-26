import axios from "axios";
const state = {
    check_price: [],
    origin: '',
    destination: '',
    weight: null,
}


const actions = {
    initCheckPrice({ commit }, payload) {
        axios.get(`/api/v3/tariffv2?origin=${payload.origin}&destination=${payload.destination}&weight=${payload.weight}&commodity=GEN-GENERAL OTHERS - GENERAL LAINNYA.&goods_value&is_insurance&is_wood_packing`,
            {
                headers: {
                    "Authorization": "Basic cHJkQGxpb25wYXJjZWxfYXBpOmpodSZqZ3UqM0Y1JCUjZkZ0eUAjJEJOT19AI0BnZ0YjJCUkR0hZWV4mJSQ=",
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if (res.status === 200) {
                    const tariff = {
                        check_price: res.data,
                        origin: payload.origin,
                        destination: payload.destination,
                        weight: payload.weight
                    }
                    commit('SET_CHECK_PRICE', tariff)
                }

            }).catch((error) => {
                console.log(error);
            })

    },
}

const mutations = {
    'SET_CHECK_PRICE'(state, payload) {
        state.check_price = payload.check_price
        state.origin = payload.origin
        state.destination = payload.destination
        state.weight = payload.weight
    },

}

const getters = {
    CHECK_PRICE: state => {
        return state.check_price;
    },
    ORIGIN: state => {
        return state.origin;
    }, DESTINATION: state => {
        return state.destination;
    }, WEIGHT: state => {
        return state.weight;
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}