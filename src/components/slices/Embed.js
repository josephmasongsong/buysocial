import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Container } from 'reactstrap';
import styled from 'styled-components';

const StyledSection = styled.section`
	position: relative;
	padding: 6rem 0;
	@media (max-width: 575.98px) {
		padding: 3rem 0;
  }
`
export default class Embed extends React.Component {
  rawMarkup(){
    const rawMarkup = RichText.asText(this.props.slice.primary.embed_code)
    return rawMarkup;
  }

  extractScript(){
    const x = this.rawMarkup();
    const script=/<script[\s\S]*?>[\s\S]*?<\/script>/gi.exec(x);
    const stripped = script[0].replace(/(<([^>]+)>)/ig,"");
    return stripped
  }

  componentWillMount() {
    window.eval(this.extractScript());
  }
  render() {
    return (
      <StyledSection>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: this.rawMarkup() }} />
        </Container>
      </StyledSection>
    )
  }

}
