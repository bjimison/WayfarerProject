import React, { Component } from 'react'

class CreatePost extends Component {
    render() {
        return (
            <div className="CreatePost">
            <h2>CreatePost</h2>
            <form>
                <select name="City">
                    <option value="SanFrancisco">San Francisco</option>
                    <option value="London">London</option>
                    <option value="France">France</option>
                    <option value="Tokyo">Tokyo</option>
                </select>
                <input type="text" placeholder="Title"/>
                <input type="textfield" placeholder="Description"/>
                <input type="file" name="pic" accept=".png, .jpg"></input>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default CreatePost;