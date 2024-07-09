import Basic from "./Basic";
import Size from "./Size";
import IconTest from "./IconTest";

export default function ButtonTest() {
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">Copy Me</h2>
      <div className="mt-4">
        <IconTest />
        <Basic />
        <Size />
      </div>
    </section>
  );
}
