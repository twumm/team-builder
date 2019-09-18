import React from 'react'

const TeamBuilderList = (props) => {
  const { teamMembers } = props;
  return (
    <div>
      {
        teamMembers.map(member => (
          <>
          <h5 key={member.id}>
            {member.name} is {member.role}
          </h5>
          <h6>Email - {member.email}</h6>
          </>
        ))
      }
    </div>
  )
}

export default TeamBuilderList
