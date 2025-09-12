import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username cannot be empty!";
  }
  return errors; // ✅ must return
};

export default function CommentsForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        {/* Username */}
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // track if field was touched
        />
        {formik.touched.username && formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br />
        <br />

        {/* Remarks */}
        <label htmlFor="remarks">Remarks: </label>
        <textarea
          id="remarks"
          name="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />

        {/* Rating */}
        <label htmlFor="rating">Rating: </label>
        <input
          id="rating"
          name="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />

        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
