import { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import Swal from 'sweetalert2'
const EditComponent = () => {
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
    // e.preventDefault();
    // console.log("API URL",process.env.REACT_APP_API)
    // axios.post(`${process.env.REACT_APP_API}/create`,{title,content,author})
    // .then(response=> {
    //   Swal.fire(
    //     'แจ้งเตือน',
    //     'บันทึกข้อมูลบทความเรียบร้อย',
    //     'success'
    //   )
    //   setState({...state,title:"",content:"",author:""})
    // }).catch(err=>{
    //   Swal.fire(
    //     'แจ้งเตือน',
    //     err.response.data.error,
    //     'error'
    //   )
    // })
    }

    return (
      <div className="container p-5">
        <NavbarComponent />
        <h1 className="mt-2 mb-3 text-center">แก้ไขบทความ</h1>
    </div>
  );
}
export default EditComponent;