import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>Exercicis React</header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
        </main>
        <nav class="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/avatar">Avatar</Link>{" "}
            </li>
            <li>
              <Link to="/calculadora">Calculadora</Link>
            </li>
            <li>
              <Link to="/comptador">Comptador</Link>
            </li>
            <li>
              <Link to="/graella-fotos">Graella de fotos</Link>
            </li>
            <li>
              <Link to="/acordio">Acordio</Link>
            </li>
            <li>
              <Link to="/toggle-button">Toggle button</Link>
            </li>
          </ul>
        </nav>
        <aside class="HolyGrail-ads">Aside</aside>
      </div>
      <footer>by Nuria Viana</footer>
    </>
  );
}
