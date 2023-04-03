import React, {ChangeEvent, Component} from "react";

type ProfileStatusPropsType = {
    status : string
    updateStatus : (status : string) => void
}


class ProfileStatus extends Component<ProfileStatusPropsType>{
   state = {
        editMode : false,
       status : this.props.status
    }
    activateEditMode (){
        this.setState({
            editMode : true
        })
    }
    deactivateEditMode (){
        this.setState({
            editMode : false
        })
        this.props.updateStatus(this.state.status)
    }
    changeInputStatus(e: ChangeEvent<HTMLInputElement>){
       this.setState({
           status : e.currentTarget.value
       })
    }


    render(){
      return (
          <div>
              {this.state.editMode ?
                  <input onChange={this.changeInputStatus.bind(this)} autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                  :
                  <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>

              }


          </div>
      )
    }
}
export default ProfileStatus;