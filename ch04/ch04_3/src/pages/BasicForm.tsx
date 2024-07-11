import type { FormEvent, ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Title } from "../components";

export default function BasicForm() {
  const [name, setName] = useState<string>(""); // 이름
  const [email, setEmail] = useState<string>(""); // 이메일

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 중요

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      // Json 포맷으로 변환
      alert(JSON.stringify(Object.fromEntries(formData), null, 2));
    },
    [name, email]
  );

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">Copy Me</h2>
      <div className="mt-4"></div>
    </section>
  );
}
