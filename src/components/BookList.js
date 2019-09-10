import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import actionCreator from '../store/task/actionCreator'

class BookList extends Component {

  handleAdd(book) {
    this.props.onDispatch(actionCreator.addBook(book, this.callback.bind(this)))
  }

  callback(){
    let { currentIndex } = this.props
    this.props.onDispatch(actionCreator.getBookList(currentIndex))
  }

  handleDetail(id) {
    let {currentIndex} = this.props
    this.props.history.push(`/detail/${currentIndex}/${id}`)
  }

  render() {
    let { bookList } = this.props
    let bookListDom = bookList.map(item => (
      <div key={item.id} className="m-index-list-item">
        <img src={item.avatar} alt={item.title} className="m-index-list-img"></img>
        <div className="m-index-list-info">
          <div className="m-index-list-info-title">{item.title}</div>
          <div>
            <span className="m-detail-btn" onClick={this.handleDetail.bind(this, item.id)}>书籍详情</span>
            {
              item.is_in_my_book
              ? <span className="m-is-in-my-book-btn">已在书架</span>
              : <span className="m-add-btn" onClick={this.handleAdd.bind(this, item)}>加入书架</span>
            }
          </div>
        </div>
      </div>
    ))
    return (
      <div className="m-index-list">
        {bookListDom}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentIndex: state.task.currentIndex,
    bookList: state.task.bookList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BookList))
