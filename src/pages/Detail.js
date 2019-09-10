import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../store/task/actionCreator'

class Detail extends Component {

  handleAdd(book) {
    this.props.onDispatch(actionCreator.addBook(book, this.getDetail.bind(this)))
  }

  getDetail() {
    
    let { currentIndex, id } = this.props.match.params 
    this.props.onDispatch(actionCreator.getDetail(currentIndex, id))
  }

  componentDidMount() {
    this.getDetail()
  }
  render() {
    let { detail } = this.props
    return (
      <div>
        <img src={detail.avatar} alt={detail.title}></img>
        {
              detail.is_in_my_book
              ? <span className="m-is-in-my-book-btn">已在书架</span>
              : <span className="m-add-btn" onClick={this.handleAdd.bind(this, detail)}>加入书架</span>
            }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.task.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispatch(action) {
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
