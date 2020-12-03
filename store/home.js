export const state = () => {
    return {
        homeData1: "HOMEDATA1",
        homeData2: "HOMEDATA2"
    };
};

export const mutations = {
    setHomeData(state, newV) {
        state.homeData1 = newV;
    }
};

export const actions = {
    SETHomeData({ commit }, target) {
        if (!target) return;
        commit("setHomeData", target);
    }
};
