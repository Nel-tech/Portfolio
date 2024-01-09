export default function app() {
  return (
    <div>
      <Section>
        <Header />
      </Section>
    </div>
  );
}

function Section({ children }) {
  return <div className="container">{children}</div>;
}

function Header() {
  return (
    <div>
      <h1 className="logo">FAV</h1>
    </div>
  );
}
