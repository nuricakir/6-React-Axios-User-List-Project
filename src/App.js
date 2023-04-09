import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./Loading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.setState({
        users: response.data,
      });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="background">
        <Loading></Loading>
        <div className="users-container">
          <div className="title-container">
            <h1 className="title">Kullanıcı Listesi</h1>
          </div>
          <ul className="user-list">
            <li>
              <button className="add-btn">Kullanıcı Ekle</button>
            </li>
            {users.map((item) => {
              return (
                <li key={item.id}>
                  <div className="name-surname">
                    <spin className="name">
                      <b>Ad:</b> {item.name}
                      <br></br>
                    </spin>
                    <spin className="name">
                      <b>Soyad:</b> {item.username}
                    </spin>
                  </div>
                  <button className="edit-btn">Düzenle</button>
                  <button className="delete-btn">Sil</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
