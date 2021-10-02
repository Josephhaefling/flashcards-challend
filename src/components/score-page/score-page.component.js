import React from 'react';

//components
import Button from '../button/button.component';
import Card from '../card/card.component';
import Heading from '../heading/heading.component';
import Text from '../text/text.component';

const ScorePage = () => {
  return (
      <Card>
        <Card.Header>
          <Heading level={2}>Results</Heading>
        </Card.Header>
        <Card.Body>
          <Text>Number Correct</Text>
          <Text>Percentage Correct</Text>
        </Card.Body>
        <Card.Footer>
          <Text>Would you like to play again?</Text>
          <Button>Play Again</Button>
        </Card.Footer>
      </Card>
  )
}

export default ScorePage;