import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { post_comment } from "../reducer/Art/artActions";

const initialValues = {
  name: "",
  comment: "",
  artId: 0
}

function CommentForm({ id }) {

  //use error object to set validation error for specified fields, values are boolean  
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState(initialValues)

  function HandleSubmit(e) {
    e.preventDefault();
    formValues.artId = id;
    if (ValidateFields()) {
      const formData = new FormData();
      formData.append('name', formValues.name)
      formData.append('post', formValues.comment)
      formData.append('artModelId', formValues.artId)
      dispatch(post_comment(formData, id))
      setFormValues(initialValues)
    }
    else {
      console.log("validation failed");
    }
  }

  function HandleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  function ValidateFields() {
    let values = {};
    values.name = formValues.name === "" ? false : true;
    values.comment = formValues.comment === "" ? false : true;
    values.comment = formValues.comment.length < 10 ? false : true;
    setErrors(values);
    return Object.values(values).every((x) => x === true);
  }
  function applyErrorClass(field) {
    if (field in errors && errors[field] === false) {
      return "invalid-field";
    }
  }

  return (<>
    <Form className="comment-form" onSubmit={HandleSubmit}>
      <Form.Group >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={formValues.name} className={applyErrorClass("name")} onChange={HandleChange} placeholder="Your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter comment</Form.Label>
        <Form.Control name="comment" value={formValues.comment} className={applyErrorClass("comment")} onChange={HandleChange} as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </>)
}

export default CommentForm;