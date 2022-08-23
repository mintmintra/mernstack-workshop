import { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
const FormComponent = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    author:""
  })
  const {title,content,author} = state

  //กำหนดค่าให้กับ State
  const inputValue = name => event => {
    setState({ ...state, [name]: event.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log("API URL",process.env.REACT_APP_API)
    axios.post(`${process.env.REACT_APP_API}/create`,{title,content,author})
    .then(response=> {
      alert("บันทึกข้อมูลเรียบร้อย")
    }).catch(err=>{
      alert(err.response.data.error)
    })
    }

    return (
      <div className="container p-5">
        <NavbarComponent />
        <h1 className="mt-2 mb-3 text-center">เขียนบทความ</h1>
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label>ชื่อบทความ</label>
            <input type="text" className="form-control mt-2 mb-3" value={title} onChange={inputValue("title")} />
          </div>
          <div className="form-group">
            <label>รายละเอียด</label>
            <textarea className="form-control mt-2 mb-3" value={content} onChange={inputValue("content")}></textarea>
          </div>
          <div className="form-group">
            <label>ผู้แต่ง</label>
            <input type="text" className="form-control mt-2 mb-3" value={author} onChange={inputValue("author")} />
          </div>
            <br />
          <input type="submit" value="บันทึก" className="btn btn-primary" />
        </form>
    </div>
  );
}
export default FormComponent;