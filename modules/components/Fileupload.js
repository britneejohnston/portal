import React from 'react'
import { Link } from 'react-router'

export default class Fileupload extends React.Component {
  constructor(props) {
    super(props)
    this.state = { file: '',imagePreviewUrl: '' }
  }

  _handleSubmit(e) {
    e.preventDefault()
  }

  _handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />)
    } else {
      $imagePreview = (<div className="previewText">Please select a file to preview</div>)
    }

    return (
      <div className="card-panel center-align">
        <div className="container left-align">
          <h4>Current Pricing Sheets</h4>
          <Link to="/rebates" className="btn waves-effect btn teal accent-4">Rebates</Link>
          <span /> <span />
          <button className="btn waves-effect btn teal accent-4">Delete Checked</button>
          <span /> <span />
          <br /> <br />
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
         <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button className="btn waves-effect btn teal accent-4" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload New File</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
        </div>
      </div>
      </div>
    )
  }
}

