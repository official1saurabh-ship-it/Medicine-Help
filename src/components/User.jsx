const User = ({ user }) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {user.map((item, index) => (
                <div
                    key={index}
                    className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-56 object-cover"
                    />

                    <div className="p-5">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {item.title}
                        </h2>

                        <p className="mt-3 text-gray-600">
                            {item.description}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            {item.subDescription}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default User;