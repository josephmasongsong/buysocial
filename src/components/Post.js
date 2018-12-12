import React, { Component } from 'react'
import { Media } from 'reactstrap';
import styled from 'styled-components';

const PostImage = styled.div`
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  width: 220px;
  height: 160px;
  background-position: center;
  background-size: cover;
  background-image: ${props => `url(${props.background})`};
`

const LinkTo = styled.a`
  text-decoration: none !important;
`

class Post extends Component {

  render(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const pubDate = new Date(this.props.post.first_publication_date)
    return(
      <div>
        <Media className="mb-5">
          <Media left>
            <PostImage background={this.props.post.data.post_image.url} className="mr-4" />
          </Media>
          <Media body>
            <LinkTo href={"/news/" + this.props.post.uid}><h4 className="mb-1">{this.props.post.data.post_title[0].text}</h4></LinkTo>
            <p className="text-muted mb-3">{pubDate.toLocaleDateString("en-US", options)}</p>
            <p className="mb-0">{this.props.post.data.post_excerpt[0].text}</p>
          </Media>
        </Media>
      </div>
    )
  }
}

export default Post;
