import React, { Component } from 'react';
const userUrl = "https://www.strava.com/api/v3/athlete?&access_token=93b40912b9be56c8c6d9fbd524ba793ea409ff6a";

let fullName = "";
let userPicture = "";
class User extends Component {
  state = {};

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async componentDidMount() {

    const res = await fetch(userUrl)
    const user = await res.json()
    console.log(user);
    fullName = user.firstname + " " + user.lastname;
    userPicture = user.profile;
    await this.setStateAsync({user: user})
   }
  render() {
    return (
        <div className="user">
            <img className="avatar" alt={ "Picture of " + fullName } src={ userPicture } />
            <div>{ fullName } </div>
        </div>
    );
  }
}
export default User;

