import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { register, login } from '../services/auth.service';

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.full_name.trim()) {
      newErrors.full_name = t('register.name_required');
    } else if (formData.full_name.length < 2) {
      newErrors.full_name = t('register.name_min_length');
    }
    
    if (!formData.email) {
      newErrors.email = t('register.email_required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('register.email_invalid');
    }
    
    if (!formData.password) {
      newErrors.password = t('register.password_required');
    } else if (formData.password.length < 6) {
      newErrors.password = t('register.password_min_length');
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t('register.confirm_password_required');
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('register.passwords_not_match');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const allTouched = {
      full_name: true,
      email: true,
      password: true,
      confirmPassword: true
    };
    setTouched(allTouched);
    
    if (!validate()) return;
    
    setIsLoading(true);
    
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      const response = await register(
        formData.full_name,
        formData.email,
        formData.password,
        formData.address
      );
      const loginData = await login(formData.email, formData.password);
      // Сохраняем токен и данные пользователя
      localStorage.setItem("token", loginData.token);
      if (loginData.user) {
        localStorage.setItem("user", JSON.stringify(loginData.user));
      }
      
      // Перезагружаем страницу и идём на главную
      window.location.href = "/";
      
    } catch (error: any) {
      console.error('Registration error:', error);
      
      if (error.response?.data?.message === "Email already exists") {
        setErrors({ email: t('register.email_exists') });
      } else if (error.response?.data?.message) {
        setErrors({ submit: error.response.data.message });
      } else {
        setErrors({ submit: t('register.submit_error') });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getFieldClass = (fieldName: string) => {
    const hasError = errors[fieldName] && touched[fieldName];
    return `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C17B5E] focus:border-transparent transition ${
      hasError 
        ? 'border-red-500 bg-red-50' 
        : 'border-gray-300'
    }`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#CDBCA8] to-[#B8A88E] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t('register.title')}
          </h2>
          <p className="text-gray-600">
            {t('register.subtitle')}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('register.name')} *
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              autoComplete="name"
              value={formData.full_name}
              onChange={handleChange}
              onBlur={() => handleBlur('full_name')}
              className={getFieldClass('full_name')}
              placeholder={t('register.name_placeholder')}
            />
            {errors.full_name && touched.full_name && (
              <p className="mt-1 text-sm text-red-500">{errors.full_name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('register.email')} *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              className={getFieldClass('email')}
              placeholder={t('register.email_placeholder')}
            />
            {errors.email && touched.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              {t('register.password')} *
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => handleBlur('password')}
              className={getFieldClass('password')}
              placeholder={t('register.password_placeholder')}
            />
            {errors.password && touched.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              {t('register.confirm_password')} *
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={() => handleBlur('confirmPassword')}
              className={getFieldClass('confirmPassword')}
              placeholder={t('register.confirm_password_placeholder')}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Address Field (optional) */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              {t('register.address')}
            </label>
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C17B5E] focus:border-transparent transition"
              placeholder={t('register.address_placeholder')}
            />
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
              {errors.submit}
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
                {t('register.loading')}
              </span>
            ) : (
              t('register.submit')
            )}
          </button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {t('register.have_account')}{' '}
              <a href="/login" className="font-medium text-[#C17B5E] hover:text-[#A35C3A] transition">
                {t('register.login_link')}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}