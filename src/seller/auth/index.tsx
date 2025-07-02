import Header from "./header";
// import LoginPage from "./login";
import RegisterPage from "./register";


const Auth: React.FC = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4">
            {/* Фон с блюром */}
            <div className="absolute inset-0 bg-[url('/auth/dom.jpg')] bg-cover bg-center blur-sm"></div>

            {/* Затемнение (по желанию) */}
            <div className="absolute inset-0 bg-black/30"><Header buttonText="Войти" />
            </div>
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform animate-fade-in transition-all">
                {/* <LoginPage /> */}
                <RegisterPage />
            </div>
        </div>
    );
}

export default Auth;