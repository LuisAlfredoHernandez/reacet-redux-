import  React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import CustomInput from './CustomInput';

const validate =(values)=>{
    const errors={}
    if (!values.name){
        errors.name = "Este campo es obligatorio!"
    }
    if(!values.lastname){
        errors.lastname = "Este campo es obligatorio!"
    }
    return errors;
}


 class UserForm extends Component { 
    render(){
      const {handleSubmit} = this.props
      return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <Field name="name" component={CustomInput} placeholder="Nombre" title="Nombre"/>
                <Field name="lastname" component={CustomInput} placeholder="Apellido" title="Apellido"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
      );
    }
 }


export default reduxForm({ 
  form:'user',
  validate
})(UserForm)