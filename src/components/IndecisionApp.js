import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption: undefined
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Please enter a valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState( (prevState) => ({ options : prevState.options.concat(option)}))
    }
    handleDeleteOptions = () => { 
        this.setState(() => ({ options : [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick = () => {
        let random = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => ({ selectedOption : this.state.options[random]}))
    }
    handleRemoveSelectedOption = () => {
        this.setState(() => ({ selectedOption : undefined}))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)
            if(options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
        }
    }
    render() {
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleRemoveSelectedOption={this.handleRemoveSelectedOption}
                    />

                </div>
            </div>
        )
    }
}