export default function AuthLayout({ children }) {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      {children}
    </section>
  );
}
