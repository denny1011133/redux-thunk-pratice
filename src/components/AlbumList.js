import React from 'react';
import { connect } from "react-redux"
import { fetchAlbums } from "../actions"

class AlbumList extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums()
    }
    render() {
        console.log(this.props.albums);
        return <div>123</div>;
    }
}


const mapStateToProps = state => {
    return { albums: state.albums };
};

export default connect(mapStateToProps, { fetchAlbums })(AlbumList);
