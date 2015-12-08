import React from "react";
import LinkActions from "../actions/LinkActions";

class Link extends React.Component {
  removeBookmarks(){
    LinkActions.removeBookmarks(this.props.link);
  }
  likeBookmark(){
    LinkActions.likeBookmark(this.props.link);
  }
  render() {
    let {title, url, safe, like} = this.props.link;
    if (like){
      var likes = Object.keys(like).length;
    }else{
      var likes = 0;
    }
    return (
      <div className="link">
        <a href={url} style={ { color: (safe ? 'green' : 'black') } }>{title}</a>
        <span className="removeBookmarks"><button onClick={this.removeBookmarks.bind(this)}>Delete</button></span>
        <span className = "Like"><button onClick={this.likeBookmark.bind(this)}>Like</button>{likes}</span>

      </div>
    );
  }
}

export default Link;
