import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function MyApp() {
    return (
        <div>
            <h1>Custom react app</h1>
        </div>
    )
}

const areactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'click to visit google'
)

const AnotherElement = (
    <a href="http://google.com" target='_blank' rel='noreferrer'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    areactElement
)
