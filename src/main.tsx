import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter } from "react-router-dom"

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <BrowserRouter>
    <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
    </ApolloProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
