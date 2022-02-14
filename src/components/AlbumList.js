import React from 'react';
import { connect } from "react-redux"
import { fetchAlbums } from "../actions"
class AlbumList extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums()
    }
    render() {
        return <div>123</div>;
    }
}

export default connect(null, fetchAlbums)(AlbumList);
