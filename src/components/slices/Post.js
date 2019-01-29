import React, { Component } from 'react'
import { Media } from 'reactstrap';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { DeviceSize } from '../../DeviceSize';
import LazyLoad from 'react-lazyload';

const PostImage = styled.div`
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  width: 220px;
  height: 160px;
  background-position: center;
  background-size: cover;
  background-image: ${props => `url(${props.background})`};
  @media ${DeviceSize.xs} {
    width: 100%;
    max-width: 100%;
    height: 220px;
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
`

const LinkTo = styled.a`
  text-decoration: none !important;
`

class Post extends Component {

  render(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const pubDate = new Date(this.props.post.data.publication_date)

    return(

      <Media>

        <Media left>
          <LazyLoad height={160}>
            <PostImage background={this.props.post.data.post_image.url} className="mr-4" />
          </LazyLoad>
        </Media>

        <Media body>
          <LinkTo href={"/news/" + this.props.post.uid}><h4 className="mb-2">{this.props.post.data.post_title[0].text}</h4></LinkTo>
          <p className="text-muted mb-2">By {RichText.asText(this.props.post.data.author.data.name)} | {pubDate.toLocaleDateString("en-US", options)}</p>
          <p>{RichText.asText(this.props.post.data.post_excerpt)}</p>
          <a href={"/news/" + this.props.post.uid}>Read more...</a>
        </Media>
      </Media>

    )
  }
}

export default Post;
