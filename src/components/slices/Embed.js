import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Container } from 'reactstrap';
import { ContentBlock } from '../../styles';

/* eslint no-eval: 0 */

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
      <ContentBlock>
        <Container>
          <div dangerouslySetInnerHTML={{ __html: this.rawMarkup() }} />
        </Container>
      </ContentBlock>
    )
  }
}
