// Import React
import React from "react";

// Import Spectacle Core tags
import {
  //BlockQuote,
  //Cite,
  Deck,
  Heading,
  ListItem,
  List,
  //Quote,
  Slide,
  Text,
  //CodePane,
  Link,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#f07e07",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React <S type="strikethrough">Native</S> Quickstart
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Martin Lechner - @martinlechner1
          </Text>
        </Slide>
        <Slide>
          <Heading size={6}>JSX</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Components</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Props</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Class Components</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>State</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Lifecycle</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Architectural Considerations</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Higher Order Components</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Pain of modern JS</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Create React App ftw!</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Pain of State Management</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Redux</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>React-Redux</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>React Native</Heading>
        </Slide>
        {/*
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <CodePane lang="jsx">
            {
              'const Button = ({ title }) => (<button type="button">{ title }</button>);'
            }
          </CodePane>
        </Slide>*/}
        <Slide>
          <Heading size={5} textColor="tertiary">
            Links
          </Heading>
          <List size={6}>
            <ListItem>
              <Link href="https://facebook.github.io/react">React</Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/facebookincubator/create-react-app">
                Create-React-App
              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://redux.js.org/">
                Redux
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Slides and Demo code
          </Heading>
          <Text>https://github.com/martinlechner1/react-quickstart-talk</Text>
        </Slide>
      </Deck>
    );
  }
}
