import React from 'react'
import { Media } from 'reactstrap';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import LazyLoad from 'react-lazyload';
import { PostImage } from '../../styles';


const MediaWrapper = styled(Media)`
  margin-bottom: 3rem;
  a { text-decoration: underline; };
`
const LinkTo = styled.a`
  text-decoration: none !important;
`

const Post = props => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const pubDate = new Date(props.post.data.publication_date)
  return(
    <MediaWrapper>
      <Media left>
        <LazyLoad height={160}>
          <PostImage background={props.post.data.post_image.url} className="mr-4" />
        </LazyLoad>
      </Media>
      <Media body>
        <LinkTo href={"/news/" + props.post.uid}><h4 className="mb-2">{RichText.asText(props.post.data.post_title)}</h4></LinkTo>
        <p className="text-muted mb-2">By {RichText.asText(props.post.data.author.data.name)} | {pubDate.toLocaleDateString("en-US", options)}</p>
        <p>{RichText.asText(props.post.data.post_excerpt)}</p>
        <a href={"/news/" + props.post.uid}>Read more...</a>
      </Media>
    </MediaWrapper>
  )
}

export default Post;
