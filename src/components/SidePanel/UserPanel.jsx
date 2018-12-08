import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";
import firebase from "../../firebase";

class UserPanel extends Component {
  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed In as <strong>user</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Signed Out");
      });
  };

  render() {
    return (
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted as="h2" floated="left">
              <Icon name="code" />
              <Header.Content>Dev Chat</Header.Content>
            </Header>
          </Grid.Row>

          {/* User Dropdown */}
          <Header inverted as="h4" style={{ padding: "0.25em" }}>
            <Dropdown
              trigger={<span>User</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
