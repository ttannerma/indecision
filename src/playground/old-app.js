const app = {
    title: "Indecision app",
    subtitle: "Welcome to the indecision app",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderListTemplate()
    }
}
const clearArray = () => {
    app.options = []
    renderListTemplate()
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNumber]
    console.log(option)
}

const renderListTemplate = () => {
    const template =
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={clearArray}>Remove all</button>
        <ol>
        {
            app.options.map((option) => <li key={option}>{option}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
}

renderListTemplate()