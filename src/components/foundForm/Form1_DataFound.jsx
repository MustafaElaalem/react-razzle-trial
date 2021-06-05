import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FoundData() {
  const { register } = useForm();
  const [generalData, setGeneralData] = useState({
    announcementTitle:"",
    category:"",
    subCategory:"",
    detail1:{
      bool:false,
      value:""
    },
    detail2:{
      bool:false,
      value:""
    },
    detail3:{
      bool:false,
      value:""
    }
  })
  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    setGeneralData({...generalData,[name]:value})
  }
  return (
    <>
      {/* <h5 className="text-center mb-3">General Information</h5> */}
      <div className="mb-3 form-control-div">
        <label htmlFor="announcementTitle" className="form-label">
      <strong style={{fontSize:'18px'}}>  Announcement Title</strong>
        </label>
        <div className="input-group mb-3">
          {/* <span className="input-group-text" id="basic-addon1">
            Announcement Title
          </span> */}
          <input
            type="text"
            {...register("age", { required: true })}
            name="announcementTitle"
            className="form-control"
            placeholder="Enter a Title for the Announcement "
            aria-label="announcementTitle"
            value={generalData.announcementTitle}
            onChange={handleChange}
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className="mb-3 form-control-div">
        <label for="exampleInputEmail1" className="form-label">
          Found properties data
        </label>
        <button
          className="btn btn-sm btn-primary m-2"
          style={{ float: "right" }}
        >
          + Add another property
        </button>

        <div className="m-3 form-control-div">
          <label for="exampleInputEmail1" className="form-label">
            Found property 1
          </label>

          <div className="m-1 form-control-div">
            <label for="exampleInputEmail1" className="form-label">
              General information
            </label>
            {/* <label for="exampleInputEmail1" className="form-label">General information</label>

<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
*/}
           
            <div className="input-group mb-3 container justify-content-between" >
            <div className="row">

              <label className="input-group-text" for="inputGroupSelect01">
                Category
              </label>
              <select className="form-select" id="inputGroupSelect01" 
              name="category"
              value={generalData.category}
              onChange={handleChange}>
                <option selected >Choose...</option>
                <option value="1">ID</option>
                <option value="2">Pets</option>
                <option value="3">Mobile Phone</option>
                <option value="4">Bags and Wallets</option>
                <option value="5">Keys</option>
                <option value="6">Vehicles</option>
                <option value="7">Number Plates</option>
                <option value="8">Money</option>
              </select>
              </div>
              <div className="row">
              <label className="input-group-text" for="inputGroupSelect01">
                Sub-Category
              </label>
              <select className="form-select" id="inputGroupSelect01" defaultValue=""
              name="subCategory"
              onChange={handleChange}
              value={generalData.subCategory}
              >
                <option selected>Choose...</option>
                <option value="1">Egypt</option>
                <option value="2">Saudi Arabia</option>
                <option value="3">Kuewit</option>
                <option value="4">Oman</option>
                <option value="5">Lebanon</option>
                <option value="6">Qatar</option>
                <option value="7">UAE</option>
                <option value="8">Libya</option>
              </select>
            </div>
            </div>
     
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Announcement Title
              </span>
              <input
                type="text"
                {...register("age", { required: true })}
                name="announcementTitle"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoundData;
