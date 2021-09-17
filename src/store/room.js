export const state = () => ({
    configRoom: {},
});

export const mutations = {
    SET_CONFIG_ROOM(state, configs) {
        state.configRoom = configs;
    },
};

export const actions = {
    setConfigRoom({ commit }, configs) {
        commit('SET_CONFIG_ROOM', configs);
    },
};

export const getters = {
    getConfig: (state) => state.configRoom,
};
