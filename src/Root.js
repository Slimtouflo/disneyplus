import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import App from "./routes/App"
import MovieDetail from "./routes/MovieDetail";


const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/movie/:id" component={MovieDetail}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Root