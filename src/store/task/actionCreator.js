import axios from 'axios'
import actionTypes from './actionTypes'

const getBookNav = () => {
  return (dispatch) => {
    axios({
      url: '/book_nav',
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'bookNav', value: res.data.data})
      }
    })
  }
}

const getBookList = (currentIndex) => {
  return (dispatch) => {
    axios({
      url: `/book_list?currentIndex=${currentIndex}`,
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({type: actionTypes.SET_STATE, key: 'bookList', value: res.data.data.list})
      }
    })
  }
}

const getDetail = (currentIndex, id) => {
  return (dispatch) => {
    axios({
      url: `/book_detail?currentIndex=${currentIndex}&id=${id}`,
      method: 'get'
    }).then(res => {
      if (res.data.code === 200) {
        dispatch({ type: actionTypes.SET_STATE, key: 'detail', value: res.data.data })
      }
    })
  }
}

const addBook = (book, callback) => {
  return (dispatch) => {
    axios({
      url: '/book_add',
      method: 'post',
      data: {
        book
      }
    }).then(res => {
      if (res.data.code === 200) {
        callback && callback()
      }
    })
  }
}

export default {
  getBookNav,
  getBookList,
  getDetail,
  addBook,
}