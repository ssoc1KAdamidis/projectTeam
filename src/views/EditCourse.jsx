import React, { useState } from 'react';

function EditForm({ initialValues }) {
    const [formValues, setFormValues] = useState(initialValues);

    const handleEdit = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formValues to the server to update the data
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* */}
            <button type="submit">Save Course</button>
        </form>
    );
}

export default EditForm;




