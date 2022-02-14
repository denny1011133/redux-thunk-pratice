import React from 'react';
import { connect } from "react-redux"
import { fetchAlbums } from "../actions"
import UserHeader from './UserHeader';

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
                            <h5>歌曲:{album.title}</h5>
                        </div>
                        <UserHeader userId={album.userId} />
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
