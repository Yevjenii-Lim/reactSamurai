import React from "react";

class ProfileStatus extends React.Component {
    
  state = {
    editMode: false,
  };
  activateEditMode = () => {
    this.setState({
        editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
        editMode: false
    })
  }
  render() {

    return (
      <>
        {!this.state.editMode ? (
          <p onDoubleClick={this.activateEditMode}>{this.props.status}</p>
        ) : (
          <input autoFocus={true} onChange={(e) => this.props.chengeStatus(e.target.value)} onBlur={this.deactivateEditMode} type="text" value={this.props.status} />
        )}

        <button>Publish</button>
      </>
    );
  }
}

export default ProfileStatus;
