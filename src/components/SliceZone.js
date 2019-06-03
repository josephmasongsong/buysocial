import React, { Component } from 'react';
import {
  AsyncBiography,
  AsyncBulletList,
  AsyncCalloutCenter,
  AsyncContactForm,
  AsyncContentImage,
  AsyncContentImageLeft,
  AsyncContentNoImage,
  AsyncEventMap,
  AsyncListOfLinks,
  AsyncLogoGrid,
  AsyncPeopleContainer,
  AsyncPostList,
  AsyncPurchaserForm,
  AsyncRecentArticles,
  AsyncSearchContainer,
  AsyncSupplierForm,
  AsyncThreeColumnBlock,
  AsyncThreeColumnGray,
  AsyncTwoColumnsCentered,
  AsyncEmbed,
  AsyncHeader,
  AsyncSearchDirectory
} from './slices/async';

export default class SliceZone extends Component {
  render() {
    return this.props.items.map((slice, index) => {
      switch (slice.slice_type) {
        case("3_column_content_block"):
          return <AsyncThreeColumnBlock slice={slice} key={`slice-` + index} />
        case("3_column_content_block1"):
          return <AsyncThreeColumnBlock slice={slice} key={`slice-` + index} />
        case("people"):
          return <AsyncPeopleContainer slice={slice} key={`slice-` + index} />
        case("biography"):
          return <AsyncBiography slice={slice} key={`slice-` + index} />
        case("bullet_list"):
          return <AsyncBulletList slice={slice} key={`slice-` + index} />
        case("2_narrow_columns"):
          return <AsyncTwoColumnsCentered slice={slice} key={`slice-` + index} />
        case("gray_3_column_content_block"):
          return <AsyncThreeColumnGray slice={slice} key={`slice-` + index} />
        case("logo_grid"):
          return <AsyncLogoGrid slice={slice} key={`slice-` + index} />
        case("list_of_articles"):
          return <AsyncListOfLinks slice={slice} key={`slice-` + index} />
        case("knowledge_base"):
          return <AsyncSearchContainer slice={slice} key={`slice-` + index} />
        case("news_index"):
          return <AsyncPostList slice={slice} key={`slice-` + index} />
        case("contact_form"):
          return <AsyncContactForm slice={slice} key={`slice-` + index} />
        case("content_block_with_image"):
          return <AsyncContentImage slice={slice} key={`slice-` + index} />
        case("content_block_with_image_left"):
          return <AsyncContentImageLeft slice={slice} key={`slice-` + index} />
        case("content_block_no_image"):
          return <AsyncContentNoImage slice={slice} key={`slice-` + index} />
        case("google_map"):
          return <AsyncEventMap slice={slice} key={`slice-` + index} />
        case("supplier_form"):
          return <AsyncSupplierForm slice={slice} key={`slice-` + index} />
        case("purchaser_form"):
          return <AsyncPurchaserForm slice={slice} key={`slice-` + index} />
        case("callout_centered"):
          return <AsyncCalloutCenter slice={slice} key={`slice-` + index} />
        case("embed"):
          return <AsyncEmbed slice={slice} key={`slice-` + index} />
        case("recent_articles"):
          return <AsyncRecentArticles slice={slice} key={`slice-` + index} />
        case("featured_pages"):
          return <AsyncHeader slice={slice} key={`slice-` + index} />
        case("directory"):
          return <AsyncSearchDirectory slice={slice} key={`slice-` + index} />

        default:
          return null;
      }
    })
  }
}
