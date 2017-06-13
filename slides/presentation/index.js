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
  CodePane,
  Code,
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
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          notes={`
          Wer von euch hat schonmal mit React herumgespielt?
          Wer von euch hat schonmal React in Production eingesetzt? 
          Der Andy ist nur zum Spass hier^^
          Warum React? 
            - Knapp 70k Stars bei Github 
            - Industry Adoption: Facebook, Instagram, AirBnB
            - Deklarative UI Programmierung
            - Weitere Platformen: React Native, React VR mit selbem Programmiermodell
        `}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React <S type="strikethrough">Native</S> Quickstart
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Martin Lechner - @martinlechner1
          </Text>
        </Slide>
        <Slide notes="WTF HTML in JS?!? - Called JSX, Transpiled via babel">
          <Heading size={6}>Hello World</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloWorld.js")}
          />
        </Slide>
        <Slide notes="Props: Object passed to the component">
          <Heading size={6}>Hello Extended</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/Hello.js")}
          />
          <Text />
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloApp.js")}
          />
        </Slide>
        <Slide>
          <Heading size={6}>Components</Heading>
          <Text>Independent, reusable pieces of UI</Text>
          <Text>Declarative way of Programming</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Props</Heading>
          <Text>Anything can be passed via attributes as seen before</Text>
        </Slide>
        <Slide notes="ES6 classes, Note this.props!">
          <Heading size={6}>Class Components</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloClass.js")}
          />
        </Slide>
        <Slide>
          <Heading size={6}>State</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloState.js")}
          />
        </Slide>
        <Slide>
          <Heading size={6}>Lifecycle</Heading>
          <Text>Hooks for certain events</Text>
          <Text>
            Mount: Component is created and inserted into DOM the first time.
          </Text>
          <Text>Update: Changes to props or state</Text>
          <Text>Only available on Class Components!</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Refs</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/RefExample.js")}
          />
        </Slide>
        <Slide notes="Wraps other components and has access to props">
          <Heading size={6}>Higher Order Components</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/logProps.js")}
          />
          <Text />
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloWithLog.js")}
          />
        </Slide>
        <Slide>
          <Heading size={6}>Testing</Heading>
          <Text>Jest</Text>
          <Text>Enzyme</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Server side rendering</Heading>
          <Text>Bring down time to first meaningful paint</Text>
          <Text>When JS is fully loaded ui becomes interactive</Text>
          <Text>Some frameworks, e.g. zeit/next.js</Text>
        </Slide>
        <Slide notes="babel, webpack, etc.">
          <Heading size={6}>Let's get started!</Heading>
          <Text>Want to configure a zillion of Tools?</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Create-React-App ftw!</Heading>
          <Text>Creates a project using good standards</Text>
          <Text>Hides the build config from you</Text>
          <Text>PWA via Service Worker out of the box!</Text>
        </Slide>
        <Slide>
          <Heading size={6}>React Native</Heading>
          <Text>Native Bridge: JS -&gt; Native Elements</Text>
          <Text>e.g. <Code>{"<View />"}</Code> -&gt; UIView, android.View</Text>
          <Text>Create-React-Native-App</Text>
          <Link href="https://snack.expo.io">
            Playground
          </Link>
        </Slide>
        <Slide>
          <Heading size={6}>React VR</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../vr/index.vr.js")}
          />
        </Slide>
        <Slide>
          <Heading size={6}>React VR</Heading>
          <Link href="http://localhost:8081/vr/">
            Demo
          </Link>
        </Slide>
        <Slide>
          <Heading size={6}>Tooling</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Prettier</Heading>
          <Text>JS -&gt; AST -&gt; Pretty printed code</Text>
          <Text>Use this in every js project!</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Eslint</Heading>
          <Text>Static code analysis for js</Text>
          <Text>React plugin</Text>
          <Text>AirBnB ruleset</Text>
          <Text>Use this in every js project!</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Flow</Heading>
          <Text>Static Type Checker</Text>
          <Text>Type Annotations</Text>
          <Text>Powerful Type Inference</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Ecosystem</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Redux</Heading>
          <Text>Store - Single Source of Truth</Text>
          <Text>State - Read only</Text>
          <Text>Update - Pure Functions (Reducer)</Text>
          <Text>Triggered by Actions</Text>
        </Slide>
        <Slide>
          <Heading size={6}>React-Redux</Heading>
          <Text>Enhances React Components by Store and Actions</Text>
          <Text>Update to store -&gt; Update to Component</Text>
        </Slide>
        <Slide>
          <Heading size={6}>MobX</Heading>
          <Text>State management the FRP way</Text>
        </Slide>
        <Slide>
          <Heading size={6}>React-Router</Heading>
          <Text>Declarative Routing</Text>
        </Slide>
        <Slide>
          <Heading size={6}>GraphQL</Heading>
          <Text>Query language for your API</Text>
          <Text>
            Typed Schema -&gt; Query -&gt; Only get what you requested
          </Text>
          <Text>Relay</Text>
          <Text>Apollo</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Reason</Heading>
          <Text>OCaml Dialect + Toolbox</Text>
          <Text>Based on bloomberg/bucklescript</Text>
          <Text>Bindings for React API</Text>
        </Slide>
        <Slide>
          <Heading size={6}>React vs Angular</Heading>
          <Text>Thin library vs. fully blown framework</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Whom to ask?</Heading>
          <List>
            <ListItem>Franzi</ListItem>
            <ListItem>Stephan D.</ListItem>
            <ListItem>Bastian G.</ListItem>
            <ListItem>Andy S.</ListItem>
          </List>
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
