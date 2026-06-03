import { useState } from "react";
import { useTranslation } from "react-i18next";
import { login } from "../services/auth.service";

const Login = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await login(email, password);

      localStorage.setItem("token", data.token);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <form onSubmit={submit}>
      <h1>{t("login.title")}</h1>

      <input
        placeholder={t("login.email")}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder={t("login.password")}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        {t("login.submit")}
      </button>
    </form>
  );
};

export default Login;