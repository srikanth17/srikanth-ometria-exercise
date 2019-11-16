import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { changePage, searchCharacter } from '../actions/actions';
import Header from './Header';
import Table from './Table';

class App extends React.Component {
    // First 10 characters will be ready when application loads
    componentDidMount() {
        this.props.changePage(1);
    }

    getPageCount() {
        return Math.ceil(this.props.allCharacters.count / 10) ;
    }

    // Actions will be fired to the store to fetch new characters
    handlePageChange = page => {
        const selectedPage = page.selected+1;
        if (selectedPage < 1 || selectedPage > this.getPageCount()) return;
        this.props.changePage(selectedPage);
    };

    // Handles search & fires the search action creator
    handleFormSubmit = e => {
        e.preventDefault();
        this.props.searchCharacter(e.target.elements.search.value);
    };

    render () {
        const { allCharacters } = this.props;
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <form onSubmit={this.handleFormSubmit} className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input placeholder="Search" name="search" type="text" />
                                    </div>
                                </div>
                            </form>
                            <Table characters={allCharacters.results}/>
                            <ReactPaginate
                                pageCount={this.getPageCount()}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                onPageChange={this.handlePageChange}
                                containerClassName="pagination"
                                pageClassName="waves-effect"
                                activeClassName="active"
                                disabledClassName="disabled"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    allCharacters: PropTypes.object.isRequired,
};

const mapStateToProps = ({ allCharacters }) => ({
    allCharacters
});

const mapDispatchToProps = (dispatch) => ({
    changePage: page => dispatch(changePage(page)),
    searchCharacter: search => dispatch(searchCharacter(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);