import { useState } from "react";

import {
  login,
} from "../services/auth.service";

const Login = () => {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const submit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const data =
      await login(
        email,
        password
      );

    localStorage.setItem(
      "token",
      data.token
    );
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Email"
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <button>
        Login
      </button>
    </form>
  );
};

export default Login;