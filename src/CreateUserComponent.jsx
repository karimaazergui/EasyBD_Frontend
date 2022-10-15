import axios from 'axios';
import React, { Component } from 'react';



class CreateUserComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            nom: '',
            prenom: ''
        }

        this.changeNom = this.changeNom.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.test = this.test.bind(this);
        this.test1 = this.test1.bind(this);
    }
    changeNom = (event) =>{
        this.setState({nom: event.target.value});
    }

    saveUser = (event) =>{
        event.preventDefault();
        let user = {
            cin: 10111,
            nom: this.state.nom,
            prenom: this.state.prenom
            
        };
        console.log('user =>' +JSON.stringify(user)); 

        axios.post("http://localhost:8080/user/add",user);
    }

    test1 = (event) => {
        let objet = [
            "adresse" ,"jihadia",
            "nom" ,"azer"
        ]
        let compte = [
            "email","ahmed@mail.com"
        ]

        let annonce =[
            "id",1
        ]
        console.log('objet =>>'+ JSON.stringify(objet));
        axios.post("http://localhost:8080/object/Compte", compte).then( res => {
            console.log((res.data));
        });
        
        
        
    }



    test = (event) =>{
        
        axios.get("http://localhost:8080/user/1").then( res => {
        console.log((res.data));
        setTimeout(this.test,2000);
    });
    }


    render() {
        return (
            <div>
                <h1>walo</h1>
                <form>
                    <label>nom:</label>
                    <input type={'text'} value={this.state.nom} onChange={this.changeNom}></input>
                    <button onClick={this.saveUser}>Save</button>
                </form>
                <button onClick={this.test}>test</button>

                <button onClick={this.test1}>objet</button>
            </div>
        );
    }
}

export default CreateUserComponent;