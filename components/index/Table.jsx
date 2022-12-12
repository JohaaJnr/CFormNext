import React, { useEffect } from 'react'
import $ from 'jquery'
$.Datatable = require('datatables.net')
import moment from 'moment/moment'


const Table = (props) => {

    useEffect(()=>{
       
        $('#table_id').DataTable();
      
    },[])

    function deleteTxt(e){
        e.preventDefault()
       const id = e.target.getAttribute('data-id')
       
    }
    

  return (
    <div class="container">
        <div class="p-3 mt-5">
            <h4>Showing Threads</h4>
        </div>
          

          <table id="table_id" class="display">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Sender_name</th>
                      <th>Sender_email</th>
                      <th>Messege</th>
                      <th>Action</th>
                      <th>Time</th>
                  </tr>
              </thead>
              <tbody>
              {
                    props.m.map(e=>{
                        return(
                            <tr key={e._id}>
                                <th scope="row">*</th>
                                <td>{e.sender_name}</td>
                                <td>{e.sender_email}</td>
                                <td>{e.messege}</td>
                                <td><button class="btn btn-success text-center mt-0" data-id={e._id} id="delbtn" onClick={deleteTxt}>Delete</button></td>
                                <td>{moment(e.createdAt).fromNow()}</td>
                            </tr>

                        )
                    })
                }
                  
                  
              </tbody>
          </table>
          
    </div>
  )
}

export default Table