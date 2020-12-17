import React from 'react'
import { connect } from 'react-redux'

const Profile = ({ userInfo }) => {
  return (
    <>
      <h3>Profile</h3>
      <dt>ID</dt>
      <dd>{userInfo.id}</dd>
      <dt>Name</dt>
      <dd>{userInfo.name}</dd>
    </>
  )
}

const mapStateToProps = state => ({
  userInfo: state.auth.userInfo
})

export default connect(mapStateToProps)(Profile)