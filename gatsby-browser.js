const ReactGA = require("react-ga")

exports.onClientEntry = () => {
  ReactGA.initialize("UA-129387050-1")
  ReactGA.pageview(window.location.pathname + window.location.search)
}

exports.onRouteUpdate = ({ location }) => {
  ReactGA.pageview(location.pathname)
}
