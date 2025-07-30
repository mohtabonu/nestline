import { useNavigate } from "react-router-dom";
import { useLanguage } from "../auth/language-context";
import { MapPin } from "lucide-react";
const Posts: React.FC = () => {
    const { translations } = useLanguage();
    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {translations.ads.map((ad, i) => (
                <div
                    key={ad.id}
                    onClick={() => navigate(`/seller/posts/${ad.id}`)}
                    className="bg-white dark:bg-gray-200 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:brightness-95 cursor-pointer"
                >
                    <div className="h-48 w-full bg-gray-300">
                        <img
                            src={ad.img}
                            alt="Ad"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4 flex items-end justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                {translations.ads[i].title}
                            </h2>
                            <p className="flex gap-2 items-center text-gray-600 text-sm mb-1">
                                <MapPin className="w-4 " /> {translations.ads[i].region}, {translations.ads[i].district}
                            </p>
                        </div>
                        <p className="text-gray-800  font-bold text-md">
                            ${translations.ads[i].price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;