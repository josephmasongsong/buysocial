import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
} from 'react-share'

class ShareIcons extends React.Component {
  render(){
    const shareUrl = this.props.shareUrl
    const title = this.props.title
    return(
      <React.Fragment>
        <FacebookShareButton
        url={shareUrl}
        quote={title}
        className="Demo__some-network__share-button">
        <FacebookIcon
          size={32}
          round />
        </FacebookShareButton>

        <FacebookShareCount
        url={shareUrl}
        className="Demo__some-network__share-count">
        {count => count}
        </FacebookShareCount>
      </React.Fragment>
    )
  }
}
export default ShareIcons
