import React from 'react';
import { connect } from "react-redux"
import { fetchPosts } from "../actions"
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    renderList() {
        return this.props.posts.slice(0, 30).map(post => {
            return (
                <div className="item" key={post.id}>
                    <div className="content">
                        <div className="header">{post.title}</div>
                        <div className="meta">
                            <span className="price"> <UserHeader userId={post.userId} /></span>
                        </div>
                        <div className="description">
                            <p>{post.body}</p>
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
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
