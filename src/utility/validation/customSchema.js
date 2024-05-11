const isFile = (value) => {
    return (value instanceof File)
}

const fileSchema = (value, createError) => {
    if (!isFile(value)) {
        return createError('field must be a valid file')
    }

    return true;
}

const imageSchema = (value, createError) => {
    console.log(value, value.size, value.type)
    const type = value?.type?.split('/')[0] || null;

    if (!isFile(value) || type !== 'image') {
        return createError({message: 'field must be an image'})
    }

    return true;
}

const customSchema = {
    file: fileSchema,
    image: imageSchema
}

export default customSchema