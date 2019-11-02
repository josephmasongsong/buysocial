import React, { Component } from 'react';
import {
  AsyncBulletList,
  AsyncContactForm,
  AsyncListOfLinks,
  AsyncLogoGrid,
  AsyncPeopleContainer,
  AsyncPostList,
  AsyncPurchaserForm,
  AsyncRecentArticles,
  AsyncSearchContainer,
  AsyncSupplierForm,
  AsyncColumns,
  AsyncImageBlock,
  AsyncTestimonials,
  AsyncVideoEmbed,
  AsyncDirectory,
  AsyncFreeform,
  AsyncSlickSlider,
  AsyncGiftDirectory,
} from './slices/async';

export default class SliceZone extends Component {
  render() {
    return this.props.items.map((slice, index) => {
      switch (slice.slice_type) {
        case("people"):
          return <AsyncPeopleContainer slice={slice} key={`slice-` + index} />
        case("bullet_list"):
          return <AsyncBulletList slice={slice} key={`slice-` + index} />
        case("logo_grid"):
          return <AsyncLogoGrid slice={slice} key={`slice-` + index} />
        case("list_of_articles"):
          return <AsyncListOfLinks slice={slice} key={`slice-` + index} />
        case("news_index"):
          return <AsyncPostList slice={slice} key={`slice-` + index} />
        case("contact_form"):
          return <AsyncContactForm slice={slice} key={`slice-` + index} />
        case("supplier_form"):
          return <AsyncSupplierForm slice={slice} key={`slice-` + index} />
        case("purchaser_form"):
          return <AsyncPurchaserForm slice={slice} key={`slice-` + index} />
        case("recent_articles"):
          return <AsyncRecentArticles slice={slice} key={`slice-` + index} />
        case("columns"):
          return <AsyncColumns slice={slice} key={`slice-` + index} />
        case("image_block"):
          return <AsyncImageBlock slice={slice} key={`slice-` + index} />
        case("testimonial_slider"):
          return <AsyncTestimonials slice={slice} key={`slice-` + index} />
        case("video_embed"):
          return <AsyncVideoEmbed slice={slice} key={`slice-` + index} />
        case("algolia"):
          if (slice.slice_label === 'construction-directory') {
            return <AsyncDirectory slice={slice} key={`slice-` + index} />
          } else if (slice.slice_label === 'gift-directory') {
            return <AsyncGiftDirectory slice={slice} key={`slice-` + index} />
          } else if (slice.slice_label === 'document-search') {
            return <AsyncSearchContainer slice={slice} key={`slice-` + index}  />
          } else {
            return null
          }
        case("freeform"):
          return <AsyncFreeform slice={slice} key={`slice-` + index} />
        case("slider"):
          return <AsyncSlickSlider slice={slice} key={`slice-` + index} />
        default:
          return null;
      }
    })
  }
}
