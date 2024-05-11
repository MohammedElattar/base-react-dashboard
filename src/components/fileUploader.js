const fileUploader = () => {
    const { field, form } = props;

    const handleChange = (e) => {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        const imgTag = document.getElementById('myimage');
        imgTag.title = file.name;
        reader.onload = function (event) {
            imgTag.src = event.target.result;
        };
        reader.readAsDataURL(file);
        form.setFieldValue(field.name, file);
    }
}