import { Icon } from "../../theme/daisyui";

export default function IconTest() {
  const onClick = () => {
    alert("Icon Clicked");
  };

  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">IconTest</h2>
      <div className="flex items-center justify-around mt-4">
        <Icon
          className="btn-pramary btn-lg"
          name="settings"
          onClick={onClick}
        />
        <Icon className="btn-secondary btn-md" name="done" onClick={onClick} />
        <Icon className="btn-accent btn-sm" name="menu" onClick={onClick} />
        <Icon
          className="btn-success btn-xs"
          name="file_upload"
          onClick={onClick}
        />
      </div>
    </section>
  );
}
