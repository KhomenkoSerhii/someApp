import React, { Component } from 'react'
import classes from './Auth.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {


    state = {
        formControls: {
            email:{
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Enter ...',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6 
             }
         }
        }
    }
    
    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault()
    }
    onChangeHandler = (e, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                key={controlName + index}
                value={control.value}
                label={control.label}
                shouldValidate={!!control.validation}
                type={control.type}
                touched={control.touched}
                valid={control.valid}
                errorMessage={control.errorMessage}
                onChange={e => this.onChangeHandler(e, controlName)}
                 />
            )
        })
       
    } 

    render() {
        return (
            <div className={classes.Auth}>
             <div>
                 <h1>
                     Авторизация
                 </h1>
                 <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                    {/* <Input label='Email'/>
                    <Input label='Password'
                    errorMessege={'Test'}
                    /> */}

            {this.renderInputs()}
                     <Button type='success' onClick=
                     {this.loginHandler}>Войти</Button>

<Button type='primary' onClick={this.registerHandler}>Зарегистрироваться</Button>
                 </form>
                 </div> 
            </div>
        )
    }
}
