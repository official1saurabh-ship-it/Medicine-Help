import React from 'react'

const AddMedicineForm = ({ user, setUser, formData, setFormData }) => {



    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser([...user, formData])
        setFormData({
            image: "",
            title: "",
            description: "",
            subDescription: ""
        })

    }
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200 space-y-4">
            <h2 className="text-2xl font-bold text-center text-gray-800">
                Add Product
            </h2>

            <input
                required
                onChange={handleChange}
                value={formData.image}
                type="text"
                name="image"
                placeholder="Add image URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                required
                onChange={handleChange}
                value={formData.title}
                type="text"
                name="title"
                placeholder="Add title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
                required
                onChange={handleChange}
                value={formData.description}
                name="description"
                placeholder="Add description"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <textarea
                required
                onChange={handleChange}
                value={formData.subDescription}
                name="subDescription"
                placeholder="Add subSescription"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
                Add Product
            </button>
        </form>
    )
}

export default AddMedicineForm