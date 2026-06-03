import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Простая валидация
    if (!email || !password) {
      setError(t("login.fill_all_fields"));
      return;
    }
    
    setError("");
    setIsLoading(true);

    try {
      const data = await login(email, password);
      
      // Сохраняем токен и данные пользователя
      localStorage.setItem("token", data.token);
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      
      // Перенаправляем на главную страницу
      navigate("/");
    } catch (err: any) {
      console.error("Login failed:", err);
      
      // Обработка ошибок
      if (err.response?.status === 401) {
        setError(t("login.invalid_credentials"));
      } else if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError(t("login.error"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#CDBCA8] to-[#B8A88E] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t("login.title")}
          </h2>
          <p className="text-gray-600">
            {t("login.subtitle")}
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={submit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t("login.email")} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(""); // Очищаем ошибку при вводе
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C17B5E] focus:border-transparent transition"
              placeholder={t("login.email_placeholder")}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              {t("login.password")} *
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // Очищаем ошибку при вводе
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C17B5E] focus:border-transparent transition"
              placeholder={t("login.password_placeholder")}
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link 
              to="/forgot-password" 
              className="text-sm text-[#C17B5E] hover:text-[#A35C3A] transition"
            >
              {t("login.forgot_password")}
            </Link>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#C17B5E] hover:bg-[#A35C3A] text-white font-semibold py-3 px-4 rounded-xl transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C17B5E] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t("login.loading")}
              </span>
            ) : (
              t("login.submit")
            )}
          </button>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {t("login.no_account")}{' '}
              <Link to="/register" className="font-medium text-[#C17B5E] hover:text-[#A35C3A] transition">
                {t("login.register_link")}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;