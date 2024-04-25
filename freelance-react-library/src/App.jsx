import React from 'react';
import Card from './Card'; // Assuming the Card component is in a separate file

const App = () => (
  <div className="app">
    <Card
      title="Example Card"
    //   imageUrl="https://example.com/image.jpg"
      description="This is an example card component."
    />
  </div>
);

export default App;
