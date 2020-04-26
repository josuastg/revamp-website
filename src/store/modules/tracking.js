import axios from "axios";

const state = {
    tracks: [{ track: { track: null } }],
    result_track: [],
    testMockResult: []
}

const actions = {
    initTrackShipment({ commit }, payload) {
        axios
            .get(`http://localhost:9091/v1/track/data?q=${payload.tracks}`, {
                headers: {
                    Authorization:
                        "Basic cHJkQGxpb25wYXJjZWxfYXBpOmpodSZqZ3UqM0Y1JCUjZkZ0eUAjJEJOT19AI0BnZ0YjJCUkR0hZWV4mJSQ=",
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if (res.status === 200) {
                    const tracking = {
                        tracks: payload.tracks,
                        result_track: res.data
                    }
                    commit('GET_TRACK_SHIPMENT', tracking)
                }
            })
            .catch(err => {
               alert(err.message);
            });
    },

}

const mutations = {
    'GET_TRACK_SHIPMENT'(state, payload) {
        state.tracks = payload.tracks
        state.result_track = payload.result_track
    },
    'GET_MOCK_RESULT_SHIPMENT'(state, payload) {
        state.testMockResult = payload.testMockResult
    }




}

const getters = {
    RESULT_TRACK: state => {
        return state.result_track

    },
    TRACKS: state => {
        return state.tracks
    },
    MOCK_RESULT: state => {
        return state.testMockResult
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}