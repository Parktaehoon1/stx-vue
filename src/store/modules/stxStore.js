import axios from 'axios';

const state = {
  // data를 모아주는 객체를 만들어슴
  gnbData: [],
  noticeData: [],
  newsData: []
};
const actions = {
  fetchGnbdata({commit}) {
    axios.get('./data/gnb.json')
      .then(response => {
        console.log('axios', response.data)
        commit('GNB_DATA', response.data)
      })
      .catch(err => console.log(err))
  },
  fetchNoticedata({commit}) {
    axios.get('./data/notice.json')
      .then(response => {
        console.log(response)
        commit('NOTICE_DATA', response.data)
      })
      .catch(err => console.log(err))
  },
  fetchNewsdata({commit}) {
    // news.json 을 axios로 호출한다.
    axios.get('./data/news.json')
      .then(response => {
        console.log(response)
        // mutation 으로 자료 전송, mutation 으로 전달할려면 commit 필요
        // axios는 받아온 자료를 .data에 보과
        commit('NEWS_DATA', response.data)
      })
      .catch(err => console.log(err))
  },

};
const mutations = {
  GNB_DATA(state, payload) {
    console.log('gnbdata', payload)
    state.gnbData = payload
  },
  NOTICE_DATA(state, payload) {
    state.noticeData = payload
  },
  NEWS_DATA(state, payload) {
    state.newsData = payload
  }
};
const getters = {
  getGnbData(state) {
    return state.gnbData;
  },
  getNoticeData(state) {
    return state.noticeData;
  },
  getNewsData(state) {
    return state.newsData;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}