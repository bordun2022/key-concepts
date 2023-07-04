import componentsImage from "./images/components.png";
import stateImage from "./images/state.png";
import eventsImage from "./images/events.png";
import { Link } from "react-router-dom";
import ConceptsList from "./pages/ConceptsList";

export const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div>
      <ul id="concepts">
        <ConceptsList image={concepts[0].image} title={concepts[0].title}><p><Link to="/component">See more...</Link></p></ConceptsList>
        <ConceptsList image={concepts[1].image} title={concepts[1].title}><p><Link to="/state">See more...</Link></p></ConceptsList>
        <ConceptsList image={concepts[2].image} title={concepts[2].title}><p><Link to="/events">See more...</Link></p></ConceptsList>
      </ul>
    </div>
    

  );
}

export default App;
