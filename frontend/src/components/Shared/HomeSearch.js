import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../App.css';
import {search} from '../../ducks/reducers/search';


class HomeSearch extends Component {
    render() {
        return (
            <div>
                <form>
                    <Field
                        defaultValue="Enter an address or zip code"
                        label=""
                        name="searchvalue"
                        component={}
                    />
                </form>

            </div>
        )
    }
}