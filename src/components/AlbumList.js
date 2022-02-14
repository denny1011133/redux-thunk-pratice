import React from 'react';
import { connect } from "react-redux"
import { fetchAlbums } from "../actions"

class AlbumList extends React.Component {
    componentDidMount() {
        this.props.fetchAlbums()
    }
    renderList() {
        return this.props.albums.map(album => {
            return (
                <div className="item" key={album.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{album.title}</h2>
                            <p>{album.body}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }

}


const mapStateToProps = state => {
    return { albums: state.albums };
};

export default connect(mapStateToProps, { fetchAlbums })(AlbumList);
