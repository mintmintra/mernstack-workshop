import React from 'react'
import NavbarComponent from "./NavbarComponent";

const LoginComponent = () => {
  return (
    <div className="container p-5">
        <NavbarComponent />
        <h1 className="mt-2 mb-3 text-center">เข้าสู่ระบบ | Admin</h1>
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control mt-2 mb-3" value={title} onChange={inputValue("title")} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control mt-2 mb-3" value={author} onChange={inputValue("author")} />
          </div>
            <br />
          <input type="submit" value="เข้าสู่ระบบ" className="btn btn-primary" />
        </form>
    </div>
  )
}

export default LoginComponent;