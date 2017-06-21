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
  Image,
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
  markdown: require("../assets/markdown.png"),
  mobx: require("../assets/mobx.png")
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
          Wer weiß, was React ist?
          Wer von euch hat schonmal mit React herumgespielt?
          Wer von euch hat schonmal React in Production eingesetzt? 

          Warum React? 
            - Sehr beliebte SPA Library mit knapp 70k Stars bei Github 
            - hohe Industry Adoption: Facebook, Instagram, AirBnB
            - Deklarative UI Programmierung: Einfach zu lesen, verstehen und schreiben
            - Weitere Ziel-Platformen: React Native, React VR mit selbem Programmiermodell
        `}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React <S type="strikethrough">Native</S> Quickstart
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Martin Lechner - @martinlechner1
          </Text>
        </Slide>
        <Slide
          notes={`
          - In React besteht die UI aus sogenannten Components
          - Funktionen / Classen die die UI beschreiben
          - WTF HTML in JS? -> JSX, Transpiled via babel
        `}
        >
          <Heading size={6}>Hello World</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloWorld.js")}
          />
        </Slide>
        <Slide
          notes={`
          - Statische Component ist ziemlich langweilig
          - Components können Props übergeben bekommen
          - Attribute an den Custom Element Tags -> Props
        `}
        >
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
          <Text>Props passed via attributes</Text>
          <Text>Changes to props -&gt; re-render the Component</Text>
        </Slide>
        <Slide
          notes={`
          - Bisher functional components
          - Class Components bieten noch mehr Möglichkeiten
          - ES6 Class, extends Component
          - Render method, this.props
        `}
        >
          <Heading size={6}>Class Components</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloClass.js")}
          />
        </Slide>
        <Slide
          notes={`
          - Jede Anwendung hat einen Zustand
          - Änderungen am State mit this.setState() sorgen für ein re-render
          - Zustand ist hier der Text
          - Tippen im Textfeld feuert synthetische Events
          - Ruft setState auf -> update der UI
          TODO: Demo, evtl mit Hello Component
        `}
        >
          <Heading size={6}>State</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloState.js")}
          />
        </Slide>
        <Slide>
          <Heading size={6}>Component Lifecycle</Heading>
          <Text>
            Mount: Component is created and inserted into DOM the first time.
          </Text>
          <Text>Update: Changes to props or state</Text>
          <Text>Hooks for lifecycle events</Text>
          <Text>Only available on Class Components!</Text>
        </Slide>
        <Slide
          notes={`
          - Usecase: direkt mit DOMNodes interagieren
          - Class Components only
        `}
        >
          <Heading size={6}>Refs</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/RefExample.js")}
          />
        </Slide>
        <Slide
          notes={`
        - Wraps other components
        - Z.b. Can access and modify props`}
        >
          <Heading size={6}>Higher Order Components</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/logProps.js")}
          />
        </Slide>
        <Slide>
          <Heading size={6}>Higher Order Components use</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../../code/src/HelloWithLog.js")}
          />
        </Slide>
        <Slide notes="babel, webpack, etc.">
          <Heading size={6}>Let's get started!</Heading>
          <Text>Who wants to configure a zillion of Tools?</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Create-React-App ftw!</Heading>
          <Text>Creates a project using good standards</Text>
          <Text>Hides the build config from you</Text>
          <Text>Hot code swap, etc.</Text>
          <Text>Highly optimized production config</Text>
          <Text>PWA via Service Worker out of the box!</Text>
        </Slide>
        <Slide>
          <Heading size={6}>React Native</Heading>
          <Text>
            JS -&gt; Messages -&gt; Native Bridge -&gt; Native Elements
          </Text>
          <Text>e.g. <Code>{"<View />"}</Code> -&gt; UIView, android.View</Text>
          <Text>Create-React-Native-App</Text>
          <Link href="https://snack.expo.io" target="_blank">
            Playground
          </Link>
        </Slide>
        <Slide
          notes={`
          - Built on top of react-native
          - Target VR Headsets
          - Preview in Browser possible
        `}
        >
          <Heading size={6}>React VR</Heading>
          <Link href="http://localhost:8081/vr/" target="_blank">
            Demo
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
          <Heading size={6}>Tooling</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Eslint</Heading>
          <Text>Static code analysis for js</Text>
          <Text>React plugin</Text>
          <Text>AirBnB ruleset</Text>
          <Text>Use this in every js project!</Text>
        </Slide>
        <Slide
          notes={`
          - SNAPSHOT: expect matcher ist toMatchSnapshot()
          - Wird beim ersten Aufruf gespeichert
          - Wenn sich etwas ändert failed der Test und man wird gefragt ob man den neuen
          Wert übernehmen will
        `}
        >
          <Heading size={6}>Jest</Heading>
          <Text>Best JS Test Tool</Text>
          <Text>Easy Setup & Migration</Text>
          <Text>Snapshot Testing</Text>
          <Text>Async/Await for Promise Testing</Text>
          <Text>Code coverage out of the box</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Prettier</Heading>
          <Text>Code Formatting</Text>
          <Text>JS -&gt; parse AST -&gt; Pretty printed code</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Flow</Heading>
          <Text>Static Type Checking</Text>
          <Text>Type Annotations</Text>
          <Text>Powerful Type Inference</Text>
        </Slide>
        <Slide>
          <Heading size={6}>React Dev Tools</Heading>
          <Text>Chrome</Text>
          <Text>Standalone (Electron)</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Ecosystem</Heading>
        </Slide>
        <Slide>
          <Heading size={6}>Redux</Heading>
          <Text>Store - Single Source of Truth</Text>
          <Text>State - Read only</Text>
          <Text>Update - Pure Functions (Reducer)</Text>
          <Text>Action -&gt; Store -&gt; Reducer -&gt; new State</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Redux</Heading>
          <CodePane
            source={require("raw-loader!../../code/src/Redux.js")}
            lang="javascript"
          />
        </Slide>
        <Slide>
          <Heading size={6}>React-Redux</Heading>
          <Text>Enhances React Components by Store-State and Actions</Text>
          <Text>Update to store -&gt; Update to Component</Text>
          <Text>Action creator calls dispatched to store</Text>
        </Slide>
        <Slide
          notes={`
          - You need to link Redux Store to React App on root element
          - mapStateToProps: Select part of state as props for your component
          - mapDispatchToProps: Add dispatchable Actions to your component
        `}
        >
          <Heading size={6}>React-Redux</Heading>
          <CodePane
            source={require("raw-loader!../../code/src/React-Redux.js")}
            lang="javascript"
          />
        </Slide>
        {/*<Slide>
          <Heading size={6}>MobX</Heading>
          <Text>Reactive Programming</Text>
          <Image src={images.mobx} width="50%" height="50%" />
        </Slide>*/}
        <Slide>
          <Heading size={6}>React Alternatives</Heading>
          <Text>Smaller package size</Text>
          <Text>Faster</Text>
          <Text>Not fully api compatible with React</Text>
          <Text>Preact</Text>
          <Text>InfernoJS</Text>
        </Slide>
        <Slide
          notes={`- declarative routing
        - example shows only small subset of possibilities
        `}
        >
          <Heading size={6}>React-Router</Heading>
          <Text>Declarative Routing</Text>
          <CodePane
            source={require("raw-loader!../../code/src/Router.js")}
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Heading size={6}>CSS in JS</Heading>
          <Text>aka. colocated styles</Text>
          <Text>Glamor, Styled-Components</Text>
          <CodePane
            source={require("raw-loader!../../code/src/App.js")}
            lang="jsx"
          />
        </Slide>
        <Slide
          notes={`
          - Server 
        `}
        >
          <Heading size={6}>GraphQL</Heading>
          <Text>Query language/protocol for API communication</Text>
          <Text>Unite multiple resources (REST, DB, ...) in one Api call</Text>
          <Text>Typed Schema with attached data resolvers</Text>
          <Text>Specify what you get from the Api</Text>
          <Text>Apollo Stack</Text>
          <Text>Relay</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Apollo-Client</Heading>
          <CodePane
            source={require("raw-loader!../../code/src/GraphQL.js")}
            lang="jsx"
          />
        </Slide>
        <Slide
          notes={`
          - Facebook setzt das bei einigen Dingen ein
          - Flow, Hack, Infer
        `}
        >
          <Heading size={6}>Reason</Heading>
          <Text>OCaml Dialect + Toolbox</Text>
          <Text>Based on bucklescript</Text>
          <Text>Bindings for React API</Text>
        </Slide>
        <Slide>
          <CodePane
            lang="reason"
            source={require("raw-loader!../../code/src/Page.re")}
          />
        </Slide>
        <Slide>
          <Heading size={6}>Server side rendering</Heading>
          <Text>Bring down time to first meaningful paint</Text>
          <Text>When JS is fully loaded ui becomes interactive</Text>
          <Text>Some frameworks, e.g. zeit/next.js</Text>
        </Slide>
        <Slide
          notes={`
          - Äpfel und Birnen, sollte man eigentlich nicht vergleichen
          - React ist nur View Layer und hat daher weniger Magic
          - Man muss dafür bei einigen Dingen mehr Entscheidungen selbst treffen
        `}
        >
          <Heading size={6}>React vs Angular</Heading>
          <Text>View library vs. fully blown framework</Text>
        </Slide>
        <Slide>
          <Heading size={6}>Whom to ask?</Heading>
          <List>
            <ListItem>Franzi</ListItem>
            <ListItem>Stephan</ListItem>
            <ListItem>Bastian</ListItem>
            <ListItem>Andy</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6}>Acknowledgements</Heading>
          <List>
            <ListItem>Andy</ListItem>
            <ListItem>Jambit GmbH</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Links
          </Heading>
          <List size={6}>
            <ListItem>
              <Link href="https://facebook.github.io/react" target="_blank">
                React
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/facebookincubator/create-react-app"
                target="_blank"
              >
                Create-React-App
              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://redux.js.org/" target="_blank">
                Redux
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary">
            Slides and Demo code
          </Heading>
          <Link
            href="https://github.com/martinlechner1/react-quickstart-talk"
            target="_blank"
          >
            github.com/martinlechner1/react-quickstart-talk
          </Link>
        </Slide>
      </Deck>
    );
  }
}
