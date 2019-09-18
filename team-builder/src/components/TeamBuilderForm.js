import React from 'react'

const TeamBuilderForm = () => {
  return (
    <>
      <form>
        <label htmlFor="nameInput">Name</label>
        <input
          id="nameInput"
          type="text"
        />

        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          type="text"
        />

        <label htmlFor="roleInput">Role</label>
        <input
          id="roleInput"
          type="text"
        />
      </form>
    </>
  )
}

export default TeamBuilderForm
