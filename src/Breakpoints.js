if (slice.slice_type === '4_column_content_block') {
  const blocks = slice.items.map(function(block, blockIndex){
    return(
      <Col lg="3" key={blockIndex}>
        <img src={block.blurb_image.url} alt="" height="64" className="mb-3" />
        <h4 className=" mb-3">{block.block_title[0].text}</h4>
        <p className="mb-3">{block.block_blurb[0].text}</p>
        <LinkTo href={block.block_link.uid}>Learn More</LinkTo>
      </Col>
    )
  });
  return(
    <ContentBlock key={index}>
      <Container>
        <Row>
          {blocks}
        </Row>
      </Container>
    </ContentBlock>
  )
}


const size = {
  xs
}

const TriangleLeftTopRed = styled.div`
	width: 10%;
	height: 50%;
	background: #D12331;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	clip-path: polygon(0% 100%, 0% 0%, 100% 0%);
`

const TriangleLeftBottomYellow = styled.div`
	width: 10%;
	height: 50%;
	background: #D9D458;
	background-size: cover;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 2;
	clip-path: polygon(0% 0%, 0% 100%, 100% 100%);
`
const TriangleBlueRight = styled.div`
	width: 20%;
	height: 100%;
	background: #005891;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 1;
	clip-path: polygon(50% 50%,100% 0%,100% 100%);
`
const CalloutIcon = styled.img`
	margin-bottom: 1.5rem;
	width: 100px;
`

<a href={Link.url(item.link, PrismicConfig.linkResolver)} className="rounded-0 btn btn-warning btn-lg text-dark">{RichText.asText(item.link_label)}</a>


else if (slice.slice_type === 'team') {
  const members = slice.items.map(function(member, memberIndex){
    return(
      <Col lg="3" key={memberIndex}>
        <TeamMember>
          <MemberPhoto src={member.portrait.url} alt="" height="100" width="100"/>
          <h5 className="text-dark">{member.first_and_lastname[0].text}</h5>
          <p className="mb-0 text-muted">{member.position[0].text}</p>
        </TeamMember>
      </Col>
    );
  });
  return(
    <GrayBlock key={index}>
      <TriangleRed />
      <TriangleBlue />
      <Container>
        <Row>
          <Col lg="12">
            <h3 className=" mb-3">{RichText.asText(slice.primary.team_section)}</h3>
            <p className="text-muted lead mb-0">{RichText.asText(slice.primary.team_subheader)}</p>
          </Col>
        </Row>
        <Row>
          {members}
        </Row>
      </Container>
    </GrayBlock>
  );
}

<Media left>
  <PostImage background={this.props.post.data.post_image.url} className="mr-4" />
</Media>


else if (slice.slice_type === 'callout_centered') {
 return(
   <ContentBlock key={index}>
     <TriangleLeftTopRed />
     <TriangleLeftBottomYellow />
     <TriangleBlueRight />
     <Container>
       <Row>
         <Col lg="10" className="text-center mx-auto">
           {
             (Object.keys(slice.primary.icon).length !== 0)
             ?
             <CalloutIcon src={slice.primary.icon.url} />
             :
             null
           }
           <h3 className=" mb-3">{RichText.asText(slice.primary.title )}</h3>
           <p className="lead text-muted mb-4">{RichText.asText(slice.primary.subtitle )}</p>
           <CalloutButton>{RichText.asText(slice.primary.button_label)}</CalloutButton>
         </Col>
       </Row>
     </Container>
   </ContentBlock>
 );
}

<a href={Link.url(item.link, PrismicConfig.linkResolver)} className="rounded-0 btn btn-warning btn-lg text-dark">{RichText.asText(item.link_label)}</a>


{hit.data.document_blurb.length ? hit.data.document_blurb[0].text : ''}

<BlogHeader headline={RichText.asText(document.post_title)} pubdate={pubDate.toLocaleDateString("en-US", options)} headerImage={document.post_image.url} author={RichText.asText(document.author.data.name)} />

<img src={document.post_image.url} className="img-fluid mb-4" />

<div className="form-group">
  <label>Newsletter</label>
  <div>
  <div className="form-check form-check-inline">
    <label className="form-check-label">
    <input name="checkbox" type="checkbox" className="form-check-input" value="subscribe" aria-describedby="checkboxHelpBlock" defaultChecked></input>
        Subscribe
    </label>
  </div>
  <span id="checkboxHelpBlock" className="form-text text-muted">You may unsubscribe at any time</span>
  </div>
</div>

<TriangleLeftTopRed />
<TriangleLeftBottomYellow />
<TriangleBlueRight />
