import  React, {Component} from 'react';

export default class CustomInput extends Component { 
    render(){
      const {input, meta, title, ...props} = this.props
      console.log(meta.error);
      return (
        <div className="App">
            {title && <span>{title}</span>}
            <input {...input} {...props}/>
            {meta.submitFailed && meta.error && <span>{meta.error}</span>}
        </div>
      );
    }
 }
