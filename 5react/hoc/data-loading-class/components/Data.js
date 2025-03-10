import React from "react";

// Компонент высшего порядка (функция, возвращающая класс)
const Data = (Component, url) => {
  return (
    class Data extends React.Component {
      // 2. Поля класса (вместо конструктора)
      state = {
        loading: false,
        users: [],
        loaded: false,
      }

      componentDidMount() {
        this.setState({loading: true});
        fetch(url)
          .then(response => response.json())
          .then(object => object.results)
          .then(data => this.setState({
            users: data,
            loading: false,
            loaded: true,
          }))
      }

      render() {
        return (
          (this.state.loading)
            ? <p>Loading...</p>
            : <Component {...this.state}/>
        )
      }
    }
  )
}

export default Data;