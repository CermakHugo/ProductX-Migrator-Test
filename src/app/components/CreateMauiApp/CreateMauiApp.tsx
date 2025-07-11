

import React from 'react';

interface CreateMauiAppProps {
  mauiApp: string;
}

const CreateMauiApp: React.FC<CreateMauiAppProps> = ({ mauiApp }) => {
  if (!mauiApp) {
    return <div>Error: Maui app is not defined.</div>;
  }

  if (typeof mauiApp !== 'string') {
    return <div>Error: Maui app must be a string.</div>;
  }

  try {
    return (
      <div>
        <h1>Create Maui App</h1>
        <p>Maui App: {mauiApp}</p>
      </div>
    );
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
};

export default CreateMauiApp;