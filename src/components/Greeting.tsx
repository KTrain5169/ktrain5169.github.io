// src/components/Greeting.tsx
import { FunctionComponent } from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: FunctionComponent<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
