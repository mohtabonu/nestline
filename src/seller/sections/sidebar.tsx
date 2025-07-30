import { Link, useNavigate } from "react-router-dom";
import {
    Home,
    PlusCircle,
    BarChart2,
    Settings,
    LogOut,
} from "lucide-react";
import { useLanguage } from "../auth/language-context";

export const Sidebar = () => {
    const { translations } = useLanguage()
    const navigate = useNavigate();

    return (
        <aside className="h-screen w-[100%] bg-gray-900 text-white shadow-lg flex flex-col justify-between py-4 px-2">
            <div>
                <div className="px-6 py-4 flex items-center gap-3 border-b border-gray-800">
                    {/* Аватар */}
                    <img
                        src="/profile.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover border border-gray-700 shadow-sm"
                    />

                    {/* Информация */}
                    <div className="flex flex-col text-white">
                        <h3 className="text-base font-semibold">Username</h3>
                        <h4 className="text-sm text-gray-400">+998 99 012 34 56</h4>
                    </div>
                </div>


                {/* Навигация */}
                <nav className="mt-4 flex flex-col space-y-2 px-4">
                    <SidebarItem
                        icon={<Home size={22} />}
                        text={translations.sidebar.news}
                        onClick={() => navigate('/seller/posts')}
                    />
                    <SidebarItem
                        icon={<PlusCircle size={22} />}
                        text={translations.sidebar.add}
                        onClick={() => navigate('/seller/add')}
                    />
                    <SidebarItem
                        icon={<BarChart2 size={22} />}
                        text={translations.sidebar.chart}
                        onClick={() => navigate('/seller/chart')}
                    />
                    <SidebarItem
                        icon={<Settings size={22} />}
                        text={translations.sidebar.settings}
                        onClick={() => navigate('/seller/settings')}
                    />
                </nav>
            </div>

            {/* Выход */}
            <Link
                to="/seller/auth/login"
                className="w-full flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gray-800 text-white hover:bg-red-600 active:scale-95 transition-all"
            >
                <LogOut size={18} />
                {translations.sidebar.exit}
            </Link>
        </aside >
    );
};

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    onClick?: () => void;
}

const SidebarItem = ({ icon, text, onClick }: SidebarItemProps) => (
    <button
        onClick={onClick}
        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 w-full text-left"
    >
        {icon}
        <span>{text}</span>
    </button>
);
