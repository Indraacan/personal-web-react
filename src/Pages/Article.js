import React, { Component } from 'react'
import Foto from '../Pages/asset/1.jpg'
import Foto1 from '../Pages/asset/2.jpg'
import Foto2 from '../Pages/asset/3.jpg'
import { Link } from "react-router-dom";

export default class Article extends Component {
    render() {
        return (
          <div className="container">
            <div className="row mb-4" >
              <div className="col-md-4">
          <div className="Card" style={{width: '18rem'}}>
        <img src={Foto} className="card-img-top" alt="..." />
        <div className="Card-body">
          <p className="Card-text-center">Places around England compete to host underground nuclear waste dump</p>
          <Link className="btn btn-primary" to="/">Click to link</Link>
        </div>
      </div>
      </div>
      <div className="col-md-4">
      <div className="Card" style={{width: '18rem'}}>
        <img src={Foto1} className="card-img-top" alt="..." />
        <div className="Card-body">
          <p className="Card-text-center">Places around England compete to host underground nuclear waste dump</p>
          <Link className="btn btn-primary" to="/">Click to link</Link>
        </div>
      </div>
      </div>
      <div className="col-md-4">
      <div className="Card" style={{width: '18rem'}}>
        <img src={Foto2} className="card-img-top" alt="..." />
        <div className="Card-body">
          <p className="Card-text-center">Places around England compete to host underground nuclear waste dump</p>
          <Link className="btn btn-primary" to="/">Click to link</Link>
        </div>
      </div>
      </div>
      </div>
      <div className="row ">
              <div className="col-md-4">
          <div className="Card" style={{width: '18rem'}}>
        <img src={Foto} className="card-img-top" alt="..." />
        <div className="Card-body">
          <p className="Card-text-center">Places around England compete to host underground nuclear waste dump</p>
          <Link className="btn btn-primary" to="/">Click to link</Link>
        </div>
      </div>
      </div>
      <div className="col-md-4">
      <div className="Card" style={{width: '18rem'}}>
        <img src={Foto1} className="card-img-top" alt="..." />
        <div className="Card-body">
          <p className="Card-text-center">Places around England compete to host underground nuclear waste dump</p>
          <Link className="btn btn-primary" to="/">Click to link</Link>
        </div>
      </div>
      </div>
      <div className="col-md-4">
      <div className="Card" style={{width: '18rem'}}>
        <img src={Foto2} className="card-img-top" alt="..." />
        <div className="Card-body">
          <p className="Card-text-center">Places around England compete to host underground nuclear waste dump</p>
          <Link className="btn btn-primary" to="/">Click to link</Link>
        </div>
      </div>
      </div>
      </div>



      </div>

        )
    }
}
