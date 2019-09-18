import React, { useState } from 'react';
import uuid from 'uuid';

import TeamBuilderList from './components/TeamBuilderList';
import TeamBuilderForm from './components/TeamBuilderForm';

function App() {
  const initialTeamMembers = [
    { id: uuid(), name: 'gabe', email: 'gabe@email.com', role: 'admin' },
    { id: uuid(), name: 'luke', email: 'luke@email.com', role: 'member' },
    { id: uuid(), name: 'josh', email: 'josh@email.com', role: 'member' },
  ]

  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

  return (
    <div>
      <h3>Build Teams Here</h3>
      <TeamBuilderForm />
      <TeamBuilderList teamMembers={teamMembers} />
    </div>
  );
}

export default App;
