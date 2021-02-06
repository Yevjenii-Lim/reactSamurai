import React from "react";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    console.log('deactivate')
    this.props.updateStatus(this.state.status);
  };
  onChengeStatus(status) {
      this.setState({
          status: status
      })
  }
  render() {
    return (
      <>
        {this.state.editMode ? (
          <input
     
            autoFocus={true}
            onChange={(e) => this.onChengeStatus(e.target.value)}
            onBlur={this.deactivateEditMode}
            type="text"
            value={this.state.status}
          />
        ) :  (
            <p onDoubleClick={this.activateEditMode}>{this.state.status ||  "no status"}</p>
          )
    
    }

        <button>Publish</button>
      </>
    );
  }
}

export default ProfileStatus;
