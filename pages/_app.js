import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";
import store from '../components/redux_store/store';
import { Provider } from 'react-redux';


const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "https://rickandmortyapi.com/graphql",
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Component {...pageProps} />;
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
